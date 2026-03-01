# SEO Developer Guide — immo-rechner.net

This guide explains how to maintain and expand the SEO architecture of immo-rechner.net.
All programmatic pages are driven by TypeScript data files — no code changes needed to add new content.

---

## Architecture Overview

```
app/
├── (static pages)               # Homepage, calculator pages, legal
├── ratgeber/[slug]/             # Pillar guide articles
├── grunderwerbsteuer/[bundesland]/ # 16 Bundesland tax pages (static params)
├── rechner/[calculator-slug]/   # 14 calculator landing pages (static params)
├── immobilien-kapitalanlage/
│   ├── page.tsx                 # City index (table of all 25 cities)
│   └── [city]/page.tsx         # City detail pages (static params)
├── lexikon/
│   ├── page.tsx                 # Glossary index
│   └── [term]/page.tsx         # Glossary term pages (static params)
│
data/
├── calculators.ts              # Source of truth for /rechner/* pages
├── cities.ts                   # Source of truth for /immobilien-kapitalanlage/* pages
├── glossary.ts                 # Source of truth for /lexikon/* pages
│
components/
├── QuickAnswer.tsx             # Featured snippet / AEO "Kurzantwort" box
├── JsonLd.tsx                  # Renders JSON-LD structured data
├── StructuredData.tsx          # Homepage JSON-LD schemas
```

---

## How to Add a New City Page

1. Open `data/cities.ts`
2. Add a new entry to the `CITIES` array following the `City` interface:

```typescript
{
  slug: 'regensburg',           // URL slug (lowercase, no Umlauts)
  name: 'Regensburg',           // Display name
  bundesland: 'Bayern',         // Full Bundesland name
  bundeslandSlug: 'bayern',     // Bundesland slug (matches grunderwerbsteuer/ route)
  grunderwerbsteuer: 3.5,       // Current rate in % (see list below)
  avgPricePerSqm: 4200,         // Approximate €/m² purchase price
  avgRentPerSqmCold: 10.5,      // Approximate €/m² cold rent
  mietpreismultiplikator: 33,   // Typical Kaufpreis / Jahreskaltmiete
  population: 160000,           // Population (Einwohner)
  investmentProfile: 'B-Lage',  // 'A-Lage' | 'B-Lage' | 'C-Lage' | 'D-Lage'
  trend: 'stabil',              // 'steigend' | 'stabil' | 'leicht fallend'
  description: '...',           // 2-3 sentences about the local market (German, du-Form)
  pros: ['...', '...'],         // 3-4 advantages for investors (German)
  cons: ['...', '...'],         // 2-3 disadvantages (German)
}
```

3. That's it. The page is automatically:
   - Generated at `/immobilien-kapitalanlage/regensburg`
   - Added to the sitemap
   - Gets Article + BreadcrumbList + FAQPage JSON-LD
   - Appears in the city index table

**Grunderwerbsteuer rates by Bundesland (2026):**
| Bundesland | Rate |
|------------|------|
| Bayern | 3,5% |
| Baden-Württemberg | 5,0% |
| Hamburg | 5,5% |
| Berlin | 6,0% |
| Hessen | 6,0% |
| Mecklenburg-Vorpommern | 6,0% |
| Niedersachsen | 5,0% |
| Nordrhein-Westfalen | 6,5% |
| Rheinland-Pfalz | 5,0% |
| Saarland | 6,5% |
| Sachsen | 5,5% |
| Sachsen-Anhalt | 5,0% |
| Schleswig-Holstein | 6,5% |
| Thüringen | 6,5% |
| Brandenburg | 6,5% |
| Bremen | 5,0% |

---

## How to Add a New Glossary Term

1. Open `data/glossary.ts`
2. Add a new entry to the `GLOSSARY_TERMS` array:

```typescript
{
  slug: "mietpreisbremse",
  term: "Mietpreisbremse",
  shortDefinition: "Die Mietpreisbremse begrenzt Mieterhöhungen bei Neuvermietungen auf maximal 10% über der ortsüblichen Vergleichsmiete.",
  definition: "...",             // 2-3 sentences full definition
  formula: {                     // optional — only if there's a formula
    equation: "...",
    variables: [{ symbol: "...", description: "..." }],
  },
  example: {                     // optional — concrete example
    scenario: "...",
    result: "...",
  },
  content: "...",                // 300-500 words of explanatory content (plain text)
  relevanceForInvestors: "...",  // 1-2 sentences on why investors should care
  relatedTerms: [                // Link to other glossary entries
    { slug: "cashflow", label: "Cashflow" },
  ],
  relatedCalculators: [          // Link to calculator pages
    { href: "/rendite-rechner", label: "Rendite Rechner" },
  ],
  relatedGuides: [               // Link to ratgeber pages
    { href: "/ratgeber/wohnung-kaufen-vermieten", label: "Wohnung kaufen und vermieten" },
  ],
}
```

3. The page is automatically generated at `/lexikon/mietpreisbremse` and added to sitemap.

---

## How to Add a New Calculator Landing Page

1. Open `data/calculators.ts`
2. Add a new entry to the `CALCULATORS` array following the `CalculatorPage` interface
3. The `primaryCalculator.component` field controls which embedded calculator to show:
   - `'rendite'` → embeds `RenditerechnerSimple`
   - `'nebenkosten'` → embeds `KaufnebenkostenrechnerSimple`
   - `null` → shows a CTA link to the full calculator at `/cashflow-rechner`

```typescript
{
  slug: 'nettokaltmiete-rechner',
  h1: '...',
  metaTitle: '... | Immo-Rechner',
  metaDescription: '...',
  intro: '...',
  primaryCalculator: { path: '/rendite-rechner', label: '...', component: 'rendite' },
  formula: { equation: '...', variables: [...] },
  sections: [{ h2: '...', content: '...' }],
  example: { title: '...', inputs: [...], result: { label: '...', value: '...' } },
  faqs: [{ q: '...', a: '...' }],  // 3-5 Q&A pairs
  related: [{ href: '...', label: '...', description: '...' }],
}
```

---

## How to Add a New Ratgeber (Pillar Guide)

Ratgeber pages are hand-crafted (not programmatic) due to their length and unique content.

1. Create a new file: `app/ratgeber/[your-slug]/page.tsx`
2. Use an existing ratgeber as template, e.g. `app/ratgeber/immobilie-als-kapitalanlage/page.tsx`
3. Required elements every ratgeber **must** have:

```tsx
// 1. Metadata export
export const metadata: Metadata = {
  title: "Target Keyword H1 — Subtitle (2026) | Immo-Rechner",
  description: "150-160 char description with target keyword in first 120 chars.",
  alternates: { canonical: "https://immo-rechner.net/ratgeber/your-slug" },
  openGraph: { title, description, url, siteName: 'Immo-Rechner.net', locale: 'de_DE', type: 'article', images: [...] },
  twitter: { card: 'summary_large_image', ... },
};

// 2. JSON-LD structured data (Article + BreadcrumbList + FAQPage)
const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "...",
      "wordCount": 1500,        // approximate
      "inLanguage": "de",       // NOT "de-DE"
      "datePublished": "2026-03-01",
      "dateModified": "2026-03-01",
      "author": { "@type": "Organization", "name": "Immobilien Rechner", "url": "https://immo-rechner.net" },
      "publisher": { "@type": "Organization", "name": "Immobilien Rechner", "logo": { ... } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://immo-rechner.net/ratgeber/your-slug" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://immo-rechner.net" },
        { "@type": "ListItem", "position": 2, "name": "Ratgeber", "item": "https://immo-rechner.net/ratgeber/immobilie-als-kapitalanlage" },
        { "@type": "ListItem", "position": 3, "name": "Your Page Title", "item": "https://immo-rechner.net/ratgeber/your-slug" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Frage 1?", "acceptedAnswer": { "@type": "Answer", "text": "..." } },
        // 4-5 questions total
      ],
    },
  ],
};

// 3. QuickAnswer box (AEO — placed after intro paragraph, before first CTA)
<QuickAnswer
  question="Direct answer question matching H1 intent"
  answer="2-3 sentence direct answer with concrete numbers."
  keyFacts={["Key fact 1", "Key fact 2", "Key fact 3"]}
/>
```

4. Add the page to `app/sitemap.ts` in the `staticPages` array:
```typescript
{ url: `${baseUrl}/ratgeber/your-slug`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
```

5. Add it to `SEO_TRACKING.md` in section 3.

---

## Internal Linking Strategy

Follow these rules to build link equity across the site:

### Rule 1: Calculator pages always link to pillar guides
Every `/rechner/*` page must link to at least one relevant ratgeber in its "Related" section.

### Rule 2: Pillar guides always embed a calculator CTA
Every ratgeber must include an embedded `<RenditerechnerSimple />` or a prominent CTA to the cashflow calculator.

### Rule 3: City pages link to Bundesland pages
`/immobilien-kapitalanlage/[city]` already links to `/grunderwerbsteuer/[bundesland]`. Keep this.

### Rule 4: Glossary terms link out, not in circles
Each `/lexikon/*` page links to 2-3 related terms, 1-2 calculators, and 1 ratgeber.
Do not create circular loops (A → B → A only).

### Rule 5: Anchor text must be descriptive
✓ `<Link href="/rendite-rechner">Mietrendite Rechner</Link>`
✗ `<Link href="/rendite-rechner">hier klicken</Link>`

### Rule 6: New content must link back to homepage or core calculator
Every new page should contain at least one link back to `/` or `/rendite-rechner` or `/cashflow-rechner`.

---

## Structured Data Patterns

### Available schemas in use:

| Schema Type | Used On | Component |
|-------------|---------|-----------|
| `WebSite` | Homepage | `StructuredData.tsx` |
| `WebApplication` | Homepage | `StructuredData.tsx` |
| `Organization` | Homepage | `StructuredData.tsx` |
| `FAQPage` | Homepage, all calculator pages, all ratgeber, all city pages | Inline JSON-LD |
| `SoftwareApplication` | `/rechner/*` pages | Inline JSON-LD |
| `HowTo` | `/rechner/*` pages | Inline JSON-LD |
| `Article` | Ratgeber pages, city pages, glossary pages | Inline JSON-LD |
| `BreadcrumbList` | All pages except homepage | Inline JSON-LD |
| `DefinedTerm` | `/lexikon/*` pages | Inline JSON-LD |

### Quick validation:
Test any page with: https://validator.schema.org/ or Google's Rich Results Test.

### Common mistakes to avoid:
- `"inLanguage": "de-DE"` → ✗ use `"de"` (schema.org standard)
- Missing `dateModified` on Article → always include
- BreadcrumbList with only 2 levels on sub-pages → always include the intermediate level (e.g., "Ratgeber")
- `FAQPage` with fewer than 3 questions → minimum 4 for rich results eligibility

---

## QuickAnswer Component

The `QuickAnswer` component (`components/QuickAnswer.tsx`) creates a teal "Kurzantwort" box optimized for Google featured snippets and AI search extraction.

**When to use:** At the top of every content page (ratgeber, city pages), after the intro paragraph and before the first major section.

**Props:**
```tsx
<QuickAnswer
  question="Frage die der User gestellt hätte?"
  answer="Direkte Antwort in 2-3 Sätzen mit konkreten Zahlen und Fakten."
  keyFacts={[          // optional: 3-5 bullet points
    "Fakt 1",
    "Fakt 2",
    "Fakt 3",
  ]}
/>
```

**Best practices:**
- The `question` should mirror the H1 intent (what is the user's main question?)
- The `answer` should give a complete, self-contained answer (AI engines extract this)
- Include specific numbers (%, €, years) whenever possible — vague answers don't get featured
- `keyFacts` should be scannable: formulas, benchmarks, rules of thumb

---

## OG Image Generation

Dynamic OG images are generated via `/api/og`. Pass `title` and `subtitle` as URL params:

```
/api/og?title=Rendite+Rechner&subtitle=Mietrendite+%26+Nettomietrendite+berechnen
```

All calculator pages, ratgeber pages, and city pages use this pattern. Keep titles under 40 chars and subtitles under 60 chars for proper rendering.

---

## Sitemap Verification

The sitemap at `/sitemap.xml` is auto-generated. To verify:

```bash
npx next build && curl https://immo-rechner.net/sitemap.xml | grep "<url>" | wc -l
```

Expected: ~100+ URLs. Add to Google Search Console after deployment:
GSC → Sitemaps → Submit → `https://immo-rechner.net/sitemap.xml`

**Note on legal pages:** `/impressum` and `/datenschutz` are intentionally excluded from the sitemap and blocked in `robots.ts`. This prevents them from appearing in Google search results.

---

## TypeScript Safety

After any data file changes, always run:

```bash
npx tsc --noEmit
```

All data interfaces are strictly typed. TypeScript errors will prevent incorrect data from reaching production.

---

*Last updated: 2026-03-01*
