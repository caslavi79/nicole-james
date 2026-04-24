# AI Search Optimization for Real Estate Agent Websites
## A Layered Research Report for Nicole James (Downtown Austin Condo Specialist, @properties Lone Star / Christie's International Real Estate)

**Prepared: April 23, 2026**

This report provides a progressively narrowing analysis of what it takes to rank and be cited in AI-powered answer engines (ChatGPT Search, Perplexity, Google AI Overviews, Gemini, Claude, Copilot) as a real estate agent — specifically a downtown Austin condo specialist. It is structured in four layers, from general GEO/AEO best practice through to Austin-specific tactics, followed by a sample-site appendix intended to inform the web build specification.

> **Caveat on the research base:** Many of the specific percentages, citation-rate lifts, and ranking correlations quoted below come from vendor studies (Profound, Ahrefs, Semrush, Surfer, Writesonic, Digital Bloom, FlyDragon, Cintra, etc.) rather than peer-reviewed academic work. Treat them as directional rather than definitive. Two findings are unusually well-replicated and worth anchoring to: (1) LLMs cite very few domains per answer (typically 2–8), and (2) brand mentions and entity presence across third-party sites matter more than raw backlinks for AI visibility.

---

## LAYER 1 — AI SEO / GEO / AEO: GENERAL BEST PRACTICES

### 1.1 How LLM-powered answer engines source and rank content

Modern AI search runs on **retrieval-augmented generation (RAG)**. A user prompt is decomposed into sub-queries, each sub-query hits a live or semi-live index, a retriever ranks candidate passages, and an LLM synthesizes an answer grounded in the retrieved chunks, citing a small handful of sources ([Profound](https://www.tryprofound.com/resources/articles/generative-engine-optimization-geo-guide-2025)). Critically, the retrieval and synthesis layers operate very differently across engines:

- **Perplexity** is retrieval-first — every query triggers a fresh web search against a proprietary index (reported to hold 200B+ URLs) and the LLM is a *synthesizer bound by retrieved evidence*, not the primary knowledge source. It shows 3–8 inline numbered citations per answer and is heavily biased toward freshness — an Ahrefs study cited by Surfer found AI assistants prefer content ~25.7% fresher than organic-search URLs, and the freshness bias is strongest on Perplexity ([Surfer SEO](https://surferseo.com/blog/llm-citations/); [Ziptie](https://ziptie.dev/blog/how-perplexity-ai-answers-work/)).
- **ChatGPT Search** leans heavily on Bing's index — 87% overlap between ChatGPT citations and Bing's top results has been reported — while still blending in parametric (training-data) answers when grounding is weak. Only ~10% of ChatGPT's short-tail results overlap Google SERPs, and 28.3% of its most-cited pages have *zero* Google organic visibility ([Digital Bloom](https://thedigitalbloom.com/learn/2025-ai-citation-llm-visibility-report/); [Position Digital](https://www.position.digital/blog/ai-seo-statistics/)).
- **Google AI Overviews / AI Mode** maintain the tightest correlation with traditional rankings — 92.36% of AIO responses link to at least one top-10 domain ([Single Grain](https://www.singlegrain.com/search-everywhere-optimization/google-ai-overviews-the-ultimate-guide-to-ranking-in-2025/)) — but only 13.7% of citations overlap between AI Overviews and AI Mode (Ahrefs, Dec 2025), and 47% of AIO content comes from pages ranking *below* position 5 ([Wellows](https://wellows.com/blog/google-ai-overviews-ranking-factors/)).
- **Claude** historically did not browse the web; Anthropic now operates a three-bot architecture — ClaudeBot (training), Claude-SearchBot (search indexing), Claude-User (live user-triggered fetch) — and explicitly respects robots.txt differently for each ([Search Engine Journal](https://www.searchenginejournal.com/anthropics-claude-bots-make-robots-txt-decisions-more-granular/568253/); [ALM Corp](https://almcorp.com/blog/anthropic-claude-bots-robots-txt-strategy/)).
- **Gemini / AI Overviews** obey Googlebot rules for retrieval; Google-Extended controls whether content is used for Gemini *training* but does not gate AIO retrieval ([Scrunch](https://scrunch.com/resources/guides/guide-to-ai-user-agents/)).
- **Copilot / Bing Chat** runs on Bing's index and OpenAI models — so OpenAI-focused GEO and Bing SEO largely overlap.

Cross-platform, only ~11% of domains are cited by both ChatGPT and Perplexity, so optimization must be multi-engine ([Digital Bloom](https://thedigitalbloom.com/learn/2025-ai-citation-llm-visibility-report/)).

### 1.2 What actually moves the needle: evidence from 2024–2026 studies

The landmark Princeton / IIT Delhi "GEO" paper (which coined the term) and follow-on industry replications converge on a consistent list of content-level levers that increase citation probability:

- **Adding statistics**: up to +33.9% visibility lift
- **Adding expert quotations**: up to +32%
- **Citing authoritative sources**: +30.3%
- **Fluent, clear writing**: +30%
- Structured data / schema markup: +73% selection rate lift for AIO
- Multi-modal content (text + image + video + structured data): +156% selection rate vs. text-only
- Entity-rich content (15+ connected entities per 1,000 words): 4.8× boost in AIO presence
- E-E-A-T / author authority: present in 96% of cited AIO sources
([GrowthBook](https://blog.growthbook.io/guide-to-geo/); [Wellows](https://wellows.com/blog/google-ai-overviews-ranking-factors/); [AI Mode Boost](https://aimodeboost.com/resources/research/ai-overview-ranking-factors-2025/))

Perhaps the most important 2026 finding: **brand search volume correlates with LLM citations at r ≈ 0.334 — a stronger signal than traditional backlinks** ([Digital Bloom](https://thedigitalbloom.com/learn/2025-ai-citation-llm-visibility-report/)). YouTube mentions and branded web mentions are the two top factors correlating with AI brand visibility in ChatGPT, AI Mode, and AI Overviews (Ahrefs, Dec 2025, via [Position Digital](https://www.position.digital/blog/ai-seo-statistics/)).

Additional replicated findings:
- Earned-media syndication lifts citations by up to 325% vs. publishing only on your own site (Stacker study, [Position Digital](https://www.position.digital/blog/ai-seo-statistics/)).
- AIO content changes 70% of the time for the same query, and 45.5% of citations swap out on refresh (Ahrefs, Nov 2025).
- AI Overviews appear in 50%+ of searches (up from 18% in March 2025), but only **7.9%** of *local* searches trigger an AIO — the lowest trigger rate of any category (Ahrefs, Nov 2025). This is critical context for real estate.
- Case-study pages and pricing/comparison pages are now the top-converting content for AI traffic; top-of-funnel "what is" content is in decline (Siege Media, Sept 2025).
- Reddit citations in AI answers grew 450% between March and June 2025; Perplexity cites Reddit 45% more than other sources ([AuthorityTech](https://authoritytech.io/blog/reddit-perplexity-geo-strategy-2026)).

### 1.3 Content format patterns that get extracted

LLMs extract passages, not pages. The "CITABLE" pattern used by leading GEO agencies ([Discovered Labs](https://discoveredlabs.com/blog/ai-citation-patterns-how-chatgpt-claude-and-perplexity-choose-sources)) and echoed by Directive Consulting and Surfer distills to:

1. **BLUF (Bottom Line Up Front)**: Every page opens with a 40–80-word direct answer that names the entity (your brand, your market) and states the core answer. Put the answer in the first 100 words.
2. **Self-contained passages** of ~130–170 words that could be lifted without losing meaning. Avoid pronouns that reference earlier content ("this," "these") — they break extractability.
3. **Question-style H2s** that mirror real user queries ("Who is the best downtown Austin condo agent?"), followed by a 1–2 sentence answer, then supporting context.
4. **Declarative first sentences**: "Best" / "Top" / "The" statements, not hedges.
5. **Factual density**: stats with sources, specific prices, dated data, numbered lists, comparison tables.
6. **Inline definitions** of jargon (IABS, IDX, HOA, MLS) — AI engines reward semantically complete passages.
7. **FAQ blocks** with concise Q/A pairs marked up with FAQPage schema.

### 1.4 Technical foundations for AI crawlability

**robots.txt strategy (critical — this is where most agents accidentally go invisible):**

The correct 2026 posture for a real-estate agent who wants maximum AI visibility is to **allow all AI search and retrieval bots, and optionally block only training-only bots**. The distinction is now well-documented ([ALM Corp](https://almcorp.com/blog/anthropic-claude-bots-robots-txt-strategy/); [Search Engine Journal](https://www.searchenginejournal.com/anthropics-claude-bots-make-robots-txt-decisions-more-granular/568253/); [Scrunch](https://scrunch.com/resources/guides/guide-to-ai-user-agents/)):

| Bot | Purpose | Recommended for a visibility-first agent site |
|---|---|---|
| `OAI-SearchBot` | ChatGPT Search indexing | **Allow** (blocking removes you from ChatGPT answers) |
| `ChatGPT-User` | ChatGPT live user fetch | **Allow** (may ignore robots.txt anyway) |
| `GPTBot` | OpenAI training | Allow (helps long-term entity recognition) |
| `PerplexityBot` | Perplexity indexing | **Allow** |
| `Perplexity-User` | Perplexity user fetch | **Allow** (also may ignore robots.txt) |
| `Claude-SearchBot` | Claude search | **Allow** |
| `Claude-User` | Claude live fetch | **Allow** |
| `ClaudeBot` | Anthropic training | Allow |
| `Google-Extended` | Gemini / Vertex training | **Allow** (does not affect Google Search or AIO) |
| `Googlebot` | Google Search + AIO retrieval | **Allow** |
| `CCBot` | Common Crawl | Allow |
| `Bingbot` | Bing + Copilot | **Allow** |

**Critical warning**: OpenAI has publicly stated that "Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers." A meaningful share of sites (ziptie.dev estimates roughly 27% of B2B sites) are accidentally blocking LLM crawlers at the CDN layer (Cloudflare's "block AI bots" default toggle); check Cloudflare **Security → Bots → Control AI Crawlers** before launch ([Mersel AI](https://www.mersel.ai/blog/how-to-block-or-allow-ai-bots-on-your-website)).

**Schema markup (the six types that matter most across AIO, ChatGPT, and Perplexity per Ziptie):**
Organization, Article, FAQPage, HowTo, Product, and LocalBusiness. For real estate specifically, `RealEstateAgent`, `Person`, `Residence`/`Apartment`/`House`, `Place`, `Review`/`AggregateRating`, and `BreadcrumbList` are the priority set (see Layer 2).

**llms.txt**: A proposed standard from Jeremy Howard (Answer.AI, Sept 2024) — a markdown file at `/llms.txt` listing your highest-value pages with short descriptions, designed as a curated map for LLM retrieval. Adoption is growing (Anthropic, Stripe, Zapier, Cloudflare) but no major LLM platform has officially committed to consuming it as a first-class signal ([Search Engine Land](https://searchengineland.com/llms-txt-isnt-robots-txt-its-a-treasure-map-for-ai-456586); [iSimplifyMe](https://isimplifyme.com/blog/llms-txt)). Search Engine Journal notes it is "inherently untrustworthy" because it can be manipulated differently from on-page content ([SEJ](https://www.searchenginejournal.com/llms-txt-for-ai-seo/556576/)). **Recommendation**: implement it as a low-cost insurance play — Yoast and AIOSEO auto-generate it — but do not expect measurable short-term lift. Treat it like early sitemap.xml: no harm, possible future upside.

**Other technical fundamentals that AI crawlers specifically reward:**
- **Server-side rendering** (Perplexity and many retrievers struggle with JS-rendered content) — critical for any React/Next.js IDX integration.
- **Fast Time to First Byte** and green Core Web Vitals (retrievers prefer low-latency responses).
- **Clean HTML5 semantics** (`<article>`, `<section>`, `<h1>`–`<h3>`, `<dl>`/`<dt>`/`<dd>` for definitions).
- **Canonical URLs** set explicitly on every page.
- **XML sitemap** submitted to Bing Webmaster Tools (not just Google) — drives ChatGPT Search visibility because ChatGPT uses Bing.
- No critical content in PDFs or modals; put specs, prices, FAQs directly in HTML.

### 1.5 Measurement

There is still no universal dashboard. Workable 2026 stack:
- **Manual prompt testing** in ChatGPT, Perplexity, Gemini, Claude, Copilot with a versioned prompt list (document citations in a sheet, re-run monthly).
- **Google Search Console → Performance → Search Appearance → "AI Overview"** filter (where available) for impressions and clicks from AIO.
- **GA4 custom channel group** "Generative AI" — source filters for `chat.openai.com`, `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `claude.ai`, `copilot.microsoft.com`.
- **Server log analysis** for `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `ClaudeBot`, `Google-Extended` user agents (best signal for whether AI is actually crawling you).
- **Bing Webmaster Tools** (driving signal for ChatGPT).
- **Vendor tools**: Profound, Semrush AI Visibility, Ahrefs Brand Radar, OmniSEO, ZipTie for competitive AI citation tracking.

---

## LAYER 2 — AI SEO FOR REAL ESTATE WEBSITES

### 2.1 How real estate buyers actually use AI search

A [FlyDragon 2026 benchmark](https://www.newswire.com/news/91-of-real-estate-agents-are-invisible-to-ai-according-to-flydragon-s-2026) (12,400 AI responses, 8.2M queries, 192 metros) reports that **61.3% of buyer-side real-estate searches now begin in an AI engine** (not Google), and the share of buyers using ChatGPT/Perplexity/Gemini/Claude/AIO as their *primary* agent-research tool rose from 17% to 67% in 18 months. Zillow's share of agent-discovery traffic fell from 41.2% to 33.8% year-over-year. FlyDragon reports **91% of U.S. agents are effectively invisible in AI answers**. These are vendor numbers and should be treated as directional, but the qualitative direction is corroborated by HousingWire, Florida Realtors, and Inman reporting ([HousingWire](https://www.housingwire.com/articles/ai-powered-search-is-here-seven-tips-for-agents-to-get-found/); [Florida Realtors](https://www.floridarealtors.org/news-media/news-articles/2025/10/ai-rewriting-rules-real-estate-seo); [Inman](https://www.inman.com/2026/03/30/a-step-by-step-guide-for-using-ai-to-master-real-estate-marketing/)).

**Documented AI query patterns in real estate:**

- **Agent-discovery queries**: "best realtor in [city]," "top real estate agent for [neighborhood]," "who is the best condo agent in [market]," "best realtor for first-time buyers in [market]"
- **Building-specific queries**: "[building name] condos for sale," "is [building] a good investment," "HOA fees at [building name]"
- **Neighborhood queries**: "what buildings are in downtown [city]," "best downtown neighborhoods in [city]," "is [neighborhood] walkable"
- **Process queries**: "how to buy a condo in [city]," "what is the closing process in [state]," "Texas IABS form"
- **Market queries**: "is now a good time to buy in [city]," "[city] condo market 2026"

### 2.2 Which content types get cited most

Cintra's analysis of B2B and real-estate AI visibility finds that **IDX listing feeds have almost no AI citation value** — AI retrieves original analysis, not syndicated inventory ([Cintra](https://www.cintra.run/blog/ai-visibility-for-real-estate)). The content types that drive real-estate citations, roughly in order:

1. **Neighborhood guides** (deep, specific, updated) — the single highest-yield content type for local AI queries.
2. **Building/complex profile pages** (for condo specialists: one page per named tower, with amenities, HOA specifics, unit mix, school zones, walkability, sold-price history).
3. **Market reports** (monthly, with specific stats, compared YoY and MoM — AI engines are drawn to pages with fresh numeric data).
4. **Agent bio pages** with Person + RealEstateAgent schema, credentials, closed-deal counts, designations, press mentions, Wikidata/LinkedIn/GBP cross-links.
5. **FAQ pages** (schema-marked, one question per H2, 1–3 sentence answers).
6. **Buyer/seller process guides** keyed to the local market (e.g., "How to Buy a Condo in Downtown Austin").
7. **Video transcripts** (YouTube is heavily cited, especially by ChatGPT and Perplexity — transcripts let text retrievers find the content).

Neuhaus Realty Group in Austin publishes a case study of going from a blog backwater to 46 researched articles in two weeks using an AI-assisted workflow, and tracks the flywheel effect this creates on AI citations ([Neuhaus](https://neuhausre.com/ai-real-estate-content-strategy-published-46-articles/)). Imagine Social AI reports a real-estate client tracking **1,090 AI search queries citing his content in a single month** after rebuilding around voice + hyperlocal neighborhood content ([Imagine Social](https://www.imaginesocial.ai/post/real-estate-content-strategy)).

### 2.3 Schema types that matter for real estate

Layer these types; they are mutually reinforcing:

- **`RealEstateAgent`** on every agent-profile page ([Schema.org](https://schema.org/RealEstateAgent)). Nest `worksFor: RealEstateAgency`, `areaServed`, `knowsAbout` (array of specialties — e.g., "Downtown Austin Condos", "5th & West Condos", "Bridges on the Park", "Luxury High-Rise Living"), `sameAs` (array of social + licensed-registry profiles), `hasCredential`, `memberOf`.
- **`Person`** layered *on top of* RealEstateAgent on the bio page — this establishes Nicole as a distinct entity from her brokerage. Include `alumniOf`, `award`, `knowsAbout`, `sameAs` with LinkedIn, Zillow profile, Realtor.com profile, Christie's profile, @properties profile, HAR.com profile, Instagram, Wikidata (if/when created) ([Jeff Lenney](https://jefflenney.com/real-estate/schema-markup-guide/); [Realty AI](https://www.realty-ai.com/post/real-estate-schema-markup)).
- **`Organization` / `RealEstateAgency`** sitewide (footer or `<head>`) for @properties Lone Star / Christie's International Real Estate.
- **`LocalBusiness`** with NAP, hours, service area polygon, sameAs to Google Business Profile.
- **`Residence` / `Apartment` / `SingleFamilyResidence`** for building and listing pages (use `Apartment` for condo units), with nested `Offer` (price, availability), `GeoCoordinates`, `ImageObject` array, `amenityFeature`, `floorSize` (QuantitativeValue with unitCode "FTK"), `numberOfRooms`, `numberOfBathroomsTotal`.
- **`ApartmentComplex`** or **`Place`** for building-level pages (The Austonian, 5th & West, Bridges on the Park, The Independent, etc.) — describe the building as a stable entity so AI systems can disambiguate it.
- **`FAQPage`** with `Question`/`Answer` pairs on every neighborhood/building guide — this is the single highest-leverage schema for AI extractability.
- **`Article` / `BlogPosting`** on every market report / neighborhood guide, with `author: Person` (Nicole), `datePublished`, `dateModified`, `mainEntityOfPage`.
- **`BreadcrumbList`** sitewide.
- **`Review` / `AggregateRating`** — real client reviews embedded in HTML, marked up; only mark up reviews that are actually visible on the page.
- **`VideoObject`** for video content, with `transcript` as a string property if possible.
- **`WebSite` with SearchAction** on homepage for Sitelinks Search Box.

**Important**: Schema must match visible on-page content. Google now actively penalizes invisible/mismatched schema, and AI models cross-check structured data against rendered text ([eSEOspace](https://eseospace.com/blog/schema-markup-for-real-estate-websites/); [Rgsitebuilder](https://rgsitebuilder.com/how-to-generate-and-add-ai-schema-code-to-a-real-estate-website-step-by-step/)).

### 2.4 MLS / IDX implications for AI visibility

Pure IDX-fed listing pages (thin content, JS-rendered, duplicate across many agent sites, often behind user-agent gates) are largely absent from AI answers. Where IDX content *does* appear in AI answers, it's usually via Zillow, Realtor.com, Redfin, or Homes.com aggregator pages rather than agent sites ([Cintra](https://www.cintra.run/blog/ai-visibility-for-real-estate)). The implication for Nicole's build:
- **Do not rely on the IDX-fed unit pages for AI visibility.** They satisfy buyer UX and TREC IDX display requirements but won't be cited.
- **Own the layer above IDX**: curated building pages (5th & West, Bridges on the Park, The Austonian, etc.) with narrative, specs, market data, FAQ, and agent POV, linking *into* the IDX search filtered to that building.
- **Use server-side rendering or hybrid SSR** for any page you want cited; Perplexity's crawler in particular struggles with client-side JS.

### 2.5 The entity problem: how AI systems disambiguate individual agents

This is the single biggest structural problem for solo-agent AI visibility. Nicole James is not, today, a disambiguated entity in the Google Knowledge Graph, Wikidata, or Wikipedia — and LLMs need a canonical entity node to reliably cite "Nicole James" rather than one of dozens of same-named agents or adjacent entities.

Entity-establishment playbook, in priority order:
1. **Wikidata entry** — free to create, the structured backbone of Knowledge Graph. Create `Nicole James (real estate agent, Austin, Texas)` with properties: instance of (human), occupation (real estate agent), employer, educated at, area of work, official website, image, identifiers (LinkedIn, TREC license number, ABoR member ID). Link every other profile's `sameAs` back to the Wikidata Q-number.
2. **Google Business Profile** — verified, category "Real Estate Agent," complete NAP, service area (downtown Austin + specific zip codes 78701/78703/78704), posts weekly, 50+ reviews with neighborhood/building keywords baked in. GBP is a direct input into AIO and Copilot.
3. **Consistent NAP across 25+ citations**: Zillow, Realtor.com, Homes.com, Redfin, HAR.com, Trulia, Movoto, LinkedIn, Facebook, Instagram, YouTube, Crunchbase, ActiveRain, RateMyAgent, Yelp, BBB, local chamber, TREC license registry, ABoR member directory, Elite 25 Austin, Christie's directory, @properties directory, Downtown Austin Alliance member directory, DANA.
4. **Press mentions with named attribution** — Austin Business Journal, Austin American-Statesman, Austin Monthly, Curbed Austin, CultureMap, Towers.net, Inman, HousingWire, Bisnow. 20+ mentions/quarter is the benchmark cited by [Profound](https://www.tryprofound.com/resources/articles/generative-engine-optimization-geo-guide-2025).
5. **Author bios with E-E-A-T** on every article — headshot, credentials (GRI, CLHMS, CNE, Christie's Luxury Specialist), years licensed (since 2007), transaction count, specific expertise (Bridges on the Park — 90+ units sold, 5th & West resident), and `Person` schema linking to a dedicated `/about` page.
6. **Knowledge Panel trigger**: Wikidata + Wikipedia (even a stub with reliable sources) + consistent entity references across authoritative sites is the current playbook for triggering a Google Knowledge Panel. Most top Austin agents do *not* have one — this is a real differentiation opportunity.

### 2.6 Local SEO signals that feed AI visibility

Google Business Profile, NAP consistency, review volume and recency, and third-party aggregator strength remain the four local signals most reliably ingested into AIO and (indirectly, via Bing) ChatGPT Search ([Mile High Title Guy](https://www.milehightitleguy.com/post/how-denver-real-estate-agents-can-get-found-on-chatgpt-perplexity-and-google-ai-search); [AEO Engine](https://aeoengine.ai/industries/real-estate-seo)). Benchmarks:
- 50+ GBP reviews with average ≥4.9
- Reviews that *name specific neighborhoods, buildings, and outcomes* ("Nicole helped us secure a south-facing unit at 5th & West 8% below ask in a multi-offer situation") — generic reviews are low-value data points for AI.
- Review velocity (≥1/month cadence) matters more than total volume beyond 50.
- Zillow profile ≥4.9 with ≥25 reviews — Zillow is cited in AI answers more than any agent-site in most markets.
- Realtor.com RateMyAgent + Homes.com profiles completed.

### 2.7 Personal site vs. brokerage profile vs. aggregators

For AI answers to "best downtown Austin condo agent," expect the retriever to pull from, roughly in order: Zillow/Realtor.com/Homes.com agent pages, HAR.com, Elite 25 Austin, Austin Business Journal rankings, brokerage site, Reddit threads (r/Austin, r/RealEstate), YouTube, and *then* personal site. The personal site's role is to (a) be the canonical entity hub all other profiles link back to, (b) carry the long-form entity-rich content (neighborhood guides, building pages, market reports, FAQ), and (c) be the page that earns the *citation* when a retriever decides to cite rather than paraphrase. The aggregators win discovery volume; the personal site wins the citation and the click.

---

## LAYER 3 — TEXAS-SPECIFIC CONSIDERATIONS

### 3.1 Texas MLS environment and IDX crawlability

- **ABoR / ACTRIS / Unlock MLS** (Austin): rebranded July 2023 from ACTRIS to "Unlock MLS"; covers 18 Central Texas counties; has data-sharing agreements with HAR (Houston) and SABOR (San Antonio) so ABoR members can display those listings ([MLS Import](https://mlsimport.com/unlock-mls-the-complete-guide-for-austin-area-real-estate-professionals/)). As of June 1, 2025, MLS access no longer requires REALTOR® association membership — any TREC-licensed broker/agent can subscribe.
- **IDX feed options**: Bridge Interactive (RESO Web API, free to ABoR members), MLS Grid, Trestle. Bridge is the most modern and the recommended choice for programmatic access.
- **IDX compliance**: "MLS" term is restricted from use; IDX logo and disclaimer must appear on all listings; search/listing pages cannot be changed post-compliance review without ABoR approval ([UltimateIDX](https://www.ultimateidx.com/idx/abor-actris/)).

**AI crawlability implication**: Most IDX plugins render property data via JavaScript on the client. For AI visibility, insist on (a) **server-side rendering** of building pages and the landing SRP for any building/neighborhood you want cited, and (b) pre-rendering of a static "building landing page" *above* the dynamic IDX filter so the narrative and schema resolve to HTML on first load.

### 3.2 TREC disclosure requirements — impact on on-page structure

TREC's **Rule 531.20(b)** requires every Texas broker/agent to display a homepage link to the IABS form, labeled "Texas Real Estate Commission Information About Brokerage Services," in at least 10pt font (12pt if using the shorter label), in a readily noticeable place on the homepage ([TREC](https://www.trec.texas.gov/information-about-brokerage-services-form)). Senate Bill 1968 updated the IABS form effective April 1, 2025, to clarify that brokerage fees are negotiable, and eliminated subagency; effective January 1, 2026, a non-representation status and written agreement requirements are added ([License Classroom](https://licenseclassroom.com/new-iabs-form-required-by-trec/); [TREC](https://www.trec.texas.gov/article/trec-meeting-form-change-proposals-comment-broker-education-and-experience-requirements)).

Additional TREC / advertising rules that affect website structure:
- **Consumer Protection Notice** must also link from the homepage.
- All advertising must conspicuously display the broker's name (not just the agent's) — "Nicole James, @properties Lone Star Christie's International Real Estate" pattern.
- Rule 535.155 on rebates requires disclosures in any rebate advertising.
- The fair-housing discrimination rule prohibits indicating any preference by protected class in listing descriptions or marketing — relevant for AI-generated listing copy.

**AI SEO implication**: These disclosure links are mandatory but should be in the footer, labeled verbatim, and not obscured by modals. Put the actual IABS/Consumer Protection Notice PDFs on the domain (not just linked to TREC) and include them in the XML sitemap — this increases perceived legitimacy signals for AI crawlers. Use `Disclaimer` schema where appropriate for the licensing display.

### 3.3 Texas-specific search patterns and regulations

- Texas has no state income tax, so "no state income tax" is a common filter in buyer-intent queries — particularly for CA/NY/IL migrants. Build this into FAQ content.
- Property tax is high and hyper-local; tax-rate pages per zip / per building drive query intent ("5th & West property taxes," "Travis County property tax rate").
- Texas real estate licenses display on every ad must include the sponsoring broker's name (not just Nicole's).
- Homestead exemption, MUD/PID disclosure, and floodplain/flood-notice requirements (SB 2349, effective Sept 1, 2025) are recurring buyer-intent queries that map cleanly to FAQ/guide content.

### 3.4 Texas agent sites known for strong digital presence

(Full site-by-site detail in the Appendix.) Top-of-mind examples include Kumara Wilcoxon (Kuper Sotheby's, Austin), Eric Moreland Group (Moreland Properties, Austin), Austin Luxury Group / Gary & Michelle Dolch (Compass Austin), Spyglass Realty / Ryan Rodenbeck (Austin), Van Heuven Properties (Austin/San Antonio), Neuhaus Realty Group (Austin), Douglas Elliman Dallas agents, and Joyce Rey / Hilton & Hyland–type teams spilling over from Texas into broader Sunbelt luxury.

---

## LAYER 4 — AUSTIN-SPECIFIC MARKET, ENTITIES, AND AI LANDSCAPE

### 4.1 Austin condo market dynamics (relevant for content strategy)

- **Median closed condo price March 2026**: $399,000 (down 6.3% YoY); single-family at $582,500 ([Austin Real Estate Homes Blog](https://www.austinrealestatehomesblog.com/real-estate-price-reports/condo/03-2026/); [Neuhaus](https://neuhausre.com/austin-condo-market-2026-prices-hoa-fees-best-buildings/)).
- **Active condo listings**: 1,443 citywide (up 13.6% MoM), **226 active in downtown** with median list $676,500 ([Hot Austin Condos](https://www.hotaustincondos.com/market-statistics/)).
- **Months of supply**: ~8.8 citywide — a buyer's market, longest since 2010s.
- **Median days on market**: 73 citywide, 107 downtown.
- **HOA fees**: $400–$1,500+/month depending on building; The Independent and Seaholm at the top of the range.
- **Downtown inventory**: 4,429 condo units across downtown per the Downtown Austin Alliance 2025 State of Downtown report; ~15,330 downtown residents; multiple 2025–2027 deliveries (Residences at 6G, The Travis, Paseo, 700 River, ATX Tower, 415 Colorado, The Modern, Waterline 2026) ([ATXtoday](https://atxtoday.6amcity.com/city/state-of-downtown-2025); [Taco Street Locating](https://tacostreetlocating.com/downtown-austins-newest-high-rise-apartment-complexes-in-2026/); [Spyglass Realty](https://www.spyglassrealty.com/blog/upcoming-downtown-austin-condos.html)).

### 4.2 Austin-specific named entities AI systems care about

These are the entities Nicole's site must explicitly mention, schema-mark, and interlink to show up in relevant AI answers. (Each should get a dedicated, indexed, schema-marked page with a slug like `/downtown-austin-condos/[building-slug]/`.)

**Named condo towers (Downtown / Rainey / Market District):**
- 5th & West Residences (501 West Ave, 2015, 39 floors, 154 units) — Nicole's home building
- The Austonian (200 Congress Ave, 2010, 56 floors, 163 units) — currently 2nd tallest
- The Independent / "Jenga Tower" (301 West Ave, 58 floors, 370 units) — tallest residential
- Bridges on the Park — Nicole has sold 90+ units; dominant entity for her
- The Shore Condominiums (Rainey, 22 floors, 192 units)
- 360 Condominiums
- W Austin Residences
- Four Seasons Residences
- Milago (Lady Bird Lake, 13 floors, 240 units)
- Austin Proper Residences
- Seaholm Residences
- Natiivo Austin (Rainey, short-term-rental permitted)
- 70 Rainey
- 44 East Ave
- The Waterline (2026 completion, projected tallest in TX)
- 321 West
- Vesper ATX
- Barton Place
- Five Fifty Five
- Spring Condos
- Nokonah
- Plaza Lofts
- Brown Building
- Brazos Place / Brazos Lofts
- Austin City Lofts

**Named neighborhoods / districts:**
- Downtown (MLS area "DT")
- Rainey Street Historic District ([Wikipedia entity](https://en.wikipedia.org/wiki/Rainey_Street_Historic_District) — already exists, leverage this via sameAs)
- Market District
- Second Street District (2SD)
- Warehouse District
- Seaholm District
- Red River Cultural District
- East Austin / East 6th
- South Congress / SoCo (78704)
- Bouldin Creek
- Clarksville / Old West Austin
- Tarrytown
- Travis Heights
- Mueller (master-planned, 700-acre former airport)
- Westlake / West Lake Hills
- Hyde Park

**Named institutions / anchors** (adjacency improves entity density):
- Lady Bird Lake, Ann and Roy Butler Hike-and-Bike Trail
- Austin Convention Center, Moody Center, Frank Erwin Center
- Austin ISD — schools mapped to each building: Mathews Elementary, O. Henry Middle School, Austin High School (the default trio for downtown)
- Whole Foods flagship (525 N. Lamar), HEB, Trader Joe's
- Austin-Bergstrom airport
- ACL Festival, SXSW, Formula 1 US Grand Prix
- The University of Texas at Austin
- Downtown Austin Neighborhood Association (DANA) — Nicole is a member; sameAs opportunity
- Elite 25 Austin — high-authority membership directory
- Austin Business Journal, Austin Monthly, Austin American-Statesman, Towers.net, CultureMap Austin

### 4.3 How Austin real estate queries are currently answered by AI engines

Based on published citation-pattern analyses ([Cintra](https://www.cintra.run/blog/ai-visibility-for-real-estate); [Mile High Title Guy](https://www.milehightitleguy.com/post/how-denver-real-estate-agents-can-get-found-on-chatgpt-perplexity-and-google-ai-search); [FlyDragon](https://www.newswire.com/news/91-of-real-estate-agents-are-invisible-to-ai-according-to-flydragon-s-2026)), and the SERP/aggregator landscape for the specific Austin queries requested, the patterns by query are:

- **"best downtown Austin realtor"** — AIO and ChatGPT currently pull from Elite 25 Austin, Austin Business Journal rankings, Zillow top agent pages, Spyglass Realty's neighborhood content, Kumara Wilcoxon's site, and Reddit r/Austin threads. Perplexity tends to weight Reddit more heavily.
- **"who is the top condo agent in Austin"** — Sparse named-agent citations; AIO often returns building lists or brokerage-level results (Moreland, Kuper Sotheby's, Spyglass, Urbanspace). This is a **high-opportunity query** — no individual agent dominates it.
- **"best real estate agent for 5th and West Austin"** — Raymond Stoklosa & Rebecca Jacks (austinrealestatehomesblog.com, "5th and West Guide") currently dominate; they have a dedicated building page that is heavily cited. Spyglass Realty, Austin Towers, and Eric Moreland Group show up secondarily. Nicole has a structural advantage here (resident of 5th & West) that is not reflected in her AI footprint.
- **"Bridges on the Park Austin condos"** — Results skew to Zillow, aggregator listing pages, and Urbanspace/Austin Neighborhoods blog. Nicole's "90+ units sold at Bridges on the Park" is a defensible brand story with near-zero AI reflection today.
- **"downtown Austin condo specialist"** — Lesley Taylor (Towers Realty), Adrian Salas (ATX Homes), Urbanspace, Spyglass, and Dave / Van Heuven Properties tend to surface. These are the direct competitors to target for displacement.
- **"Austin luxury real estate agent"** — Kumara Wilcoxon dominates (ranked #1 agent worldwide at Sotheby's International Realty in 2024 per her site; $2.5B career sales); Gary & Michelle Dolch / Austin Luxury Group (Compass) and Eric Moreland Group split the remainder.
- **"buying a condo in downtown Austin"** — Long-form guides from Spyglass Realty, Austin Real Estate Homes Blog, Neuhaus, Austin Towers, and occasionally HousingWire/Inman win. This is a content-depth game Nicole can play directly.

> **Note**: I was not able to execute live AI-engine queries from this research environment; the above patterns are synthesized from published citation analyses, aggregator SERP data, and the specific Austin site landscape. The web-build team should run the exact prompts in ChatGPT, Perplexity, Gemini, Copilot, and Claude, and screenshot the answers before and 90 days after launch as a before/after visibility measurement.

### 4.4 Austin brokerage landscape — how their agents show up in AI

- **Compass Austin** — dominant via Austin Luxury Group (Gary & Michelle Dolch, #1 Team in Austin WSJ RealTrends 2023). Compass's national site has strong domain authority, aggressive neighborhood pages, and Compass Private Exclusives are actively differentiated as an AI-mentioned concept.
- **Kuper Sotheby's International Realty** — Kumara Wilcoxon is the most-cited individual Austin agent in AI answers by a wide margin. Her personal site (`kumarawilcoxon.com`) is well-structured with rich neighborhood pages, editorial content (RESIDE, Sotheby's global network), and extensive sameAs cross-linking into sothebysrealty.com, kuper, elite25austin, and press.
- **Moreland Properties / Eric Moreland Group** — $4.5B closed sales, Forbes Global Properties exclusive member; strong building pages including a Fifth & West page, strong press (Forbes features), clean Schema implementation.
- **@properties Lone Star / Christie's International Real Estate** (Nicole's brokerage) — Texas affiliate launched by Jerry Mooty Jr. (nephew of Jerry Jones); newer to market, weaker AI footprint than the incumbents; expanding into Fort Worth in 2025–2026. The brokerage site blog (`blog.atpropertiestx.com`) publishes event/lifestyle content but is not a heavy AI citation source.
- **Realty Austin** (now part of Compass) — historically strong neighborhood pages and local SEO; site remains a frequent citation source.
- **Douglas Elliman Austin** — newer entrant, weaker local footprint.
- **Spyglass Realty** — independent brokerage, Ryan Rodenbeck; reported a **117% organic traffic lift** and "1–2 → 5 → 15 → 25 qualified downtown Austin condo leads/week" after a systematic SEO/content program with Direction.com ([Direction](https://direction.com/results/spyglass-realty/)). Blog publishes 370+ articles under Rodenbeck's byline — one of the most-cited agent-site content engines in Austin ([Spyglass](https://www.spyglassrealty.com/blog/author/ryan-rodenbeck/)).
- **Urbanspace Realtors** — specialized in downtown/urban core since 2000; condo-first positioning.
- **Van Heuven Properties** — "Austin's first brokerage company to specialize in downtown Austin," strong authority signal.
- **Gottesman Residential Real Estate** — top luxury with deep market ties.

### 4.5 Nicole James — current entity footprint (baseline)

From the research, Nicole's current digital-entity footprint is:
- Brokerage profile at [atproperties.com/agents/29170/nicole-james](https://www.atproperties.com/agents/29170/nicole-james) — decent bio, credentials listed (University of Houston, GRI-equivalent credentials, Christie's International Real Estate Luxury Specialist 2020, ABoR/TAR/NAR member, DANA member, "Over 90 units sold at Bridges on The Park," 5th & West resident). Not highly schema-marked.
- Christie's global profile at [christiesrealestate.com/real-estate-agents/nicole-james/29170/](https://www.christiesrealestate.com/real-estate-agents/nicole-james/29170/).
- LinkedIn at [linkedin.com/in/livedowntownatx/](https://www.linkedin.com/in/livedowntownatx/) with the tagline "Condo Curator | Connecting You to Downtown Austin's Finest."
- Instagram at `@christiesrealestate.atx` (brokerage-shared, not personal).
- No personal domain yet, no Wikidata entry, no dedicated neighborhood/building content pages under her own URL.

**Strategic read**: Nicole has the raw brand material (resident of 5th & West, 90+ Bridges on the Park units, Christie's luxury credential, ATX Business Journal top-50 nominations 2011/2012/2014, DANA membership, Austin since 2007) that the top AI-cited agents in Austin have organized into strong entity hubs. None of it is currently structured, schema-marked, or published on an agent-owned domain she controls. This is the core gap the new build closes.

### 4.6 What's missing / deeper vs. the existing tech-SEO spec

The existing spec covers schema, meta, OG, sitemap, canonicals. The incremental AI-SEO additions needed are:

1. **Entity architecture** — a dedicated `/about` page as the canonical entity hub for "Nicole James (Austin real estate agent)," with Person + RealEstateAgent schema, sameAs array of ≥15 authoritative profiles, and a plan to submit a Wikidata entry.
2. **llms.txt** at root with curated map of ~10–15 highest-value pages (homepage, /about, each named building page, each neighborhood page, market reports archive, contact).
3. **robots.txt posture** explicitly allowing OAI-SearchBot, Perplexity-User, Claude-SearchBot, Google-Extended, Applebot-Extended, ChatGPT-User; verify Cloudflare "Block AI bots" is **off**.
4. **Content hub**:
   - One page per named building Nicole serves (start with 5th & West, Bridges on the Park, The Austonian, The Independent, The Shore, 360 Condos, Four Seasons Residences, W Austin, Natiivo, Seaholm, Austin Proper, Milago, The Modern, Waterline).
   - One page per downtown sub-neighborhood (Rainey, Market District, 2nd Street District, Warehouse, Seaholm, Red River).
   - Monthly downtown-condo market report (schema: Article + Dataset, with fresh numeric data).
   - FAQ hub with schema-marked Q/A (HOA fees, property tax, short-term rental rules, IABS process, buyer representation, closing costs, FHA approval status by building).
   - "How to buy a condo in downtown Austin" long-form guide.
   - Buyer/seller guide to each building Nicole has deep expertise in.
5. **Writing rules** operationalizing GEO findings: open every page with a 40–80-word BLUF; use question-style H2s; include inline stats with cited sources; use definition lists for jargon (IABS, IDX, HOA, MUD/PID, homestead); minimum 1 table or list per page; no pronoun-referenced passages.
6. **Video transcripts** for every video asset, published as HTML (not just YouTube-hosted), with VideoObject schema.
7. **Author-bio block** with E-E-A-T signals on every article (Nicole headshot, 2007 licensure, $volume or unit count, credentials, 90+ Bridges on the Park transactions, 5th & West resident disclosure, DANA member, Christie's Luxury Specialist 2020).
8. **Review embedding strategy** — Zillow, GBP, and first-party reviews embedded in HTML (not iframe), with Review schema and concrete outcome descriptions.
9. **Press/media mentions block** with Organization schema and `mentions` / `citation` properties, plus a `sameAs` back-link strategy from each press hit where possible.
10. **Bing Webmaster Tools** registration and sitemap submission — often overlooked, but the single biggest technical lever for ChatGPT Search visibility.
11. **Server-side rendering** or pre-rendering for every non-IDX page; hybrid SSR for IDX SRPs with a static building-level hero that resolves before hydration.
12. **Structured "entity card"** on the homepage: a small, schema-marked block listing Nicole's credentials, license number, brokerage, service area, and specialties — directly parseable by retrievers.
13. **Monthly AI-visibility audit cadence** — log prompts, screenshot citations, track month-over-month.

---

## APPENDIX — SAMPLE-SITE COLLECTION

Fifteen-to-twenty-five sample sites, organized by tier. For each: URL, market, SEO/AI-visibility observations, and specific lessons for the Nicole James build. Where it was not possible to verify a site's live AI-citation rate from this research environment, the row includes structural observations and citation patterns as reported in vendor analyses and aggregator search results. The build team should independently verify AI citations by running query prompts pre-launch.

### Tier 1 — Nationally recognized agents with strong AI/organic visibility

1. **Ryan Serhant / SERHANT.** — [serhant.com](https://serhant.com/), NYC + growing multi-state
   - Strong brand-entity mentions across press (Netflix's *Owning Manhattan*, Bravo, Inman, HousingWire). Content architecture: agent directory with bio pages, building/development spotlights, blog ([SEO guide blog](https://ryanserhant.com/blog/seo-real-estate-website/)).
   - Rich schema on agent directories (Organization + Person).
   - *Lesson*: Brand-search-volume approach — SERHANT invests in founder visibility across YouTube, Netflix, podcast, books. This drives unlinked brand mentions, which AI models weight heavily.

2. **The Agency / Mauricio Umansky** — [theagencyre.com](https://www.theagencyre.com/about-us)
   - "SEO-optimized" redesign launched with universal property search, expanded agent profile pages, redesigned blog ([The Agency Journal](https://blog.theagencyre.com/powering-your-search-for-real-estate-phase-i-of-the-agencys-new-website-is-live/)).
   - Strong domain authority; global network + Netflix *Buying Beverly Hills* drive brand search.
   - *Lesson*: Redesign explicitly positioned for "SEO-optimized" search — the blog and agent directory are the primary AI citation targets.

3. **The Umansky Team** — [umanskyteam.com](https://umanskyteam.com/)
   - Agent-directory pattern with dedicated bio pages per team member, cross-linked to The Agency.
   - *Lesson*: Team sites with rich individual Person entities outperform single-agent sites in AI because each bio becomes an extractable passage.

4. **Mauricio Umansky (agent page)** — [theagencyre.com/agent/mauricio-umansky](https://www.theagencyre.com/agent/mauricio-umansky)
   - Entity hub pattern inside The Agency umbrella; extensive press citations (Playboy Mansion, Walt Disney Estate, Michael Jordan home) create very high entity density per page.
   - *Lesson*: Nicole's `/about` page should name her landmark transactions explicitly ("90+ units sold at Bridges on the Park," building-by-building), mirroring this transaction-as-entity pattern.

5. **The Oppenheim Group** — via [startdesigns.com best-real-estate-agent-websites](https://www.startdesigns.com/blog/best-real-estate-agent-websites/) (featured)
   - Cinematic design; stronger on luxury brand than on AI citation specifically — noted here as a design counterpoint, not an AI exemplar.

### Tier 2 — Texas agent sites with strong AI/organic footprint

6. **Kumara Wilcoxon (Kuper Sotheby's)** — [kumarawilcoxon.com](https://kumarawilcoxon.com/)
   - The most-cited individual Austin agent in AI answers. $2.5B career; #1 Sotheby's agent worldwide 2024; Inman Golden i 2024.
   - Rich `/neighborhoods/*` content (including [/downtown-austin](https://kumarawilcoxon.com/neighborhoods/downtown-austin)), Press/RESIDE section pulling from Sotheby's global editorial authority, sameAs to sothebysrealty.com.
   - Dedicated about page with credentials, board memberships (DANA, Real Estate Council of Austin, West Austin Homeowners Association).
   - *Lesson*: This is the closest model to what Nicole's site should become. Replicate the neighborhood-page architecture and the sameAs cross-link pattern into Christie's global editorial authority (the @properties / Christie's parallel to Sotheby's RESIDE).

7. **Eric Moreland Group / Moreland Properties** — [ericmorelandgroup.com](https://ericmorelandgroup.com/)
   - $4.5B closed sales; Forbes Global Properties exclusive Austin member; dedicated [Fifth & West](https://ericmorelandgroup.com/fifth-and-west) building page.
   - Team directory with individual Person schema; strong endorsements/testimonials block with outcome-specific content.
   - Press integration (Forbes features).
   - *Lesson*: The Fifth & West page model is directly applicable — Nicole should own this entity page for herself.

8. **Austin Luxury Group / Gary & Michelle Dolch (Compass)** — [compass.com/agents/austin-luxury-group/](https://www.compass.com/agents/austin-luxury-group/)
   - #1 Team in Austin (WSJ RealTrends 2023); Compass domain authority.
   - Team bio highlights rankings, designations, Compass Founding Agents status.
   - *Lesson*: Press mentions as schema-marked citations drive entity density; Nicole's Austin Business Journal nominations (2011/2012/2014) should be featured prominently with dated citations.

9. **Spyglass Realty / Ryan Rodenbeck** — [spyglassrealty.com](https://www.spyglassrealty.com/)
   - 117% organic traffic lift in 12 months; downtown condo leads went 1–2/week → 25/week via systematic content ([Direction.com case study](https://direction.com/results/spyglass-realty/)).
   - **Downtown condo buildings page** ([spyglassrealty.com/downtown-austin-condo-buildings](https://www.spyglassrealty.com/downtown-austin-condo-buildings)) — building-by-building directory with profiles of Shore, Vesper, Independent, Milago, Austonian, Natiivo — a highly citable entity-hub page.
   - 370+ author-bylined blog posts under Ryan Rodenbeck; podcast (#RealtyHack); consistent press coverage (Austin Business Journal, American-Statesman, Inman).
   - *Lesson*: The single best Texas-specific playbook for Nicole. Replicate the building-directory hub, author-bylined blog cadence, and press page.

10. **Urbanspace Realtors** — [urbanspacerealtors.com](https://www.urbanspacerealtors.com/)
    - Downtown-focused since 2000; strong entity authority as "the downtown Austin real estate brand."
    - *Lesson*: Category-owner positioning works — Nicole should explicitly claim "Downtown Austin Condo Curator" (matches her LinkedIn headline) as a consistent entity descriptor across all profiles.

11. **Van Heuven Properties** — [vanheuvenproperties.com](https://vanheuvenproperties.com/)
    - "Austin's first brokerage company to specialize in downtown Austin" — strong precedence claim.
    - *Lesson*: Precedence and originality claims get quoted by LLMs; an explicit "first / longest / most" statement in Nicole's bio is worth including where defensible.

12. **Neuhaus Realty Group** — [neuhausre.com](https://neuhausre.com/)
    - Austin market analysis blog with [March 2026 condo report](https://neuhausre.com/austin-condo-market-2026-prices-hoa-fees-best-buildings/) and AI-content case study (46 articles in 2 weeks).
    - *Lesson*: Freshness signals — monthly market reports with explicit dated headlines ("March 2026 Austin Condo Price Report") win Perplexity citations.

13. **Austin Real Estate Homes Blog / Eleven Oaks Realty / Raymond Stoklosa & Rebecca Jacks** — [austinrealestatehomesblog.com](https://www.austinrealestatehomesblog.com/)
    - Dominates 5th & West search results with a dedicated [5th and West Condo Guide](https://www.austinrealestatehomesblog.com/downtown-austin-condos/5th-west/).
    - Publishes monthly condo price reports going back years (deep historical archive = strong topical authority signal).
    - *Lesson*: Building-level author pages ("Raymond and Rebecca are Downtown Austin Realtors specializing in 5th and West condos") are extremely AI-citable. Nicole must own this positioning for 5th & West given her resident status.

14. **Lesley Taylor Realty (Towers Realty)** — [lesleytaylorrealty.com](https://lesleytaylorrealty.com/)
    - Strong testimonial-with-outcome pattern ($10K below asking, sold in 2 weeks, etc.).
    - *Lesson*: Testimonial specificity is an AI-extraction gold mine — each outcome-specific quote is a passage a retriever can lift.

15. **Downtown Austin Condos (Audra Agen)** — [downtownaustincondos.com](https://downtownaustincondos.com/)
    - Narrow category domain with specialist positioning.
    - *Lesson*: Exact-match domain for a high-intent entity; not essential, but a reason to consider `downtownaustincondosbynicole.com` or similar as a secondary content domain.

16. **Austin Towers** — [austin.towers.net](https://austin.towers.net/condos/)
    - Deep, journalistically written per-building profiles (Fifth & West, Austonian, 360, etc.) and the Austin Condo Market Index.
    - *Lesson*: Towers.net is *the* most-cited downtown condo source in AI answers; Nicole's building pages should aim to be more authoritative and more current than Towers' pages — deeper unit-mix data, recent sold-price drills, floor-plan analyses.

17. **Spyglass: Fifth & West building page** — [spyglassrealty.com/fifth-and-west-austin.php](https://www.spyglassrealty.com/fifth-and-west-austin.php)
    - Model for a building page: overview, architect (GDA Architects + Michael Hsu), schools (Mathews Elem., O. Henry Middle, Austin High), amenity list, Walk Score, sold-data disclaimers.
    - *Lesson*: Include architect, interior designer, amenity specifics, school assignments, Walk Score, and ACTRIS disclaimer on every building page.

### Tier 3 — Austin agent sites in Nicole's peer/competitor niche

18. **ATX Homes / Adrian Salas** — [atxhomes.co/downtown-austin-realtor](https://www.atxhomes.co/downtown-austin-realtor)
    - Direct peer positioning ("Downtown Austin REALTOR specializing in high-rise condos"). Competes for the same "best downtown Austin realtor" query.

19. **Downtown Austin Condos for Sale / Perry Henderson** — [downtownaustincondosforsale.com](https://downtownaustincondosforsale.com/)
    - Category-domain play; weaker schema but strong keyword match for Google.

20. **Austin Home Seeker** — [austinhomeseeker.com/austonian-condos.php](https://www.austinhomeseeker.com/austonian-condos.php)
    - Building-page template with the "condominium complexes near X" internal linking pattern — boosts crawl depth and entity co-occurrence.

21. **Austin Condo Maps** — [austincondomaps.com/listing/5th-and-west/](https://www.austincondomaps.com/listing/5th-and-west/)
    - Interactive map + per-building content — demonstrates the "entity graph" approach where every building is a node and the site covers the full graph.

22. **Pauly Presley Realty** — [paulypresleyrealty.com](https://www.paulypresleyrealty.com/)
    - Neighborhood-page pattern; Downtown / East / Central dedicated pages.

23. **Hot Austin Condos** — [hotaustincondos.com](https://www.hotaustincondos.com/market-statistics/)
    - Market-statistics page that aggregates downtown/citywide trends — an AI-favored freshness+stats page pattern.

### Tier 4 — Real-estate-adjacent sites heavily cited for buyer queries

24. **Zillow Austin agents** — Example: aggregator agent pages are cited in the majority of "best agent in [city]" AI answers across all five major engines; Nicole's Zillow profile must be complete with ≥25 reviews (outcome-specific), recent sales, specialty tags. Zillow's share of agent discovery traffic has declined from 41% to 33% YoY per FlyDragon but remains the #1 external signal for AI.
25. **Realtor.com agent pages** — second-most-cited agent-directory source.
26. **Homes.com** — expanding presence in AI answers, especially in neighborhood pages (example: [Rainey Street Historic District guide](https://www.homes.com/local-guide/austin-tx/rainey-street-historic-district-neighborhood/) quotes named agents directly in body text). Pitching Homes.com's editorial team is a concrete citation-capture tactic.
27. **HAR.com** — High-Rise Finder feature and Austin listings are cited for building queries ([5th & West Residences](https://www.har.com/5th--and--west-residences-/highrise_1003)). Even though HAR is Houston-originated, it covers ABoR listings via the 2023 data-sharing agreement.
28. **Elite 25 Austin** ([elite25austin.com](https://elite25austin.com/kumara-wilcoxon)) — membership directory; high-authority Austin-specific entity registry. Confirm Nicole's member page is current, schema-marked if possible.
29. **Christie's International Real Estate global directory** — [christiesrealestate.com/real-estate-agents/nicole-james/29170/](https://www.christiesrealestate.com/real-estate-agents/nicole-james/29170/) — already exists; use as `sameAs` anchor.
30. **@properties Lone Star directory** — [atproperties.com/agents/29170/nicole-james](https://www.atproperties.com/agents/29170/nicole-james) — existing bio; improve schema and add press citations.
31. **Wikipedia Rainey Street Historic District** — [en.wikipedia.org/wiki/Rainey_Street_Historic_District](https://en.wikipedia.org/wiki/Rainey_Street_Historic_District) — target getting referenced by or linked from this entry; Wikipedia is an outsized LLM training signal.
32. **Downtown Austin Alliance State of Downtown reports** ([ATXtoday coverage](https://atxtoday.6amcity.com/city/state-of-downtown-2025)) — high-authority local data source to cite in every market report.

---

## BOTTOM LINE — SPEC ADDITIONS

The existing web-build spec's technical SEO coverage (schema, meta, OG, sitemap, canonical) is necessary but not sufficient for AI visibility. The additive AI-SEO layer Nicole's build needs is:

1. **Entity establishment**: `/about` as a canonical entity hub with Person + RealEstateAgent schema, exhaustive `sameAs`, and a Wikidata entry.
2. **Allow-list all AI search bots** in robots.txt and at the CDN layer; verify no accidental Cloudflare blocks.
3. **Implement llms.txt** as a curated map.
4. **Content hub**: one page per named building, one per sub-neighborhood, monthly market report, FAQ hub, how-to guides — all schema-marked, all server-side-rendered, all opened with a 40–80-word BLUF and written in GEO-extraction format.
5. **Server-side rendering / pre-rendering** for everything non-IDX.
6. **Bing Webmaster Tools** registration (drives ChatGPT Search).
7. **Press/media mentions block** with schema and back-links.
8. **Review strategy**: Zillow, GBP, first-party — all with outcome-specific review copy, embedded in HTML with Review schema.
9. **TREC compliance** baked in: IABS + Consumer Protection Notice links in footer at proper font size, verbatim label, updated for the April 1, 2025 and January 1, 2026 IABS revisions.
10. **Monthly AI-visibility audit cadence**: prompt library, citation screenshots, GA4 generative-AI channel, server-log monitoring of AI crawler activity.

The structural opportunity is clear: no Austin agent today owns the "Downtown Austin Condo Curator" entity in AI answers. Nicole has the credentials (90+ units at Bridges on the Park, 5th & West resident, Christie's Luxury Specialist since 2020, Austin Business Journal top-50 nominee) to claim it. The build's job is to turn those claims into structured, schema-marked, entity-linked, LLM-extractable content across roughly 30–50 high-priority pages in the first six months, and sustain it with a monthly content cadence thereafter. Based on the replicated GEO evidence (statistics +33.9%, expert quotes +32%, fluent writing +30%, authoritative citations +30.3%, multi-modal +156%, brand mentions r=0.334 — all cited above), the first material AI-visibility gains should surface within 90 days of launch, with durable citation share built over a 6–12 month horizon.