import type { Metadata } from 'next';
import AffiliateButton from '@/components/shared/AffiliateButton';

export const metadata: Metadata = {
  title: 'Skatt på Kryptovaluta 2026 – Komplett guide til kryptoskatt',
  description:
    'Lær alt om skatt på kryptovaluta i 2025/2026. 22% fradrag for tap, regler for gevinst, mining, staking og riktig rapportering til Skatteetaten.',
  alternates: {
    canonical: 'https://smartskatt.no/guider/krypto',
  },
  openGraph: {
    title: 'Skatt på Kryptovaluta 2026 | Smartskatt',
    description:
      '22% fradrag for tap, regler for gevinst og riktig rapportering til Skatteetaten i 2025/2026.',
    url: 'https://smartskatt.no/guider/krypto',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Kryptoskatt guide 2026 | Smartskatt' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skatt på Kryptovaluta 2026 | Smartskatt',
    description: '22% fradrag for tap og riktig rapportering av krypto til Skatteetaten.',
    images: ['/og-default.png'],
  },
};

export default function KryptoGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Skatt på Kryptovaluta i 2026</h1>
      <article className="prose prose-slate max-w-none">
        <p>Å rapportere krypto til Skatteetaten kan være komplekst. Har du solgt, minet, eller staket krypto i løpet av året?</p>
        <p>Husk at du har krav på 22% fradrag på tap. For å beregne dette nøyaktig anbefaler vi å bruke et spesialisert verktøy.</p>
        
        <div className="my-10 bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="text-xl font-semibold mb-2">Gjør det enkelt med Kryptosekken</h3>
          <p className="mb-4 text-slate-600">Beregn kryptoskatten automatisk og få ferdig utfylte tall til skattemeldingen.</p>
          <AffiliateButton partnerName="Kryptosekken" url="https://kryptosekken.no" label="Prøv Kryptosekken" />
        </div>
      </article>
    </div>
  );
}
