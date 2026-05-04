import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FeaturedSnippet, VerifisertInnhold, RelatedGuides } from '@/components/shared/GuideComponents';

export const metadata: Metadata = {
  title: 'Skattefritt boligsalg 2026 – Botidskrav, eiertid og regler',
  description: 'Når kan du selge bolig skattefritt? Lær botidskravet (12 av 24 mnd), eiertidskrav og unntak for arvet bolig. Komplett guide oppdatert for 2026.',
  alternates: { canonical: 'https://smartskatt.no/guide/skattefritt-boligsalg-regler' },
  openGraph: { title: 'Skattefritt boligsalg 2026', description: 'Botidskrav, eiertid og regler for skattefri gevinst.', url: 'https://smartskatt.no/guide/skattefritt-boligsalg-regler', type: 'article' },
};

export default function SkattefrittBoligsalgPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'Hva er botidskravet for skattefritt boligsalg?', acceptedAnswer: { '@type': 'Answer', text: 'Du må ha eid boligen i minst 12 måneder og bodd i den i minst 12 av de siste 24 månedene før aksept av bud. Da er gevinsten skattefri.' } },
    { '@type': 'Question', name: 'Kan man selge arvet bolig skattefritt?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, dersom du arver boligen og oppfyller botidskravet selv. Du overtar arvelaters eiertid (kontinuitetsprinsippet) fra 2014, men du må selv ha bodd der 12 av siste 24 mnd.' } },
    { '@type': 'Question', name: 'Hva skjer hvis man ikke oppfyller botidskravet?', acceptedAnswer: { '@type': 'Answer', text: 'Da er gevinsten skattepliktig med 22 %. Men du får også fradrag for tap (22 %). Skatten beregnes av salgspris minus inngangsverdi.' } },
  ]};

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script id="faq-skattefritt-salg" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-4"><span>🏠</span> Boligsalg</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">Skattefritt boligsalg i 2026 – Botidskrav, eiertid og regler</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed text-balance">Visste du at de fleste norske boligsalg er 100 % skattefrie? Men reglene er strenge. Her er alt du trenger å vite om botidskravet, eiertid og unntakene – inkludert arvet bolig og pendlerbolig.</p>
        <p className="text-sm text-slate-400 mt-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Sist oppdatert: 4. mai 2026</p>
      </header>
      <FeaturedSnippet title="Kort oppsummering: Skattefritt boligsalg" points={[
        'Eiertid: Minimum 12 måneder.',
        'Botid: Du må ha bodd i boligen i 12 av de siste 24 månedene.',
        'Oppfyller du begge: Gevinsten er 100 % skattefri.',
        'Oppfyller du ikke: 22 % skatt på gevinsten (men fradrag for tap).',
        'Arvet bolig: Du overtar arvelaters eiertid, men må selv oppfylle botidskravet.',
        'Fritidsbolig: Krav er strengere – 5 av siste 8 år med eget bruk.',
      ]} />
      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <h2>Hva er botidskravet for skattefritt boligsalg?</h2>
        <p>For at gevinsten ved salg av bolig skal være <strong>skattefri</strong>, må to krav være oppfylt:</p>
        <ol>
          <li><strong>Eiertid:</strong> Du må ha eid boligen i minst <strong>12 måneder</strong>.</li>
          <li><strong>Botid:</strong> Du må ha brukt boligen som din faste bolig i minst <strong>12 av de siste 24 månedene</strong> før du aksepterer et bud.</li>
        </ol>
        <p>Begge kravene må være oppfylt. Oppfyller du bare ett av dem, er gevinsten skattepliktig med 22 %.</p>

        <h2>Hvordan regner man botid?</h2>
        <p>Botiden regnes fra den datoen du faktisk <strong>flyttet inn</strong> og brukte boligen som din faste bopel, til du <strong>aksepterer budet</strong> (ikke kontraktsdato eller overtakelsesdato). Korte opphold utenfor boligen (ferie, jobbreiser) bryter ikke botiden.</p>

        <h2>Hva med arvet bolig?</h2>
        <p>Arver du en bolig, overtar du arvelaters <strong>eiertid</strong> (kontinuitetsprinsippet, gjelder fra 2014). Men du må selv oppfylle <strong>botidskravet</strong> – dvs. ha bodd i boligen i 12 av de siste 24 månedene før salg.</p>
        <p>I praksis: Arver du barndomshjemmet og selger det uten å flytte inn, er gevinsten skattepliktig. Flytter du inn og bor der i 12 måneder, kan du selge skattefritt.</p>

        <h2>Hva skjer hvis man ikke oppfyller botidskravet?</h2>
        <p>Gevinsten beskattes med <strong>22 %</strong>. Men det betyr også at du får <strong>22 % fradrag</strong> dersom du selger med tap. Skatten beregnes av salgspris minus inngangsverdi (kjøpesum + dokumentavgift + påkostninger).</p>

        <h2>Fritidsbolig – andre regler</h2>
        <p>For fritidsbolig (hytte, cabin) gjelder strengere krav: Du må ha brukt boligen som egen fritidsbolig i minst <strong>5 av de siste 8 årene</strong>, og eid den i minst 5 år. Utleie i perioder bryter normalt ikke brukskravet.</p>

        <h2>Pendlerbolig – et viktig unntak</h2>
        <p>Har du en bolig der du jobber og en familiebolig der familien bor? Pendlerboligen regnes normalt som din skattemessige bolig hvis du oppfyller vilkårene for pendlerstatus. Botidskravet gjelder for den boligen du «bor i» skattemessig.</p>

        <h2>Tips for å optimalisere tidspunkt for salg</h2>
        <ul>
          <li>Planlegg salget slik at botidskravet er oppfylt – en måned for lite kan koste hundretusener i skatt.</li>
          <li>Har du akkurat kjøpt og vurderer å selge? Vent til 12 måneders botid.</li>
          <li>Bruk <Link href="/eiendom">boligskatt-kalkulatoren vår</Link> for å beregne nøyaktig skatt vs. skattefri gevinst.</li>
        </ul>
      </article>
      <RelatedGuides guides={[
        { href: '/guide/skatt-ved-salg-av-utleiebolig', title: 'Skatt ved salg av utleiebolig', description: 'Regler for sekundærbolig og utleiebolig.' },
        { href: '/guide/boligfradrag-komplett-guide', title: 'Boligfradrag 2026', description: 'Alle fradrag du kan kreve som boligeier.' },
        { href: '/guide/airbnb-skatt-utleie', title: 'Airbnb-skatt', description: 'Skattefrie grenser og regler for korttidsutleie.' },
        { href: '/eiendom', title: 'Boligskatt-guiden', description: 'Den store guiden til eiendomsskatt.' },
      ]} />
      <VerifisertInnhold />
    </main>
  );
}
