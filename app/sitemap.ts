import { MetadataRoute } from 'next'

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
    { url: `${baseUrl}/rechner`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/cashflow-rechner`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/rendite-rechner`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/irr-rechner`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/kaufnebenkosten-rechner`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/mikrolage-analyse`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/ratgeber/cashflow-immobilien`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ratgeber/irr-erklaert`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ratgeber/eigenkapital-immobilie`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const bundeslandPages: MetadataRoute.Sitemap = BUNDESLAENDER.map(bl => ({
    url: `${baseUrl}/grunderwerbsteuer/${bl}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...bundeslandPages];
}
