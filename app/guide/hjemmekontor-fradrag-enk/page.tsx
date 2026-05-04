import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FeaturedSnippet, VerifisertInnhold, RelatedGuides } from '@/components/shared/GuideComponents';

export const metadata: Metadata = {
  title: 'Hjemmekontor-fradrag for ENK 2026 – Sjablong vs. faktiske kostnader',
  description: 'Alt om hjemmekontor-fradrag for enkeltpersonforetak i 2026. Sjablong på 2 150 kr eller faktiske kostnader? Krav, dokumentasjon og beregning.',
  alternates: { canonical: 'https://smartskatt.no/guide/hjemmekontor-fradrag-enk' },
  openGraph: { title: 'Hjemmekontor-fradrag ENK 2026', description: 'Sjablong vs. faktiske kostnader for ENK.', url: 'https://smartskatt.no/guide/hjemmekontor-fradrag-enk', type: 'article' },
};

export default function HjemmekontorFradragPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'Hva er hjemmekontor-fradraget for ENK i 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Sjablongfradraget for hjemmekontor er 2 150 kr per år i 2026. Alternativt kan du kreve fradrag for faktiske kostnader basert på rommets andel av boligens totale areal.' } },
    { '@type': 'Question', name: 'Hvilke krav er det til hjemmekontor-fradrag?', acceptedAnswer: { '@type': 'Answer', text: 'Du må ha et eget rom i boligen som brukes eksklusivt til næringsvirksomhet. Rommet kan ikke brukes privat – f.eks. som gjesterom eller TV-stue i tillegg.' } },
    { '@type': 'Question', name: 'Er sjablong eller faktiske kostnader best?', acceptedAnswer: { '@type': 'Answer', text: 'Bor du i en storby med høy husleie, vil faktiske kostnader som regel gi mye høyere fradrag enn sjablongen på 2 150 kr. Bor du billig, er sjablongen enklest og krever minimal dokumentasjon.' } },
  ]};

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script id="faq-hjemmekontor" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-4"><span>💼</span> ENK & Hjemmekontor</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">Hjemmekontor-fradrag for ENK i 2026 – Sjablong vs. faktiske kostnader</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed text-balance">Jobber du hjemmefra i ditt enkeltpersonforetak? Da har du krav på hjemmekontor-fradrag. Men hvilken metode gir mest fradrag – sjablongen på 2 150 kr eller faktiske kostnader? Her er den komplette guiden.</p>
        <p className="text-sm text-slate-400 mt-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Sist oppdatert: 4. mai 2026</p>
      </header>
      <FeaturedSnippet title="Kort oppsummering: Hjemmekontor-fradrag ENK" points={[
        'Sjablongfradrag: 2 150 kr per år (2026-sats). Enklest metode.',
        'Faktiske kostnader: Rommets andel av husleie, strøm, forsikring, bredbånd.',
        'Krav: Eget rom som brukes eksklusivt til næring. Ikke blandet bruk.',
        'I dyre byer: Faktiske kostnader gir ofte 5–10x høyere fradrag enn sjablong.',
        'Selveier: Kan beregne andel av fellesutgifter, forsikring og kommunale avgifter.',
      ]} />
      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-emerald-600">
        <h2>Hva er hjemmekontor-fradraget for ENK?</h2>
        <p>Som ENK-eier som jobber hjemmefra har du to metoder for å kreve <strong>skattefradrag for hjemmekontor</strong>. Skatteetaten tillater enten en fast sjablongsats eller beregning basert på dine faktiske kostnader. Valget avhenger av din bosituasjon og hvor mye dokumentasjon du vil føre.</p>

        <h2>Metode 1: Sjablongfradrag (2 150 kr)</h2>
        <p>Den enkleste metoden. Du krever et fast beløp på <strong>2 150 kr per år</strong> (2026-sats) uten å dokumentere faktiske kostnader. Eneste krav er at du har et eget rom i boligen som brukes <em>eksklusivt</em> til næringsvirksomhet.</p>
        <p>Fordeler: Minimalt med papirarbeid. Ulemper: Beløpet er lavt og gir marginalt fradrag.</p>

        <h2>Metode 2: Faktiske kostnader</h2>
        <p>Her beregner du din faktiske kostnad basert på kontorets andel av boligens totale areal. Eksempel:</p>
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl my-6 not-prose">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Eksempel: Faktiske kostnader i Oslo</h3>
          <ul className="space-y-2 text-slate-700">
            <li>Bolig: 80 m². Kontor: 12 m² (15 % av arealet)</li>
            <li>Husleie: 15 000 kr/mnd = 180 000 kr/år</li>
            <li>Strøm: 1 500 kr/mnd = 18 000 kr/år</li>
            <li>Forsikring: 3 000 kr/år</li>
            <li>Total kostnad: 201 000 kr</li>
            <li>Fradrag (15 %): <strong>30 150 kr</strong></li>
          </ul>
          <p className="mt-3 text-sm text-emerald-700 font-bold">→ 14x mer enn sjablongen på 2 150 kr!</p>
        </div>

        <h2>Hvilke krav stiller Skatteetaten?</h2>
        <ul>
          <li>Rommet må være et <strong>eget, avskilt rom</strong> (ikke en krok i stuen).</li>
          <li>Rommet må brukes <strong>eksklusivt</strong> til næringsvirksomhet – ikke som gjesterom, TV-stue e.l.</li>
          <li>Ved faktiske kostnader: Du må ha <strong>dokumentasjon</strong> (kvitteringer, leiekontrakt, strømregninger).</li>
        </ul>

        <h2>Selveier vs. leietaker</h2>
        <p><strong>Leietaker:</strong> Beregn andelen av husleie, strøm og forsikring. Enkelt og greit.</p>
        <p><strong>Selveier:</strong> Du kan beregne andelen av fellesutgifter, kommunale avgifter, forsikring og vedlikehold. Rentekostnader på boliglån trekkes normalt fra som personfradrag og skal ikke dobbeltføres.</p>

        <h2>Kan ansatte med hjemmekontor også kreve fradrag?</h2>
        <p>Ja, men reglene er strengere. Ansatte kan kun kreve hjemmekontor-fradrag dersom arbeidsgiveren <em>ikke</em> tilbyr kontorplass. Satsen er den samme: 2 150 kr sjablong eller faktiske kostnader. For ENK-eiere er dette langt mer relevant, da du typisk ikke har en arbeidsgiver som tilbyr kontor.</p>

        <h2>Prøv Fradrags-Automaten</h2>
        <p>Usikker på om hjemmekontor-fradrag gjelder for deg? <Link href="/frilans" className="font-bold">Prøv vår interaktive Fradrags-Automat →</Link></p>
      </article>
      <RelatedGuides guides={[
        { href: '/guide/fradrag-enk-oversikt', title: 'Alle ENK-fradrag 2026', description: 'Komplett oversikt over fradrag for enkeltpersonforetak.' },
        { href: '/guide/enk-vs-as-skatt', title: 'ENK vs AS', description: 'Når lønner det seg å gå fra ENK til AS?' },
        { href: '/sammenlign/regnskapsprogram-enk', title: 'Beste regnskapsprogram', description: 'Fiken vs Conta vs Tripletex for ENK.' },
        { href: '/frilans', title: 'Frilans-guiden', description: 'Hovedguiden til skattefradrag for frilansere.' },
      ]} />
      <VerifisertInnhold />
    </main>
  );
}
