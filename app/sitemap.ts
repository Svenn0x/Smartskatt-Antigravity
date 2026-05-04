import { MetadataRoute } from 'next';

/**
 * Dynamisk sitemap som inkluderer alle sider med riktig prioritet.
 * Guide-siloene har høy prioritet for long-tail ranking.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smartskatt.no';
  const now = new Date();

  // Kjernesider (høyeste prioritet)
  const corePaths = [
    { path: '', priority: 1.0, freq: 'daily' as const },
    { path: '/kalkulator', priority: 0.95, freq: 'weekly' as const },
    { path: '/veiviser', priority: 0.95, freq: 'weekly' as const },
    { path: '/fradrag', priority: 0.9, freq: 'weekly' as const },
  ];

  // Pillar-sider (hovedguider)
  const pillarPaths = [
    '/eiendom',
    '/krypto',
    '/frilans',
    '/eiendom/utleie-egen-bolig',
    '/eiendom/skatt-salg-bolig',
    '/krypto/tap-og-gevinst',
    '/krypto/staking-og-mining',
    '/frilans/fradrag-sjekkliste',
  ];

  // NYE SEO-Siloer (long-tail landing pages)
  const guidePaths = [
    '/guide/skatt-pa-krypto-norge',
    '/guide/fradrag-enk-oversikt',
    '/guide/skatt-ved-salg-av-utleiebolig',
    '/guide/boligfradrag-komplett-guide',
    '/guide/krypto-skattemelding-utfylling',
    '/guide/hjemmekontor-fradrag-enk',
    '/guide/staking-skatt-norge',
    '/guide/skattefritt-boligsalg-regler',
    '/guide/enk-vs-as-skatt',
    '/guide/airbnb-skatt-utleie',
  ];

  // Sammenligningssider
  const comparePaths = [
    '/sammenlign/kryptoskatt',
    '/sammenlign/regnskapsprogram-enk',
    '/sammenlign/utleiesystemer',
    '/sammenlign/fiken-vs-luca',
  ];

  // Spesialtilfeller
  const specialPaths = [
    '/eiendom/spesialtilfeller/arv-av-bolig',
    '/eiendom/spesialtilfeller/pendlerbolig-fradrag',
  ];

  // Guide-sider (eksisterende)
  const existingGuidePaths = [
    '/guider/krypto',
    '/guider/smb-enk',
    '/guider/reisefradrag',
    '/guider/eiendom',
    '/guider/eiendom/utleie',
  ];

  return [
    // Kjernesider
    ...corePaths.map((p) => ({
      url: `${baseUrl}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),

    // Pillar-sider
    ...pillarPaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // Nye guide-siloer
    ...guidePaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),

    // Sammenligninger
    ...comparePaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Spesialtilfeller
    ...specialPaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Eksisterende guider
    ...existingGuidePaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ];
}
