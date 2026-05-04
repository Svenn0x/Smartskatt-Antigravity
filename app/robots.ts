import { MetadataRoute } from 'next';

/**
 * Optimalisert robots.txt for Googlebot, Bingbot og AI-crawlere.
 * Tillater full crawling av innhold, blokkerer interne systemer.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/static/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/static/'],
      },
      {
        // AI-crawlere (Google AI, Perplexity, etc.)
        userAgent: ['Google-Extended', 'PerplexityBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai'],
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/static/'],
      },
    ],
    sitemap: 'https://smartskatt.no/sitemap.xml',
    host: 'https://smartskatt.no',
  };
}
