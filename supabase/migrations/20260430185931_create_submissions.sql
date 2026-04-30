-- Contact form submissions for nicolejamesaustin.com
-- Filled by an Edge Function that uses the service_role key, so RLS
-- denies everything from anon/authenticated and the function bypasses it.

create table if not exists public.submissions (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  name            text        not null,
  email           text        not null,
  phone           text,
  interest        text,         -- buyer | seller | advisory | general
  building        text,
  message         text        not null,
  optin_blog      boolean     not null default false,
  optin_listings  boolean     not null default false,
  ip              inet,
  user_agent      text,
  status          text        not null default 'received'  -- received | emailed | failed
);

create index if not exists submissions_created_at_idx
  on public.submissions (created_at desc);

create index if not exists submissions_email_idx
  on public.submissions (email);

-- Lock the table down. Only the service_role (used by the Edge Function)
-- can read or write. The anon key cannot touch this table directly —
-- everything goes through the Edge Function so we can validate, rate-
-- limit, and notify before anything lands.
alter table public.submissions enable row level security;

-- Explicitly: no policies for anon/authenticated. Service role bypasses
-- RLS by design, so the Edge Function can still insert/select.
revoke all on public.submissions from anon, authenticated;
grant  all on public.submissions to   service_role;
