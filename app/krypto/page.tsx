import React from 'react';
import type { Metadata } from 'next';
import AffiliateCard from '@/components/shared/AffiliateCard';

export const metadata: Metadata = {
  title: 'Kryptoskatten 2026: Unngå formuesskatte-fellen',
  description:
    'Guide for kryptovaluta og formuesskatt 2025/2026. Lær om 22% fradrag for tap, gevinster og hvordan unngå formuesskattfellen med krypto.',
  alternates: {
    canonical: 'https://smartskatt.no/krypto',
  },
  openGraph: {
    title: 'Kryptoskatten 2026: Unngå formuesskatte-fellen | Smartskatt',
    description:
      'Lær om 22% fradrag for tap, gevinster og formuesskatt på kryptovaluta i 2025/2026.',
    url: 'https://smartskatt.no/krypto',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Kryptoskatt 2026 | Smartskatt' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kryptoskatten 2026 | Smartskatt',
    description: 'Lær om 22% fradrag for tap og unngå formuesskattfellen med krypto.',
    images: ['/og-default.png'],
  },
};

export default function KryptoPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Kryptoskatten 2025: Unngå formuesskatte-fellen</h1>
      
      <div className="prose prose-xl prose-slate max-w-none mb-12">
        <p className="lead text-2xl text-slate-600 font-medium mb-8">
          Å eie kryptovaluta i 2025 krever at du har tunga rett i munnen. Skatteetaten trapper opp kontrollen, og spesielt formuesskatten kan bli en kostbar felle hvis du ikke planlegger riktig.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Slik verdsettes krypto vs. aksjer</h2>
        <p>
          Den største skattefellen med kryptovaluta ligger i hvordan Skatteetaten verdsetter verdiene dine ved årsskiftet:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-3">
          <li><strong>Kryptovaluta:</strong> Verdsettes til <strong>100% av markedsverdien</strong> per 31. desember. Det betyr at du ikke får noen form for verdsettelsesrabatt.</li>
          <li><strong>Aksjer og aksjefond:</strong> Her får du en <strong>verdsettelsesrabatt på 20%</strong>. Det betyr at kun 80% av verdien inngår i formuesgrunnlaget.</li>
        </ul>
        <p>
          Dette gjør at store verdier i krypto kan utløse betydelig høyere formuesskatt enn tilsvarende verdier plassert i aksjemarkedet.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Skatt på gevinst og fradrag for tap</h2>
        <p>
          Hver gang du selger eller veksler krypto, utløses en skattehendelse:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-3">
          <li><strong>Skatten på gevinst er 22%.</strong> Husk at også veksling fra én kryptovaluta til en annen (f.eks. Bitcoin til Ethereum) regnes som et skattepliktig salg.</li>
          <li><strong>Du har fradragsrett for tap.</strong> Har du solgt krypto med tap, får du 22% fradrag for dette på skatten. Dette er avgjørende å få med seg for å minimere skatteregningen.</li>
        </ul>
      </div>

      <div className="mt-16">
        <AffiliateCard 
          partnerName="Kryptosekken" 
          description="Gjør skatteberegningen automatisk med Kryptosekken. De beregner alt du trenger til skattemeldingen for deg."
          affiliateLink="https://kryptosekken.no"
        />
      </div>
    </main>
  );
}
