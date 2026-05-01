import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Skatt ved salg av bolig: Gevinst og Botidskrav (2026)',
  description: 'Dette må du vite for å selge boligen skattefritt i 2026. Komplett guide til eiertid, botid og skatt på gevinst og tap ved boligsalg.',
  alternates: {
    canonical: 'https://smartskatt.no/eiendom/skatt-salg-bolig',
  },
};

export default function SkattSalgBoligPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Skatt ved salg av bolig: Gevinst og Botidskrav
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Forstå kravene for å selge eiendom 100% skattefritt, og hva du gjør hvis du ikke oppfyller kravene.
        </p>
      </header>

      <article className="prose prose-slate prose-lg max-w-none">
        <h2>Det grunnleggende: Botidskrav og eiertid</h2>
        <p>
          Hovedregelen i Norge er at gevinst ved salg av bolig er skattepliktig, og tap er fradragsberettiget. 
          Unntaket – som de fleste av oss benytter – inntreffer når du oppfyller <strong>både eiertid og botid</strong>:
        </p>
        
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-6 rounded-r-lg">
          <ul className="m-0 space-y-2 text-emerald-900 font-medium">
            <li><strong>Eiertid:</strong> Salget skjer tidligst ett år etter at du overtok boligen.</li>
            <li><strong>Botid:</strong> Du har brukt boligen som egen bolig i minst 12 av de siste 24 månedene før salget.</li>
          </ul>
        </div>

        <p>
          Oppfyller du disse to kravene, er gevinsten <strong>helt skattefri</strong>. Tap er tilsvarende ikke fradragsberettiget.
        </p>

        <h2>Når er salget skattepliktig?</h2>
        <p>
          Dersom du ikke oppfyller kravene (for eksempel ved flipp av bolig, utleiebolig eller arvet bolig uten tilstrekkelig botid), skal gevinsten skattlegges som alminnelig inntekt med <strong>22 %</strong> (2026-sats).
        </p>

        <h3>Beregning av gevinst</h3>
        <p>
          Gevinsten beregnes som <strong>Salgssum - Inngangsverdi - Omkostninger</strong>.
        </p>
        <ul>
          <li><strong>Inngangsverdi:</strong> Hva du opprinnelig betalte for boligen, inkludert dokumentavgift.</li>
          <li><strong>Påkostninger:</strong> Penger brukt på å heve boligens standard utover det den var ved kjøpet. Vanlig vedlikehold (som maling av eksisterende slitte overflater) gir <em>ikke</em> fradrag på inngangsverdien.</li>
          <li><strong>Omkostninger ved salg:</strong> Meglerhonorar, annonsering, takstmann og boligselgerforsikring trekkes fra.</li>
        </ul>
      </article>
    </main>
  );
}
