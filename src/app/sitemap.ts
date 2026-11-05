import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-11-05T00:00:00.000Z');

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/contact/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy/', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/terms-of-service/', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
