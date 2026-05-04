import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FeaturedSnippet, VerifisertInnhold, RelatedGuides } from '@/components/shared/GuideComponents';

export const metadata: Metadata = {
  title: 'Staking-skatt i Norge 2026 – Skatt på staking, DeFi og mining',
  description: 'Komplett guide til skatt på staking i Norge. Lær når staking-belønninger beskattes, satser, formuesverdi og rapportering i skattemeldingen 2026.',
  alternates: { canonical: 'https://smartskatt.no/guide/staking-skatt-norge' },
  openGraph: { title: 'Staking-skatt i Norge 2026', description: 'Skatt på staking, DeFi og mining. Komplett guide.', url: 'https://smartskatt.no/guide/staking-skatt-norge', type: 'article' },
};

export default function StakingSkattPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'Må man betale skatt av staking i Norge?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, staking-belønninger beskattes som kapitalinntekt med 22 % på tidspunktet du mottar dem. Verdien settes til markedsprisen i NOK på mottakstidspunktet.' } },
    { '@type': 'Question', name: 'Når beskattes staking-belønninger?', acceptedAnswer: { '@type': 'Answer', text: 'Staking-belønninger beskattes på tidspunktet de mottas (tilgjengelig for deg). Verdien i NOK på mottakstidspunktet blir din inngangsverdi for fremtidig salg.' } },
    { '@type': 'Question', name: 'Er mining skattepliktig i Norge?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, mining beskattes som kapitalinntekt (22 %) for privatpersoner. Dersom mining drives som næring, beskattes det som næringsinntekt med opp til 50,6 % marginalsats.' } },
  ]};

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script id="faq-staking" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-bold mb-4"><span>⚡</span> Staking & DeFi</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">Staking-skatt i Norge 2026 – Skatt på staking, DeFi og mining</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed text-balance">Får du passive inntekter fra kryptovaluta gjennom staking, DeFi eller mining? Her er den komplette guiden til hvordan Skatteetaten behandler disse inntektene i 2026.</p>
        <p className="text-sm text-slate-400 mt-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Sist oppdatert: 4. mai 2026</p>
      </header>
      <FeaturedSnippet title="Kort oppsummering: Staking-skatt i Norge" points={[
        'Staking-belønninger beskattes som kapitalinntekt (22 %) ved mottak.',
        'Verdien i NOK på mottakstidspunktet = din inngangsverdi.',
        'Mining: Kapitalinntekt (22 %) for privatpersoner, næringsinntekt ved profesjonell drift.',
        'DeFi/Yield farming: Samme prinsipp – beskattes ved mottak av belønning.',
        'Airdrops: Skattepliktige ved mottak dersom de har verdi.',
        'Formuesverdi: All krypto inkl. staking-beholdning per 31. desember.',
      ]} />
      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <h2>Må man betale skatt av staking i Norge?</h2>
        <p><strong>Ja.</strong> Skatteetaten behandler staking-belønninger som <strong>kapitalinntekt</strong>. Skatten er 22 % av markedsverdien i NOK på tidspunktet belønningen mottas (blir tilgjengelig for deg). Dette gjelder uavhengig av om du selger belønningen videre eller lar den ligge.</p>
        <p>Verdien på mottakstidspunktet blir også din <strong>inngangsverdi</strong> (kostpris). Selger du staking-belønningen senere for en høyere pris, betaler du ytterligere 22 % på differansen.</p>

        <h2>Eksempel: Skatt på Ethereum-staking</h2>
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl my-6 not-prose">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Beregning</h3>
          <ul className="space-y-2 text-slate-700">
            <li>Du staker 10 ETH gjennom hele 2025.</li>
            <li>Du mottar 0,5 ETH i staking-belønning over året.</li>
            <li>Gjennomsnittlig verdi ved mottak: 25 000 kr per ETH.</li>
            <li>Skattepliktig inntekt: 0,5 × 25 000 = <strong>12 500 kr</strong></li>
            <li>Skatt (22 %): <strong>2 750 kr</strong></li>
          </ul>
        </div>

        <h2>Når skjer beskatningen – ved mottak eller salg?</h2>
        <p>Beskatning skjer ved <strong>mottak</strong>. Selv om du aldri selger staking-belønningene, er de skattepliktige i det øyeblikket de tilskrives din konto. Selger du dem senere, beskattes eventuell tilleggsgevinst (eller du får fradrag for tap) basert på differansen mellom salgspris og inngangsverdien.</p>

        <h2>Mining – hobby vs. næringsvirksomhet</h2>
        <p>Mining beskattes avhengig av omfanget:</p>
        <ul>
          <li><strong>Hobby/privat mining:</strong> Kapitalinntekt, 22 % skatt. Fradrag for strøm og utstyr kan være begrenset.</li>
          <li><strong>Næring:</strong> Hvis mining drives som næringsvirksomhet (betydelig omfang, investering i utstyr), beskattes det som næringsinntekt med opp til <strong>50,6 % marginalsats</strong>. Til gjengjeld får du fullt fradrag for alle driftskostnader inkludert strøm, utstyr og lokaler.</li>
        </ul>

        <h2>DeFi, yield farming og liquidity pools</h2>
        <p>DeFi-protokoller og yield farming behandles i prinsippet likt staking: Belønninger beskattes ved mottak. Men det er nyanser:</p>
        <ul>
          <li><strong>Yield farming:</strong> Belønning ved mottak = kapitalinntekt (22 %).</li>
          <li><strong>Liquidity pools:</strong> Innskudd og uttak av tokens kan utløse realisasjon.</li>
          <li><strong>Impermanent loss:</strong> Kan gi fradrag dersom tapet realiseres ved uttak fra poolen.</li>
        </ul>
        <p>Skatteetaten har signalisert at tydeligere retningslinjer for DeFi er under utarbeidelse. Inntil videre anbefales en konservativ tilnærming.</p>

        <h2>Airdrops – er de skattepliktige?</h2>
        <p><strong>Ja</strong>, dersom airdropen har en faktisk markedsverdi når du mottar den. Verdien i NOK på mottakstidspunktet er skattepliktig som kapitalinntekt. Airdrops uten verdi (f.eks. tokens uten marked) er ikke skattepliktige før de eventuelt selges.</p>

        <h2>Slik rapporterer du staking i skattemeldingen</h2>
        <p>Staking-belønninger rapporteres som kapitalinntekt i skattemeldingen under «Virtuell valuta». Du kan bruke <Link href="/guide/krypto-skattemelding-utfylling">vår steg-for-steg guide til krypto i skattemeldingen</Link> for detaljert fremgangsmåte.</p>

        <p><Link href="/krypto" className="font-bold">Tilbake til hovedguiden for kryptoskatt →</Link></p>
      </article>
      <RelatedGuides guides={[
        { href: '/guide/skatt-pa-krypto-norge', title: 'Kryptoskatt i Norge 2026', description: 'Komplett guide til 22% skatt, FIFO og fradrag.' },
        { href: '/guide/krypto-skattemelding-utfylling', title: 'Krypto i skattemeldingen', description: 'Steg-for-steg utfylling for kryptovaluta.' },
        { href: '/krypto/staking-og-mining', title: 'Staking og Mining (dypdykk)', description: 'Detaljert gjennomgang fra kryptohubben.' },
        { href: '/sammenlign/kryptoskatt', title: 'Krypto-skatteverktøy', description: 'Kryptosekken vs Koinly vs Firi.' },
      ]} />
      <VerifisertInnhold />
    </main>
  );
}
