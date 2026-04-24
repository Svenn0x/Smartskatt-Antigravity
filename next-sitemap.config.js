/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://smartskatt.no',
  generateRobotsTxt: true,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  // Ekskluder interne og ikke-SEO-relevante ruter
  exclude: [
    '/api/*',
  ],

  // Legg til ekstra URL-er som ikke fanges opp automatisk
  additionalPaths: async (config) => {
    const fradragData = [
      'Arbeidstøy',
      'Aviser',
      'Bilgodtgjørelse',
      'BSU-sparing',
      'Fagforeningskontingent',
      'Foreldrefradrag',
      'Gaver-til-frivillighet',
      'Hjemmekontor',
      'Mobil-og-Internett',
      'Pendlerfradrag',
      'Rentefradrag',
      'Telefon',
      'Tap-på-krypto',
    ];

    // Sammenlign-sider
    const sammenlignSider = [
      'fiken-vs-luca',
    ];

    const paths = [];

    // Fradrags-ordboken (én side, høy prioritet)
    paths.push({
      loc: '/fradrag',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    });

    // Fremtidige individuelle fradrags-sider (klar for utvidelse)
    fradragData.forEach((slug) => {
      paths.push({
        loc: `/fradrag/${slug.toLowerCase().replace(/\s+/g, '-')}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    // Sammenlign-sider
    sammenlignSider.forEach((slug) => {
      paths.push({
        loc: `/sammenlign/${slug}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    return paths;
  },

  // Overstyring per rute
  transform: async (config, path) => {
    // Høy prioritet for landingssider
    const highPriorityPaths = ['/', '/kalkulator', '/veiviser'];
    const mediumPriorityPaths = ['/bedrift', '/bolig', '/krypto', '/guider', '/fradrag'];

    let priority = config.priority;
    let changefreq = config.changefreq;

    if (highPriorityPaths.includes(path)) {
      priority = 1.0;
      changefreq = 'daily';
    } else if (mediumPriorityPaths.some((p) => path.startsWith(p))) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/sammenlign')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/admin'],
      },
    ],
    additionalSitemaps: [],
  },
};
