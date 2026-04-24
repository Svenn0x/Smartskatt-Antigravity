import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisefradrag og Pendling 2026 – Slik krever du fradraget',
  description:
    'Komplett guide til reisefradrag og pendlerfradrag i 2025/2026. Lær om bunnbeløpet, sats per km og hva du kan kreve når du pendler til jobb.',
  alternates: {
    canonical: 'https://smartskatt.no/guider/reisefradrag',
  },
  openGraph: {
    title: 'Reisefradrag og Pendling 2026 | Smartskatt',
    description:
      'Lær om bunnbeløpet, sats per km og hva du kan kreve når du pendler til jobb i 2025/2026.',
    url: 'https://smartskatt.no/guider/reisefradrag',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Reisefradrag guide 2026 | Smartskatt' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reisefradrag og Pendling 2026 | Smartskatt',
    description: 'Lær om bunnbeløpet og sats per km for reisefradrag i 2025/2026.',
    images: ['/og-default.png'],
  },
};

export default function ReisefradragGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Reisefradrag og Pendling</h1>
      <article className="prose prose-slate max-w-none">
        <p>Har du lang vei til jobben? Reisefradraget kan utgjøre en stor forskjell på skatten din.</p>
        <p>Husk at du kun får fradrag for det som overstiger bunnbeløpet for gjeldende år.</p>
        
        <div className="my-10 bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="text-xl font-semibold mb-2">Trenger du ny bil for å pendle?</h3>
          <p className="mb-4 text-slate-600">Billån og billig forsikring kan spare deg for tusenvis av kroner.</p>
          {/* Her kunne vi hatt en annen affiliate, men vi gjenbruker Lendo som et eksempel */}
        </div>
      </article>
    </div>
  );
}
