import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FeaturedSnippet, VerifisertInnhold, RelatedGuides } from '@/components/shared/GuideComponents';

export const metadata: Metadata = {
  title: 'Boligfradrag 2026 – Alle fradrag du kan kreve som boligeier',
  description: 'Komplett guide til boligfradrag i Norge 2026. Rentefradrag, vedlikehold, utleie, oppussing og foreldrefradrag. Finn dine skjulte fradrag.',
  alternates: { canonical: 'https://smartskatt.no/guide/boligfradrag-komplett-guide' },
  openGraph: { title: 'Boligfradrag 2026 – Komplett guide', description: 'Alle fradrag for boligeiere i 2026.', url: 'https://smartskatt.no/guide/boligfradrag-komplett-guide', type: 'article' },
};

export default function BoligfradragPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'Hvilke fradrag kan man få som boligeier i 2026?', acceptedAnswer: { '@type': 'Answer', text: 'De viktigste boligfradragene er rentefradrag (22 % av gjeldsrenter), fradrag for utleiekostnader, vedlikeholdskostnader ved skattepliktig utleie, og dokumentavgift/påkostninger som øker inngangsverdien ved salg.' } },
    { '@type': 'Question', name: 'Hvor mye er rentefradraget i 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Rentefradraget gir deg 22 % fradrag for alle gjeldsrenter du betaler, inkludert boliglån, billån og kredittkort. Fradraget gis automatisk via skattemeldingen basert på opplysninger fra banken.' } },
    { '@type': 'Question', name: 'Kan jeg få fradrag for oppussing av bolig?', acceptedAnswer: { '@type': 'Answer', text: 'Ikke direkte. Men oppussing som klassifiseres som påkostning (verdiheving) legges til inngangsverdien og reduserer gevinsten ved et fremtidig salg. Ved skattepliktig utleie kan vedlikeholdskostnader fradrages løpende.' } },
  ]};

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script id="faq-boligfradrag" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-4"><span>🏠</span> Bolig & Fradrag</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">Boligfradrag i 2026 – Alle fradrag du kan kreve som boligeier</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed text-balance">Som boligeier i Norge har du krav på en rekke skattefradrag de fleste overser. Her er den komplette oversikten over boligfradrag – fra rentefradrag til utleie og oppussing.</p>
        <p className="text-sm text-slate-400 mt-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Sist oppdatert: 4. mai 2026</p>
      </header>
      <FeaturedSnippet title="Kort oppsummering: Boligfradrag 2026" points={[
        'Rentefradrag: 22 % av alle gjeldsrenter (boliglån, billån, kredittkort).',
        'Utleie under halvparten av boligen: Skattefri inntekt.',
        'Utleie hele boligen: 20 000 kr skattefritt, deretter 22 %.',
        'Påkostninger øker inngangsverdien ved fremtidig salg.',
        'Vedlikehold ved skattepliktig utleie: Fradrag i utleieinntekten.',
        'Foreldrefradrag: Opptil 25 000 kr for barnehage/SFO.',
      ]} />
      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <h2>Hvilke boligfradrag finnes i 2026?</h2>
        <p>Boligfradrag i Norge er ikke ett enkelt fradrag, men en samling av ulike skattefordeler for boligeiere. De viktigste er <strong>rentefradrag</strong>, <strong>fradrag knyttet til utleie</strong>, og <strong>inngangsverdi-optimalisering</strong> ved salg. La oss gå gjennom alle.</p>

        <h2>1. Rentefradraget – det viktigste boligfradraget</h2>
        <p>Alle nordmenn med gjeld får <strong>22 % fradrag</strong> for gjeldsrenter. Dette inkluderer renter på boliglån, billån, studielån og kredittkort. Fradraget kommer automatisk i skattemeldingen basert på innrapportering fra bankene.</p>
        <p>Eksempel: Betaler du 80 000 kr i boliglånsrenter per år, får du 80 000 × 22 % = <strong>17 600 kr</strong> i redusert skatt.</p>

        <h2>2. Skattefri utleie (halvparten-regelen)</h2>
        <p>Leier du ut under halvparten av boligens leieverdi mens du bor der selv? Da er <strong>all utleieinntekt skattefri</strong>. Dette er Norges mest generøse boligfradrag – og mange boligeiere utnytter det ikke. Leier du ut hele boligen, er de første <strong>20 000 kr</strong> skattefrie.</p>

        <h2>3. Fradrag for vedlikehold (ved skattepliktig utleie)</h2>
        <p>Dersom du driver skattepliktig utleie, kan du trekke fra <strong>vedlikeholdskostnader</strong> løpende. Maling, rørlegger, elektriker – alt som vedlikeholder standarden. Påkostninger (verdiheving) kan avskrives over tid.</p>

        <h2>4. Påkostninger og inngangsverdi</h2>
        <p>Selv om du ikke får direkte fradrag for oppussing av boligen du bor i, øker påkostninger <strong>inngangsverdien</strong>. Dette reduserer en eventuell gevinst ved fremtidig salg – og dermed skatten.</p>

        <h2>5. Foreldrefradrag (barnehage og SFO)</h2>
        <p>Ikke et boligfradrag i seg selv, men viktig for boligeiere med barn: Du får fradrag for pass av barn under 12 år med inntil <strong>25 000 kr</strong> for første barn og 15 000 kr per ekstra barn.</p>

        <h2>Kan jeg få fradrag for oppussing av bolig?</h2>
        <p>Ikke direkte som et årlig skattefradrag. Men oppussing kan gi skattefordeler på to måter:</p>
        <ul>
          <li><strong>Skattepliktig utleie:</strong> Vedlikeholdskostnader kan fradrages løpende i utleieinntekten.</li>
          <li><strong>Ved salg:</strong> Påkostninger (verdiheving) øker inngangsverdien og reduserer skattepliktig gevinst.</li>
        </ul>

        <h2>Slik finner du dine skjulte boligfradrag</h2>
        <p>Bruk vår interaktive <Link href="/eiendom">Fradrags-veiviser for eiendom</Link> for å finne alle fradrag du har krav på. Den tar deg gjennom din situasjon steg for steg og gir deg en personlig sjekkliste.</p>
      </article>
      <RelatedGuides guides={[
        { href: '/guide/skatt-ved-salg-av-utleiebolig', title: 'Skatt ved salg av utleiebolig', description: 'Gevinstberegning, inngangsverdi og fradrag.' },
        { href: '/guide/skattefritt-boligsalg-regler', title: 'Skattefritt boligsalg', description: 'Botidskrav og regler for skattefri gevinst.' },
        { href: '/guide/airbnb-skatt-utleie', title: 'Airbnb-skatt', description: 'Regler for korttidsutleie i 2026.' },
        { href: '/eiendom', title: 'Boligskatt-guiden', description: 'Den store guiden til all boligskatt.' },
      ]} />
      <VerifisertInnhold />
    </main>
  );
}
