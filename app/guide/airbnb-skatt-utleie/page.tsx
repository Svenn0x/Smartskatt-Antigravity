import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FeaturedSnippet, VerifisertInnhold, RelatedGuides } from '@/components/shared/GuideComponents';

export const metadata: Metadata = {
  title: 'Airbnb-skatt i Norge 2026 – Regler for korttidsutleie og utleie',
  description: 'Alt om Airbnb-skatt i 2026. Skattefri grense på 10 000 kr, 85%-regelen, mva-plikt og rapportering. Komplett guide for korttidsutleie i Norge.',
  alternates: { canonical: 'https://smartskatt.no/guide/airbnb-skatt-utleie' },
  openGraph: { title: 'Airbnb-skatt 2026 – Korttidsutleie', description: 'Skattefrie grenser, 85%-regelen og rapportering.', url: 'https://smartskatt.no/guide/airbnb-skatt-utleie', type: 'article' },
};

export default function AirbnbSkattPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'Hvor mye kan man leie ut skattefritt på Airbnb?', acceptedAnswer: { '@type': 'Answer', text: 'De første 10 000 kr i leieinntekter fra korttidsutleie (under 30 dager) er skattefrie per år. Av beløpet over 10 000 kr regnes 85 % som skattepliktig inntekt, som beskattes med 22 %.' } },
    { '@type': 'Question', name: 'Hva er 85%-regelen for Airbnb?', acceptedAnswer: { '@type': 'Answer', text: '85%-regelen betyr at av brutto leieinntekter over den skattefrie grensen på 10 000 kr, regnes kun 85 % som skattepliktig inntekt. De resterende 15 % er et sjablongfradrag som dekker kostnader.' } },
    { '@type': 'Question', name: 'Må jeg betale moms av Airbnb-utleie?', acceptedAnswer: { '@type': 'Answer', text: 'Korttidsutleie (under 30 dager) er mva-pliktig dersom omsetningen overstiger 50 000 kr per år. Du må da registrere deg i Merverdiavgiftsregisteret og beregne 12 % mva på utleien.' } },
  ]};

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script id="faq-airbnb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-sm font-bold mb-4"><span>🏡</span> Airbnb & Utleie</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">Airbnb-skatt i Norge 2026 – Regler for korttidsutleie</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed text-balance">Leier du ut på Airbnb eller andre plattformer? Her er den komplette guiden til skattefrie grenser, 85%-regelen, mva-plikt og rapportering for korttidsutleie i Norge 2026.</p>
        <p className="text-sm text-slate-400 mt-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Sist oppdatert: 4. mai 2026</p>
      </header>
      <FeaturedSnippet title="Kort oppsummering: Airbnb-skatt 2026" points={[
        'Skattefri grense: 10 000 kr per år for korttidsutleie (under 30 dager).',
        'Over grensen: 85 % av overskytende regnes som skattepliktig inntekt.',
        'Skattesats: 22 % av den skattepliktige delen.',
        'Mva-plikt: Ved omsetning over 50 000 kr/år (12 % mva).',
        'Langtidsutleie av del av bolig: Skattefritt uten begrensning.',
        'Langtidsutleie av hele boligen: 20 000 kr skattefritt per år.',
      ]} />
      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <h2>Hvor mye kan man leie ut skattefritt på Airbnb?</h2>
        <p>Korttidsutleie av egen bolig (opphold under 30 dager) har en <strong>skattefri grense på 10 000 kr per år</strong>. Tjener du mer enn dette, beskattes overskytende etter 85%-regelen. Denne regelen gjelder per bolig du leier ut.</p>

        <h2>Hva er 85%-regelen?</h2>
        <p>Av brutto leieinntekter over den skattefrie grensen på 10 000 kr, regnes kun <strong>85 % som skattepliktig inntekt</strong>. De resterende 15 % er et sjablongfradrag som skal dekke kostnader som renhold, slitasje og forbruksvarer.</p>
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl my-6 not-prose">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Eksempel: Airbnb-skatt</h3>
          <ul className="space-y-2 text-slate-700">
            <li>Brutto leieinntekter: <strong>60 000 kr</strong></li>
            <li>Skattefri grense: – 10 000 kr</li>
            <li>Overskytende: 50 000 kr</li>
            <li>Skattepliktig andel (85 %): <strong>42 500 kr</strong></li>
            <li>Skatt (22 %): <strong>9 350 kr</strong></li>
          </ul>
        </div>

        <h2>Korttidsutleie vs. langtidsutleie – store forskjeller</h2>
        <div className="overflow-x-auto my-6 not-prose">
          <table className="min-w-full text-left bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm text-sm">
            <thead className="bg-slate-50 uppercase tracking-wider text-slate-500 text-xs">
              <tr>
                <th className="px-6 py-4 font-semibold">Type utleie</th>
                <th className="px-6 py-4 font-semibold">Skattefri grense</th>
                <th className="px-6 py-4 font-semibold">Skattesats over grensen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr><td className="px-6 py-4 font-medium">Korttidsutleie (Airbnb, &lt;30 dager)</td><td className="px-6 py-4">10 000 kr/år</td><td className="px-6 py-4">22 % av 85 % over grensen</td></tr>
              <tr><td className="px-6 py-4 font-medium">Langtidsutleie av del av bolig</td><td className="px-6 py-4">Ubegrenset skattefritt</td><td className="px-6 py-4">0 %</td></tr>
              <tr><td className="px-6 py-4 font-medium">Langtidsutleie av hele boligen</td><td className="px-6 py-4">20 000 kr/år</td><td className="px-6 py-4">22 %</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Mva-plikt ved Airbnb-utleie</h2>
        <p>Korttidsutleie (under 30 dager) er <strong>mva-pliktig</strong> dersom samlet omsetning fra korttidsutleie overstiger <strong>50 000 kr per år</strong>. Du må da registrere deg i Merverdiavgiftsregisteret og beregne <strong>12 % mva</strong> på utleien. Langtidsutleie (over 30 dager) er mva-fri.</p>
        <p>OBS: Mange Airbnb-utleiere overser denne regelen og risikerer etterbetaling og tilleggsskatt fra Skatteetaten.</p>

        <h2>Hva kan du trekke fra?</h2>
        <p>Ved korttidsutleie har du to valg:</p>
        <ul>
          <li><strong>Sjablongmetoden (85%-regelen):</strong> Du får automatisk 15 % fradrag for kostnader. Enkelt, ingen dokumentasjon.</li>
          <li><strong>Regnskapsmetoden:</strong> Du fører faktiske kostnader (renhold, forbruksvarer, vedlikehold, forsikring, Airbnb-gebyr). Kan gi høyere fradrag ved høye kostnader.</li>
        </ul>

        <h2>Rapportering i skattemeldingen</h2>
        <p>Airbnb rapporterer automatisk utleieinntekter til Skatteetaten fra og med 2024. Inntektene vil normalt være forhåndsutfylt i skattemeldingen. Kontroller at beløpene stemmer og at riktig skattefri grense er trukket fra.</p>

        <h2>Vanlige feil ved Airbnb-skatt</h2>
        <ul>
          <li><strong>Glemmer mva-registrering</strong> ved omsetning over 50 000 kr.</li>
          <li><strong>Blander korttids- og langtidsutleie</strong> – ulike regler gjelder.</li>
          <li><strong>Overser Airbnb-gebyret</strong> – kan kreves som fradrag ved regnskapsmetoden.</li>
          <li><strong>Glemmer å oppgi inntekt</strong> – Skatteetaten har nå direkte tilgang til plattformdata.</li>
        </ul>

        <p>Bruk vår <Link href="/eiendom" className="font-bold">boligskatt-kalkulator</Link> for å beregne din Airbnb-skatt.</p>
      </article>
      <RelatedGuides guides={[
        { href: '/guide/boligfradrag-komplett-guide', title: 'Boligfradrag 2026', description: 'Alle fradrag du kan kreve som boligeier.' },
        { href: '/guide/skattefritt-boligsalg-regler', title: 'Skattefritt boligsalg', description: 'Botidskrav og regler for skattefri gevinst.' },
        { href: '/guide/skatt-ved-salg-av-utleiebolig', title: 'Skatt ved salg av utleiebolig', description: 'Gevinstberegning og inngangsverdi.' },
        { href: '/eiendom/utleie-egen-bolig', title: 'Utleie av egen bolig', description: 'Komplett guide til skattefri utleie.' },
      ]} />
      <VerifisertInnhold />
    </main>
  );
}
