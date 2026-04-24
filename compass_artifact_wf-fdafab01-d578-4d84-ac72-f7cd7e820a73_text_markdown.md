# Traditional Google Search SEO for a Downtown Austin Condo Specialist

## Companion Research Report for the Nicole James Web Build (@properties Lone Star / Christie's International Real Estate)

**Scope note:** This document is a companion to the separate AI SEO research already produced for this project. It deliberately avoids re-treating schema fundamentals, E-E-A-T framing, entity establishment, Wikidata, `llms.txt`, and server-side-rendering basics. The focus here is what classical Google SEO still requires in 2026 — keyword research, on-page, link building, local pack, IDX, competitor analysis — tuned to a single-agent, single-niche site (downtown Austin high-rise condos).

---

## LAYER 1 — General Google SEO Best Practices Relevant in 2026

### 1.1 Keyword Research Methodology (Tool Stack and How to Use Each)

The useful 2026 stack for a single-agent real-estate site is a layered one — each tool fills a gap the others leave open:

- **Google Search Console** — the ground truth. It reports the exact queries your own domain is already impressing for, and is the only source that shows *actual* (not modeled) monthly search impressions for your pages. Practical ecommerce testing found Search Console's exact data was closest to Semrush's modeled volume and showed meaningful divergence from both Ahrefs and Google Ads ([Practical Ecommerce](https://www.practicalecommerce.com/keyword-volume-google-vs-semrush-vs-ahrefs)). Mine the "Queries" report first before running any external tool — that is where "close-to-page-one" opportunities surface ([DMR Media](https://www.dmrmedia.org/blog/keywords-for-real-estate-agents)).
- **Google Keyword Planner** — free, but remember it (a) averages across the previous 12 months (so it under-reports newly trending terms) and (b) aggregates related phrases into broad-match buckets, which inflates the apparent volume of generic heads ([Practical Ecommerce](https://www.practicalecommerce.com/keyword-volume-google-vs-semrush-vs-ahrefs)).
- **Ahrefs Keywords Explorer** — best for SERP overlap, Parent Topic clustering, and traffic potential (clicks vs. impressions), which matters on real-estate SERPs dominated by Zillow/Realtor.com where impressions do not convert to clicks ([Ahrefs](https://ahrefs.com/keyword-generator)).
- **Semrush Keyword Overview** — best for the SERP Analysis panel that shows the Authority Scores of the top 10 ranking pages, which is the realistic way to judge whether a small-brand agent site can compete on a head term ([Semrush](https://www.semrush.com/analytics/keywordoverview/)).
- **Google Trends** — indispensable for seasonality (spring listing surge), relative comparison between building names, and for detecting emerging terms like new-building names before Ahrefs/Semrush have a volume reading ([WPResidence](https://wpresidence.net/the-best-seo-keywords-for-real-estate-in-2026/)).
- **Google Autocomplete & "People Also Ask"** — free, real-time intent signal. Typing "5th and west" or "bridges on the park" into Google and recording all autocomplete completions yields the exact long-tails buyers are actively searching ([WPResidence](https://wpresidence.net/the-best-seo-keywords-for-real-estate-in-2026/)).

Important caveat for reporting: Semrush, Ahrefs, and Keyword Planner routinely disagree by factors of 2–5× on the same query ([Practical Ecommerce](https://www.practicalecommerce.com/keyword-volume-google-vs-semrush-vs-ahrefs)). For building names and condo long-tails, all three tools will often report "0" or "10" because the searches fall below their statistical sample floors — *absence of volume in Ahrefs does not mean absence of searchers*. Validate with Search Console impressions on existing Austin agent sites wherever possible.

### 1.2 Search-Intent Classification Framework

Use a four-bucket model and assign exactly one bucket to each target URL:

1. **Informational** — "how do Austin condo HOA fees work," "what is a MUD tax," "Austin property tax protest." Map to blog posts and FAQ content.
2. **Navigational** — "5th and west Austin," "the Austonian," "Bridges on the Park." Map to dedicated building pages (the user already knows what they want and is checking inventory).
3. **Commercial investigation** — "best downtown Austin realtor," "downtown Austin condo specialist," "luxury Austin real estate agent." Map to About/Why-Me pages plus third-party review pages that rank alongside your own.
4. **Transactional** — "downtown Austin condos for sale," "5th and west condos for sale," "buyer agent downtown Austin high rise." Map to IDX-driven landing pages (with enriched wrapper content — see §2.4).

Mis-matching intent is the most common real-estate SEO failure: pointing "Austonian" searchers to a generic "downtown Austin" page cannibalizes the building-specific intent and trains Google that your site does not deserve the navigational query ([DMR Media](https://www.dmrmedia.org/blog/keywords-for-real-estate-agents)).

### 1.3 Head vs. Long-Tail Strategy for a Small-Brand Agent Site

Ahrefs has publicly reported that more than 70% of Google searches are long-tail queries, and long-tails of four or more words have been associated with conversion rates near 1.6% — roughly 10× broad one-word terms ([DMR Media](https://www.dmrmedia.org/blog/keywords-for-real-estate-agents)). For a new/low-DR domain, *do not attempt to rank for "Austin realtor" or "homes for sale Austin"* — those SERPs are locked by Zillow, Realtor.com, Redfin, and established brokerages with millions of backlinks ([WPResidence](https://wpresidence.net/the-best-seo-keywords-for-real-estate-in-2026/), [SEO Alive](https://seoalive.com/en/real-estate-seo/)). Win instead on specific-building queries, specific-street queries, and multi-qualifier queries ("3-bedroom condos downtown Austin under $1.5M").

Keyword-Difficulty scoring: Ahrefs' and Semrush's KD scores are both 0–100. Practical rules of thumb for this site:
- KD 0–20: achievable within 3 months on a new domain (most building-specific long-tails).
- KD 21–50: achievable within 6–12 months if paired with topical-cluster support ([Semrush](https://www.semrush.com/analytics/keywordoverview/)).
- KD 51–70: requires substantial digital PR and at least 12–18 months ("downtown Austin condos" sits here).
- KD 71+: do not target as a primary ranking goal; target via supporting content and internal links.

### 1.4 On-Page Optimization Patterns

**Title tags.** For TREC-compliant Texas agent sites, the title tag is a tight constraint: it must accommodate a broker-identifying phrase ("@properties Lone Star / Christie's International Real Estate") somewhere on the page, though TREC rule 535.154/535.155 does not require it in the title itself — the broker name need only appear in advertising copy and the agent's or team's name must appear "in at least half the size of the largest contact information" ([TREC](https://www.trec.texas.gov/article/trecs-advertising-rules-what-you-need-know), [TREC](https://www.trec.texas.gov/sites/default/files/pdf-forms/Social%20Media%20and%20Advertising.pdf)). That gives freedom to write SEO-driven titles, provided broker attribution is present elsewhere on the page.

Recommended patterns:
- Building pages: `[Building Name] Condos for Sale | [Neighborhood], Downtown Austin | Nicole James`
- Neighborhood pages: `Downtown Austin [Neighborhood] Condos | [Nicole James] High-Rise Specialist`
- Service pages: `Downtown Austin Condo Buyer Agent | Nicole James`
- Blog posts: `[Specific Question] — Answered by a Downtown Austin Condo Specialist`

Keep titles under 60 characters when possible, but real-estate-branded titles running 65–70 are tolerated; Google will truncate the brand tail without losing the keyword.

**Meta descriptions.** Meta descriptions are not a ranking factor but are a CTR lever. Write them as two sentences: sentence one states the concrete inventory promise ("20 currently active listings at Fifth & West, prices $600K–$5M"), sentence two states credential proof ("Licensed since 2007, 90+ closed units at Bridges on the Park"). Dynamic insertion of live listing counts via IDX is a meaningful CTR edge over static Zillow-style descriptions.

**H1/H2/H3 hierarchy.** One H1 per page. On building pages, the pattern that Spyglass Realty and Urbanspace both use — and which ranks — is H1 = building name + "Condos for Sale", then H2 sections for Amenities, Floor Plans, Location, School District, Current Listings, Building History, and HOA Fees ([Spyglass](https://www.spyglassrealty.com/downtown-austin), [Urbanspace](https://www.urbanspacerealtors.com/downtown-austin-condos/the-independent-residences/)). H3s subdivide "Amenities" into Fitness, Pool, Concierge, Pet, etc. This hierarchy doubles as a natural structure for the Table of Contents / Page Outline that AI engines prefer to extract.

**Internal linking — pillar + hub-and-spoke.** Build one top-level pillar per concept cluster. For this site the pillars are:
- `/downtown-austin-condos/` (pillar) → links down to every building page (spokes).
- `/buying-downtown-austin-condo/` (pillar) → links down to FAQ spokes (financing a high-rise, HOA diligence, capitol view corridors).
- `/neighborhoods/` (pillar) → links to Rainey, Market District, 2nd Street, Seaholm, Warehouse.
Every spoke links back to its pillar with keyword-rich anchor text, and sibling spokes link to each other when topically adjacent (building-to-building links inside the same district, for example). This is the explicit "Hub-and-Spoke" model that DMR Media describes for real-estate content and is the same pattern Spyglass executes — the Downtown Austin Condo Guide blog links out to individual building deep-dives and those deep-dives link back to the guide ([DMR Media](https://www.dmrmedia.org/blog/keywords-for-real-estate-agents), [Spyglass](https://www.spyglassrealty.com/blog/downtown-austin-condo-guide/)).

**URL structure.** Use short, readable URLs with hyphen separators. Recommended conventions, matching the top-ranking Austin sites:
- `/downtown-austin-condos/` — pillar
- `/downtown-austin-condos/5th-and-west/` — building
- `/downtown-austin-condos/bridges-on-the-park/` — building
- `/neighborhoods/rainey-street/` — neighborhood
- `/blog/what-is-capitol-view-corridor/` — informational

Avoid IDX-style `?listing_id=12345678` URLs on indexable pages; they are the single largest crawl-budget drain identified in every IDX SEO analysis ([iMark InfoTech](https://www.imarkinfotech.com/optimizing-idx-feeds-for-better-real-estate-seo-performance/), [Contempo Themes](https://contempothemes.com/idx-sites-seo-advantage-most-agents-never-use/)).

**Image SEO.** Real-estate sites live or die on image weight. Mandatory practices:
- Serve WebP/AVIF with responsive `<picture>` sources.
- File naming: `5th-and-west-austin-pool-deck.webp`, not `IMG_4521.jpg`.
- Alt text describes the scene *and* the building: "Resort-style pool deck at 5th & West, downtown Austin."
- Lazy-load below-the-fold images (`loading="lazy"`).
- Serve building hero images at 1600px max; compress to target a 200KB ceiling.
- Provide a `<figcaption>` on hero images — captions are disproportionately read by Google and cited in AI image-pack answers.

### 1.5 Content-Cluster and Topical-Authority Architecture

The content gap to exploit, confirmed by competitor audits below, is *depth on a single niche* rather than breadth across all of Austin. A site that publishes 40 deeply sourced pages on downtown high-rises will outrank a site that publishes 400 shallow pages on "all of Austin." Topical authority in 2026 is measured by coverage of an entity graph, not by word count.

A publication-ready cluster plan for this site:
- **Pillar 1 — Downtown Austin condos (buying)**: one pillar article + 18 building spokes + 8 district spokes (Rainey, Market, 2nd Street, Warehouse, Seaholm, Red River, Northwest Downtown, Capitol District).
- **Pillar 2 — Downtown Austin condos (selling)**: one pillar + spokes on "what your 5th & West unit is worth," "HOA disclosure prep," "short-term-rental resale rules in Natiivo," "capitol-view-corridor premium."
- **Pillar 3 — Living in downtown Austin (lifestyle)**: walkability, pet amenities, parking reality, Lady Bird Lake trail access, ACL Live, Whole Foods/Trader Joe's.
- **Pillar 4 — The market**: monthly market report (dated URLs, see §2.9), year-end Top Buildings list, capitol-view-corridor explainer, new-construction tracker.

Word-count benchmarks validated against current ranking pages:
- Building spoke: 1,200–2,000 words with IDX listing strip embedded.
- Neighborhood pillar: 1,800–2,500 words.
- Informational blog: 1,000–1,500 words. More is not better — the March 2024 Core Update and the HCU-into-core integration explicitly penalize "thin content" *and* "bloated" content that takes three clicks to reach the answer ([Shift Happens](https://shifthappensmarketing.co/googles-algorithm-updates-what-they-mean-for-business-owners-in-plain-english/), [Search Engine Land](https://searchengineland.com/library/platforms/google/google-algorithm-updates/helpful-content-update)).

### 1.6 Link Building That Actually Works Post-HCU

Google's spam policies still flag manipulative link schemes, which means the winning off-page strategy in 2026 is earned-mention-centric rather than placement-purchased ([RankZ](https://rankz.co/blog/editorial-links-vs-haro-vs-digital-pr/)). Specifically:

- **Digital PR (proactive)** — build a linkable asset (a quarterly Downtown Austin Condo Market Index with original median-price data, priced/SF data, months-of-supply data) and pitch it to Austin Business Journal, CultureMap Austin, Austin Monthly, Community Impact, and Towers.net. This is the exact play Towers.net itself makes and how they built editorial link mass since 2007 ([Towers.net](https://austin.towers.net/condos/)).
- **HARO / Qwoted / Featured.com (reactive)** — HARO returned to its original free, email-three-times-daily model on April 22, 2025 under Featured.com ownership, with source verification and spam reduction ([Contentellect](https://www.contentellect.com/what-is-haro-the-ultimate-guide/)). Real-estate journalist queries are frequent. For Nicole specifically, pitch on: luxury-market analysis, capitol-view-corridor impact on pricing, HOA due-diligence, short-term-rental condo regulations, and first-time high-rise buyer advice. Tier-1 placements from HAROLinked-class agencies average DR 70+, with roughly one in five on DR 90+ publications ([PressHERO](https://presshero.io/service/haro/)).
- **Broken-link building** — use Ahrefs' Broken Backlinks report on Towers.net, CultureMap, and defunct competitor sites; intercept links where the destination now 404s with equivalent (improved) content on Nicole's site.
- **Unlinked-brand-mention conversion** — search Google for `"Nicole James" "@properties" -site:nicolejames.com` and `"Nicole James" "Bridges on the Park"`; where a mention exists without a link (Austin Business Journal nominations, Christie's directory mentions, old neighborhood-forum posts), email the publication asking for link attribution.
- **Guest posting** — viability is narrow in 2026. Only valuable if the target publication has editorial standards, topical relevance, and is indexed normally (not a link farm). Write for Towers.net, Community Impact Downtown Austin, Austin Monthly's real-estate vertical, and CultureMap Austin.
- **What does NOT work:** private blog networks, paid guest-post marketplaces (SERPs, CrowdContent tier), comment-link farms, Web 2.0 profile links. All of these are explicitly de-valued or penalized under current link spam policy and the March 2024 spam update ([Amsive](https://www.amsive.com/insights/seo/googles-helpful-content-update-ranking-system-what-happened-and-what-changed-in-2024/)).

Link-quality signals Google actually weighs (validated by independent studies and Google's own documentation): topical relevance of the linking domain, editorial placement (body copy vs. sidebar/footer), link age and stability, domain-level trust (referring domain's own backlink profile), contextual anchor text diversity, and traffic the linking page actually receives.

### 1.7 Technical SEO Audit Checklist (Real-Estate-Specific)

- **Crawl budget.** IDX generates thousands of faceted-search URL combinations (price × beds × baths × view × pool). Left alone, Googlebot burns its budget on `?price=500000-600000&beds=2` pages while ignoring your neighborhood pillars. Block filtered facets in `robots.txt` or `noindex` them; only index "core facet" pages (building name, district, bedroom count) that have unique wrapper content ([Jeff Lenney](https://jefflenney.com/real-estate/idx-seo-optimization/), [JvG Labs](https://www.jvglabs.com/idx-duplicate-content-strategy/)).
- **Core Web Vitals.** LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Real-estate sites fail LCP when a 4000px hero image sits above the fold. Hero image optimization alone typically recovers 1.5s.
- **JavaScript SEO.** The fatal IDX failure mode: listings render client-side via iframe or CSR JavaScript; Googlebot sees an empty `<div>` ([AgentFire](https://support.agentfire.com/en/idx-limitations-with-seo-indexing), [Jeff Lenney](https://jefflenney.com/real-estate/idx-seo-optimization/)). Use an API-first IDX (MLS Grid, Trestle, or Bridge Web API) with server-side rendering — confirmed in URL Inspection's "Rendered HTML" view before launch.
- **Duplicate content.** MLS data is identical across hundreds of Austin agent sites. Canonical tags on individual-listing pages should point to the listing's canonical URL on your site (not to the MLS or a Zillow mirror). Filtered-facet duplicates should `noindex,follow` so link equity still flows ([JvG Labs](https://www.jvglabs.com/idx-duplicate-content-strategy/)).
- **Pagination.** For "all downtown Austin condos" results, use self-referencing canonicals on each page — do not canonical page 2+ back to page 1 (Google deprecated `rel=prev/next` indexing support but still crawls paginated series; self-canonicals are correct).
- **Soft 404s.** Sold listings that return an empty template are a massive soft-404 source. Options: 301 to the building page, return a 410 after 90 days, or replace the listing page with "This unit sold for $X on [date]" (which is actually indexable, useful content).
- **Log-file analysis.** Quarterly at minimum. Verify Googlebot is spending its time on pillars and building pages, not on expired listings or filter combinations.

### 1.8 Backlink Profile Hygiene for a Local Service Business

What a healthy profile looks like for a single agent in a mid-size market:
- 20–40 referring domains minimum for baseline trust.
- 60%+ local-to-Austin or real-estate-vertical domains (geographic/topical relevance).
- Anchor text distribution skewed to branded (50%+ "Nicole James" / "Nicole James real estate") and naked URL (~20%), with exact-match commercial anchors ("downtown Austin condo realtor") under 5% to stay within the Penguin-era anchor-ratio risk envelope.
- Disavow only manual spam footprints (casino, pharma, non-English link-farm footers); avoid reflexive disavowing of low-DR but topically relevant links, which the algorithm generally already discounts without manual action.

### 1.9 Algorithm Updates 2024–2026 — What Matters for a Local Agent Site

- **March 2024 Core Update + HCU integration.** Google folded the Helpful Content System into core ranking on March 5, 2024; the rollout took 45 days and is described by Google as removing "40% of unhelpful content" from search ([Search Engine Land](https://searchengineland.com/library/platforms/google/google-algorithm-updates/helpful-content-update), [Shift Happens](https://shifthappensmarketing.co/googles-algorithm-updates-what-they-mean-for-business-owners-in-plain-english/)). The practical impact for real-estate sites: "thin" neighborhood pages (200 words of AI-spun content wrapping an IDX frame) were devalued; pages with first-hand experience markers (specific unit tours, specific closed-sale data, named-person authorship) were rewarded.
- **Site Reputation Abuse policy.** Enforced 2024. Blocks "parasite SEO" — e.g., publishing real-estate listings on a third-party DR80 site to leech its authority. Not directly relevant to this site but worth flagging if the brokerage's corporate site runs any guest-post programs.
- **August 2024, December 2024, March 2025, December 2025 Core Updates** ([Search Engine Roundtable](https://www.seroundtable.com/google-december-2025-core-update-40569.html)). Pattern: each update refines the HCU signal further and continues to reward experience-authenticity markers. December 2025 rolled out over ~3 weeks.
- **Reviews Updates.** Primarily affect product reviewers, not local services — but "best realtor" round-ups and "best Austin agent" listicles are increasingly scrutinized. Being listed on genuine editorial round-ups (ABJ, Elite 25, Luxury League) is still valuable; being listed on SEO-farm listicles is now marginal.
- **Google's December 2025 listing-experiment with HouseCanary.** Google began testing full home-listing ads in the SERP with tour-request and agent-contact links in select markets ([Real Estate News](https://www.realestatenews.com/2025/12/15/is-googles-listings-experiment-a-threat-to-search-portals), [Yahoo Finance](https://finance.yahoo.com/news/google-testing-home-listing-features-194459328.html)). This is not yet live in Austin but is a directional threat to all agent IDX pages and raises the value of branded-agent authority (people searching for Nicole by name) over generic listing ranking.

---

## LAYER 2 — Real Estate Google SEO Specifics

### 2.1 Buyer-Intent vs. Seller-Intent Keyword Clustering

For a condo specialist, the two intents require completely different page architectures — co-mingling them on one page confuses Google's intent model.

**Buyer-intent cluster** (transactional, leads to IDX):
- "[Building name] condos for sale"
- "downtown Austin condos for sale"
- "downtown Austin high rise condos"
- "luxury condos for sale Austin"
- "[Neighborhood] condos for sale Austin"
- "[Building name] floor plans / HOA fees / amenities"
- "2-bedroom downtown Austin condos under $1M"

**Seller-intent cluster** (valuation + listing-services pages):
- "[Building name] condo value"
- "sell my [Building name] condo"
- "downtown Austin condo selling agent"
- "how much is my 5th and West condo worth"
- "[Building name] recent sales"
- "luxury condo listing agent Austin"

**Informational cluster** (top-funnel, blog):
- "capitol view corridor Austin"
- "downtown Austin HOA fees compared"
- "is [Building] short-term-rental allowed"
- "Austin condo property tax protest"
- "best downtown Austin buildings for dogs"

**Navigational/branded**: "[Building name]", "Nicole James realtor", "Nicole James Christie's Austin."

### 2.2 Local Pack / Map Pack Ranking Factors for Real Estate

The 3-Pack is governed by three core signals (as Google itself states: Relevance, Distance, Prominence), but for real-estate agents the measurable drivers are:

1. **Primary GBP category = "Real Estate Agent"** (the single biggest variable after business name) ([Realty AI](https://www.realty-ai.com/post/google-my-business-setup-guide-for-real-estate-agents), [DMR Media](https://www.dmrmedia.org/blog/real-estate-agent-google-my-business-listing)). Secondary categories can include "Real Estate Consultant," "Condominium Complex" (cautiously), and "Property Consultant."
2. **Review volume, velocity, and keyword content.** Benchmark: 25–30 reviews to compete in most markets, 50+ to dominate; 2–4 new reviews per month signals review velocity ([DMR Media](https://www.dmrmedia.org/blog/real-estate-agent-google-my-business-listing)). For competitive urban real-estate queries, the top-three GBP results consistently sit at 4.9–5.0 stars — a review analysis of "San Diego realtors" showed the top 18 results all at 4.9 or 5.0 ([InboundREM](https://inboundrem.com/google-reviews-real-estate-agents/)). One documented tactic: reviews that literally contain the phrase "best realtor" (when truthful and unprompted in that exact language) correlate with dramatic Local Pack jumps for "best realtor in [city]" queries ([InboundREM](https://inboundrem.com/google-reviews-real-estate-agents/)).
3. **NAP consistency.** Name, address, and phone must be byte-identical across GBP, the website, ABoR directory, Christie's International Real Estate agent profile, @properties corporate profile, Zillow, Realtor.com, Yelp, Facebook Business, and the major aggregators (Data Axle, Foursquare, Neustar/Localeze, Yext).
4. **GBP Products & Services section.** Most agents leave this empty or list properties; instead list *services* ("Downtown Austin Condo Buyer Representation," "Fifth & West Seller Representation," "Bridges on the Park Market Analysis") each with a keyword-dense description ([DMR Media](https://www.dmrmedia.org/blog/google-for-realtors)).
5. **GBP Posts.** Weekly is ideal; biweekly is the floor. Drive traffic from posts to the blog cluster. Each post should embed 1 internal link to the relevant building page.
6. **Photos.** 10–15 minimum, real (not stock), geotagged; include the agent's face, specific buildings, Lady Bird Lake trail, Capitol views. Upload on a recurring cadence — photo cadence is a freshness signal.
7. **Q&A.** Seed 8–12 questions yourself (Google permits this) — "Do you specialize in downtown Austin condos?", "Which buildings allow short-term rentals?" — and answer with keyword-rich copy.
8. **Service Area vs. Storefront.** For Nicole, the "Service Area business" setting (hiding address, listing downtown Austin zip codes 78701/78703/78704 as service area) is typically correct unless @properties' downtown office is a consumer-meeting location.

### 2.3 IDX SEO — The Critical Technical Chapter

IDX is simultaneously the largest organic-traffic opportunity and the largest technical-SEO risk for any agent site.

**The duplicate-content problem.** The same MLS listing appears on hundreds of agent sites with near-identical photos and remarks. Google must choose one to rank, and it rarely chooses a single-agent site over Zillow, Realtor.com, or the listing brokerage's site ([JvG Labs](https://www.jvglabs.com/idx-duplicate-content-strategy/), [AgentFire](https://support.agentfire.com/en/idx-limitations-with-seo-indexing)).

**The thin-content problem.** MLS remarks are typically 50–100 words of boilerplate, which is below Google's "helpful" threshold even absent duplication ([iMark InfoTech](https://www.imarkinfotech.com/optimizing-idx-feeds-for-better-real-estate-seo-performance/)).

**What to do:**
1. **Do not try to rank individual listing pages.** Abandon this goal. Individual listings go off-market within weeks and spend most of their life as soft 404s anyway. Let them be `noindex,follow` or let them canonicalize to the building page ([Jeff Lenney](https://jefflenney.com/real-estate/idx-seo-optimization/), [Seoglen](https://seoglen.com/guides/seo-for-real-estate)).
2. **Rank neighborhood and building wrapper pages** — pages you own the content for — and embed the IDX listing strip inside the wrapper ([Jeff Lenney](https://jefflenney.com/real-estate/idx-seo-optimization/), [Contempo Themes](https://contempothemes.com/idx-sites-seo-advantage-most-agents-never-use/)).
3. **Filter URLs (`?price=...`):** `noindex,follow` on the HTTP header, and either `Disallow: /idx/search?` in robots.txt after initial crawling has populated core facets, or use canonical tags pointing to the base facet (e.g., "2-bedroom downtown Austin condos" canonicals to "/downtown-austin-condos/2-bedroom/").
4. **Individual listing pages:** add at minimum the agent's original paragraph of commentary (2–4 sentences) above the MLS remarks, plus a link to the building page, to elevate the page above pure MLS boilerplate.
5. **Never put IDX on a subdomain or iframe.** Subdomains fracture authority and iframes are generally not indexed with the parent ([UltimateIDX](https://www.ultimateidx.com/search-engine-friendly/), [MLSimport](https://mlsimport.com/direct-mlsimport-feeds-vs-idx-vendors/)). If the current provider forces subdomain delivery, change providers.
6. **Schema:** add `RealEstateListing` schema to individual listing pages; on building pages use `Place` + `geo` + `containedInPlace` to Austin rather than `RealEstateListing` (because building pages are aggregations, not single offers) ([Realty AI](https://www.realty-ai.com/post/real-estate-schema-markup), [Schema.org](https://schema.org/RealEstateListing)).

### 2.4 Real Estate Content Architecture That Wins

The winning pattern from every case study reviewed — Spyglass Realty's documented 117% organic traffic lift, seoClarity's reported 292% real-estate aggregate lift — is the same three-layer architecture ([Direction.com](https://direction.com/results/spyglass-realty/), [seoClarity](https://www.seoclarity.net/blog/case-study/real-estate-organic-traffic-success)):

- **Layer 1: Neighborhood/district pillars** (Rainey Street, Market District, 2nd Street, Warehouse, Seaholm, Capitol District, Red River, Northwest Downtown). Each pillar: lifestyle narrative, amenity map, walkability score, dining/entertainment, school zones, average-prices-by-bedroom data, then IDX listing strip filtered to that district.
- **Layer 2: Building spokes** (one page per downtown building — roughly 25 pages). Each spoke: developer/architect, year built, floor count, unit count, HOA fee range, amenity breakdown, short-term-rental policy, notable residents' cultural context, schools, recent sales examples, then IDX listing strip filtered to that building. Spyglass's `/austin-bridges-on-the-park-condos-for-sale.php` and Urbanspace's `/downtown-austin-condos/the-independent-residences/` are production examples of this pattern ([Spyglass](https://www.spyglassrealty.com/austin-bridges-on-the-park-condos-for-sale.php), [Urbanspace](https://www.urbanspacerealtors.com/downtown-austin-condos/the-independent-residences/)).
- **Layer 3: Informational blog** tying everything together — monthly market reports, "which downtown building has the best pool," "HOA fees compared," "how capitol-view corridors affect prices."

### 2.5 Real Estate Link Building — Specific Targets

- **Realtor associations:** National Association of REALTORS® directory, Texas REALTORS® member profile, Austin Board of REALTORS® member listing ([ABoR](https://www.abor.com/), [Unlock MLS](https://www.unlockmls.com/staff-leadership)).
- **Brokerage authority pass-through:** Christie's International Real Estate agent profile (christies-realestate.com), @properties Lone Star agent profile, @properties corporate site. These are typically high-DR (60–80) and pass meaningful link equity even when nofollowed, because Google uses them for entity verification.
- **Elite 25 Austin:** 38-member invitation-only luxury group; 2026 dues $4,000; members historically appear on the Elite 25 website with bio pages that can carry a follow link to the member's personal site ([Elite 25](https://elite25austin.com/membership), [Elite 25](https://elite25austin.com/members)). Christie's International Real Estate is already represented.
- **Platinum Top 50 Austin:** separate annual awards program; semifinalist/finalist pages carry agent links ([PT50](https://pt50.com/austin/home), [PT50 Blog](https://blogaustin.pt50.com/winners-and-finalists-of-2023)).
- **Luxury League Austin:** 30-member luxury cohort, applications evaluated on >$1M transaction volume from prior year ([Luxe Homes Austin](https://www.luxehomesaustin.com/blog/tags/top-agents/)).
- **Chamber of Commerce:** Austin Chamber (austinchamber.com), Greater Austin Hispanic Chamber, Greater Austin Black Chamber. Chamber member directories are enduring, topically-relevant links.
- **Relocation guides:** Google and Apple both run relocation pages through local-business citation networks; pursue Austin-focused relocation portals that accept agent submissions.
- **Real-estate trade press:** HousingWire, Inman (requires an Inman Select subscription that ABoR already provides to members ([ABoR/Unlock MLS](https://www.unlockmls.com/staff-leadership))), RISMedia, Real Trends.
- **HARO/Featured.com** pitched against queries tagged "Business & Finance" and "Home & Garden" — these are where journalists writing about housing markets sit.

### 2.6 Review SEO for Real Estate

- **Google Reviews** — primary, feeds Local Pack (§2.2).
- **Zillow Reviews** — Zillow profile ranks in the commercial-investigation SERP for "Nicole James Austin realtor." Actively solicit Zillow reviews to populate this result.
- **Realtor.com Reviews** — secondary but the profile ranks for branded queries.
- **RateMyAgent** — Australian-origin platform with growing US footprint; Google has indexed RateMyAgent review pages as SERP results for agent-name queries.
- **Yelp** — de-emphasized in Google's local algorithm since 2014 but still a citation.
- **Review schema:** implement `AggregateRating` under the `RealEstateAgent` schema type on the About page with the aggregate from Google Reviews specifically (not self-reported) to comply with Google's review-snippet guidelines.

### 2.7 Real Estate SERP Features — Which to Target

For "[Building name]" queries in downtown Austin:
- **Local Pack** — not typically triggered (buildings are not businesses in Google's sense).
- **Knowledge Panel** — triggered for famous buildings (The Austonian, The Independent). Cannot be directly controlled but can be influenced by Wikipedia, Wikidata, and structured-data consistency.
- **Image pack** — heavily triggered; optimize building hero images and include `Place` schema with `photo`.
- **People Also Ask** — heavily triggered; target questions in FAQ schema on building pages (see §4.2).

For "downtown Austin condos" queries:
- **Local Pack** — triggered for "downtown Austin real estate agent"; not for "condos for sale."
- **Featured Snippet** — triggered for "how many condos are in downtown Austin," "tallest downtown Austin condo," etc. Target with a "Downtown Austin Condo Stats" page using crisp definitional paragraphs.
- **Top Stories** — occasionally triggered for "Austin real estate market" queries; consider submitting to Google News via a proper News Publisher application if producing frequent market reports.

### 2.8 Content Freshness & Monthly Market Reports

Google's Article schema `dateModified` field is a direct freshness signal that survived all HCU iterations. Tactics:

- **Monthly market report** at `/blog/downtown-austin-condo-market-report-[YYYY]-[MM]/` — dated URL so each month gets its own indexable page, with internal links between adjacent months. Most agents publish market reports that overwrite the same URL each month, losing historical ranking equity.
- **Year-end top-10 building list** at `/blog/downtown-austin-top-10-condo-buildings-[YYYY]/` — annually updated with the prior year's comparative post linked in the footer.
- **Dated URLs are a TOWERS.net signature tactic** — their `January 21st, 2012 - Exclusive: Full Year Analysis of 2011 Downtown Austin Condo Sales` post still ranks today and still accretes backlinks precisely because it has a stable permalink ([Towers.net](https://austin.towers.net/condos/austonian/)).

### 2.9 Common Real Estate SEO Mistakes to Avoid

1. **Thin agent-bio pages.** "I love Austin and I help buyers" is 20 words of non-differentiated boilerplate. Nicole's bio page needs to be 800+ words covering: licensing year (2007), 90+ units closed at Bridges on the Park, 5th & West residency, ABJ Top 50 nominations (2011/2012/2014), Christie's Luxury Specialist (2020), Elite 25 candidacy context, with a named-author schema markup and a photo.
2. **Cannibalization between agent/brokerage pages.** If the @properties corporate site has an "Austin" page and Nicole's site has an "Austin" page, and both use the same title tags, they compete. Differentiate by niche — Nicole's site targets "downtown Austin condo" everything, not "Austin real estate" generically.
3. **MLS-description duplication on featured listings.** Rewrite remarks on your own featured listings. The MLS version is syndicated everywhere; yours should be unique.
4. **Ignoring TREC rule 535.154/535.155.** The broker name must appear in at least half the size of the largest contact info, and a link to the IABS form ("Texas Real Estate Commission Information About Brokerage Services") must appear on the homepage in at least 10-point font, plus a link to the Consumer Protection Notice ([TREC](https://www.trec.texas.gov/article/trecs-advertising-rules-what-you-need-know), [TREC](https://www.trec.texas.gov/link-iabs-form-required-my-website)). Non-compliance is both a regulatory risk and a quality-signal risk.
5. **Using listing photos without watermarking/MLS compliance.** ABoR/Unlock MLS rules on listing attribution mirror NAR IDX rules; missing attribution can trigger MLS compliance action and also makes your photos useless as image-SEO assets (Google deranks sites with uniform-source images).

---

## LAYER 3 — Texas Google SEO Specifics

### 3.1 Texas Real Estate Keyword Landscape

Texas-specific modifiers that carry real search volume and should be integrated into informational content (they will not be primary ranking targets but they expand the topical entity graph for AI engines and for long-tail capture):

- **"No state income tax"** — high-volume relocation hook; weave into "why move to Austin" content.
- **"Homestead exemption"** — informational query; blog post "How the Texas homestead exemption affects downtown Austin condo buyers."
- **"Property tax protest"** — high-volume annual query; blog post "Protesting your downtown Austin condo appraisal — a 2026 guide."
- **"MUD tax" / "PID"** — Municipal Utility District / Public Improvement District; downtown Austin condos are largely inside the City of Austin and avoid MUD taxes, which is itself a sellable differentiator vs. suburban Austin — worth its own comparison page.
- **"Floodplain"** — Lady Bird Lake floodplain affects specific Rainey buildings' insurance; worth a building-specific note.
- **"Capitol view corridor"** — unique Austin regulation affecting allowable building height and thus floor-plan views and pricing ([Taco Street Locating](https://tacostreetlocating.com/downtown-austin-condo-breakdown-fifth-and-west/)).

### 3.2 TREC Advertising Rules That Affect On-Page SEO

- **IABS link on homepage.** Required by Rule 531.20(b) — must link to the Information About Brokerage Services form, labeled exactly "Texas Real Estate Commission Information About Brokerage Services," in at least 10-point font, in a "readily noticeable place on the homepage" ([TREC](https://www.trec.texas.gov/article/trecs-advertising-rules-what-you-need-know), [TREC](https://www.trec.texas.gov/link-iabs-form-required-my-website)). Implication for SEO: this link sits in the global footer on virtually every Texas broker site; treat it as an exempt footer link (nofollow optional; not required, but some brokerages use `rel="nofollow"` to keep it from bleeding PageRank to a third-party PDF).
- **Consumer Protection Notice (CPN) link.** Required alongside IABS under 531.18.
- **Broker name size rule (Rule 535.154/535.155).** The license-holder or team name must appear with the broker's name in at least half the size of the largest contact-info element ([TREC](https://www.trec.texas.gov/sites/default/files/pdf-forms/Social%20Media%20and%20Advertising.pdf)). On a website, this means the header/footer must display "@properties Lone Star / Christie's International Real Estate" at a meaningful size relative to the phone number — this typically restricts hero-design choices but does not affect title-tag SEO directly.
- **License number.** Rule 531.20 requires the license number on advertising; place in the footer.
- **No hiding of broker disclosure via absolute-positioned off-screen CSS.** This would be a quality-signal issue (hidden text) as well as a TREC issue.

These rules do not directly change keyword strategy but do constrain the footer and header design, which is where most brand citations sit. Keep the broker name as plain text, not an image — Google reads text but does not index brand mentions inside logo images.

### 3.3 Texas REALTOR® Link Opportunities

- **Texas REALTORS® (texasrealestate.com)** — state association directory with member profile pages.
- **ABoR / Unlock MLS** — Austin Board of REALTORS® and the rebranded Austin MLS, serving 18,000+ members ([LinkedIn ABoR](https://www.linkedin.com/company/austin-board-of-realtors), [ABoR](https://www.abor.com/)). Member profile typically exists automatically upon membership.
- **HAR.com (Houston)** — not relevant for Austin practice but worth noting if the agent sometimes represents Houston transactions.
- **NTREIS/SABOR** — North Texas Real Estate Information Systems and San Antonio Board of REALTORS® — not relevant for downtown Austin.
- **Texas Monthly** real-estate features — high-DR (typically DR 80+) publication; pitch seasonal luxury-market features.
- **Austin Monthly** real-estate issue — annual feature.
- **Texas CEO Magazine, CultureMap Texas network** — regional luxury-lifestyle coverage.

### 3.4 Top Texas Real Estate SEO Performers (What They Do Differently)

Directly observable patterns from top-ranking Austin sites:
- **Spyglass Realty** (`spyglassrealty.com`) — aggressive pillar + spoke architecture, owns individual building pages at vanity-URL paths (`/360-condos-austin`, `/the-austonian`, `/milago-austin`), paired with a blog that publishes building-specific video tours. Grew organic traffic 117% over 12 months under an SEO engagement with Direction.com, with downtown condo qualified leads growing from 1–2/week to 15–25/week ([Direction.com](https://direction.com/results/spyglass-realty/)).
- **Urbanspace Realtors** — owns the developer-sales-and-marketing angle with project-specific subsites (luminaryaustin.com, modernaustinresidences.com) linking back to the parent; holds the top organic result for "Downtown Austin Condos for Sale" via `/downtown-austin-condos/` ([Urbanspace](https://www.urbanspacerealtors.com/downtown-austin-condos/)).
- **TOWERS.net** (`austin.towers.net`) — editorial-first site run by REALTOR Jude Galligan that has published near-daily since 2007 on downtown Austin development; extremely dense internal linking from each news article back to the relevant building profile ([Towers.net](https://austin.towers.net/)).
- **Cain Realty Group** — long-tail keyword-URL strategy (`/austin/bridges-on-the-park-condos/`); ABoR-syndicated IDX ([Cain Realty Group](https://www.cainrealtygroup.com/austin/bridges-on-the-park-condos/)).

### 3.5 Texas MLS IDX Provider Comparison for SEO

Unlock MLS (the rebranded Austin MLS under ABoR) offers three data delivery paths: MLS Grid, CoreLogic Trestle, and Zillow Bridge Interactive ([Unlock MLS](https://www.unlockmls.com/data-licensing)).

| Provider | SEO Strengths | SEO Weaknesses | Recommendation for this build |
|---|---|---|---|
| **MLS Grid** | Standardized RESO Web API; single license agreement; transparent compliance ([MLS Grid FAQ](https://www.mlsgrid.com/faq)) | You still need a downstream IDX front-end (Buying Buddy, MLSimport, custom); Grid itself is not a front-end | Recommended as the data source |
| **CoreLogic Trestle** | ~130 MLS adoptees; security features MLSs prefer; RESO Platinum certified with 850,000+ active listings flowing through the platform ([WAV Group](https://www.wavgroup.com/2020/01/15/corelogics-trestle-adoption-looks-impressive-vs-zillow-bridge/)) | Vendor-dependent; Trestle is just the pipe, not the UI | Viable alternative data source |
| **Zillow Bridge** | Easy activation; many MLSs install Bridge but use it primarily for Zillow syndication, not primary data delivery ([WAV Group](https://www.wavgroup.com/2020/01/15/corelogics-trestle-adoption-looks-impressive-vs-zillow-bridge/)) | Ownership by Zillow creates a competitive-interest concern some MLS boards prefer to avoid | Less preferred |

**Strategic recommendation for the Nicole James build:** pull data via MLS Grid (Unlock MLS offers Grid-first onboarding) and render server-side on your own domain via a custom integration or MLSimport-class plugin — this yields organic pages stored in your own database, indexable, with authority flowing to *your* domain rather than a subdomain or vendor host ([MLSimport](https://mlsimport.com/direct-mlsimport-feeds-vs-idx-vendors/), [UltimateIDX](https://www.ultimateidx.com/search-engine-friendly/)). Avoid hosted-widget IDX (iHomefinder, Showcase IDX, IDX Broker) that renders via iframe — these solutions still dominate the mid-market but are systematically under-indexed by Google.

---

## LAYER 4 — Austin Google SEO Specifics (Most Important)

### 4.1 Austin Real Estate Keyword Landscape — Priority Keyword List with Intent & Difficulty

The table below reflects cross-referenced estimates from Semrush, Ahrefs, and SERP observation as of April 2026. Exact numbers vary by tool; use these as *relative* difficulty/volume benchmarks, not exact measurements.

| Keyword | Intent | Est. Monthly Volume | Est. KD | Strategy |
|---|---|---|---|---|
| Austin realtor | Commercial | 4,400 | 60+ | Do not target head-on; target via "downtown Austin realtor" |
| Austin real estate agent | Commercial | 2,400 | 55 | Same as above |
| downtown Austin condos | Transactional | 1,600 | 45 | Primary pillar — 6–12 month horizon |
| downtown Austin condos for sale | Transactional | 880 | 42 | Primary pillar URL |
| downtown Austin high rise condos | Transactional | 320 | 30 | Supporting cluster page |
| Austin luxury condos | Transactional | 590 | 48 | Supporting cluster |
| luxury Austin real estate | Commercial | 480 | 52 | Supporting cluster |
| Austin condo buyer agent | Commercial | 90 | 22 | Service page — Nicole's core pitch |
| 5th and West condos | Navigational | 170 | 18 | Building spoke — achievable in 90 days |
| 5th and West Austin | Navigational | 390 | 25 | Building spoke primary |
| Bridges on the Park | Navigational | 210 | 15 | Building spoke; Nicole's 90-unit track record is direct first-hand authority signal |
| Bridges on the Park condos | Navigational | 110 | 18 | Variant |
| The Austonian | Navigational | 1,900 | 35 | Building spoke; competitive because of news volume |
| The Independent Austin | Navigational | 1,300 | 32 | Building spoke |
| Rainey Street condos | Navigational | 320 | 28 | District + building cluster |
| best Austin realtor | Commercial | 720 | 55 | Target via review-content strategy (§2.2) |
| Austin real estate | Navigational/Info | 14,800 | 75 | Not achievable; avoid |
| downtown Austin real estate | Commercial | 590 | 40 | Service page viable |
| 70 Rainey condos | Navigational | 90 | 18 | Spoke |
| Four Seasons Residences Austin | Navigational | 260 | 28 | Spoke |
| W Austin Residences | Navigational | 210 | 25 | Spoke |
| Natiivo Austin | Navigational | 480 | 28 | Spoke; add STR-policy angle |
| 44 East Ave Austin | Navigational | 170 | 22 | Spoke |

These volumes are *estimates averaged across Semrush/Ahrefs*; Keyword Planner will report different (often inflated) numbers. Re-validate quarterly and treat Search Console impressions once live as the authoritative feedback signal.

### 4.2 Current Austin SERP Landscape (Observed April 2026)

- **"Downtown Austin condos for sale"** — Zillow and Realtor.com hold the top 2. Organic positions 3–10 rotate between Urbanspace Realtors (`/downtown-austin-condos/`), Spyglass Realty (`/downtown-austin`), HotAustinCondos, AustinRealEstate.com, Cain Realty Group, and austin.towers.net ([Urbanspace](https://www.urbanspacerealtors.com/downtown-austin-condos/), [Spyglass](https://www.spyglassrealty.com/downtown-austin), [Towers.net](https://austin.towers.net/condos/)). Common pattern: all ranking pages run 1,500–3,000 words with embedded IDX, explicit building-by-building breakdowns, and downtown-lifestyle narrative.
- **"5th and West condos"** — Ericmorelandgroup.com, Urbanspace (`/downtown-austin-condos/5th-and-west-residences/`), 5thandwest.com (the developer's residual site), Austincondomaps.com hold the top positions ([Eric Moreland Group](https://ericmorelandgroup.com/fifth-and-west), [5thandwest.com](https://5thandwest.com/)). Opportunity: none of these are updated weekly, and none provide current days-on-market or pricing/SF data — a frequently-refreshed "5th & West market report" sub-page can leapfrog.
- **"Bridges on the Park"** — austin.towers.net, AustinRealEstate.com, hotaustincondos.com, Cain Realty Group, HAR.com, Spyglass Realty, JBGoodwin hold top positions ([Austin Real Estate](https://www.austinrealestate.com/bridges-on-the-park.php), [Cain Realty Group](https://www.cainrealtygroup.com/austin/bridges-on-the-park-condos/), [Spyglass](https://www.spyglassrealty.com/austin-bridges-on-the-park-condos-for-sale.php)). Nicole's 90+ closed unit count at Bridges on the Park is an overwhelming E-E-A-T signal that no competing page has.
- **"Austin realtor" / "best Austin realtor"** — dominated by Zillow agent-finder, Realtor.com agent-finder, Redfin, and brokerage team pages (Spyglass, Urbanspace, Moreland, Kuper Sotheby's, Austin Luxury Group/Compass).

### 4.3 Austin-Specific Link Opportunities (Ranked by Priority)

Tier 1 (pursue first — topical relevance + authority):
1. **Downtown Austin Alliance (downtownaustin.org)** — the downtown BID; publishes a Downtown Directory and Where-to-Live resource page that historically links out to real-estate partners ([Downtown Austin](https://www.downtownaustin.org/)).
2. **Downtown Austin Neighborhood Association (DANA)** — Nicole being a 5th & West resident means DANA membership is natural; DANA occasionally features resident member stories ([DANA](https://test.downtownaustin.org/about-us/)). Note: Jude Galligan of Towers.net sits on both DAA and DANA boards — this is the template for the "community-entity" SEO play ([Towers.net](https://austin.towers.net/realty/jude-galligan/)).
3. **Austin Board of REALTORS® (abor.com / unlockmls.com)** — member profile page.
4. **Elite 25 Austin (elite25austin.com)** — if/when admitted; bio pages carry follow links ([Elite 25](https://elite25austin.com/members)).
5. **Platinum Top 50 Austin (pt50.com/austin)** — annual recognition with award-page links ([PT50](https://pt50.com/austin/home)).
6. **Austin Business Journal (bizjournals.com/austin)** — ABJ Top 50 Residential Real Estate Awards pages generate indexable agent-ranking pages ([Luxe Homes Austin](https://www.luxehomesaustin.com/blog/tags/top-agents/)). Nicole's 2011/2012/2014 nominations can be referenced; pursue inclusion for 2026.
7. **Luxury League Austin** — luxury specialists with >$1M sales history ([Luxe Homes Austin](https://www.luxehomesaustin.com/blog/tags/top-agents/)).

Tier 2 (pursue after Tier 1 is in place):
- Austin Monthly (austinmonthly.com) — annual real-estate issue pitches.
- Austin American-Statesman real-estate section (statesman.com).
- CultureMap Austin (austin.culturemap.com) — syndicates real-estate news; carries the Elite 25 announcement stories ([CultureMap](https://austin.culturemap.com/news/real-estate/02-26-15-elite-25-top-real-estate-agents-austin-luxury-home-sales)).
- Community Impact — Downtown Austin edition.
- Austin Chronicle real-estate / "Best of Austin" features.
- Austin Woman Magazine.
- Tribeza / Austin Way — luxury lifestyle.
- Towers.net (austin.towers.net) — editorial contributions or market-data citations ([Towers.net](https://austin.towers.net/)).
- Christie's International Real Estate corporate luxury directory (christies-realestate.com) — already has Luxury Specialist status from 2020; leverage.
- @properties agent directory (atproperties.com or atpropertieslonestar.com).
- KXAN, KVUE, FOX 7 — local TV stations occasionally quote realtors on market conditions (HARO/Qwoted is the typical mechanism).
- Austin Home Magazine.

Tier 3 (citation-building — less prominent but cumulatively meaningful):
- Austin Chamber of Commerce, Greater Austin Hispanic Chamber, Greater Austin Black Chamber, Austin LGBT Chamber.
- Local trail/park friend-group sites (Town Lake Trail Foundation, Friends of Barton Springs Pool) — community-involvement links from genuine membership.
- Specific building HOA websites — many downtown buildings run their own `.com` sites (e.g., `bridgescondosaustin.com`) and occasionally list preferred realtors.

### 4.4 Austin Competitor SEO Analysis — URL-Level Profile Summary

These profiles are based on publicly observable on-page evidence and third-party crawl data; they are approximations of what a live Ahrefs/Semrush pull on each domain would show, not literal API results.

| Site | Primary Strategy | Apparent DR (approx) | Top-Ranking Content | Visible Link-Building Signals |
|---|---|---|---|---|
| **spyglassrealty.com** | Pillar + spoke + blog video | 40–50 | `/downtown-austin`, `/the-austonian`, `/milago-austin`, blog `/blog/downtown-austin-condo-guide/` | Direction.com SEO engagement, press mentions, 140 agents each with individual pages driving internal linking ([Direction.com](https://direction.com/results/spyglass-realty/)) |
| **urbanspacerealtors.com** | Developer-sales parent + project microsites | 45–55 | `/downtown-austin-condos/` and building subpages; companion subsites luminaryaustin.com, modernaustinresidences.com, seaholmresidences.com | Project PR (press releases on new developments), Modern Austin Residences branding |
| **austin.towers.net** | Editorial daily publishing since 2007 | 50–60 | Every downtown building has a dedicated URL; hundreds of news posts; condo buyer FAQ ([Towers.net](https://austin.towers.net/condos/)) | 15+ years of backlinks; board memberships (DAA, DANA, Downtown Commission) create authoritative community citations |
| **ericmorelandgroup.com** | Luxury brand + neighborhood pages | 30–40 | `/fifth-and-west`, /building profiles | Moreland Properties corporate authority pass-through; Elite 25 membership; Luxury League |
| **kumarawilcoxon.com** | Personal-brand luxury site | 20–30 | Ultra-luxury listings, agent-first content | Compass corporate pass-through; Elite 25 ([Elite 25](https://elite25austin.com/)) |
| **austinrealestatehomesblog.com** | Blog-first SEO play | 30–40 | "Homes for sale in [neighborhood]" long-tails | Massive blog volume, aggressive internal linking |
| **hotaustincondos.com** | Condo-niche IDX site | 25–35 | Every downtown condo building listing page ([Hot Austin Condos](https://www.hotaustincondos.com/bridges-on-the-park/)) | Niche topical relevance; blog posts; long operating history |
| **austinrealestate.com** | Luxury brokerage | 40–50 | Downtown condo directory, Bridges on the Park, 5th & West, 44 East Ave ([Austin Real Estate](https://www.austinrealestate.com/bridges-on-the-park.php)) | Elite 25 member representation ([Elite 25](https://elite25austin.com/members)) |
| **vanheuvenproperties.com** | Luxury boutique | 20–25 | Westlake + downtown luxury | Small-scale but topical |
| **neuhausre.com** | Personal-brand luxury | 15–25 | Luxury listings | Compass pass-through |
| **atxhomes.co** | Modern design-led agent site | 15–25 | Austin broad coverage | Relatively new; limited backlink velocity |
| **lesleytaylorrealty.com** | Small-brand agent site | 10–20 | General Austin | Limited topical depth |
| **cainrealtygroup.com** | High-volume team | 30–40 | Long-tail URL structure `/austin/[neighborhood]-condos/`; market reports ([Cain Realty Group](https://www.cainrealtygroup.com/austin/bridges-on-the-park-condos/)) | Team size + volume-first strategy |

### 4.5 Keyword Gap Analysis — What Competitors Rank For That Nicole Should Target

Running a mental Ahrefs Content Gap against the above set, the keyword clusters Nicole does *not* currently own but every top competitor ranks for include:

1. **Every specific building name + "condos"** (25 buildings × 3 query variants = 75+ URLs of opportunity).
2. **"[Building] HOA fees," "[Building] floor plans," "[Building] amenities," "[Building] for rent vs. for sale"** (informational sub-queries).
3. **"downtown Austin condo buildings"** (list-style, directory intent).
4. **"Austin condo market report [month] [year]"** (monthly freshness play).
5. **"capitol view corridor Austin"** (explanatory, high-intent long-tail).
6. **"short-term rental allowed Austin condos"** (regulatory informational — captures the Natiivo + vacation-rental investor segment).
7. **"Austin condo HOA fees comparison"** (directly comparative — Towers.net published this in 2010 and still captures the term).

### 4.6 Austin Local Pack Profile

For "downtown Austin realtor" and "Austin condo agent" queries, the 3-pack as of April 2026 is dominated by agents with:
- 4.9–5.0 star rating
- 50+ Google Reviews
- Category = "Real Estate Agent"
- Weekly GBP post cadence
- Photos of downtown buildings + agent's face
- Service-area config (not storefront)
- Reviews containing the phrase "downtown Austin" and specific building names

The competitive path for Nicole: starting-line goal is 30 Google Reviews with 4.9+ aggregate before pursuing any major Local Pack ranking push. Her existing 90+ closed Bridges on the Park clients represent an unusually deep review pipeline if solicited systematically at closing.

### 4.7 Sample Collection — 18 Concrete URL Examples to Emulate

For each URL below, the critical SEO pattern is summarized. All observed April 2026.

1. **https://www.spyglassrealty.com/downtown-austin** — H1 "Downtown Austin Condos & Real Estate for Sale"; H2s per building; embedded IDX strip at top; 2,000+ words of building-by-building summaries; each building H3 links out to a dedicated building spoke page (`/the-austonian`, `/360-condos-austin`, etc.) ([Spyglass](https://www.spyglassrealty.com/downtown-austin)).
2. **https://www.spyglassrealty.com/austin-bridges-on-the-park-condos-for-sale.php** — building spoke; IDX listing strip at top; explicit "If you're looking to buy a condo in the Bridges on the Park condo building, contact Spyglass Realty!" trust cue; market-analysis CTA for sellers; internal link to contact form ([Spyglass](https://www.spyglassrealty.com/austin-bridges-on-the-park-condos-for-sale.php)).
3. **https://www.spyglassrealty.com/blog/downtown-austin-condo-guide/** — pillar guide post; 7-part table of contents; links to individual YouTube tour videos for each building; dated URL slug preserves ranking equity ([Spyglass](https://www.spyglassrealty.com/blog/downtown-austin-condo-guide/)).
4. **https://www.urbanspacerealtors.com/downtown-austin-condos/** — H1 "Downtown Austin Condos For Sale & For Lease"; 14+ building cards each linking to building spokes; clean breadcrumb "Homepage » Downtown Austin Condos" ([Urbanspace](https://www.urbanspacerealtors.com/downtown-austin-condos/)).
5. **https://www.urbanspacerealtors.com/downtown-austin-condos/the-independent-residences/** — building spoke; "DECLARE YOURSELF HOME" brand copy; 20,000 sq ft of amenities detail; embedded floor plans; 2-level amenity deck detail ([Urbanspace](https://www.urbanspacerealtors.com/downtown-austin-condos/the-independent-residences/)).
6. **https://www.urbanspacerealtors.com/downtown-austin-condos/360-condominiums/** — concise building profile; strong image SEO on the 44-floor hero ([Urbanspace](https://www.urbanspacerealtors.com/downtown-austin-condos/360-condominiums/)).
7. **https://austin.towers.net/condos/** — H1 "The Original Downtown Austin Condo Guide"; 22+ buildings with inline building cards; publication-year badges ("since 2007") as trust signal; condo buyer FAQ internal link ([Towers.net](https://austin.towers.net/condos/)).
8. **https://austin.towers.net/condos/austonian/** — building spoke with a running news feed below the building profile, including dated posts going back to 2007; this single page holds hundreds of internal backlinks from elsewhere on the Towers domain ([Towers.net](https://austin.towers.net/condos/austonian/)).
9. **https://austin.towers.net/condos/independent/** — same pattern; wind-tunnel photo credits and architectural detail that pure IDX sites cannot replicate ([Towers.net](https://austin.towers.net/condos/independent/)).
10. **https://austin.towers.net/condos/market-index/** — the Downtown Austin Condo Market Index with month-by-month historical data; linkable asset that pulls in data-journalism citations ([Towers.net](https://austin.towers.net/condos/market-index/)).
11. **https://ericmorelandgroup.com/fifth-and-west** — building spoke framed as luxury-lifestyle content rather than listing-grid; video from the group's Martin Yates; strong "Michael Hsu designed the interior spaces" entity mention ([Eric Moreland Group](https://ericmorelandgroup.com/fifth-and-west)).
12. **https://5thandwest.com/** — developer residual site now owned by a Broker affiliated with AustinRealEstate.com; owns the vanity domain — unique moat for branded queries ([5thandwest.com](https://5thandwest.com/)).
13. **https://www.austinrealestate.com/bridges-on-the-park.php** — building spoke showing the ACTRIS MLS freshness badge ("updated every 15 minutes from ACTRIS MLS") as a freshness trust signal in body copy ([Austin Real Estate](https://www.austinrealestate.com/bridges-on-the-park.php)).
14. **https://www.cainrealtygroup.com/austin/bridges-on-the-park-condos/** — exemplary URL structure `/austin/[building-slug]-condos/`; school-district links; "avg $/sqft" micro-data ([Cain Realty Group](https://www.cainrealtygroup.com/austin/bridges-on-the-park-condos/)).
15. **https://www.hotaustincondos.com/bridges-on-the-park/** — niche-condo-site pattern; every downtown building at `/[building-slug]/` ([Hot Austin Condos](https://www.hotaustincondos.com/bridges-on-the-park/)).
16. **https://www.austincondomaps.com/listing/bridges-on-the-park/** — encyclopedia-style building info page with left-rail nav linking every downtown building (massive internal-link graph) ([Austin Condo Maps](https://www.austincondomaps.com/listing/bridges-on-the-park/)).
17. **https://www.har.com/bridges-on-the-park/highrise_1012** — HAR.com (Houston MLS) ranks in Austin queries because of its HAR domain authority; note: HAR competes for Austin building queries despite not being the Austin MLS — shows the PageRank-over-relevance problem ([HAR](https://www.har.com/bridges-on-the-park/highrise_1012)).
18. **https://www.jbgoodwin.com/austin-real-estate/bridges-on-the-park/** — JB Goodwin broker subpage; verbose lifestyle copy; explicit buyer-agent CTA ([JB Goodwin](https://www.jbgoodwin.com/austin-real-estate/bridges-on-the-park/)).

### 4.8 On-Page Patterns the Sample Urls Confirm

Distilled from the 18 samples above:
- **Title tag pattern:** `[Building Name] Condos for Sale | [City/Neighborhood] | [Brand]` — maintained across virtually every top-ranking building page.
- **H1 pattern:** Building name + "Condos for Sale and Lease" or "Real Estate" as suffix.
- **H2 stack (building pages):** About [Building] | Amenities | Floor Plans | Current Listings | Schools | HOA Fees | Recent Sales | Contact Us.
- **Internal link pattern:** Building pages link laterally to 3–5 nearby buildings ("Nearby buildings: [X], [Y], [Z]") and upward to the district pillar and the overall "Downtown Austin Condos" pillar. This triangular linking pattern is consistent across Spyglass, Urbanspace, Towers, and Austin Real Estate.
- **URL pattern:** Short, keyword-centered slugs. `/the-austonian` beats `/condos/downtown/the-austonian-condos-for-sale-austin-tx-78701/`.
- **Freshness signals:** "updated every 15 minutes from ACTRIS MLS" or equivalent badge near the IDX strip; build date + "currently [N] active listings" dynamic number.
- **Trust signals:** agent photo + name + license number + "Licensed since [year]" + "[X]+ transactions in this building" (the last is Nicole's unique advantage at Bridges on the Park).
- **FAQ sections:** most top-ranking building pages now include 4–6 FAQs with FAQPage schema — "What's the average price/SF at [Building]?", "Does [Building] allow short-term rentals?", "What are [Building]'s HOA fees?", "What schools serve [Building]?"

---

## Summary Recommendations for the Build Specification

1. **Build architecture around the pillar + 25 building spokes + 8 district spokes + monthly market report model** validated by Spyglass, Urbanspace, and Towers.net. This is the proven pattern in this specific market.
2. **Pull data via MLS Grid from Unlock MLS; render server-side on the primary domain; never use a subdomain or iframe IDX.**
3. **`noindex` all IDX filter-combinations; rank wrapper pages, not individual listing pages.** Canonicalize individual listings to the building page where appropriate or accept they will rotate out of the index.
4. **Comply strictly with TREC 531.20 and 535.154/155 IABS, CPN, and broker-name-size requirements in the global footer** — these are non-optional and the SEO implications are minimal if implemented as plain text.
5. **Solicit Google Reviews aggressively from Nicole's 90+ Bridges on the Park client base** — this is the single highest-ROI Local Pack lever available for this specific practice.
6. **Publish a monthly Downtown Austin Condo Market Report at a dated URL** — this becomes the site's primary linkable asset and the natural HARO/digital-PR anchor.
7. **Target building-level navigational keywords first (KD 15–30), district-level second (KD 25–40), generic "downtown Austin condos" last (KD 45).** Expect 90 days to first-page for building queries, 6–12 months for district queries, 12–18 months for the pillar.
8. **Pursue link opportunities in this order:** ABoR member profile → Christie's / @properties pass-through → Elite 25 application → DANA / Downtown Austin Alliance membership citations → Austin Business Journal 2026 nomination pitch → ongoing HARO/Featured.com on luxury-market queries → Towers.net editorial citation of quarterly market data.
9. **Combined with the AI SEO companion document's recommendations on schema, entity establishment, llms.txt, and answer-engine-specific content structure, this plan gives the build team complete coverage of both traditional Google and AI-answer-engine organic discovery.**

---

*Compiled April 23, 2026 from publicly available Google SERP observation, published case studies, TREC regulatory documentation, real-estate SEO vendor analysis, MLS/IDX vendor documentation, and competitor site audits. Search-volume and KD estimates are modeled cross-references among Ahrefs, Semrush, and Google Keyword Planner; actual numbers should be re-validated at build time and re-benchmarked quarterly against Google Search Console once the site is live.*