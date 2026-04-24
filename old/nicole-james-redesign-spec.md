# Nicole James Website Redesign — "Ranch & Rise" Direction

## Claude Code Handoff Spec

**Repo:** https://github.com/caslavi79/nicole-james (GitHub Pages, static HTML/CSS/JS)
**Live:** https://caslavi79.github.io/nicole-james/
**Goal:** Redesign the visual identity to fix "luxury real estate template syndrome" while keeping all existing content, functionality, and structure intact.

---

## The Problem

The current site is well-built and the content is strong, but the visual design is indistinguishable from ~80% of luxury real estate agent websites. Every design choice maps to template defaults:

| Element | Current | Problem |
|---------|---------|---------|
| Serif font | Playfair Display | #1 most-used serif on luxury RE sites |
| Sans font | DM Sans | Default pairing with Playfair |
| Accent serif | Cormorant Garamond | Same "elegant Google Fonts" family |
| Primary accent | `#c9a96e` (muted gold) | Used by ~80% of luxury agent sites |
| Dark background | `#1a1a1a` (charcoal) | Generic luxury dark |
| Light background | `#faf8f5` / `#f0ede8` | Warm off-white template default |
| Section pattern | Gold uppercase spaced eyebrow → large serif headline | Most copied luxury web pattern of last 5 years |
| Page flow | Hero video → stats bar → photo+bio split → card grid → carousel → testimonials → dark contact | Beat-for-beat Compass/Sotheby's/Christie's agent template |

**What's actually original (keep/amplify):**
- "Condo Curator" tagline — memorable, unique
- Cutting horses / ranch detail — strong brand differentiator no competitor has
- "Skin in the game" copy — confident, distinctive
- Nicole's signature graphic — nice personal touch
- Building-specific expertise cards — good content choice
- The track record is real and impressive

---

## Design Direction: "Ranch & Rise"

The core concept: Nicole lives two lives — downtown skyline specialist and hill country rancher. No other Christie's agent in Austin has this duality. The redesign leans into that tension. Warm earth tones meet architectural glass. The site should feel like it could only belong to one person.

### New Color Palette

Replace generic gold-and-charcoal with an earthy, distinctly Texan palette:

```css
:root {
  /* Primary backgrounds */
  --color-dark: #3C3228;         /* warm umber (replaces #1a1a1a charcoal) */
  --color-dark-alt: #2A2520;     /* deeper umber for hero/contact */
  --color-light: #F5F0E8;        /* warm linen (replaces #faf8f5) */
  --color-light-alt: #EBE4D8;    /* slightly deeper linen (replaces #f0ede8) */
  --color-white: #FDFBF7;        /* warm white for cards */

  /* Accent colors */
  --color-accent: #D4654A;       /* dusty terracotta (replaces #c9a96e gold) */
  --color-accent-hover: #B8503A; /* darker terracotta for hover states */
  --color-accent-soft: #E8A08E;  /* light terracotta for subtle accents */
  --color-secondary: #2D4A3E;    /* deep sage green — the ranch/nature nod */
  --color-secondary-light: #3D6B5A; /* lighter sage for hover */

  /* Warm neutrals */
  --color-tan: #C4A97D;          /* warm tan — subtle luxury without screaming gold */
  --color-tan-light: #D4C4A0;    /* lighter tan */
  --color-text-primary: #2C2520; /* warm near-black */
  --color-text-secondary: #6B6055; /* warm gray */
  --color-text-muted: #9B9285;   /* muted warm gray */
  --color-text-on-dark: #F5F0E8; /* light text on dark backgrounds */
  --color-text-on-dark-muted: #B5AEA4; /* muted text on dark backgrounds */
}
```

**Why this works:** The terracotta accent immediately separates the site from the sea of gold competitors. The sage green creates a visual bridge to the ranch side of Nicole's story. The warm umber dark sections feel grounded rather than generic.

### New Typography

Replace the overused Playfair/DM Sans/Cormorant combo:

```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --font-serif: 'Libre Caslon Text', 'Caslon', Georgia, serif;
  --font-sans: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}
```

**Usage rules:**
- `--font-serif` for: hero headline, section headlines (h2), testimonial quotes, building names in cards, Nicole's name in nav
- `--font-sans` for: everything else — body copy, nav links, eyebrow labels, buttons, stats, form fields, footer
- **Kill the letter-spacing on nav links.** The current 2.5px letter-spacing on "ABOUT", "EXPERTISE" etc. is a template tell. Use normal letter-spacing with `text-transform: uppercase` and `font-weight: 500` at 13px instead.
- Eyebrow labels (the "ABOUT", "EXPERTISE" section labels) should use `--color-accent` (terracotta) instead of gold, at `font-size: 12px; letter-spacing: 1.5px; font-weight: 500; text-transform: uppercase;`

**Why Libre Caslon Text:** It has similar warmth to Playfair but is far less overused on real estate sites. The italic is beautiful without being calligraphic. It pairs naturally with Inter. It says "editorial quality" not "Squarespace luxury template."

### Section-by-Section Changes

#### 1. Navigation

**Current:** Dark bar, gold "NICOLE JAMES" with 4px letter-spacing, gold phone number, spaced uppercase links.

**New:**
- Keep dark bar but use `--color-dark` (warm umber) instead of pure charcoal
- "NICOLE JAMES" in `--font-serif`, regular weight, `letter-spacing: 2px` (reduced from 4px)
- Nav links: `--font-sans`, 13px, `font-weight: 500`, `letter-spacing: 0.5px` (reduced from 2.5px), `text-transform: uppercase`
- Phone number accent color: `--color-accent` (terracotta) instead of gold
- Hover state on links: `--color-accent` instead of gold
- The thin underline accent below "NICOLE JAMES" should be `--color-accent` (terracotta)

#### 2. Hero Section (`#hero`)

**Current:** Full-screen dark video background, gold eyebrow, Playfair headline with italic "Condo Curator" in gold, white body text, gold-bordered CTA button, signature watermark.

**New:**
- Keep the video background — it works
- Background overlay: shift the radial gradient from gold-tinted to a warm umber tint: `radial-gradient(at 80% 80%, rgba(212, 101, 74, 0.12) 0%, transparent 50%)`
- Eyebrow ("CHRISTIE'S INTERNATIONAL REAL ESTATE"): use `--color-tan` instead of gold
- Headline "Downtown Austin's" in `--font-serif`, white
- "Condo Curator" in `--font-serif` italic, `--color-accent` (terracotta instead of gold)
- New sub-tagline below existing body copy: "Skyline expertise. Hill country roots." in `--font-sans`, 14px, `--color-text-on-dark-muted`
- CTA button: border `--color-accent`, text `--color-accent`, hover fill `--color-accent` with white text
- Signature watermark: keep but tint toward warm tones
- Scroll indicator: `--color-accent` instead of gold

#### 3. Stats Bar (`#stats`)

**Current:** Dark charcoal background, gold numbers in Cormorant Garamond, white uppercase labels.

**New:**
- Background: `--color-dark` (warm umber)
- Numbers: `--font-serif` (Libre Caslon), `--color-accent` (terracotta)
- Labels: `--font-sans`, `--color-text-on-dark-muted`, reduce letter-spacing to `1.5px` from current heavy spacing
- Add a very subtle top border: `1px solid rgba(212, 101, 74, 0.2)` to separate from hero

#### 4. About Section (`#about`)

**Current:** Light bg, photo left / text right split, gold eyebrow, Playfair headline, badge row at bottom (Christie's Luxury Specialist, Top Producer 2025, etc.)

**New:**
- Background: `--color-light`
- Eyebrow: `--color-accent` (terracotta)
- Headline "A Legacy of Luxury, A Passion for Austin": `--font-serif`, `--color-text-primary`
- **Break the left-photo/right-text template pattern.** Instead of the standard 50/50 split, try: photo slightly overlapping the edge of the section (offset by -20px or so), with text wrapping around it more naturally. Or: photo at 40% width, text at 55%, with a thin vertical line in `--color-accent` as a divider.
- Badge row at bottom: replace gold text with `--color-secondary` (sage) backgrounds with white text, or `--color-light-alt` backgrounds with `--color-text-primary` text. Keep small and understated.

#### 5. Expertise Section (`#expertise`)

**Current:** Slightly darker light bg, gold eyebrow, Playfair headline, 3-column grid of building cards with photo + title overlay + description + gold "VIEW DETAILS →" link.

**New:**
- Background: `--color-light-alt`
- Eyebrow: `--color-accent`
- Headline: `--font-serif`
- Building cards: keep the photo overlay approach, but:
  - The thin line under the building name: `--color-accent` instead of gold
  - "VIEW DETAILS →" link color: `--color-accent`
  - On hover, instead of just opacity change, add a subtle `--color-accent` border-bottom on the card
- Card body (white area below photo): `--color-white` background

#### 6. Featured Properties (`#properties`)

**Current:** Light bg, gold eyebrow, Playfair headline, property card with "FOR SALE" badge, price, neighborhood, gold "MORE INFO →".

**New:**
- "FOR SALE" badge: `--color-accent` background, white text (instead of gold)
- "MORE INFO →": `--color-accent`
- Price: `--font-serif`, `--color-text-primary`

#### 7. Recent Sales (`#recent-sales`)

**Current:** Light bg, gold eyebrow, Playfair headline, horizontal scrolling cards with "SOLD"/"RENTED" badges.

**New:**
- "SOLD" badges: `--color-secondary` (sage green) background, white text
- "RENTED" badges: `--color-tan` background, `--color-dark` text
- This creates visual differentiation between sold/rented that the current design doesn't have (both are just status labels with no color distinction)
- Carousel arrows: `--color-accent` instead of gold

#### 8. Testimonials (`#testimonials`)

**Current:** White bg, centered italic Playfair quote, gold dot indicators, left/right arrows.

**This is the section most in need of layout change.** The centered quote carousel is the single most template-like element.

**New — "Stacked Editorial" layout:**
- Instead of a carousel, show 2 testimonials visible at a time in a stacked layout
- Each testimonial: left-aligned, with a large `--color-accent` opening quotation mark ("), the quote in `--font-serif` italic at 18-20px, attribution in `--font-sans` 13px `--color-text-secondary`
- Separate testimonials with a thin horizontal line in `--color-tan-light`
- If keeping the carousel for mobile, change dot indicators from gold to `--color-accent`
- **Alternative if carousel is preferred:** At minimum, left-align the quotes instead of centering. Add a large decorative `"` in `--color-accent` to the left. Use `--font-serif` italic for the quote text.

#### 9. Community Section

**Current:** Two side-by-side cards with small icons, serif headlines, body copy. "Rooted in Downtown Austin" and "Life Beyond the Skyline."

**New:**
- The gold top border on each card: change to `--color-accent` on the "Downtown" card and `--color-secondary` (sage) on the "Life Beyond the Skyline" card. This visually encodes the duality — urban = terracotta, ranch = sage.
- Icons: tint to match their respective accent colors
- This is the section where the ranch/skyline duality should be most visible

#### 10. Contact Section (`#contact`)

**Current:** Dark charcoal bg, centered Playfair headline, phone/email/address on left, form on right, social icons, logo, Christie's branding.

**New:**
- Background: `--color-dark` (warm umber)
- Headline: `--font-serif`, `--color-text-on-dark`
- Body text: `--color-text-on-dark-muted`
- Icon colors: `--color-accent` (terracotta) instead of gold
- "SEND MESSAGE" button: `--color-accent` background, white text (instead of gold bg)
- Form input borders on focus: `--color-accent`
- Social icon hover: `--color-accent`

#### 11. Footer

**Current:** Very dark bg, small centered text, social icons.

**New:**
- Background: `--color-dark-alt` (deepest umber)
- Text: `--color-text-on-dark-muted`
- Accent elements: `--color-accent`

---

### Global CSS Changes Checklist

This is a find-and-replace guide for the most impactful changes:

```
FIND → REPLACE (colors)
#c9a96e → var(--color-accent)          /* gold → terracotta everywhere */
#1a1a1a → var(--color-dark)            /* pure charcoal → warm umber */
#111111 → var(--color-dark-alt)        /* deepest dark → warm dark */
#faf8f5 → var(--color-light)           /* cool off-white → warm linen */
#f0ede8 → var(--color-light-alt)       /* secondary light → deeper linen */
#6b6b6b → var(--color-text-secondary)  /* cool gray → warm gray */
#2c2c2c → var(--color-text-primary)    /* cool near-black → warm near-black */

FIND → REPLACE (fonts)
'Playfair Display' → var(--font-serif)
'Cormorant Garamond' → var(--font-serif)
'DM Sans' → var(--font-sans)

FIND → REPLACE (spacing)
letter-spacing: 4px (on nav logo) → letter-spacing: 2px
letter-spacing: 2.5px (on nav links) → letter-spacing: 0.5px
```

### Google Fonts Link Update

Replace the current Google Fonts `<link>` tag in `<head>`:

```html
<!-- REMOVE existing font imports for Playfair Display, DM Sans, Cormorant Garamond -->
<!-- ADD: -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

---

## What NOT to Change

Preserve all of the following:
- **All text content / copy** — the writing is strong, don't touch it
- **Site structure** — same sections in same order (unless testimonials layout changes)
- **All images** — headshot, building photos, property photos, sold photos
- **Video** — keep the hero background video
- **All links, phone numbers, email, addresses**
- **Form functionality** — keep the contact form working as-is
- **Modal/lightbox behavior** — the building detail modals and property modals
- **Carousel/scroll behavior** — recent sales horizontal scroll, testimonial navigation
- **Mobile responsive behavior** — hamburger menu, stacked layouts
- **The signature graphic** — keep Nicole's signature overlay
- **Christie's branding** — keep all Christie's International Real Estate references and logos
- **SEO** — keep the page title, meta description, heading hierarchy

---

## Priority Order

If doing this incrementally:

1. **Colors** — swap the palette (biggest visual impact, easiest change)
2. **Typography** — swap fonts and reduce letter-spacing
3. **Eyebrow pattern** — change all gold uppercase eyebrows to terracotta
4. **Buttons/links** — update all interactive element colors
5. **Badge differentiation** — SOLD (sage) vs RENTED (tan) badges
6. **Community section** — add the terracotta/sage duality to the two cards
7. **Testimonials layout** — if time permits, switch from centered carousel to stacked editorial

---

## Validation Checklist

After implementation, verify:

- [ ] No gold (#c9a96e) remains anywhere in the CSS
- [ ] No Playfair Display, Cormorant Garamond, or DM Sans references remain
- [ ] Terracotta accent (#D4654A) is used consistently for all interactive/accent elements
- [ ] Dark backgrounds use warm umber (#3C3228) not charcoal (#1a1a1a)
- [ ] Light backgrounds use warm linen (#F5F0E8) not cool off-white (#faf8f5)
- [ ] Letter-spacing on nav links is reduced (no more heavy tracking)
- [ ] SOLD and RENTED badges are visually distinct from each other
- [ ] All hover states use new accent colors
- [ ] Mobile menu uses new palette
- [ ] Form focus states use new accent color
- [ ] Site still passes basic accessibility contrast checks (terracotta on white, white on umber)
- [ ] Google Fonts loads Libre Caslon Text + Inter correctly
- [ ] No console errors
- [ ] All carousels, modals, and interactive elements still function
