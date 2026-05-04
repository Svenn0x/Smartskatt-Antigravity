import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FeaturedSnippet, VerifisertInnhold, RelatedGuides } from '@/components/shared/GuideComponents';

export const metadata: Metadata = {
  title: 'Skatt ved salg av utleiebolig 2026 – Regler, satser og fradrag',
  description: 'Skal du selge en utleiebolig? Lær reglene for gevinstberegning, inngangsverdi, fradrag for oppussing og 22% skatt. Oppdatert for 2026.',
  alternates: { canonical: 'https://smartskatt.no/guide/skatt-ved-salg-av-utleiebolig' },
  openGraph: { title: 'Skatt ved salg av utleiebolig 2026', description: 'Gevinstberegning, inngangsverdi og fradrag.', url: 'https://smartskatt.no/guide/skatt-ved-salg-av-utleiebolig', type: 'article' },
};

export default function SkattSalgUtleieboligPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'Hvor mye skatt betaler man ved salg av utleiebolig?', acceptedAnswer: { '@type': 'Answer', text: 'Skatten ved salg av utleiebolig er 22 % av gevinsten. Gevinsten beregnes som salgspris minus inngangsverdi (kjøpesum + dokumentavgift + påkostninger).' } },
    { '@type': 'Question', name: 'Kan jeg selge utleiebolig skattefritt?', acceptedAnswer: { '@type': 'Answer', text: 'Bare dersom du oppfyller botidskravet: Eid i 12 mnd og bodd der i 12 av siste 24 mnd. En ren utleiebolig der du aldri har bodd vil alltid gi skattepliktig gevinst.' } },
    { '@type': 'Question', name: 'Hva er inngangsverdi ved salg av utleiebolig?', acceptedAnswer: { '@type': 'Answer', text: 'Inngangsverdien er kjøpesum + dokumentavgift (2,5 %) + meglerkostnader ved kjøp + påkostninger. Vanlig vedlikehold kan IKKE legges til.' } },
  ]};

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script id="faq-salg-utleiebolig" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-4"><span>🏠</span> Eiendom & Skatt</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">Skatt ved salg av utleiebolig i 2026 – Regler, satser og fradrag</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed text-balance">Skal du selge en utleiebolig eller sekundærbolig? Her er den komplette guiden til gevinstberegning, inngangsverdi, fradrag for påkostninger og hvordan du minimerer skatten.</p>
        <p className="text-sm text-slate-400 mt-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Sist oppdatert: 4. mai 2026</p>
      </header>

      <FeaturedSnippet title="Kort oppsummering: Skatt ved salg av utleiebolig" points={[
        'Gevinst beskattes med 22 %.',
        'Inngangsverdi = kjøpesum + dokumentavgift + påkostninger.',
        'Vanlig vedlikehold kan IKKE legges til inngangsverdien.',
        'Tap ved salg gir 22 % fradrag.',
        'Meglerkostnader ved salg trekkes fra gevinsten.',
      ]} />

      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <h2>Hvor mye skatt betaler man ved salg av utleiebolig?</h2>
        <p>Skatten ved salg av utleiebolig i Norge er <strong>22 %</strong> av gevinsten. Gevinsten beregnes som forskjellen mellom salgsprisen og inngangsverdien. Dersom du selger med tap, får du <strong>22 % fradrag</strong>.</p>
        <p>I motsetning til din primærbolig, er utleiebolig og sekundærbolig nesten alltid skattepliktig ved salg. Botidskravet for skattefritt salg krever at du har <em>bodd</em> i boligen i minst 12 av de siste 24 månedene – noe som normalt ikke er tilfellet for en ren utleiebolig.</p>

        <h2>Slik beregner du gevinsten – steg for steg</h2>
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl my-6 not-prose">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Eksempel: Gevinstberegning utleiebolig</h3>
          <ul className="space-y-2 text-slate-700">
            <li>Kjøpesum: <strong>3 000 000 kr</strong></li>
            <li>+ Dokumentavgift (2,5 %): <strong>75 000 kr</strong></li>
            <li>+ Påkostninger (nytt bad): <strong>250 000 kr</strong></li>
            <li>= Inngangsverdi: <strong>3 325 000 kr</strong></li>
            <li>Salgssum: <strong>4 200 000 kr</strong></li>
            <li>– Meglerkostnader: <strong>100 000 kr</strong></li>
            <li>= Netto salgssum: <strong>4 100 000 kr</strong></li>
            <li>Gevinst: 4 100 000 – 3 325 000 = <strong>775 000 kr</strong></li>
            <li>Skatt (22 %): <strong>170 500 kr</strong></li>
          </ul>
        </div>

        <h2>Hva er inngangsverdi?</h2>
        <p>Inngangsverdien inkluderer kjøpesummen, dokumentavgift (2,5 %), og <strong>påkostninger</strong> – forbedringer som øker boligens verdi (nytt kjøkken, nytt bad, tilbygg). <strong>Vanlig vedlikehold</strong> (maling, utskifting av kran) regnes <em>ikke</em> som påkostning og kan ikke legges til inngangsverdien.</p>

        <h2>Kan jeg selge utleiebolig skattefritt?</h2>
        <p>Kun hvis du oppfyller botidskravet: <strong>Eid i 12 mnd</strong> og <strong>bodd der i 12 av siste 24 mnd</strong>. Det finnes et legitimt alternativ: flytt inn, bo der i 12 måneder, og selg deretter skattefritt. Dette krever reell bruk som primærbolig.</p>

        <h2>Fradrag du kan kreve ved salg</h2>
        <ul>
          <li><strong>Meglerkostnader</strong> – trekkes direkte fra salgssummen.</li>
          <li><strong>Dokumentavgift</strong> – legges til inngangsverdien.</li>
          <li><strong>Påkostninger</strong> – alle verdihevende investeringer i eiertiden.</li>
          <li><strong>Annonsekostnader</strong> – kostnader knyttet til salget.</li>
        </ul>

        <h2>Vedlikehold vs. påkostning – den viktige forskjellen</h2>
        <p><strong>Vedlikehold:</strong> Å bringe boligen tilbake til opprinnelig standard (male, bytte kran). Kan <em>ikke</em> legges til inngangsverdi. <strong>Påkostning:</strong> Å heve standard (nytt bad, tilbygg). <em>Kan</em> legges til inngangsverdi og reduserer skatten.</p>

        <h2>Formuesskatt på utleiebolig</h2>
        <p>Sekundærbolig verdsettes til <strong>100 % av markedsverdi</strong> for formueskatt (vs. 25 % for primærbolig). Dette gjør utleiebolig kostbar skattemessig, spesielt i Oslo og Bergen.</p>

        <h2>Tips: Slik minimerer du skatten lovlig</h2>
        <ul>
          <li>Dokumenter <em>alle</em> påkostninger med kvitteringer og bilder. Jo høyere inngangsverdi, jo lavere gevinst.</li>
          <li>Vurder tidspunkt for salg – kan du oppfylle botidskravet ved å flytte inn?</li>
          <li>Bruk <Link href="/eiendom">gevinstkalkulatoren vår</Link> for å beregne nøyaktig skattebelastning.</li>
        </ul>
      </article>

      <RelatedGuides guides={[
        { href: '/guide/boligfradrag-komplett-guide', title: 'Boligfradrag – komplett guide', description: 'Alle fradrag du kan kreve som boligeier.' },
        { href: '/guide/skattefritt-boligsalg-regler', title: 'Skattefritt boligsalg', description: 'Botidskrav, eiertid og regler for skattefri gevinst.' },
        { href: '/guide/airbnb-skatt-utleie', title: 'Airbnb-skatt og utleie', description: 'Regler og satser for korttidsutleie.' },
        { href: '/eiendom/utleie-egen-bolig', title: 'Utleie av egen bolig', description: 'Halvparten-regelen og sjablongmetoden.' },
      ]} />
      <VerifisertInnhold />
    </main>
  );
}
