// Contact-form submission handler for nicolejamesaustin.com.
//
// Flow:
//   1. CORS preflight if OPTIONS.
//   2. Parse JSON, validate required fields, reject if honeypot is filled.
//   3. Insert a row into public.submissions using the service_role key.
//   4. Fire two Resend emails in parallel:
//        - Notification to Nicole (Reply-To = client) so she can reply directly.
//        - Auto-reply to the client confirming receipt.
//   5. Return { ok: true } on success; { ok: false, error } on hard failure.
//
// Hard failures (validation, DB insert) → 400/500. Email failures are
// logged but not surfaced to the user — we'd rather record the lead and
// retry email than reject the form.

import "@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

// ---- ENV --------------------------------------------------------------
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const NICOLE_NOTIFY_EMAIL =
  Deno.env.get("NICOLE_NOTIFY_EMAIL") ?? "nicolej@christiesrealestatels.com";
const FROM_EMAIL =
  Deno.env.get("FROM_EMAIL") ?? "Nicole James <hello@nicolejamesaustin.com>";

// ---- CORS -------------------------------------------------------------
// We only accept POSTs from the production domain and the GitHub Pages
// preview. Any other origin gets denied at the preflight step.
const ALLOWED_ORIGINS = new Set([
  "https://nicolejamesaustin.com",
  "https://www.nicolejamesaustin.com",
  "https://caslavi79.github.io",
  // dev convenience — comment out before final delivery if desired
  "http://localhost:8080",
  "http://127.0.0.1:8080",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
]);

const corsHeaders = (origin: string | null) => {
  const allowed = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://nicolejamesaustin.com";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
};

// ---- HELPERS ----------------------------------------------------------
const json = (body: unknown, status = 200, origin: string | null = null) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...corsHeaders(origin) },
  });

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;")
   .replace(/</g, "&lt;")
   .replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;")
   .replace(/'/g, "&#39;");

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

interface Payload {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  building?: string;
  message: string;
  optin_blog?: boolean;
  optin_listings?: boolean;
  // honeypot: must be empty
  website?: string;
}

// ---- RESEND -----------------------------------------------------------
async function sendResend(payload: {
  from: string;
  to: string[];
  subject: string;
  reply_to?: string;
  html: string;
  text: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend ${res.status}: ${body}`);
  }
  return res.json();
}

// HTML email layout notes:
// - Both emails are full HTML documents (DOCTYPE + html/head/body) so
//   Resend doesn't wrap and email clients have no rendering ambiguity.
// - Layout uses <table role="presentation"> nested inside another
//   <table> — the universal email-client compatible pattern.
// - Critical: Gmail will collapse content into a "Show trimmed content
//   ..." button if it sees a styled "header" element above a paragraph
//   break — its heuristic mistakes the pattern for a quote attribution.
//   We avoid that by:
//     (a) keeping all body content inside a SINGLE <td> cell, with
//         <br><br> for paragraph spacing rather than nested elements,
//     (b) NOT putting a styled brand eyebrow above the greeting (the
//         brand info now lives at the bottom of the auto-reply, and on
//         the notification email the lead's NAME is the first thing —
//         the "new inquiry" eyebrow sits below the name),
//     (c) including a hidden preheader span so inbox preview is
//         intentional and the email body doesn't start with metadata.
function notificationEmail(p: Payload) {
  const interestLabel: Record<string, string> = {
    buyer: "Buyer representation",
    seller: "Seller representation",
    advisory: "Off-market advisory",
    general: "General conversation",
  };
  const interest = p.interest ? interestLabel[p.interest] ?? p.interest : "—";
  const blogOptin = p.optin_blog ? "✓ Yes — wants blog updates" : "— No";
  const listingsOptin = p.optin_listings ? "✓ Yes — wants new listing alerts" : "— No";

  const rows: [string, string][] = [
    ["Email", p.email],
    ["Phone", p.phone || "—"],
    ["Interest", interest],
    ["Building or area", p.building || "—"],
    ["Blog updates", blogOptin],
    ["Listing alerts", listingsOptin],
  ];

  const text = [
    `New inquiry from ${p.name}`,
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    p.message,
    "",
    "Reply directly to this email to respond to the client.",
  ].join("\n");

  const tableRows = rows.map(([k, v]) => `
    <tr>
      <td style="padding:6px 12px 6px 0;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#7e7367;vertical-align:top;width:140px">${escapeHtml(k)}</td>
      <td style="padding:6px 0;font-family:Helvetica,Arial,sans-serif;color:#1a1814;font-size:14px;line-height:1.5">${escapeHtml(v)}</td>
    </tr>
  `).join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="x-apple-disable-message-reformatting" />
<title>New inquiry from ${escapeHtml(p.name)}</title>
</head>
<body style="margin:0;padding:0;background:#ffffff;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%">
<span style="display:none;font-size:0;line-height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;visibility:hidden">New inquiry from ${escapeHtml(p.name)} via the website. Reply directly to respond.</span>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#ffffff">
<tr><td align="center" style="padding:32px 16px">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="560" style="max-width:560px;border-collapse:collapse">
<tr><td style="font-family:Helvetica,Arial,sans-serif;color:#1a1814">
<div style="font-family:Georgia,'Times New Roman',serif;font-weight:500;font-size:24px;letter-spacing:-0.01em;color:#1a1814;margin-bottom:4px">${escapeHtml(p.name)}</div>
<div style="font-family:Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#7e7367;margin-bottom:24px">New inquiry &middot; nicolejamesaustin.com</div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;border-top:1px solid #e5e0d6;border-bottom:1px solid #e5e0d6;margin-bottom:20px">
${tableRows}
</table>
<div style="font-family:Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#7e7367;margin-bottom:8px">Message</div>
<div style="font-family:Helvetica,Arial,sans-serif;white-space:pre-wrap;color:#1a1814;font-size:15px;line-height:1.6">${escapeHtml(p.message)}</div>
<div style="margin-top:32px;padding-top:18px;border-top:1px solid #e5e0d6;font-family:Helvetica,Arial,sans-serif;color:#7e7367;font-size:12px;line-height:1.5">Reply to this email to respond directly to ${escapeHtml(p.name)}.</div>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;

  return { text, html };
}

function autoReplyEmail(p: Payload) {
  const firstName = p.name.split(/\s+/)[0];

  const text = [
    `Hi ${firstName},`,
    "",
    "So glad you reached out. Your message has come directly to me, and I'll follow up within one business day.",
    "",
    "If anything is time-sensitive, feel free to call or text me at 512·466·4608.",
    "",
    "I focus on a select group of downtown condominium buildings, happy to share what's currently available, including opportunities that aren't publicly listed.",
    "",
    "Talk soon,",
    "Nicole",
    "",
    "Christie's International Real Estate Luxury Specialist",
    "@properties Lone Star",
    "nicolejamesaustin.com",
  ].join("\n");

  // Reverting to the proven working structure (cream <div> wrapper, eyebrow
  // div, separate <p> elements). The earlier table-based "fix" caused Gmail
  // to fully collapse the body under a "..." button. The original structure
  // rendered the email cleanly when sent yesterday — restoring it here with
  // Nicole's new copy.
  const html = `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.65;color:#1a1814;max-width:560px;margin:0 auto;padding:32px 24px;background:#f4efe7">
      <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#7e7367;margin-bottom:24px">Nicole James &middot; Downtown Austin</div>
      <p style="margin:0 0 16px">Hi ${escapeHtml(firstName)},</p>
      <p style="margin:0 0 16px">So glad you reached out. Your message has come <em style="font-family:Georgia,'Times New Roman',serif">directly to me</em>, and I&rsquo;ll follow up within one business day.</p>
      <p style="margin:0 0 16px">If anything is time-sensitive, feel free to call or text me at <a href="tel:+15124664608" style="color:#9c7e66;text-decoration:none;border-bottom:1px solid #9c7e66">512&middot;466&middot;4608</a>.</p>
      <p style="margin:0 0 24px">I focus on a select group of downtown condominium buildings, happy to share what&rsquo;s currently available, including opportunities that aren&rsquo;t publicly listed.</p>
      <p style="margin:32px 0 4px;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:400;font-size:18px;color:#1a1814;line-height:1.3">Talk soon,<br>Nicole</p>
      <div style="margin-top:18px;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#7e7367;line-height:1.7">
        Christie&rsquo;s International Real Estate Luxury Specialist<br>
        @properties Lone Star
      </div>
      <div style="margin-top:24px;font-size:11px;color:#9c7e66"><a href="https://nicolejamesaustin.com" style="color:#9c7e66;text-decoration:none">nicolejamesaustin.com</a></div>
    </div>
  `.trim();

  return { text, html };
}

// ---- HANDLER ----------------------------------------------------------
Deno.serve(async (req) => {
  const origin = req.headers.get("origin");

  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders(origin) });
  if (req.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405, origin);

  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400, origin);
  }

  // Honeypot — silent success so bots don't learn it's a trap.
  if (body.website && body.website.trim().length > 0) {
    return json({ ok: true }, 200, origin);
  }

  // Validate
  const name = (body.name || "").trim();
  const email = (body.email || "").trim().toLowerCase();
  const message = (body.message || "").trim();
  if (!name || name.length > 200)              return json({ ok: false, error: "name_required" },    400, origin);
  if (!email || !isEmail(email) || email.length > 320) return json({ ok: false, error: "email_invalid" }, 400, origin);
  if (!message || message.length > 5000)       return json({ ok: false, error: "message_required" }, 400, origin);

  const phone    = (body.phone    || "").trim().slice(0, 50)  || null;
  const interest = (body.interest || "").trim().slice(0, 50)  || null;
  const building = (body.building || "").trim().slice(0, 200) || null;
  const optin_blog     = !!body.optin_blog;
  const optin_listings = !!body.optin_listings;

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() || null;
  const userAgent = (req.headers.get("user-agent") || "").slice(0, 500);

  // Insert
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });
  const { data: row, error: insertErr } = await supabase
    .from("submissions")
    .insert({
      name, email, phone, interest, building, message,
      optin_blog, optin_listings,
      ip, user_agent: userAgent,
    })
    .select()
    .single();
  if (insertErr) {
    console.error("insert error", insertErr);
    return json({ ok: false, error: "db_error" }, 500, origin);
  }

  // Fire emails (parallel). Don't block the response on email success —
  // record + reply succeeded; if email fails we update status and log.
  const payload: Payload = {
    name, email, phone: phone || undefined, interest: interest || undefined,
    building: building || undefined, message,
    optin_blog, optin_listings,
  };
  const notif = notificationEmail(payload);
  const reply = autoReplyEmail(payload);

  try {
    await Promise.all([
      sendResend({
        from: FROM_EMAIL,
        to: [NICOLE_NOTIFY_EMAIL],
        subject: `New inquiry: ${name}${interest ? ` (${interest})` : ""}`,
        reply_to: email,
        html: notif.html,
        text: notif.text,
      }),
      sendResend({
        from: FROM_EMAIL,
        to: [email],
        subject: "Thanks — your message has reached Nicole",
        reply_to: NICOLE_NOTIFY_EMAIL,
        html: reply.html,
        text: reply.text,
      }),
    ]);
    await supabase.from("submissions").update({ status: "emailed" }).eq("id", row.id);
  } catch (e) {
    console.error("email send failed", e);
    await supabase.from("submissions").update({ status: "failed" }).eq("id", row.id);
    // Still report success to the user — the lead is captured. Nicole can
    // pull from the submissions table if email rotation fails.
  }

  return json({ ok: true }, 200, origin);
});
