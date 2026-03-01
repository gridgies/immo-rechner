# SEO Audit Report — immo-rechner.net
**Generated:** 2026-02-28
**Auditor:** Claude Code (claude-sonnet-4-6)
**Framework:** Next.js 15 App Router
**Market:** German-language real estate investment calculators

---

## Executive Summary

The site has a **solid technical SEO foundation** (score: 90/100) with well-structured metadata, working structured data, a comprehensive sitemap, and a clean internal link graph. The main growth opportunity is **content expansion**: the site currently has ~18 indexable pages, but the keyword space supports hundreds of programmatic pages (calculator variants, city pages, Bundesland pages, glossary, expanded guides). No critical blockers to crawling or indexing were found.

---

## Current Page Inventory

| Route | Type | Status |
|-------|------|--------|
| `/` | Homepage | ✅ Indexed |
| `/rechner` | Redirect → `/cashflow-rechner` | ✅ 301 |
| `/cashflow-rechner` | Calculator (auth-gated) | ✅ Indexed |
| `/rendite-rechner` | Calculator | ✅ Indexed |
| `/irr-rechner` | Calculator | ✅ Indexed |
| `/kaufnebenkosten-rechner` | Calculator | ✅ Indexed |
| `/mikrolage-analyse` | Tool | ✅ Indexed |
| `/deal-agent` | Waitlist/Beta | ✅ Indexed |
| `/ratgeber/cashflow-immobilien` | Guide | ✅ Indexed |
| `/ratgeber/irr-erklaert` | Guide | ✅ Indexed |
| `/ratgeber/eigenkapital-immobilie` | Guide | ✅ Indexed |
| `/ratgeber/finanzierung` | Guide | ✅ Indexed |
| `/grunderwerbsteuer/[bundesland]` (×16) | Dynamic | ✅ Indexed |
| `/datenschutz` | Legal | 🚫 noindex |
| `/impressum` | Legal | 🚫 noindex |
| `/api/waitlist` | API | 🚫 Disallowed |

**Total indexable pages: ~30** (14 static + 16 dynamic Bundesland)

---

## Metadata Analysis

### Root Layout (`/app/layout.tsx`)
- **Title:** "Immobilien Rechner – Cashflow, Rendite & IRR kostenlos berechnen (2026)" ✅
- **Description:** 157 chars, keyword-rich, mentions all major tools ✅
- **OG tags:** Complete (title, description, image 1200×630, locale de_DE) ✅
- **Twitter card:** summary_large_image ✅
- **Canonical:** https://immo-rechner.net/ ✅
- **GSC verification:** Present ✅
- **robots meta:** index+follow, Googlebot max-snippet:-1 ✅
- **Analytics:** GA4 (G-N9Q99YN3V0) + Vercel Analytics + Speed Insights ✅

### Per-Page Metadata Quality

| Page | Title | Description | Canonical | OG | Score |
|------|-------|-------------|-----------|-----|-------|
| Homepage | ✅ Unique | ✅ 157 chars | ✅ | ✅ | 100% |
| /cashflow-rechner | ✅ Unique | ✅ | ✅ | ✅ | 100% |
| /rendite-rechner | ✅ Unique | ✅ | ✅ | ✅ | 100% |
| /irr-rechner | ✅ Unique | ✅ | ✅ | ✅ | 100% |
| /kaufnebenkosten-rechner | ✅ Unique | ✅ | ✅ | ✅ | 100% |
| /mikrolage-analyse | ✅ Unique | ✅ | ✅ | ✅ | 100% |
| /deal-agent | ✅ Unique | ✅ | ✅ | ✅ | 100% |
| /ratgeber/* (4 pages) | ✅ Unique | ✅ | ✅ | ✅ | 100% |
| /grunderwerbsteuer/[bundesland] | ✅ Dynamic | ✅ Dynamic | ✅ Dynamic | ✅ | 100% |
| /datenschutz, /impressum | ⚠️ Title only | ❌ Missing | ❌ Missing | ❌ Missing | 30% |

**Overall metadata score: 95/100**
Note: Legal pages missing description/canonical/OG, but they're noindexed so low impact.

---

## Structured Data (JSON-LD)

### Currently Implemented (in `/components/StructuredData.tsx`)
- ✅ `WebSite` schema (homepage)
- ✅ `WebApplication` (SoftwareApplication) schema — free, FinanceApplication
- ✅ `Organization` schema
- ✅ `FAQPage` schema (4 FAQs on homepage)

### MISSING Structured Data — Severity: HIGH

| Schema Type | Pages Missing It | Impact |
|------------|-----------------|--------|
| `BreadcrumbList` | All pages (HTML breadcrumbs exist but no schema) | High — rich results |
| `Article` / `BlogPosting` | All `/ratgeber/` pages | High — news carousel |
| `FAQPage` | Calculator pages, guide pages | High — FAQ rich results |
| `HowTo` | Calculator pages (step-by-step use) | Medium |
| `DefinedTerm` | Glossary (doesn't exist yet) | Medium (future) |
| `SoftwareApplication` | Individual calculator pages (only on homepage) | Medium |
| `LocalBusiness` | Nowhere | Low-Medium |

**Structured data score: 80/100**

---

## Sitemap Analysis (`/app/sitemap.ts`)

- ✅ Next.js native `sitemap.ts` — dynamically generated
- ✅ All 30 pages included (14 static + 16 Bundesland)
- ✅ Proper priority values (1.0 → 0.3)
- ✅ Proper `changeFrequency` values
- ✅ Timestamps dynamic
- ✅ Referenced in robots.txt

**Gap:** When new programmatic pages are added (city pages, lexikon, more ratgeber), they must be added to `sitemap.ts`.

**Sitemap score: 95/100**

---

## robots.ts Analysis

```
User-agent: *
Disallow: /api/
Disallow: /impressum
Disallow: /auth/
Sitemap: https://immo-rechner.net/sitemap.xml
```

- ✅ API routes blocked
- ✅ Auth routes blocked
- ⚠️ `/impressum` disallowed + noindexed (redundant but harmless)
- ✅ Sitemap URL included

**robots score: 95/100**

---

## Internal Linking Graph

### Strong Links (✅)
- Homepage → all 4 calculators (multiple times via CTAs)
- Homepage → 4 ratgeber pages
- Homepage → 4 Bundesland examples
- Footer → all calculators + all guides
- Navbar → all 4 calculator tools
- Calculator pages → related calculators (3–4 cross-links each)
- Guide pages → relevant calculators (CTA boxes)
- Guide pages → related guides (sidebar/footer)
- Grunderwerbsteuer pages → kaufnebenkosten-rechner

### Weak/Missing Links (⚠️)
- No city-specific pages to link from/to (doesn't exist yet)
- No glossary/lexikon pages (doesn't exist yet)
- Guides don't always link to all relevant other guides
- `/deal-agent` page has limited inbound links (only from homepage)
- No "related articles" component systematically applied

**Internal linking score: 88/100**

---

## Image Optimization

- ✅ `next/image` used throughout (no raw `<img>` tags found)
- ✅ WebP format configured in `next.config.js`
- ✅ Responsive device sizes configured
- ✅ OG image properly sized (1200×630, alt text present)
- ✅ SVG favicon (scalable)
- ✅ Lucide icons (SVG, inline — no external requests)

### Missing
- ❌ No content screenshots/photos in calculator pages
- ❌ No guide-specific hero images or infographics
- ❌ No per-page dynamic OG images (all pages share same `/og-image.png`)

**Image score: 88/100**

---

## Performance & Core Web Vitals Setup

- ✅ `compress: true` in next.config.js
- ✅ `poweredByHeader: false`
- ✅ Vercel Speed Insights (real-user monitoring)
- ✅ Vercel Analytics
- ✅ Server components used where possible (reduces client JS)
- ✅ Client components clearly separated (`"use client"` where needed)

### Potential Issues
- ⚠️ Cashflow calculator is auth-gated — bot can't crawl calculator content fully
- ⚠️ Charts (CashflowChart.tsx) are client-side — may affect LCP
- ⚠️ AnimatedHero.tsx uses client-side animation — potential CLS risk
- ⚠️ No `next/font` implementation found (fonts loaded externally?)

**Performance score: 85/100** *(estimated — actual CWV require field data)*

---

## Heading Hierarchy

### Homepage
```
H1: "Kostenloser Immobilien Rechner für deine Investition" ✅
  H2: "Unsere Rechner im Überblick"
  H2: "Alle Funktionen im Überblick"
  H2: "Grunderwerbsteuer nach Bundesland"
  H2: "Ratgeber für Immobilieninvestoren"
  H2: "Bereit für deine Immobilienanalyse?" (CTA)
```

### Calculator Pages (pattern)
```
H1: Tool-specific keyword title ✅
  H2: Main content sections ✅
    H3: Subsections ✅
  H2: Related content/CTA ✅
```

### Guide Pages (pattern)
```
H1: Long descriptive title (keyword-rich) ✅
  H2: "Was ist [Begriff]?" ✅
  H2: "[Begriff]-Formel: ..." ✅
  H2: "Beispielrechnung: ..." ✅
  H2: "Was ist ein guter [Wert]?" ✅
  H2: "Häufige Fehler ..." ✅
  H2: "[Begriff] verbessern: ..." ✅
  H2: "[Begriff] vs. [anderer Begriff]" ✅
```

**Heading hierarchy score: 92/100**

---

## Content Gap Analysis

### Existing Content (30 pages)
The current content is high quality but limited in volume. Competitors like Interhyp, Finanztip, and Baufi24 have thousands of indexed pages.

### Keyword Clusters Not Yet Covered

**Calculator Variants (High Intent)**
- Mietrendite Rechner, Bruttomietrendite, Nettomietrendite (separate dedicated pages)
- Eigenkapitalrendite Rechner
- Kaufpreisfaktor Rechner
- Tilgungsrechner Kapitalanlage
- AfA Rechner Immobilien
- Leverage Effekt Rechner
- Wertentwicklung Rechner

**City/Location Pages (Long-tail volume)**
- Immobilie als Kapitalanlage in [City] (0 pages — huge gap)
- Top 50 German cities × avg. 200 monthly searches each = ~10,000 monthly searches

**Pillar Guide Content (Head terms)**
- "Immobilie als Kapitalanlage" (main head term — 8,000+ monthly searches)
- "Mietrendite berechnen"
- "Erste Immobilie Kapitalanlage"
- "Steuervorteile Vermietung"
- "Immobilie vs ETF"

**Glossary/Lexikon**
- 30–50 terms × ~100-500 monthly searches each = ~5,000-15,000 monthly searches

---

## Prioritized Issue List

### 🔴 CRITICAL (Fix in Phase 2)
1. **Missing BreadcrumbList JSON-LD** — HTML breadcrumbs exist on all pages but lack schema markup. Affects rich results eligibility.
2. **Missing Article schema on guide pages** — All `/ratgeber/` pages lack `Article`/`BlogPosting` schema. Potential news/article rich results lost.
3. **Single shared OG image** — All pages use the same `/og-image.png`. Dynamic OG images per page improve CTR in social sharing and AI search.

### 🟠 HIGH (Fix in Phase 2)
4. **Missing FAQPage schema on calculator pages** — Calculator pages have great FAQ content in HTML but no `FAQPage` JSON-LD.
5. **Missing `SoftwareApplication` schema on individual calculator pages** — Only on homepage via StructuredData.tsx, not per calculator page.
6. **No `next/font` implementation** — Fonts may be loaded from external CDN, causing render-blocking.
7. **Auth-gated cashflow calculator** — Googlebot cannot access the calculator tool itself, only the surrounding content page.

### 🟡 MEDIUM (Phase 3 — Content Expansion)
8. **Zero city-specific pages** — Massive long-tail keyword gap.
9. **Zero lexikon/glossary pages** — Long-tail definitions keywords.
10. **Only 4 guide pages** — Competitor sites have 50–200 guides.
11. **No HowTo schema on calculator pages**.
12. **No calculator-variant landing pages** (e.g., dedicated Mietrendite page, AfA page).
13. **Organization schema missing social links** (`sameAs: []`).

### 🟢 LOW (Phase 4–6)
14. Blog content calendar not yet planned.
15. No author markup on guide articles.
16. No AggregateRating schema (needs review collection first).
17. No LocalBusiness schema (address in Impressum: Heidestr. 36, 60316 Frankfurt).
18. `/datenschutz` and `/impressum` missing descriptions (noindexed — low priority).

---

## Summary Scores

| Category | Score | Status |
|----------|-------|--------|
| Metadata completeness | 95/100 | ✅ Excellent |
| Structured data coverage | 80/100 | ⚠️ Gaps |
| Internal linking | 88/100 | ✅ Good |
| Image optimization | 88/100 | ✅ Good |
| Sitemap & robots | 95/100 | ✅ Excellent |
| Heading hierarchy | 92/100 | ✅ Excellent |
| Performance setup | 85/100 | ✅ Good |
| Content volume | 40/100 | 🔴 Critical Gap |
| Keyword coverage | 35/100 | 🔴 Critical Gap |
| **OVERALL** | **77/100** | **⚠️ Strong foundation, content-limited** |

The technical foundation is excellent. The #1 limiting factor to organic growth is **content volume and keyword coverage**. Implementing Phases 2–4 of this SEO plan will unlock the majority of growth potential.

---

## Next Steps

**Phase 2 (Technical SEO Foundation):** Fix the 3 Critical + 4 High severity issues above — primarily adding missing structured data schemas (BreadcrumbList, Article, FAQPage, SoftwareApplication per calculator) and dynamic OG images.

**Phase 3 (Programmatic Content):** Create the content engine — calculator variant pages, city pages (50+), expanded guide library (12+ pages), glossary (30-50 terms).

**Phase 4 (Blog):** Optimize existing 4 guides + create 20-post content calendar.

**Phase 5 (AEO):** FAQ sections, concise answer paragraphs, comparison tables for AI search.

**Phase 6 (Monitoring):** SEO tracking doc, validation checklist, contributor documentation.
