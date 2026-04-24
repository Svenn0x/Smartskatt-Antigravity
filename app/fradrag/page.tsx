import React from 'react';
import FradragOrdbok from './FradragOrdbok';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Komplett liste over skattefradrag 2025/2026 | Smartskatt.no',
  description:
    'Lurer du på hva du kan trekke fra? Se vår alfabetiske oversikt over alle fradrag for privatpersoner og bedrifter i Norge.',
  alternates: {
    canonical: 'https://smartskatt.no/fradrag',
  },
  openGraph: {
    title: 'Spar penger på skatten med Smartskatt.no',
    description:
      'Lurer du på hva du kan trekke fra? Se vår alfabetiske oversikt over alle fradrag for privatpersoner og bedrifter i Norge.',
    url: 'https://smartskatt.no/fradrag',
    images: [{ url: '/og-social.png', width: 1200, height: 630, alt: 'Spar penger på skatten med Smartskatt.no' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Komplett liste over skattefradrag 2025/2026 | Smartskatt.no',
    description: 'Alfabetisk oversikt over alle fradrag for privatpersoner og bedrifter i Norge.',
    images: ['/og-social.png'],
  },
};

export default function FradragPage() {
  return (
    <main className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <FradragOrdbok />
    </main>
  );
}
