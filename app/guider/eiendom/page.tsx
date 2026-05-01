import type { Metadata } from 'next';
import AffiliateButton from '@/components/shared/AffiliateButton';

export const metadata: Metadata = {
  title: 'Skatt på Eiendom og Bolig 2026 – Komplett Guide | Smartskatt',
  description:
    'Alt du må vite om skatt på bolig i 2026. Finn regler for skattefritt boligsalg, utleie av egen bolig (inkl. Airbnb), formuesskatt og skattefradrag.',
  alternates: {
    canonical: 'https://smartskatt.no/guider/eiendom',
  },
  openGraph: {
    title: 'Skatt på Eiendom og Bolig 2026 – Komplett Guide | Smartskatt',
    description:
      'Alt du må vite om skatt på bolig i 2026. Finn regler for skattefritt boligsalg, utleie av egen bolig (inkl. Airbnb), formuesskatt og skattefradrag.',
    url: 'https://smartskatt.no/guider/eiendom',
    images: [{ url: '/og-eiendom.png', width: 1200, height: 630, alt: 'Skatt på Eiendom og Bolig 2026' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skatt på Eiendom og Bolig 2026 – Komplett Guide | Smartskatt',
    description: 'Alt du må vite om skatt på bolig i 2026. Skattefritt salg og utleie.',
    images: ['/og-eiendom.png'],
  },
};

export default function EiendomGuidePage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Skatt på Eiendom og Bolig 2026
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Alt du trenger å vite om skatt på eiendom i Norge. Fra skattefrie leieinntekter og botidskrav ved boligsalg, til beregning av formuesverdi på primær- og sekundærbolig.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <a href="/guider/eiendom/utleie" className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-indigo-300">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">Utleie av egen bolig →</h2>
          <p className="text-slate-600">Lær reglene for korttidsutleie (Airbnb) vs. langtidsutleie. Finn ut når utleie er skattefritt og hvilke fradrag du har krav på.</p>
        </a>

        <a href="/guider/eiendom/salg" className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Skatt ved Boligsalg →</h2>
          <p className="text-slate-600">Hvordan beregne skatt på gevinst ved boligsalg? Sjekk eier- og botidskravet for å selge boligen helt skattefritt.</p>
        </a>

        <a href="/guider/eiendom/formuesverdi" className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-emerald-300 md:col-span-2">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">Formuesskatt på Bolig →</h2>
          <p className="text-slate-600">Forskjellen på primærbolig og sekundærbolig. Slik verdsettes eiendommen din av Skatteetaten i 2026.</p>
        </a>
      </div>

      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <h2>Optimaliser skatten din som boligeier</h2>
        <p>Å eie eiendom i Norge kommer med flere skattemessige fordeler, men det krever at du kjenner til reglene. De to viktigste konseptene er <strong>botidskravet</strong> ved salg, og grensene for <strong>skattefri utleie</strong>.</p>
        
        <div className="my-10 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold mb-2 text-slate-800 mt-0">Sammenlign lån og refinansiering med Lendo</h3>
          <p className="mb-4 text-slate-600">
            Skal du refinansiere etter å ha pusset opp for å øke verdien på boligen før salg? Sjekk hvilket lån som gir deg best betingelser – rentene er fullt fradragsberettiget på skatten!
          </p>
          <AffiliateButton partnerName="Lendo" url="https://lendo.no" label="Sammenlign bankene nå" />
        </div>
      </article>
    </main>
  );
}
