import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utleie av egen bolig: Airbnb og skattefrie grenser (2026)',
  description: 'Guide til skattereglene for utleie av bolig i 2026. Lær hvordan Airbnb beskattes og når du kan leie ut skattefritt.',
  alternates: {
    canonical: 'https://smartskatt.no/eiendom/utleie-egen-bolig',
  },
};

export default function UtleieEgenBoligPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Utleie av egen bolig: Airbnb og skattefrie grenser
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Pass på at du ikke skatter unødvendig. Slik fungerer regelverket for korttids- og langtidsutleie.
        </p>
      </header>

      <article className="prose prose-slate prose-lg max-w-none">
        <h2>Langtidsutleie: Når er det skattefritt?</h2>
        <p>
          Hovedregelen for at utleie av egen bolig skal være <strong>100 % skattefri</strong>, er at du selv bor i eiendommen og bruker <em>mer enn halvparten av den beregnede utleieverdien</em> selv.
        </p>
        <p>
          Hvis du leier ut en liten hybel mens du selv bor i resten av huset, er inntekten skattefri. Leier du derimot ut over halvparten av boligen, blir inntektene skattefrie kun opp til <strong>20 000 kroner pr. år</strong>. Overstiges denne grensen, skattlegges <em>hele</em> beløpet (fra første krone) med 22 %.
        </p>

        <h2>Airbnb og korttidsutleie</h2>
        <p>
          I de senere årene har Skatteetaten strammet inn på korttidsutleie (utleie i under 30 dager av gangen). For plattformer som Airbnb gjelder følgende regel i 2026:
        </p>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-6 rounded-r-lg">
          <ul className="m-0 space-y-2 text-indigo-900">
            <li><strong>De første 10 000 kr er skattefrie.</strong></li>
            <li><strong>Av det overskytende regnes 85 % som skattepliktig inntekt.</strong></li>
            <li>Skattepliktig inntekt beskattes med kapitalsats (22 %).</li>
          </ul>
        </div>
        
        <h3>Eksempel på skatteberegning for Airbnb</h3>
        <p>
          Hvis du leier ut leiligheten din på Airbnb og tjener 50 000 kroner på ett år:
        </p>
        <ol>
          <li>Trekk fra bunnfradraget: 50 000 kr - 10 000 kr = 40 000 kr</li>
          <li>Beregn skattepliktig andel (85 %): 40 000 kr * 0,85 = 34 000 kr</li>
          <li>Beregn skatt å betale (22 %): 34 000 kr * 0,22 = <strong>7 480 kr i skatt</strong></li>
        </ol>

        <p>
          Skatteetaten får i mange tilfeller rapportert inntekter direkte fra utleieplattformene, så det er svært viktig å fylle ut skattemeldingen riktig for å unngå straffeskatt.
        </p>
      </article>
    </main>
  );
}
