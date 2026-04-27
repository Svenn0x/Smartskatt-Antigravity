import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const SITE_URL = 'https://smartskatt.no';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Smartskatt | Finn dine glemte skattefradrag (Oppdatert 2026)',
    template: '%s | Smartskatt.no',
  },
  description:
    'Ikke betal mer skatt enn du må. Prøv vår gratis skatteveiviser og finn fradragene som sparer deg for tusenvis av kroner. Enkelt og anonymt.',
  keywords: [
    'skattefradrag',
    'skattekalkulator',
    'norsk skatt 2025',
    'skatteveiviser',
    'reisefradrag',
    'kryptoskatt',
    'ENK fradrag',
    'skatteoptimalisering',
  ],
  authors: [{ name: 'Smartskatt.no', url: SITE_URL }],
  creator: 'Smartskatt.no',
  publisher: 'Smartskatt.no',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: SITE_URL,
    siteName: 'Smartskatt.no',
    title: 'Spar penger på skatten med Smartskatt.no',
    description:
      'Ikke betal mer skatt enn du må. Finn fradragene som sparer deg for tusenvis av kroner. Gratis og anonymt.',
    images: [
      {
        url: '/og-social.png',
        width: 1200,
        height: 630,
        alt: 'Spar penger på skatten med Smartskatt.no',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spar penger på skatten med Smartskatt.no',
    description:
      'Ikke betal mer skatt enn du må. Finn fradragene som sparer deg for tusenvis av kroner. Gratis og anonymt.',
    images: ['/og-social.png'],
    creator: '@smartskattno',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={`${inter.variable} scroll-smooth`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RJLVB3NSN8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RJLVB3NSN8');
          `}
        </Script>
        {/* Midlertidig deaktivert Iubenda for Google Tag-verifisering */}
        {/*
        <Script id="iubenda-config" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":4509385,"cookiePolicyId":29355541,"lang":"no","storage":{"useSiteId":true}};
          `}
        </Script>
        <Script
          src="https://cs.iubenda.com/autoblocking/4509385.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//cdn.iubenda.com/cs/gpp/stub.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="afterInteractive"
        />
        */}
      </head>
      <body className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 antialiased relative selection:bg-blue-200 selection:text-blue-900">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 z-[-1] h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]"></div>
        </div>
        
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
