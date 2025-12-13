import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://immo-rechner.net',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://immo-rechner.net/calculator',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,  // Sehr wichtig!
    },
  ]
}
