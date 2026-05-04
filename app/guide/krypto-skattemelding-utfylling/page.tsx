import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FeaturedSnippet, VerifisertInnhold, RelatedGuides } from '@/components/shared/GuideComponents';

export const metadata: Metadata = {
  title: 'Krypto i skattemeldingen 2026 – Steg-for-steg utfylling',
  description: 'Slik fyller du ut skattemeldingen for kryptovaluta i 2026. RF-1159, formuesverdi, gevinst/tap og rapportering. Komplett steg-for-steg guide.',
  alternates: { canonical: 'https://smartskatt.no/guide/krypto-skattemelding-utfylling' },
  openGraph: { title: 'Krypto i skattemeldingen 2026', description: 'Steg-for-steg guide til å fylle ut skattemeldingen for krypto.', url: 'https://smartskatt.no/guide/krypto-skattemelding-utfylling', type: 'article' },
};

export default function KryptoSkattemeldingPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'Hvordan fører jeg krypto i skattemeldingen?', acceptedAnswer: { '@type': 'Answer', text: 'Logg inn på skatteetaten.no, gå til Finans → Virtuell valuta. Legg inn alle transaksjoner med kjøps-/salgsdato, beløp og gevinst/tap. Oppgi formuesverdi per 31. desember. Bruk verktøy som Kryptosekken for automatisk rapportgenerering.' } },
    { '@type': 'Question', name: 'Hva er RF-1159 for krypto?', acceptedAnswer: { '@type': 'Answer', text: 'RF-1159 er skjemaet Skatteetaten bruker for rapportering av kryptovaluta. Her fører du opp gevinst, tap og formuesverdi. Fra 2024 er dette integrert i den digitale skattemeldingen.' } },
    { '@type': 'Question', name: 'Når er fristen for skattemeldingen for krypto?', acceptedAnswer: { '@type': 'Answer', text: 'Fristen for å levere skattemeldingen er 30. april 2026 for inntektsåret 2025. Du kan søke om utsettelse til 31. mai.' } },
  ]};

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script id="faq-krypto-skattemelding" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-bold mb-4"><span>₿</span> Krypto & Skattemelding</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">Krypto i skattemeldingen 2026 – Steg-for-steg utfylling</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed text-balance">Usikker på hvordan du fører kryptovaluta i skattemeldingen? Her er den komplette steg-for-steg guiden til RF-1159, formuesverdi og rapportering av gevinst og tap til Skatteetaten.</p>
        <p className="text-sm text-slate-400 mt-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Sist oppdatert: 4. mai 2026</p>
      </header>
      <FeaturedSnippet title="Kort oppsummering: Krypto i skattemeldingen" points={[
        'Logg inn på skatteetaten.no → Finans → Virtuell valuta.',
        'Legg inn alle transaksjoner: kjøp, salg, bytte, staking.',
        'Bruk FIFO-metoden for å beregne gevinst/tap.',
        'Oppgi formuesverdi per 31. desember (100 % av markedsverdi).',
        'Frist: 30. april 2026 (kan utsettes til 31. mai).',
        'Verktøy som Kryptosekken og Koinly automatiserer prosessen.',
      ]} />
      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <h2>Hvordan fører jeg krypto i skattemeldingen?</h2>
        <p>Skatteetaten har fra og med inntektsåret 2024 et eget felt for <strong>virtuell valuta / kryptovaluta</strong> i den digitale skattemeldingen. Du trenger ikke lenger et separat papirskjema – alt gjøres online. Her er prosessen steg for steg:</p>

        <h2>Steg 1: Samle alle transaksjoner</h2>
        <p>Før du logger inn på Skatteetaten, trenger du oversikt over alle kryptotransaksjoner du har gjort i inntektsåret. Dette inkluderer kjøp, salg, bytte mellom kryptovalutaer, staking-belønninger, airdrops og bruk av krypto til betaling. Bruk børsenes transaksjonshistorikk eller et verktøy som <Link href="/sammenlign/kryptoskatt">Kryptosekken eller Koinly</Link> for å generere en komplett rapport.</p>

        <h2>Steg 2: Beregn gevinst og tap (FIFO)</h2>
        <p>For hver realisasjon (salg eller bytte) må du beregne gevinst eller tap. Skatteetaten krever <strong>FIFO-metoden</strong> (First In, First Out): Den kryptoen du kjøpte først anses som den du selger først. Verktøy som Kryptosekken gjør dette automatisk.</p>

        <h2>Steg 3: Logg inn og fyll ut</h2>
        <ol>
          <li>Gå til <strong>skatteetaten.no</strong> og logg inn med BankID.</li>
          <li>Åpne skattemeldingen for inntektsåret 2025.</li>
          <li>Naviger til <strong>«Finans»</strong> → <strong>«Virtuell valuta / kryptovaluta»</strong>.</li>
          <li>Legg inn samlet gevinst og samlet tap for året.</li>
          <li>Oppgi formuesverdien av all krypto du eier per 31. desember.</li>
        </ol>

        <h2>Steg 4: Formuesverdi per 31. desember</h2>
        <p>All kryptovaluta du eier per 31. desember inngår i formuen din og verdsettes til <strong>100 % av markedsverdien</strong> i norske kroner. Bruk kursen kl. 00:00 natt til 1. januar. Formuesskatt beregnes av total formue over bunnfradraget (1 800 000 kr for enslige, 3 600 000 kr for ektefeller).</p>

        <h2>Steg 5: Send inn og kontroller</h2>
        <p>Kontroller at alle beløp stemmer, og send inn skattemeldingen innen <strong>30. april 2026</strong>. Du kan søke om utsettelse til 31. mai via skatteetaten.no.</p>

        <h2>Hvilke verktøy gjør dette enklere?</h2>
        <p>Har du mange transaksjoner, er det nesten umulig å gjøre beregningene manuelt. Disse verktøyene genererer ferdig rapport for Skatteetaten:</p>
        <ul>
          <li><strong>Kryptosekken</strong> – Skreddersydd for norske regler, direkte opplasting til Skatteetaten.</li>
          <li><strong>Koinly</strong> – Støtter 700+ børser og wallets, eksporterer fil for norsk skattemelding.</li>
          <li><strong>Firi</strong> – Norsk børs som automatisk rapporterer til Skatteetaten for handler gjort på plattformen.</li>
        </ul>
        <p><Link href="/sammenlign/kryptoskatt" className="font-bold">Sammenlign krypto-skatteverktøy →</Link></p>

        <h2>Hva skjer hvis jeg ikke rapporterer krypto?</h2>
        <p>Skatteetaten har tilgang til data fra norske kryptobørser og samarbeider med internasjonale aktører. Manglende rapportering kan gi <strong>tilleggsskatt</strong> (normalt 20 %) og i grove tilfeller anmeldelse. Det lønner seg alltid å rapportere – også tap, som gir deg fradrag.</p>
      </article>
      <RelatedGuides guides={[
        { href: '/guide/skatt-pa-krypto-norge', title: 'Kryptoskatt i Norge 2026', description: 'Komplett guide til regler, satser og FIFO.' },
        { href: '/guide/staking-skatt-norge', title: 'Staking-skatt', description: 'Skatt på staking, DeFi og passiv krypto-inntekt.' },
        { href: '/krypto/tap-og-gevinst', title: 'Tap, gevinst og FIFO', description: 'Utnytt tapsfradraget med konkrete eksempler.' },
        { href: '/krypto', title: 'Krypto-guiden', description: 'Hovedguiden til kryptoskatt på Smartskatt.' },
      ]} />
      <VerifisertInnhold />
    </main>
  );
}
