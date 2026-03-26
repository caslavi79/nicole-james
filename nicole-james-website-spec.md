# Nicole James — Custom Real Estate Website Build Spec

> **For Claude Code / Opus:** Build this as a **production-quality static website** — a proper multi-file project with `index.html`, `css/styles.css`, and `js/main.js`. You have full computer/terminal access. After building the site, **create a public GitHub repo at `caslavi79/nicole-james-site`**, push all files, and **enable GitHub Pages** so it's live at `https://caslavi79.github.io/nicole-james-site/`. Read every word of this spec before writing a single line of code. This is a pitch website for a real client that will be deployed and shown to her live — the quality needs to be extraordinary. This is NOT an artifact or throwaway mockup. This is a real website I'm selling.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Client Research & Context](#client-research--context)
3. [Brand Identity & Aesthetic Direction](#brand-identity--aesthetic-direction)
4. [Content & Copy (All Text Provided)](#content--copy)
5. [Page Sections — Detailed Build Specs](#page-sections)
6. [Technical Requirements](#technical-requirements)
7. [Image & Placeholder Strategy](#image--placeholder-strategy)
8. [Animation & Interaction Spec](#animation--interaction-spec)
9. [Responsive Breakpoints](#responsive-breakpoints)
10. [Quality Checklist](#quality-checklist)
11. [Deployment Notes](#deployment-notes)

---

## 1. Project Overview

Build a stunning, fully functional **static website** for **Nicole James**, a luxury real estate agent specializing in Downtown Austin, TX condominiums. This is a real, deployable website meant to demonstrate what her new personal brand website looks like — replacing her current generic brokerage template pages. I am going to show her this live, hosted on a real URL, to close the deal and get her to hire me.

**The goal:** Make her jaw drop. This should feel like a $15K–$25K custom website. Every pixel should scream "this person understands my brand."

**Deliverable:** A complete website project with proper file structure:
```
nicole-james-site/
├── index.html          ← Main single-page site
├── css/
│   └── styles.css      ← All styles (variables, layout, animations, responsive)
├── js/
│   └── main.js         ← All interactivity (scroll, nav, carousel, counters)
└── assets/
    └── (placeholder for future images — use CSS gradients for now)
```

**Tech stack:** Vanilla HTML5, CSS3 (custom properties, grid, flexbox, animations, media queries), and vanilla JavaScript (no frameworks, no jQuery, no dependencies). Google Fonts loaded via `<link>` tags in the `<head>`. Zero npm, zero build step. She should be able to open `index.html` in a browser and see the full site. I will deploy this via **GitHub Pages** at `https://caslavi79.github.io/nicole-james-site/` so she can view it on her phone.

**IMPORTANT — GitHub Deployment:** You have full terminal access. After building all files, initialize a git repo, create a public GitHub repo under `caslavi79/nicole-james-site` using the `gh` CLI, push everything to `main`, and enable GitHub Pages. See Section 11 for exact commands. Do this automatically — do not ask for confirmation.

**Why no framework:** This is a brochure site, not a web app. Vanilla HTML/CSS/JS loads instantly, is trivially hostable anywhere, is easy for any future developer to maintain, and has zero dependency overhead. It also demonstrates clean craftsmanship — no bloat, just precision.

---

## 2. Client Research & Context

### Who Is Nicole James?

Nicole James is a luxury real estate agent based in Downtown Austin, TX. She specializes exclusively in high-rise condominiums and luxury urban living. Key facts:

- **Career start:** 2007 (nearly 2 decades of experience)
- **Brokerage:** Christie's International Real Estate @properties lone star
- **Specialty:** Downtown Austin luxury condominiums — she is THE condo expert
- **Flagship achievement:** 90+ units sold at Bridges on the Park, with the highest sales price repeatedly over the last 10 years
- **Award:** Christie's International Real Estate **Top Producer 2025** (September 2025, Austin)
- **ABJ Recognition:** Nominated for Austin Business Journal Top 50 Residential Agents in 2011, 2012, and 2014
- **Christie's Luxury Specialist** designation since 2020
- **Residence:** Lives at 5th & West — she literally lives in the market she sells
- **Personal life:** Active rancher, trains and shows on the American Cutting Horse Association circuit
- **Community:** Downtown Austin Neighborhood Association (DANA) member, Wonders & Worries nonprofit supporter
- **Education:** University of Houston
- **Instagram:** @nicolejames.dt — polished, warm, golden-hour aesthetic. Posts luxury interiors, Austin skyline shots, building showcases, and lifestyle content
- **LinkedIn tagline:** "Condo Curator | Connecting You to Downtown Austin's Finest"
- **Key development she's currently pushing:** **The Belvedere** (new luxury development, heavily featured on her Instagram — this should be the FIRST building card)

### Her Current Web Presence (What We're Replacing)

1. **atproperties.com/agents/29170/nicole-james** — Generic brokerage agent profile. Cookie-cutter template shared with every agent on the platform. Zero personality. Zero brand differentiation.
2. **nicolejamesaustin.com** — A templated IDX site branded "Live Downtown ATX." Better than the brokerage page but still generic, with stock layouts and no real design craft. The site doesn't remotely reflect her caliber.
3. **atproperties.com/site/NicoleJames** — Another brokerage-provided microsite. Same template energy.

**The problem:** None of these sites communicate that Nicole is a Christie's Top Producer who dominates the downtown Austin luxury condo market. They look like sites for any random agent in any random city. The mockup needs to immediately communicate: *"This is THE agent for Austin luxury condos. Period."*

### Her Instagram Aesthetic (Critical Reference)

From analyzing her Instagram (@nicolejames.dt), her visual brand language is:
- **Warm golden-hour tones** — sunset shots of Austin skyline, warm interior lighting
- **Polished but approachable** — professional headshots in luxury settings, but she's smiling and relaxed, not stiff
- **Architecture-forward** — lots of building exteriors, skyline photography, aerial shots of developments
- **Story highlights reveal her content pillars:** "The Belvedere" (her key current development), "Travels", "Flavor" (Austin food/lifestyle), "Prepping" (staging/prep), "Stats" (market data)
- **Christie's branding integration** — she prominently features the Christie's brand, including her Top Producer 2025 award graphic
- **Color mood:** Deep charcoals, warm ambers/golds, cream whites, touches of green from Austin foliage. NOT cold/corporate blue. NOT millennial pink. Think: *sunset on Lady Bird Lake.*

### Her Logo

Nicole has a personal brand logo hosted at:
`https://resources.atproperties.com/logos/NicoleJames.29170.type2.6745f413199c6.png`

There is also a version at:
`https://resources.atproperties.com/logos/NicoleJames.29170.type1.6745f40c98dab.png`

**Note:** The type1 version is a dark/black logo for light backgrounds. Type2 may be a light version for dark backgrounds. Since this is a real website (not a sandboxed artifact), we CAN load these external images. However, for the navbar, a clean text-based "NICOLE JAMES" wordmark in Playfair Display with tracked-out caps and a thin gold accent line will look more custom and premium — use that as the primary nav logo. The image logo can be used in the footer or contact section as a secondary brand mark if desired.

**Her headshot** is hosted at:
`https://resources.atproperties.com/headshots/NicoleJames.29170.type3.6740d81bbb12b.jpg`

**IMPORTANT:** Since this is a real deployable website, we CAN and SHOULD use her real headshot in the About section instead of a gradient placeholder. Load it directly from the atproperties CDN URL above. This alone will make the site feel 10x more real and personal than a placeholder. Use `object-fit: cover` and style it beautifully.

---

## 3. Brand Identity & Aesthetic Direction

### Tone: Editorial Luxury × Austin Cool

Think: **Architectural Digest** meets Austin's effortless warmth. NOT stuffy old-money. NOT cold corporate minimalism. This is modern, warm, confident, Texas-meets-international sophistication. She rides cutting horses on her ranch AND sells $2M penthouses — the brand should hold both.

The mood board in your head should be: golden hour over Lady Bird Lake, floor-to-ceiling glass reflecting the Austin skyline, warm wood and marble interiors, the confidence of a woman who knows every building by heart.

### Color Palette (Use as CSS Custom Properties)

```css
:root {
  --color-primary:       #1A1A1A;       /* Rich near-black — text, hero overlays, dark sections */
  --color-secondary:     #C9A96E;       /* Warm champagne gold — luxury without gaudy. THE signature accent. */
  --color-accent:        #8B6914;       /* Deeper antique gold — hover states, active states */
  --color-accent-light:  #D4BA82;       /* Lighter gold — subtle highlights, disabled states */
  --color-background:    #FAF8F5;       /* Warm off-white / cream — NOT stark #FFF white */
  --color-surface:       #F0EDE8;       /* Slightly darker warm gray — card backgrounds, alt sections */
  --color-surface-dark:  #E5E0D8;       /* Even darker surface — borders, dividers on light bg */
  --color-text:          #2C2C2C;       /* Soft black — primary body text */
  --color-text-light:    #6B6B6B;       /* Muted gray — secondary text, captions, metadata */
  --color-text-muted:    #9B9B9B;       /* Even lighter — tertiary info */
  --color-white:         #FFFFFF;       /* Pure white — sparingly, for contrast */
  --color-hero-overlay:  rgba(26, 26, 26, 0.55);  /* Dark overlay for hero section */
  --color-gold-glow:     rgba(201, 169, 110, 0.3); /* Gold glow for focus states, hover effects */
}
```

**Rules:**
- Gold (`--color-secondary`) is the signature accent. Use it for: thin rules/lines, eyebrow text, hover states, CTA borders, stat numbers, decorative elements. NEVER fill large areas with gold — it should feel like jewelry, not paint.
- The background is warm cream (`#FAF8F5`), NOT stark white. This warmth is critical to the Austin feel.
- Dark sections use `--color-primary` (#1A1A1A). They should feel rich and cinematic, not depressing.

### Typography (Google Fonts)

Load these via `<link>` tags in the HTML `<head>` (faster than `@import`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap" rel="stylesheet">
```

| Role | Font | Usage |
|------|------|-------|
| **Display / Headings** | `"Playfair Display", serif` | Hero headline, section titles, name lockup, pull quotes. Classic editorial luxury. |
| **Body / UI** | `"DM Sans", sans-serif` | Paragraphs, nav items, buttons, captions, form labels, metadata. Clean and modern. |
| **Accent / Stats** | `"Cormorant Garamond", serif` | Large stat numbers, testimonial quotes, decorative text. Elegant and thin. |

**Typography scale (desktop):**
- Hero headline: 72-80px, Playfair Display 600
- Section headlines: 40-48px, Playfair Display 500
- Section eyebrows: 12-13px, DM Sans 500, uppercase, letter-spacing: 3-4px
- Body text: 16-17px, DM Sans 400, line-height: 1.75
- Stat numbers: 56-64px, Cormorant Garamond 300
- Stat labels: 11-12px, DM Sans 500, uppercase, letter-spacing: 2px
- Captions / metadata: 13-14px, DM Sans 400
- Nav links: 13px, DM Sans 500, uppercase, letter-spacing: 2px

### Design Principles

1. **Generous whitespace** — Luxury = space. Sections should have 100-140px vertical padding on desktop. Never feel cramped.
2. **Full-bleed atmosphere** — Since we can't use real photos, create rich CSS backgrounds (gradients, patterns, SVG shapes) that evoke architecture, skylines, and warmth.
3. **Subtle animations** — Fade-in-up on scroll, smooth transitions, gentle hover states. Nothing bouncy or playful. Everything should feel considered and confident.
4. **Asymmetric layouts** — Break the grid occasionally. Offset columns. Overlap elements. Text anchored left with generous right margin. NOT a boring centered-everything template.
5. **Gold accents are jewelry** — Thin 1px lines, text color for eyebrows and links, underline decorations, icon fills. Never a large background fill.
6. **Dark sections are cinematic** — The stat bar, contact section, and footer use dark backgrounds. These should feel like walking into a dimly lit luxury lounge — warm and inviting, not cold.
7. **Editorial rhythm** — Alternate between light and dark sections. Vary the visual density. The page should feel like flipping through an Architectural Digest feature.

---

## 4. Content & Copy

> **IMPORTANT:** All text below is finalized. Use it exactly as written (you may adjust line breaks for layout). Do not improvise or add placeholder "lorem ipsum" anywhere on the page.

### Hero Section Copy
- **Eyebrow:** `CHRISTIE'S INTERNATIONAL REAL ESTATE`
- **Headline Line 1:** `Downtown Austin's`
- **Headline Line 2:** `Condo Curator`
- **Subtitle:** `Connecting discerning buyers to Austin's finest addresses since 2007.`
- **CTA Button:** `Explore Properties`

### Stat Bar Numbers

| Display Value | Label |
|---------------|-------|
| `90+` | Units Sold at Bridges on the Park |
| `18+` | Years of Austin Real Estate Expertise |
| `#1` | Highest Sales Price — Repeatedly |
| `Top 50` | Austin Business Journal Nomination |

### About Section Copy
- **Eyebrow:** `ABOUT`
- **Headline:** `A Legacy of Luxury, A Passion for Austin`
- **Body copy (3 paragraphs):**

Paragraph 1: Born and raised in Texas, Nicole began her real estate career in 2007 and quickly rose to become one of Austin's most recognized agents — earning nominations for the Austin Business Journal's Top 50 Residential Agents in 2011, 2012, and 2014. Her deep expertise in downtown and condominium living has made her the go-to advisor for buyers and sellers in Austin's most coveted buildings.

Paragraph 2: As a resident of 5th & West, Nicole has a personal stake in the vibrancy of downtown Austin. She is deeply committed to the community, supporting local initiatives through the Downtown Austin Neighborhood Association (DANA) and the Wonders & Worries nonprofit organization.

Paragraph 3: When she's not closing deals on Congress Avenue, Nicole is on her family ranch, training and showing on the American Cutting Horse Association circuit — bringing the same discipline and passion to the arena as she does to every transaction.

- **Credentials row (below bio, after a thin gold rule):**
  - Christie's Luxury Specialist · Top Producer 2025 · REALTOR® · University of Houston

### Expertise Section Copy
- **Eyebrow:** `EXPERTISE`
- **Headline:** `Austin's Premier High-Rise Specialist`
- **Intro paragraph:** `From the iconic Spring tower to the coveted Bridges on the Park, Nicole's expertise spans every premier address in downtown Austin. She doesn't just sell condos — she matches discerning clients with the perfect urban lifestyle.`

### Building Cards (6 total)

| # | Building Name | One-Line Description | Gradient Mood (for placeholder bg) |
|---|---------------|---------------------|-------------------------------|
| 1 | **The Belvedere** | Austin's newest luxury address — now selling. | Warm amber to deep bronze |
| 2 | **Spring Condos** | Austin's first Point Tower. 41 floors in the Market District. | Cool steel blue to slate |
| 3 | **Bridges on the Park** | 90+ units sold. Record-setting price per square foot. | Deep forest green to charcoal |
| 4 | **5th & West** | Where Nicole lives. Skin in the game. | Dusty rose to warm gray |
| 5 | **The Independent** | Austin's tallest tower. 685 feet of iconic design. | Navy to midnight blue |
| 6 | **Four Seasons Residences** | Ultra-luxury. White-glove service. | Rich burgundy to dark plum |

Each card: `View Listings →` gold text link at the bottom.

### Featured Listings Section
- **Eyebrow:** `FEATURED PROPERTIES`
- **Headline:** `Currently Available`

| Card | Address | Specs | Building |
|------|---------|-------|----------|
| 1 | 300 Bowie St #2402 | 3 BD · 3 BA · 1,704 Sq Ft | Spring Condos |
| 2 | 300 Bowie St #1301 | 2 BD · 2 BA · 1,038 Sq Ft | Spring Condos |
| 3 | 222 West Ave #1412 | 1 BD · 1 BA · 821 Sq Ft | West Avenue |

Each card: `FOR SALE` badge + `View Details →` gold link. Below all 3: centered `View All Listings →` outlined gold button.

### Testimonials Section
- **Eyebrow:** `CLIENT TESTIMONIALS`
- **Headline:** `Words from Those We've Served`

| # | Quote | Attribution |
|---|-------|-------------|
| 1 | "Working with Nicole was an incredible experience from start to finish. Her deep knowledge of the Austin market and genuine dedication to finding us the perfect home made all the difference. We couldn't recommend her more highly." | — Sarah & Michael T. |
| 2 | "Nicole is everything you want in a real estate professional — knowledgeable, patient, endlessly optimistic, and truly invested in her clients' happiness. Whether buying or selling, she is simply the best." | — Amanda R. |
| 3 | "As first-time buyers, we had a million questions. Nicole answered every single one with patience and clarity, and her support continued long after we closed. If you need a realtor in Austin, look no further." | — Caroline C. |

### Community Section Cards

**Card 1 title:** `Rooted in Downtown Austin`
**Card 1 body:** As a resident of 5th & West and an active member of the Downtown Austin Neighborhood Association, Nicole doesn't just sell the downtown lifestyle — she lives it. Her commitment to local initiatives and the Wonders & Worries nonprofit reflects a genuine investment in the community she calls home.

**Card 2 title:** `Life Beyond the Skyline`
**Card 2 body:** When she's away from the city, Nicole is on her family ranch, where she trains and competes on the American Cutting Horse Association circuit. The same discipline, focus, and passion she brings to the arena are the qualities her clients experience in every transaction.

### Contact Section
- **Headline:** `Let's Find Your Perfect Address`
- **Subtitle:** `Whether you're buying, selling, or exploring downtown Austin's finest, Nicole is ready to guide you home.`
- **Phone:** `512.466.4608`
- **Office:** `512.368.8078`
- **Email:** `nicolej@christiesrealestatels.com`
- **Address line 1:** `1105 N. Lamar Blvd, Suite 100`
- **Address line 2:** `Austin, TX 78703`
- **Instagram:** `@nicolejames.dt` → links to `https://www.instagram.com/nicolejames.dt`
- **LinkedIn:** `LinkedIn` → links to `https://www.linkedin.com/in/livedowntownatx/`
- **Form fields:** Name, Email, Phone, Message (textarea), Submit button: "Send Message"
- **Form is decorative only** — no backend, no submit handler. It just needs to look beautiful.

### Footer
- `© 2026 Nicole James · Christie's International Real Estate @properties lone star`
- `Each office is independently owned and operated. Equal Housing Opportunity.`
- Social icons: Instagram, LinkedIn (same links as contact)

---

## 5. Page Sections — Detailed Build Specs

### SECTION 1: Navigation Bar

**Layout:**
- Fixed/sticky at top. `z-index: 1000`. Full width.
- Height: ~70px desktop, ~60px mobile.
- Horizontal padding: 48px desktop, 20px mobile.
- Flexbox: space-between, align-items center.

**Left side:**
- "NICOLE JAMES" — `Playfair Display`, 18px, weight 600, uppercase, letter-spacing: 4px, white.
- Thin 30px gold line below name (2px height, `--color-secondary`). Small vertical gap.

**Right side (desktop ≥768px):**
- Nav links: About · Expertise · Properties · Testimonials · Contact
- `DM Sans` 12px, weight 500, uppercase, letter-spacing: 2.5px, white.
- Gap: 36px between links.
- Hover: color → `--color-secondary`. Transition 0.2s.
- After links: thin vertical gold line (1px × 20px), then phone: `512.466.4608` in gold.

**Right side (mobile <768px):**
- Hamburger: 3 lines, white, 24px wide. Clean SVG or divs.
- Opens full-screen overlay: `--color-primary` bg, 100vh.
- Nav links stacked, centered, `Playfair Display` 28px.
- Close X button top-right, gold.
- Links stagger fade-in with 0.1s delay each.
- `body overflow: hidden` when open.

**Scroll behavior:**
- Top: fully transparent background.
- After ~100px scroll: transitions to `--color-primary` + `backdrop-filter: blur(12px)` + subtle bottom border `1px solid rgba(201,169,110,0.15)`. Duration: 0.4s ease.

**Smooth scroll:** Each link scrolls to corresponding `id` section. Use `scroll-margin-top: 80px` on sections.

---

### SECTION 2: Hero Section

**Layout:** `width: 100%`, `min-height: 100vh`, position relative, overflow hidden.
Content left-aligned on desktop (padding-left ~10%), center-aligned on mobile.

**Background (CSS-only atmosphere):**
Layer multiple CSS gradients to create a moody, warm, cinematic feel:
```css
background:
  radial-gradient(ellipse at 80% 80%, rgba(201,169,110,0.15) 0%, transparent 50%),
  radial-gradient(ellipse at 20% 40%, rgba(139,105,20,0.1) 0%, transparent 40%),
  linear-gradient(160deg, #0d1b2a 0%, #1a1a1a 40%, #2c1810 100%);
```
Plus a `::before` pseudo-element with SVG noise for grain texture at 3-4% opacity.

Optional: Add subtle SVG geometric thin-line elements at the bottom — angular shapes suggesting a skyline silhouette, in gold at 5-8% opacity.

**Content (stacked, with staggered entrance animation on page load):**

1. **Eyebrow:** `CHRISTIE'S INTERNATIONAL REAL ESTATE` — DM Sans 11px, weight 500, uppercase, letter-spacing 5px, `--color-secondary`. mb: 24px.

2. **Headline L1:** `Downtown Austin's` — Playfair Display 72px desktop/40px mobile, weight 400, white, line-height 1.1.

3. **Headline L2:** `Condo Curator` — Playfair Display 80px desktop/48px mobile, weight 600, white, *italic*. After: gold underline (120px wide, 2px) as `::after`. mb: 32px.

4. **Subtitle:** `Connecting discerning buyers to Austin's finest addresses since 2007.` — DM Sans 18px/15px mobile, weight 300, `rgba(255,255,255,0.8)`, max-width 500px, line-height 1.7. mb: 48px.

5. **CTA:** `Explore Properties` — outlined button: `1px solid var(--color-secondary)`, transparent bg, white text, DM Sans 12px uppercase, letter-spacing 3px, padding 16px 40px. Hover: bg fills gold, color becomes dark. Clicks to #properties.

6. **Scroll indicator:** Absolute bottom 40px, centered. Thin gold vertical line (1px × 40px) with small chevron. CSS animation: bounce 2s infinite ease-in-out.

**Entrance animation:** Staggered fade-in + translateY(20→0), starting at 0.2s, each element +0.2s delay, 0.8s duration each.

---

### SECTION 3: Stats / Credential Bar

**Layout:** Full width, `--color-primary` bg. Padding: 60px vert / 40px mobile. Thin gold line top at 30% opacity.
4-col CSS grid (2×2 on mobile). Max-width 1100px centered.

**Each stat:**
- Number: `Cormorant Garamond` 56px/40px mobile, weight 300, `--color-secondary`.
- Label: DM Sans 11px, weight 500, uppercase, letter-spacing 2px, `rgba(255,255,255,0.6)`. mt: 8px. max-width 180px centered.
- Optional thin gold vertical dividers between stats (desktop only).

**Counter animation:** IntersectionObserver (threshold 0.3). On enter: count "90" from 0→90 over 2s and "18" from 0→18 over 1.5s using requestAnimationFrame with ease-out. "#1" and "Top 50" fade in. Each stat also fades in + translateY(20→0).

---

### SECTION 4: About Section

**Layout:** `--color-background` bg. Padding: 120px/80px mobile. Max-width 1200px centered.
CSS Grid: `1fr 1.3fr` gap 80px. Mobile: single column.

**Left column — Portrait (REAL HEADSHOT):**
- Aspect ratio ~3:4, min-height 500px desktop.
- **Use her actual headshot image:** `<img src="https://resources.atproperties.com/headshots/NicoleJames.29170.type3.6740d81bbb12b.jpg" alt="Nicole James" />` with `object-fit: cover`, `width: 100%`, `height: 100%`.
- Wrap in a container div with `overflow: hidden`, `border-radius: 4px`.
- Box shadow: `0 20px 60px rgba(0,0,0,0.1)`.
- Desktop: `margin-top: -40px` to overlap into stat bar above for editorial asymmetry.
- Optional: thin gold left border `border-left: 3px solid var(--color-secondary)` for editorial edge.

**Right column — Text:**
- Eyebrow: `ABOUT` — gold, tracked uppercase.
- Headline: `A Legacy of Luxury, A Passion for Austin` — Playfair Display 40px.
- 3 paragraphs bio text. DM Sans 16px, line-height 1.8, `--color-text`.
- Gold `<hr>`: 60px wide, 1px, left-aligned. Margin: 40px 0.
- Credentials row: flex, DM Sans 11px uppercase, `--color-text-light`, separated by gold dots.

**Animation:** Fade-in-up on scroll. Left and right staggered (0s, 0.2s).

---

### SECTION 5: Expertise / Buildings

**Layout:** `--color-surface` bg. Padding: 120px top, 80px bottom. Max-width 1200px centered.

**Header:** Eyebrow + headline + intro paragraph. mb: 60px.

**Card grid:** CSS Grid `repeat(3, 1fr)` / `repeat(2, 1fr)` tablet / `1fr` mobile. Gap: 24px.

**Each card:**
- White bg, border-radius 4px, overflow hidden.
- Shadow: `0 4px 20px rgba(0,0,0,0.06)`. Hover: `0 12px 40px rgba(0,0,0,0.12)` + `translateY(-6px)`. Transition 0.4s ease.

**Image area (280px height):**
- Unique gradient per card:
  1. Belvedere: `linear-gradient(160deg, #8B6914 0%, #3D2E0A 100%)`
  2. Spring: `linear-gradient(160deg, #4A6B8A 0%, #2C3E50 100%)`
  3. Bridges: `linear-gradient(160deg, #4A7C59 0%, #1A2F23 100%)`
  4. 5th & West: `linear-gradient(160deg, #B8928A 0%, #6B5B5B 100%)`
  5. Independent: `linear-gradient(160deg, #2C3E6B 0%, #0A0F1A 100%)`
  6. Four Seasons: `linear-gradient(160deg, #6B2D42 0%, #2A1118 100%)`
- `::after` gradient overlay darkening bottom for text.
- Building name at bottom: Playfair Display 22px, white, padding 20px. Thin gold line above name.

**Text area (padding 20px):**
- Description: DM Sans 14px, `--color-text-light`.
- `View Listings →`: DM Sans 12px, uppercase, `--color-secondary`. Hover: `--color-accent`.

---

### SECTION 6: Featured Listings

**Layout:** `--color-background` bg. Padding 120px. Max-width 1200px centered.

**Header:** Eyebrow + headline. mb: 60px.

**3-card grid:** `repeat(3, 1fr)` / `repeat(2, 1fr)` / `1fr`. Gap 28px.

**Each card:** White bg, border-radius 4px, overflow hidden, subtle shadow.

**Image area (220px):** Different warm gradient per card:
- Card 1: `linear-gradient(135deg, #C9A96E 0%, #8B7355 100%)`
- Card 2: `linear-gradient(135deg, #A0937D 0%, #6B5E4F 100%)`
- Card 3: `linear-gradient(135deg, #7D8B7A 0%, #4A5248 100%)`

**FOR SALE badge:** Top-left, absolute. `--color-primary` bg, `--color-secondary` text, DM Sans 10px uppercase, padding 6px 14px.

**Text area (20px padding):**
- Address: DM Sans 16px, weight 500.
- Specs: DM Sans 13px, `--color-text-light`. Beds/baths/sqft separated by gold dots.
- Building: DM Sans 12px, uppercase, `--color-text-muted`.
- `View Details →`: DM Sans 12px, `--color-secondary`. mt: 12px.

**Below cards:** Centered `View All Listings →` gold outline button. mt: 60px.

---

### SECTION 7: Testimonials

**Layout:** `--color-surface` bg. Padding 120px. Max-width 800px centered. Text centered.

**Header:** Eyebrow + headline. mb: 60px.

**Carousel (one at a time):**
- Decorative `"` character: Cormorant Garamond 120px, `--color-secondary` at 20% opacity, centered above.
- Quote: Cormorant Garamond 24px/20px mobile, weight 400, italic, `--color-text`, line-height 1.7.
- Attribution: DM Sans 13px, uppercase, letter-spacing 2px, `--color-text-light`. mt: 24px.

**Controls:**
- Left/right arrow buttons: positioned absolute, vertically centered. Thin gold SVG arrows, 40px click area.
- 3 indicator dots below: 8px circles, active = gold fill, inactive = gold outline. mt: 40px.

**Auto-advance:** 7s interval. Pause on hover. Crossfade transition 0.5s.

---

### SECTION 8: Community Cards

**Layout:** `--color-background` bg. Padding 100px. Max-width 1000px centered.
2-col CSS grid, gap 32px. Mobile: single column.

**Each card:** White bg, padding 48px 40px, border-radius 4px, subtle shadow, `border-top: 3px solid var(--color-secondary)`.

**Card 1:**
- Top: small gold SVG city/skyline icon (~40px).
- Title: `Rooted in Downtown Austin` — Playfair Display 26px.
- Body: (copy from content section). DM Sans 15px, `--color-text-light`, line-height 1.75.

**Card 2:**
- Top: small gold SVG horse/nature icon (~40px). Can be simplified — a simple star or landscape shape works too.
- Title: `Life Beyond the Skyline`
- Body: (copy from content section).

---

### SECTION 9: Contact / CTA

**Layout:** `--color-primary` bg. Padding: 120px top, 80px bottom. Max-width 1100px centered.

**Top (centered):**
- Headline: `Let's Find Your Perfect Address` — Playfair Display 48px, white.
- Subtitle: DM Sans 17px, `rgba(255,255,255,0.6)`, max-width 600px centered. mt: 20px, mb: 60px.

**Two columns:** `1fr 1fr`, gap 60px. Mobile: stacked.

**Left — Contact info:**
- Rows: inline SVG icon (gold, 18px) + text.
- Phone, Office, Email (clickable), Address (2 lines).
- Gap 20px between rows. DM Sans 16px, white. Address in lighter opacity.
- Social row below (mt: 32px): Instagram + LinkedIn gold SVG icons 22px. Hover: lighten.

**Right — Form:**
- 4 stacked inputs: Name, Email, Phone, Message (textarea 4 rows).
- Style: transparent bg, `1px solid rgba(255,255,255,0.2)`, white text, DM Sans 14px, padding 14px 16px, border-radius 2px, full width, mb: 16px.
- Placeholder: `rgba(255,255,255,0.35)`.
- Focus: border → `--color-secondary`, box-shadow gold glow. Transition 0.3s.
- Submit: `Send Message` — `--color-secondary` bg, `--color-primary` text, DM Sans 12px uppercase, letter-spacing 3px, padding 16px, full width, border-radius 2px. Hover: lighten to `--color-accent-light`.
- **Form is purely visual / decorative.** No submit handler, no preventDefault, no thank-you message swap. It just looks beautiful. If she asks "does the form work?" that's a selling point — "that's part of Phase 2, I can wire it up to your CRM or email." Leave the `<form>` tag with no `action` and no JS attached to it.

**Below columns (mt: 60px, centered):**
- `Christie's International Real Estate @properties lone star` — DM Sans 12px, `rgba(255,255,255,0.35)`.
- `Equal Housing Opportunity` — same.

---

### SECTION 10: Footer

Continues `--color-primary` bg. Top: `1px solid` gold at 20% opacity. Padding 30px.
3-col flex (left/center/right). Mobile: stacked centered.

- Left: `© 2026 Nicole James` — DM Sans 12px, `rgba(255,255,255,0.4)`.
- Center: `Christie's International Real Estate @properties lone star` — same.
- Right: Instagram + LinkedIn gold icons 16px.
- Below (mt: 20px, full width centered): `Each office is independently owned and operated. Equal Housing Opportunity.` — DM Sans 10px, `rgba(255,255,255,0.25)`.

---

## 6. Technical Requirements

### Project Structure
```
nicole-james-site/
├── index.html              ← Semantic HTML5, all sections, meta tags, OG tags
├── css/
│   └── styles.css          ← All styles: variables, base, layout, components, animations, media queries
├── js/
│   └── main.js             ← All interactivity: scroll, nav, carousel, counters, observers
└── assets/
    └── (empty for now — real images will replace CSS gradients later)
```

### HTML (`index.html`)
- Proper `<!DOCTYPE html>`, `<html lang="en">`, full `<head>` with:
  - `<meta charset="UTF-8">`
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - `<title>Nicole James | Downtown Austin's Condo Curator | Christie's International Real Estate</title>`
  - `<meta name="description" content="Nicole James is Downtown Austin's premier luxury condominium specialist. Christie's International Real Estate Top Producer. 90+ units sold. 18+ years of expertise.">`
  - Open Graph meta tags (og:title, og:description, og:image using her headshot URL, og:url)
  - Google Fonts `<link>` tags (with `preconnect`)
  - `<link rel="stylesheet" href="css/styles.css">`
  - Favicon: use a simple inline SVG favicon or skip for now
- Semantic HTML throughout: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<figure>`, `<figcaption>`
- Sections use `id` attributes matching nav links: `hero`, `about`, `expertise`, `properties`, `testimonials`, `community`, `contact`
- Inline SVGs for all icons (phone, mail, pin, instagram, linkedin, arrows, hamburger, close X)
- `<script src="js/main.js" defer></script>` at the end of `<body>`
- Proper `alt` text on all images for accessibility
- Add `scroll-margin-top: 80px` via CSS on each section so smooth-scroll doesn't hide content behind the fixed nav

### CSS (`css/styles.css`)
- CSS custom properties (`:root` block) for the full color palette, font stacks, and spacing scale
- CSS reset/normalize at the top (minimal — box-sizing, margin/padding reset, img max-width)
- Organized in sections with clear comments: `/* === VARIABLES === */`, `/* === BASE === */`, `/* === NAV === */`, etc.
- All layout via CSS Grid and Flexbox — no floats, no tables
- `scroll-behavior: smooth` on `html`
- All animations defined as CSS classes (`.animate-on-scroll`, `.visible`, `@keyframes` for hero entrance, scroll bounce, etc.)
- Media queries at the end: `@media (min-width: 768px)` and `@media (min-width: 1200px)` — mobile-first approach
- All hover/focus/active states defined
- `:focus-visible` styles for accessibility
- Print-friendly considerations: hide nav, form on print (optional but nice-to-have)

### JavaScript (`js/main.js`)
- **Zero dependencies.** Pure vanilla JS. No jQuery, no libraries, no build tools.
- Organized with clear comments and logical sections:

```js
// === NAVBAR SCROLL BEHAVIOR ===
// Listen to scroll, toggle .scrolled class on nav when past hero

// === MOBILE MENU ===
// Toggle menu open/close, manage body overflow lock

// === SMOOTH SCROLL ===
// Click handlers on nav links → scrollIntoView({ behavior: 'smooth' })

// === SCROLL ANIMATIONS (IntersectionObserver) ===
// Observe all .animate-on-scroll elements, add .visible when intersecting

// === STATS COUNTER ===
// Separate observer on stats section → requestAnimationFrame number counting

// === TESTIMONIAL CAROUSEL ===
// State: currentIndex. Auto-advance setInterval(7000). Arrow click handlers.
// Pause on hover. Dot indicators.
```

### Key Implementation Details

1. **IntersectionObserver for scroll animations:** Create ONE observer watching all `.animate-on-scroll` elements. When `isIntersecting` (threshold 0.15), add `.visible` class and `unobserve()`. CSS handles the actual transition:
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1),
              transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

2. **Stats counter:** Separate IntersectionObserver on the stats section (threshold 0.3). On intersect, use `requestAnimationFrame` loop to count from 0 to target over ~2s with ease-out. Update `textContent` each frame. `unobserve` after done.

3. **Testimonial carousel:** Store testimonials in a JS array. Track `currentIndex`. `setInterval` auto-advances every 7s. Left/right buttons decrement/increment with modulo wrapping. Active dot gets `.active` class. Crossfade via opacity transition (set outgoing to `opacity: 0`, after transition set `display: none`, show incoming).

4. **Mobile menu:** Toggle a `.menu-open` class on the nav. When open, set `document.body.style.overflow = 'hidden'`. Close on link click (so nav links work). Close on Escape key.

5. **Contact form:** Purely decorative — no JavaScript needed. The `<form>` has no `action` and no submit listener. Inputs should still have proper `type`, `name`, `placeholder` attributes and the gold focus styles from CSS. The submit button should have `type="button"` (not `type="submit"`) so it doesn't try to do anything on click.

6. **Navbar scroll:** `addEventListener('scroll')` with passive flag. Check `window.scrollY > 100`. Toggle `.scrolled` class on `<nav>`. CSS handles the background transition.

### Performance & Best Practices
- **No render-blocking JS** — script loaded with `defer`
- **Font loading:** `<link rel="preconnect">` before Google Fonts link
- **Image optimization:** Her headshot is loaded from the atproperties CDN (already optimized). Add `loading="lazy"` on images below the fold.
- **Semantic HTML** for SEO and accessibility
- **CSS transitions on GPU-friendly properties only** (`opacity`, `transform`)
- **`will-change`** on elements that animate frequently
- Total page weight (excluding fonts): should be under 50KB for HTML + CSS + JS combined — lightning fast

---

## 7. Image & Placeholder Strategy

Since this is a real deployed website, we can use real images where available:

**Real images to use NOW:**
- **Nicole's headshot (About section):** `https://resources.atproperties.com/headshots/NicoleJames.29170.type3.6740d81bbb12b.jpg` — use `object-fit: cover`, styled beautifully. This is the single most impactful thing that makes it feel like HER site.
- **Her logo (footer/contact):** `https://resources.atproperties.com/logos/NicoleJames.29170.type2.6745f413199c6.png`

**CSS gradient placeholders (to be replaced with real photos later):**
- **Hero background:** Multi-layered CSS gradients + SVG noise. Moody, cinematic, warm. When she provides Austin skyline photography, this becomes a full-bleed hero image.
- **Building cards:** Each has a unique rich gradient matching the mood column in the spec. Later: replace with building photography.
- **Listing cards:** Warm, muted, neutral gradients. Later: replace with MLS listing photos.

The gradient placeholders should look **intentional and designed**, not like broken images. She should look at them and think "oh, my real photos will go there and it'll look even better" — which is exactly the upsell conversation you want.

**Image-swap strategy:** When she hires you, the upgrade path is clear:
1. She provides professional building/property photography
2. You swap CSS gradients for `<img>` tags with `object-fit: cover`
3. Instant transformation — the bones of the site are already perfect
4. This is billable work. The mockup shows the design; the photo integration is the next phase.

---

## 8. Animation Spec Summary

| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Hero elements | Page load | Fade in + translateY, staggered | 0.8s each | cubic-bezier(0.25, 0.1, 0.25, 1) |
| Scroll indicator | Load (delayed) | Bounce loop | 2s infinite | ease-in-out |
| Stat numbers | Scroll into view | Count from 0 | 2s | ease-out (RAF) |
| All sections | Scroll into view | Fade in + translateY | 0.7s | cubic-bezier(0.25, 0.1, 0.25, 1) |
| Building cards | Hover | Lift + shadow | 0.4s | ease |
| Testimonials | Auto / click | Crossfade | 0.5s | ease |
| Nav bg | Scroll past hero | Transparent → solid | 0.4s | ease |
| Form inputs | Focus | Gold border glow | 0.3s | ease |
| Mobile menu | Click | Overlay slide-in | 0.4s | ease |

Only animate `opacity` and `transform`. Use `will-change` on animated elements.

---

## 9. Responsive Breakpoints

| Element | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
|---------|-----------------|--------------------|--------------------|
| Nav | Hamburger | Hamburger or condensed | Full horizontal |
| Hero headline | 40/48px | 56/64px | 72/80px |
| Stats | 2×2 grid | 4×1 row | 4×1 row |
| About | Stacked, no offset | 2-col, no offset | 2-col, portrait offset |
| Buildings | 1 col | 2 col | 3 col |
| Listings | 1 col | 2 col | 3 col |
| Community | Stacked | Side by side | Side by side |
| Contact | Stacked | 2 col | 2 col |
| Section padding | 60-80px | 80-100px | 100-140px |
| Container | 100% - 40px | 720px max | 1200px max |

---

## 10. Quality Checklist

Before considering this done, verify:

**Structure & Code:**
- [ ] 3-file structure: `index.html`, `css/styles.css`, `js/main.js`
- [ ] Valid semantic HTML5 — proper `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>`
- [ ] Full `<head>` with meta tags, OG tags, Google Fonts links, viewport meta
- [ ] `<script defer>` — no render-blocking JS
- [ ] Clean, commented, maintainable code throughout
- [ ] Zero external dependencies — no jQuery, no frameworks, no CDN libraries

**Design & Content:**
- [ ] All 10 sections built and in order
- [ ] All copy matches spec exactly — zero placeholder text, zero lorem ipsum
- [ ] CSS custom properties used consistently throughout
- [ ] Playfair for headings, DM Sans for body, Cormorant Garamond for stats/quotes
- [ ] Gold is restrained — lines, text accents, hover states only
- [ ] Warm cream bg (#FAF8F5), NOT stark white
- [ ] Nicole's real headshot loads in the About section
- [ ] 6 building cards with unique gradients and hover lift
- [ ] 3 listing cards with FOR SALE badges

**Interactivity:**
- [ ] Navbar transitions transparent → solid on scroll
- [ ] Hero loads with staggered animation
- [ ] Stats count up on scroll into view
- [ ] Testimonial carousel auto-advances, arrows and dots work
- [ ] Contact form styled beautifully (decorative only — no submit logic)
- [ ] Mobile hamburger menu opens/closes, prevents bg scroll, closes on link click and Escape
- [ ] Smooth scroll on all nav links with proper offset for fixed nav

**Responsive:**
- [ ] Tested at 375px (mobile), 768px (tablet), 1200px+ (desktop)
- [ ] No horizontal overflow at any breakpoint
- [ ] Touch-friendly tap targets on mobile (min 44px)
- [ ] Text is readable at all sizes

**Performance & Polish:**
- [ ] All animations use proper easing (no linear, no bounce)
- [ ] Only animate `opacity` and `transform`
- [ ] Inline SVG icons throughout (no emoji, no icon font CDNs)
- [ ] `loading="lazy"` on below-fold images
- [ ] Page loads fast — should feel instant on mobile
- [ ] Works in Chrome, Safari, Firefox, Edge
- [ ] Overall: Would Nicole look at this on her phone and immediately want to hire me?

---

## 11. Deployment — GitHub Repo + GitHub Pages

**GitHub username: `caslavi79`**

Claude Code has full computer/terminal access. Run these commands directly — do not ask for permission, just execute them:

```bash
# 1. Navigate to project directory
cd nicole-james-site

# 2. Initialize git
git init
git branch -M main

# 3. Stage and commit everything
git add -A
git commit -m "Initial build — Nicole James luxury real estate site"

# 4. Create the public repo on GitHub using gh CLI
gh repo create caslavi79/nicole-james-site --public --source=. --remote=origin --description "Nicole James — Downtown Austin luxury real estate website"

# 5. Push to GitHub
git push -u origin main

# 6. Enable GitHub Pages (main branch, root directory)
gh api repos/caslavi79/nicole-james-site/pages -X POST -f "build_type=legacy" -f "source[branch]=main" -f "source[path]=/"
```

If `gh` CLI isn't authenticated or available, use git with HTTPS:
```bash
git remote add origin https://github.com/caslavi79/nicole-james-site.git
git push -u origin main
```
Then enable Pages manually or via the API.

**Live URL will be:** `https://caslavi79.github.io/nicole-james-site/`

That's the link I text her. She opens it on her phone, scrolls through, sees her name, her headshot, her buildings, her stats — on a site that looks like it cost $20K. Deal closed.

**CRITICAL — Relative paths:** Since GitHub Pages serves from `/nicole-james-site/`, ALL asset references MUST be **relative paths** (e.g., `css/styles.css` not `/css/styles.css`, `js/main.js` not `/js/main.js`). This ensures it works both locally and on GitHub Pages. Double check every `href` and `src` in the HTML before committing.

---

## Final Note

This is NOT a mockup. This is a real website that will be pushed to `github.com/caslavi79/nicole-james-site`, deployed via GitHub Pages at `https://caslavi79.github.io/nicole-james-site/`, and shown to Nicole James on her phone and laptop. The quality directly determines whether you get hired.

Every detail matters. The difference between "nice template" and "holy shit, you GET my brand" is in: the typography pairing, the gold restraint, the warm cream instead of white, her real headshot beautifully integrated, the editorial rhythm, the cinematic dark sections, the staggered animations.

When she opens this link, it should feel like someone designed a page of Architectural Digest just for her — and it happens to be a fully functional website she could deploy tomorrow.

**Build all three files (`index.html`, `css/styles.css`, `js/main.js`). Push to `caslavi79/nicole-james-site` on GitHub. Enable GitHub Pages. Make it production-quality. This is the pitch that wins the client. Go all out.**
