import { MetadataRoute } from 'next';
import { CALCULATOR_SLUGS } from '@/data/calculators';
import { CITY_SLUGS } from '@/data/cities';
import { GLOSSARY_SLUGS } from '@/data/glossary';

const BUNDESLAENDER = [
  'bayern', 'berlin', 'hamburg', 'nordrhein-westfalen', 'baden-wuerttemberg',
  'hessen', 'brandenburg', 'bremen', 'mecklenburg-vorpommern', 'niedersachsen',
  'rheinland-pfalz', 'saarland', 'sachsen', 'sachsen-anhalt', 'schleswig-holstein', 'thueringen',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://immo-rechner.net';
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/cashflow-rechner`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/rendite-rechner`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/irr-rechner`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/kaufnebenkosten-rechner`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/mikrolage-analyse`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/deal-agent`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    // Ratgeber
    { url: `${baseUrl}/ratgeber`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/ratgeber/rendite-immobilien-realistisch`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ratgeber/immobilie-als-kapitalanlage`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/ratgeber/wohnung-kaufen-vermieten`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ratgeber/cashflow-immobilien`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/ratgeber/irr-erklaert`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/ratgeber/eigenkapital-immobilie`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/ratgeber/finanzierung`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    // Indexes
    { url: `${baseUrl}/lexikon`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/immobilien-kapitalanlage`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    // Note: /impressum and /datenschutz are excluded — disallowed in robots.ts
  ];

  const bundeslandPages: MetadataRoute.Sitemap = BUNDESLAENDER.map((bl) => ({
    url: `${baseUrl}/grunderwerbsteuer/${bl}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.65,
  }));

  const calculatorPages: MetadataRoute.Sitemap = CALCULATOR_SLUGS.map((slug) => ({
    url: `${baseUrl}/rechner/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${baseUrl}/immobilien-kapitalanlage/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const glossaryPages: MetadataRoute.Sitemap = GLOSSARY_SLUGS.map((slug) => ({
    url: `${baseUrl}/lexikon/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [
    ...staticPages,
    ...bundeslandPages,
    ...calculatorPages,
    ...cityPages,
    ...glossaryPages,
  ];
}
