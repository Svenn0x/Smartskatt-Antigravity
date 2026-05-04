import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FeaturedSnippet, VerifisertInnhold, RelatedGuides } from '@/components/shared/GuideComponents';

export const metadata: Metadata = {
  title: 'Skattefradrag ENK 2026 – Komplett oversikt over fradrag for enkeltpersonforetak',
  description: 'Fullstendig oversikt over alle skattefradrag du kan kreve i ditt enkeltpersonforetak (ENK) i 2026. Hjemmekontor, bil, elektronikk, kurs og mer.',
  alternates: { canonical: 'https://smartskatt.no/guide/fradrag-enk-oversikt' },
  openGraph: {
    title: 'Alle skattefradrag for ENK i 2026',
    description: 'Hjemmekontor, bil, elektronikk, kurs og mer. Komplett oversikt for enkeltpersonforetak.',
    url: 'https://smartskatt.no/guide/fradrag-enk-oversikt',
    type: 'article',
  },
};

export default function FradragEnkPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Hva kan jeg trekke fra på skatten som ENK?', acceptedAnswer: { '@type': 'Answer', text: 'Du kan trekke fra alle kostnader som er nødvendige for å skape inntekt i bedriften din. Dette inkluderer hjemmekontor (2 150 kr sjablong), elektronikk, programvare, yrkesreiser, kurs, forsikring og representasjon.' } },
      { '@type': 'Question', name: 'Hva er sjablongfradraget for hjemmekontor ENK i 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Sjablongfradraget for hjemmekontor er 2 150 kroner per år i 2026. Du trenger et eget rom i boligen som brukes eksklusivt til næringsvirksomhet. Alternativt kan du kreve fradrag for faktiske kostnader.' } },
      { '@type': 'Question', name: 'Kan jeg skrive av PC og mobil i ENK?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, elektronikk som brukes i næringsvirksomheten kan fradras. Utstyr under 15 000 kr kan utgiftsføres direkte. Over 15 000 kr må det avskrives over levetiden (typisk 3 år for IT-utstyr).' } },
      { '@type': 'Question', name: 'Hva er kjøregodtgjørelse for ENK i 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Kjøregodtgjørelse for bruk av egen bil i næring er 4,90 kr per kilometer i 2026. Du må føre kjørebok for å dokumentere yrkes-kjøringen.' } },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script id="faq-enk-fradrag" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-4">
          <span>💼</span> ENK & Frilans
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">
          Skattefradrag for ENK i 2026 – Komplett oversikt
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed text-balance">
          Driver du enkeltpersonforetak? Da har du krav på en rekke skattefradrag som de fleste glemmer. Her er den komplette oversikten over alle fradrag du kan kreve i 2026, med satser direkte fra Skatteetaten.
        </p>
        <p className="text-sm text-slate-400 mt-4 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Sist oppdatert: 4. mai 2026
        </p>
      </header>

      <FeaturedSnippet
        title="Kort oppsummering: ENK-fradrag 2026"
        points={[
          'Hjemmekontor: 2 150 kr sjablong (eller faktiske kostnader).',
          'Kjøregodtgjørelse: 4,90 kr/km med dokumentert kjørebok.',
          'Elektronikk under 15 000 kr: Direkte utgiftsføring.',
          'Ekom (mobil/bredbånd): Fradrag for kostnaden, sjablongtillegg 4 392 kr.',
          'Kurs og faglig oppdatering: 100 % fradragsberettiget.',
          'Forsikring via NAV (tilleggsdekning sykepenger): Fullt fradrag.',
        ]}
      />

      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-emerald-600">
        <h2>Hva kan jeg trekke fra på skatten som ENK?</h2>
        <p>
          Skatteetaten har én hovedregel for fradrag i enkeltpersonforetak: <strong>Du kan trekke fra alle kostnader som er nødvendige for å skape inntekt i bedriften din</strong>. I praksis betyr dette alt fra PC-en du jobber på til kaffen du serverer en kunde.
        </p>
        <p>
          Men det finnes mange skattefradrag som ENK-eiere systematisk overser. La oss gå gjennom de viktigste kategoriene, med eksakte satser for skatteåret 2026.
        </p>

        <h2>1. Hjemmekontor-fradraget: 2 150 kr (eller mer)</h2>
        <p>
          Har du et eget rom i boligen som brukes <em>eksklusivt</em> til næringsvirksomhet? Da kan du velge mellom to metoder:
        </p>
        <ul>
          <li><strong>Sjablongfradrag:</strong> 2 150 kr per år (2026-sats). Enklest, ingen dokumentasjon utover at rommet finnes.</li>
          <li><strong>Faktiske kostnader:</strong> Du beregner din andel av husleie, strøm, forsikring og vedlikehold basert på rommets andel av total boligareal. Kan gi mye høyere fradrag i dyre byer.</li>
        </ul>
        <p>
          <Link href="/guide/hjemmekontor-fradrag-enk">Les vår detaljerte guide om hjemmekontor-fradrag →</Link>
        </p>

        <h2>2. Kjøregodtgjørelse og bilbruk</h2>
        <p>
          Bruker du egen bil i næringsvirksomheten? Du har to alternativer:
        </p>
        <ul>
          <li><strong>Sjablongsats:</strong> 4,90 kr per kilometer (2026). Krever dokumentert kjørebok.</li>
          <li><strong>Faktiske utgifter:</strong> For yrkeskjøring over 6 000 km/år kan det lønne seg å føre alle bilkostnader og trekke fra yrkesandelen.</li>
        </ul>

        <h2>3. Elektronikk, programvare og utstyr</h2>
        <p>
          Alt av nødvendig utstyr kan fradras. Skatteetaten har en viktig grense:
        </p>
        <ul>
          <li><strong>Under 15 000 kr:</strong> Direkte utgiftsføring i næringsoppgaven det året du kjøper det.</li>
          <li><strong>Over 15 000 kr:</strong> Må avskrives over driftsmidlets levetid (typisk 3 år for IT-utstyr = saldogruppe d, 20 %).</li>
        </ul>
        <p>Typiske poster: MacBook, skjerm, hodetelefoner, Adobe-lisenser, webhotell, domener, ChatGPT Plus, Canva Pro, regnskapsprogrammer.</p>

        <h2>4. Mobil og Internett (Ekom)</h2>
        <p>
          Firmaet ditt kan betale hele regningen for mobilabonnement og bredbånd. Men vær obs: Skatteetaten legger til et <strong>sjablongtillegg på 4 392 kr</strong> til din personinntekt for privat bruk. Netto spar du likevel, fordi selve kostnaden fradrages fullt.
        </p>

        <h2>5. Kurs og faglig oppdatering</h2>
        <p>
          Kjøper du onlinekurs, bøker eller deltar på konferanser for å <em>vedlikeholde</em> kompetansen din? Da er kostnaden <strong>100 % fradragsberettiget</strong>. Merk: Grunnutdanning (f.eks. en mastergrad) er normalt ikke fradragsberettiget, men videre- og etterutdanning innen ditt felt er det.
        </p>

        <h2>6. Forsikring og NAV-tillegg</h2>
        <p>
          Som selvstendig næringsdrivende kan du kjøpe tilleggsforsikring hos NAV for å få sykepenger fra dag 1 (istedenfor dag 17). Denne premien er <strong>fullt fradragsberettiget</strong> i næringsinntekten.
        </p>

        <h2>7. Representasjon og kundepleie</h2>
        <p>
          Inviterer du kunder på lunsj? Representasjonskostnader kan fradras med inntil <strong>560 kr per person</strong> (2026-sats) for enklere bevertning. For dyrere representasjon gjelder egne begrensninger.
        </p>

        <h2>Hva er forskjellen på ENK-fradrag og minstefradrag?</h2>
        <p>
          <strong>Minstefradrag</strong> er et automatisk fradrag i lønnsinntekt (46 % av lønn, maks 118 950 kr). Dette gjelder ikke for næringsinntekt. Som ENK-eier får du isteden fradrag for <em>faktiske driftskostnader</em> gjennom næringsoppgaven. Jo flere lovlige utgifter du fører, jo lavere blir den skattbare næringsinntekten.
        </p>

        <h2>Husk kvitteringene! Den gylne regelen</h2>
        <p>
          Ingen kvittering, intet fradrag. Bruk et regnskapsprogram som <Link href="/sammenlign/regnskapsprogram-enk">Fiken, Conta eller Tripletex</Link> til å ta bilde av kvitteringene med én gang. Da slipper du å grave i jakkelommene i april.
        </p>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl my-8 not-prose">
          <h3 className="text-xl font-bold text-emerald-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🤖</span> Prøv Fradrags-Automaten
          </h3>
          <p className="text-emerald-800 mb-4">
            Ikke sikker på hva du kan trekke fra? Vår interaktive Fradrags-Automat gir deg en personlig sjekkliste basert på din situasjon.
          </p>
          <Link href="/frilans" className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors">
            Start Fradrags-Automaten →
          </Link>
        </div>
      </article>

      <RelatedGuides
        guides={[
          { href: '/guide/hjemmekontor-fradrag-enk', title: 'Hjemmekontor-fradrag ENK', description: 'Sjablong vs. faktiske kostnader – hvilken metode gir mest fradrag?' },
          { href: '/guide/enk-vs-as-skatt', title: 'ENK vs AS i 2026', description: 'Når lønner det seg å gå fra ENK til AS? Komplett skattesammenligning.' },
          { href: '/sammenlign/regnskapsprogram-enk', title: 'Beste regnskapsprogram for ENK', description: 'Fiken vs Conta vs Tripletex – hvem passer best for deg?' },
          { href: '/frilans/fradrag-sjekkliste', title: 'Fradrag-sjekklisten', description: 'Den komplette sjekklisten for alle fradrag i ditt ENK.' },
        ]}
      />

      <VerifisertInnhold />
    </main>
  );
}
