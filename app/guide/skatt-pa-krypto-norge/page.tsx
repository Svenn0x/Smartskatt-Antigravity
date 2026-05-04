import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FeaturedSnippet, VerifisertInnhold, RelatedGuides } from '@/components/shared/GuideComponents';

export const metadata: Metadata = {
  title: 'Skatt på krypto i Norge 2026 – Komplett guide til kryptoskatt',
  description: 'Lær alt om kryptoskatt i Norge for 2026. 22% skatt på gevinst, FIFO-metoden, fradrag for tap, formuesverdi og skattemelding. Oppdatert for Skatte-ABC 2026.',
  alternates: { canonical: 'https://smartskatt.no/guide/skatt-pa-krypto-norge' },
  openGraph: {
    title: 'Skatt på krypto i Norge 2026 – Komplett guide',
    description: 'Alt du trenger å vite om kryptoskatt i Norge. 22% skatt på gevinst, FIFO, fradrag for tap og formuesverdi.',
    url: 'https://smartskatt.no/guide/skatt-pa-krypto-norge',
    type: 'article',
  },
};

export default function SkattPaKryptoPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hvor mye er skatten på Bitcoin i Norge i 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Skatten på Bitcoin og all annen kryptovaluta i Norge er 22 % av gevinsten ved realisasjon (salg, bytte eller bruk). Denne satsen gjelder for inntektsåret 2025, som rapporteres i skattemeldingen for 2026.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hva er FIFO-metoden for kryptoskatt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FIFO (First In, First Out) betyr at du anser den kryptovalutaen du kjøpte først som den du selger først. Skatteetaten krever at du bruker FIFO-metoden for å beregne gevinst og tap på kryptovaluta i Norge.',
        },
      },
      {
        '@type': 'Question',
        name: 'Må jeg skatte av krypto hvis jeg ikke har tatt ut penger?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, i Norge utløser ethvert bytte mellom kryptovalutaer (f.eks. Bitcoin til Ethereum) skatteplikt, uavhengig av om du har tatt ut til norske kroner. Å holde uten å selge (HODL) utløser ikke skatt, men du må fortsatt rapportere formuesverdien.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kan jeg få fradrag for tap på krypto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, realisert tap på kryptovaluta gir 22 % fradrag i skattemeldingen. Tapet må være realisert, dvs. du må ha solgt, byttet eller brukt kryptoen. Urealisert tap gir ikke fradrag.',
        },
      },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script
        id="faq-schema-krypto-guide"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-bold mb-4">
          <span>₿</span> Krypto & Skatt
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">
          Skatt på krypto i Norge 2026: Den komplette guiden til kryptoskatt
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed text-balance">
          Kryptoskatt i Norge trenger ikke å være komplisert. I denne guiden forklarer vi nøyaktig hvordan Skatteetaten behandler Bitcoin, Ethereum og alle andre kryptovalutaer – inkludert realisasjon, formuesverdi, FIFO-metoden og fradrag for tap.
        </p>
        <p className="text-sm text-slate-400 mt-4 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          Sist oppdatert: 4. mai 2026
        </p>
      </header>

      <FeaturedSnippet
        title="Kort oppsummering: Kryptoskatt i Norge"
        points={[
          'Skatten er 22 % på gevinst ved salg, bytte eller bruk av kryptovaluta.',
          'Tap gir 22 % fradrag – men tapet må være realisert (solgt/byttet).',
          'Skatteetaten krever FIFO-metoden (First In, First Out) for beregning.',
          'Formuesverdi: Krypto verdsettes til 100 % av markedsverdien per 31. desember.',
          'Staking-belønninger beskattes som kapitalinntekt (22 %) ved mottak.',
          'Du må rapportere i skattemeldingen selv om du ikke har tatt ut til NOK.',
        ]}
      />

      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <h2>Hva er kryptoskatt? En enkel forklaring</h2>
        <p>
          Kryptoskatt er skatten du betaler på gevinst fra kryptovaluta i Norge. <strong>Skatteetaten</strong> klassifiserer kryptovaluta som et formuesobjekt, ikke som valuta. Det betyr at de samme reglene som gjelder for aksjer og andre verdipapirer – nemlig <strong>realisasjonsprinsippet</strong> – også gjelder for Bitcoin, Ethereum, Solana og alle andre kryptovalutaer.
        </p>
        <p>
          Når du selger, bytter eller bruker kryptovaluta til å kjøpe noe, har du <em>realisert</em> en gevinst eller et tap. Gevinsten beskattes med <strong>22 %</strong>, og tap gir tilsvarende <strong>22 % fradrag</strong>. Å bare holde krypto (HODL) utløser ingen skatt, men du må likevel rapportere formuesverdien.
        </p>

        <h2>Hvor mye er skatten på Bitcoin i Norge i 2026?</h2>
        <p>
          Skatten på Bitcoin – og all annen kryptovaluta – er flat <strong>22 %</strong> på gevinsten. La oss ta et konkret eksempel:
        </p>
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl my-6 not-prose">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Eksempel: Gevinst på Bitcoin</h3>
          <ul className="space-y-2 text-slate-700">
            <li>Du kjøpte 1 BTC for <strong>250 000 kr</strong> i januar 2025.</li>
            <li>Du solgte 1 BTC for <strong>400 000 kr</strong> i desember 2025.</li>
            <li>Gevinst: 400 000 – 250 000 = <strong>150 000 kr</strong></li>
            <li>Skatt (22 %): 150 000 × 0,22 = <strong>33 000 kr</strong></li>
          </ul>
        </div>
        <p>
          Denne skatten rapporteres i skattemeldingen du leverer våren 2026, for inntektsåret 2025. Skatteetaten tilbyr et eget skjema – <strong>RF-1159</strong> – for kryptovaluta.
        </p>

        <h2>FIFO-metoden: Slik beregner Skatteetaten gevinsten din</h2>
        <p>
          <strong>FIFO</strong> står for «First In, First Out». Det betyr at Skatteetaten anser den kryptovalutaen du kjøpte <em>først</em> som den du selger først. Dette er viktig fordi innkjøpsprisen (kostprisen) avgjør hvor stor gevinsten eller tapet blir.
        </p>
        <p>
          La oss si at du kjøpte 1 ETH for 10 000 kr i 2023, og deretter 1 ETH for 30 000 kr i 2024. Hvis du nå selger 1 ETH for 25 000 kr, bruker du FIFO: Du selger den ETH-en du kjøpte først (10 000 kr), og gevinsten blir 25 000 – 10 000 = <strong>15 000 kr</strong>.
        </p>
        <p>
          Hadde du brukt LIFO (Last In, First Out – som <em>ikke</em> er tillatt i Norge), ville du fått et tap: 25 000 – 30 000 = –5 000 kr. Derfor er det viktig å forstå at FIFO ofte gir <em>høyere</em> skattebelastning ved stigende priser.
        </p>

        <h2>Fradrag for tap på kryptovaluta</h2>
        <p>
          Mange glemmer at <strong>realisert tap på kryptovaluta gir 22 % fradrag</strong>. Dersom du har solgt krypto med tap, reduserer dette skatten din. Men merk deg: tapet må være <em>realisert</em>. At kryptoen din har falt i verdi er ikke nok – du må faktisk ha solgt, byttet eller brukt den.
        </p>
        <p>
          <strong>Pro-tips:</strong> Har du krypto som ligger med tap og du uansett vurderer å kvitte deg med den? Ved å realisere tapet før nyttår kan du redusere skatten det inntektsåret. Du kan deretter kjøpe tilbake samme krypto umiddelbart – Skatteetaten har per nå ingen «wash sale»-regel for krypto i Norge.
        </p>

        <h2>Formuesverdi av kryptovaluta</h2>
        <p>
          All kryptovaluta du eier per <strong>31. desember</strong> inngår i formuen din og verdsettes til <strong>100 % av markedsverdien</strong>. Til sammenligning verdsettes aksjer notert på Oslo Børs til 80 %. Formuesskatt på krypto slår derfor relativt hardt sammenlignet med tradisjonelle investeringer.
        </p>
        <p>
          Bunnfradraget for formuesskatt i 2026 er 1 800 000 kr (3 600 000 kr for ektefeller), med en sats på 1,0 % opptil 20 millioner og 1,1 % over.
        </p>

        <h2>Må jeg skatte av krypto hvis jeg ikke har tatt ut penger?</h2>
        <p>
          <strong>Ja og nei.</strong> Å bare holde krypto (HODL) utløser ikke gevinstskatt. Men pass på:
        </p>
        <ul>
          <li>Bytte mellom kryptovalutaer (f.eks. BTC → SOL) = <strong>realisasjon = skattepliktig</strong></li>
          <li>Bruke krypto til å kjøpe en NFT = <strong>realisasjon = skattepliktig</strong></li>
          <li>Betale med krypto i en butikk = <strong>realisasjon = skattepliktig</strong></li>
          <li>Bare holde uten å røre = <strong>ingen gevinstskatt, men formuesskatt</strong></li>
        </ul>

        <h2>Staking, DeFi og passive inntekter</h2>
        <p>
          Belønninger fra <strong>staking</strong> beskattes som kapitalinntekt (22 %) på tidspunktet du mottar dem. Verdien settes til markedsprisen i norske kroner på mottakstidspunktet. Denne verdien blir også din inngangsverdi (kostpris) for fremtidig salg.
        </p>
        <p>
          For <strong>DeFi-protokoller</strong>, <strong>yield farming</strong> og <strong>liquidity pools</strong> gjelder i utgangspunktet de samme prinsippene – men grensedragningen kan være uklar. Skatteetaten har signalisert at de vil komme med tydeligere retningslinjer.
        </p>
        <p>
          <Link href="/krypto/staking-og-mining" className="font-bold">Les vår detaljerte guide om staking og mining →</Link>
        </p>

        <h2>Hvordan fyller jeg ut skattemeldingen for krypto?</h2>
        <p>
          Fra og med inntektsåret 2024 har Skatteetaten innført et eget rapporteringsskjema for kryptovaluta. Slik gjør du det:
        </p>
        <ol>
          <li>Logg inn på <strong>skatteetaten.no</strong> og åpne skattemeldingen.</li>
          <li>Gå til «Finans» → «Virtuell valuta / kryptovaluta».</li>
          <li>Legg inn alle transaksjoner med kjøpsdato, salgsdato, beløp og gevinst/tap.</li>
          <li>Føre opp formuesverdien av krypto du eier per 31. desember.</li>
          <li>Send inn skattemeldingen innen 30. april 2026.</li>
        </ol>
        <p>
          Bruker du verktøy som <Link href="/sammenlign/kryptoskatt">Kryptosekken, Koinly eller Firi</Link>, kan de generere en rapport du laster opp direkte i skattemeldingen.
        </p>
        <p>
          <Link href="/guide/krypto-skattemelding-utfylling" className="font-bold">Steg-for-steg: Slik fyller du ut skattemeldingen for krypto →</Link>
        </p>

        <h2>Kan jeg få fradrag for tap på krypto?</h2>
        <p>
          Absolutt. Realisert tap på kryptovaluta gir <strong>22 % fradrag</strong> i skattemeldingen. Tapet motregnes mot annen kapitalinntekt. Har du mer tap enn gevinst, vil fradraget redusere den samlede skatten din.
        </p>
        <p>
          <Link href="/krypto/tap-og-gevinst" className="font-bold">Les mer: Komplett guide til gevinst, tap og FIFO →</Link>
        </p>
      </article>

      <RelatedGuides
        guides={[
          { href: '/guide/staking-skatt-norge', title: 'Staking-skatt i Norge', description: 'Detaljert guide om skatt på staking, DeFi og passiv krypto-inntekt.' },
          { href: '/guide/krypto-skattemelding-utfylling', title: 'Krypto i skattemeldingen', description: 'Steg-for-steg: Slik fyller du ut skattemeldingen for kryptovaluta.' },
          { href: '/krypto/tap-og-gevinst', title: 'Tap, gevinst og FIFO', description: 'Utnytt tapsfradraget og lær FIFO-metoden med eksempler.' },
          { href: '/sammenlign/kryptoskatt', title: 'Beste krypto-skatteverktøy', description: 'Kryptosekken vs Koinly vs Firi – hvem er best for norske regler?' },
        ]}
      />

      <VerifisertInnhold />
    </main>
  );
}
