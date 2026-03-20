import type { MetadataRoute } from 'next'
import { locations } from '@/lib/constants/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://levantgold.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    // Core pages — highest priority
    { url: baseUrl,                            lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/shop`,                  lastModified: new Date(), changeFrequency: 'hourly',  priority: 0.9 },
    { url: `${baseUrl}/spot-prices`,           lastModified: new Date(), changeFrequency: 'hourly',  priority: 0.8 },
    { url: `${baseUrl}/locations`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    // What We Buy — conversion-critical
    { url: `${baseUrl}/what-we-buy`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/what-we-buy/gold`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/what-we-buy/silver`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/what-we-buy/platinum`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/what-we-buy/coins`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/what-we-buy/bars`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/what-we-buy/silverware`,lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    // Info pages
    { url: `${baseUrl}/about`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const locationRoutes: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...locationRoutes]
}
