import type { Metadata } from 'next';
import AffiliateButton from '@/components/shared/AffiliateButton';

export const metadata: Metadata = {
  title: 'Skatt ved utleie av egen bolig (Airbnb vs Langtidsutleie) 2026',
  description:
    'Lær når utleie av egen bolig er skattefritt og hvordan Airbnb beskattes sammenlignet med langtidsutleie i 2026. Se vår enkle sammenligningstabell.',
  alternates: {
    canonical: 'https://smartskatt.no/guider/eiendom/utleie',
  },
};

export default function UtleieGuidePage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Skatt ved Utleie av Egen Bolig
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          Er utleien din skattepliktig? Det avhenger av om du leier ut langsiktig eller via tjenester som Airbnb, og hvor stor del av boligen du selv bruker.
        </p>
      </header>

      {/* Direct Answer Box - Optimalisert for ChatGPT Search / AEO */}
      <div 
        className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-10 shadow-sm"
        id="hva-er-skatten-pa-utleie"
      >
        <h2 className="text-xl font-bold text-indigo-950 mb-3 flex items-center">
          <span className="mr-2">💡</span> Når er utleie av egen bolig skattefritt i 2026?
        </h2>
        <div className="text-indigo-900 space-y-2">
          <p>
            <strong>Langtidsutleie:</strong> Utleie er <strong>100 % skattefritt</strong> dersom du selv bruker minst halvparten av boligen (beregnet etter utleieverdi). Leier du ut mer enn halvparten av boligen din, er inntekten skattefri opp til <strong>20 000 kroner</strong> i året. Overstiger leieinntektene 20 000 kroner, skattlegges alt fra første krone med 22 %.
          </p>
          <p>
            <strong>Korttidsutleie (Airbnb):</strong> Leier du ut boligen din i under 30 dager av gangen (korttidsutleie), er inntekter opp til <strong>10 000 kroner i året skattefrie</strong>. Av det overskytende beløpet skattlegges 85 % som kapitalinntekt med 22 %. 
          </p>
        </div>
      </div>

      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <h2>Sammenligning: Korttidsutleie vs Langtidsutleie</h2>
        <p>Regelverket skiller tydelig mellom tradisjonell utleie med lange leiekontrakter, og utleie via plattformer som Airbnb. Her er en oversikt som gjør det enkelt å forstå forskjellen:</p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-left text-sm whitespace-nowrap bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-slate-50 uppercase tracking-wider text-slate-500 text-xs border-b border-slate-200">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Utleietype</th>
                <th scope="col" className="px-6 py-4 font-semibold">Skattefri Grense</th>
                <th scope="col" className="px-6 py-4 font-semibold">Beskatning Over Grensen</th>
                <th scope="col" className="px-6 py-4 font-semibold">Betingelse</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">Langtidsutleie (over 30 dager)</td>
                <td className="px-6 py-4">Skattefritt (Ubegrenset)</td>
                <td className="px-6 py-4">Ingen skatt</td>
                <td className="px-6 py-4 text-slate-500">Du bruker >50% av boligens leieverdi selv</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">Langtidsutleie (Hele boligen)</td>
                <td className="px-6 py-4">20 000 kr i året</td>
                <td className="px-6 py-4">22 % av alle leieinntekter fra første krone</td>
                <td className="px-6 py-4 text-slate-500">Du bor ikke i boligen, eller bruker &lt;50%</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">Korttidsutleie (Airbnb etc.)</td>
                <td className="px-6 py-4">10 000 kr i året</td>
                <td className="px-6 py-4">22 % skatt på 85 % av inntekten over 10 000 kr</td>
                <td className="px-6 py-4 text-slate-500">Utleieforhold under 30 dager sammenhengende</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Slik regner du ut skatt på Airbnb-inntekter</h2>
        <p>Eksempel: Du har leid ut leiligheten din via Airbnb og tjent 40 000 kroner i løpet av året.</p>
        <ol>
          <li>Trekk fra det skattefrie beløpet: 40 000 kr - 10 000 kr = 30 000 kr</li>
          <li>Beregn skattepliktig andel (85 %): 30 000 kr * 0,85 = 25 500 kr</li>
          <li>Beregn skatt (22 % i 2026): 25 500 kr * 0,22 = <strong>5 610 kr</strong> i skatt.</li>
        </ol>

        <div className="my-10 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold mb-2 text-slate-800 mt-0">Hold orden på regnskapet med Fiken</h3>
          <p className="mb-4 text-slate-600">
            Dersom utleien har et omfang som gjør at den regnes som næringsvirksomhet, trenger du et regnskapsprogram. Fiken gjør det superenkelt for deg.
          </p>
          <AffiliateButton partnerName="Fiken" url="https://fiken.no" label="Prøv Fiken gratis" />
        </div>
      </article>
    </main>
  );
}
