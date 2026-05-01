import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import BoligskattLure from '@/components/kalkulator/BoligskattLure';
import FradragsVeiviser from '@/components/kalkulator/FradragsVeiviser';

export const metadata: Metadata = {
  title: 'Boligskatt 2026: Den store guiden til skatt på eiendom',
  description: 'Alt du må vite om boligskatt i 2026. Lær reglene for skattefritt boligsalg, utleie (Airbnb og langtids) og formuesverdi. 100% oppdatert for Skatteetaten.',
  alternates: {
    canonical: 'https://smartskatt.no/eiendom',
  },
  openGraph: {
    title: 'Boligskatt 2026: Den store guiden til skatt på eiendom',
    description: 'Få full oversikt over botidskrav, skattefri leieinntekt og formueskatt for eiendom i 2026. Beregn din boligskatt her.',
    url: 'https://smartskatt.no/eiendom',
    type: 'article',
    images: [
      {
        url: '/images/boligskatt-2026-guide.webp',
        width: 1200,
        height: 630,
        alt: 'Boligskatt 2026 – En komplett guide fra Smartskatt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boligskatt 2026 – Komplett Guide',
    description: 'Lær reglene for skattefritt boligsalg og utleie. 100% oppdatert.',
    images: ['/images/boligskatt-2026-guide.webp'],
  },
};

export default function EiendomPillarPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hva er botidskravet for å selge bolig skattefritt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Du må ha eid boligen i minst 12 måneder, og du må ha bodd i boligen i minst 12 av de siste 24 månedene før du aksepterer et bud. Da er gevinsten skattefri.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hvor mye skatt er det på utleie av bolig?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Skattesatsen for utleie er 22 % i 2026. Leier du ut under halvparten av boligen din, er inntekten 100 % skattefri. Leier du ut hele boligen, er inntil 20 000 kr skattefritt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hvordan skattlegges Airbnb-utleie i 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ved korttidsutleie (under 30 dager) er inntekter inntil 10 000 kr per år skattefrie. Av beløpet over 10 000 kr, regnes 85 % som skattepliktig inntekt, som beskattes med 22 %.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hva skjer hvis jeg selger bolig med tap?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dersom boligen ikke oppfyller botidskravet for skattefri gevinst, er gevinsten skattepliktig. Det betyr også at dersom du selger med tap, vil du få skattefradrag (22 % av tapet).',
        },
      },
      {
        '@type': 'Question',
        name: 'Hva er formuesverdien på primærbolig?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Formuesverdien for din primærbolig (der du bor) settes vanligvis til 25 % av markedsverdien for verdier opp til 10 millioner kroner, og 70 % for verdien som overstiger dette.',
        },
      },
    ],
  };

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Sammenligning av utleie: Privat vs. AS i 2026',
    description: 'En tabell som sammenligner skatteregler, fradrag og satser for boligutleie som privatperson mot utleie gjennom Aksjeselskap (AS) i Norge for inntektsåret 2026.',
    keywords: ['skattesats', 'privat utleie', 'utleie AS', 'eiendomsskatt', '2026'],
    license: 'https://creativecommons.org/publicdomain/zero/1.0/',
    creator: {
      '@type': 'Organization',
      name: 'Smartskatt',
    },
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {/* JSON-LD Schema Script */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="dataset-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />

      <header className="mb-12 text-center">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-lg bg-indigo-900">
          {/* Implementert next/image for optimalisering */}
          <Image 
            src="/images/boligskatt-2026-guide.webp" 
            alt="Skatt utleie bolig Oslo 2026" 
            fill 
            priority
            className="object-cover opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Den store guiden til <span className="text-indigo-600">Boligskatt i 2026</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Norges mest komplette og oppdaterte ressurs for deg som skal selge, leie ut eller regne ut skatt på eiendommen din. 
        </p>
      </header>

      {/* AEO Direct Answer Box */}
      <section 
        className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded-r-2xl mb-12 shadow-sm"
        id="oppsummering-eiendomsskatt"
      >
        <h2 className="text-2xl font-bold text-indigo-950 mb-4 flex items-center">
          <span className="mr-3 text-3xl" aria-hidden="true">💡</span> 
          Hovedregler for boligskatt i Norge (2026)
        </h2>
        <div className="text-indigo-900 space-y-4 text-lg">
          <p>
            <strong>Salg av egen bolig:</strong> Gevinsten er <strong>100 % skattefri</strong> dersom du har eid boligen i over ett år, og bodd der i minst 12 av de siste 24 månedene før du selger. Oppfyller du ikke kravet, er skatten <strong>22 %</strong>.
          </p>
          <p>
            <strong>Utleie av egen bolig:</strong> Skattefritt dersom du leier ut under halvparten av boligens leieverdi. Leier du ut hele, er <strong>20 000 kr</strong> skattefritt pr år. For korttidsutleie (Airbnb) gjelder en skattefri grense på <strong>10 000 kr</strong>. Skattesatsen over grensene er <strong>22 %</strong>.
          </p>
        </div>
      </section>

      {/* Smart Fradrags-veiviser */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Finn dine skjulte eiendomsfradrag</h2>
          <p className="text-slate-600 text-lg">Vår smarte veiviser hjelper deg å finne alle fradrag du har krav på – enten du leier ut, pusser opp eller skal selge.</p>
        </div>
        <FradragsVeiviser />
      </section>

      {/* Kalkulator Lure */}
      <BoligskattLure />

      {/* Clusters / Navigation Teasers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <Link href="/eiendom/skatt-salg-bolig" className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all block">
          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
            Skatt og Botid ved Boligsalg →
          </h3>
          <p className="text-slate-600 text-lg">
            Dypdykk i botidskravet, særtilfeller som arvet bolig, og hvordan du unngår fellene når du skal selge boligen.
          </p>
        </Link>

        <Link href="/eiendom/utleie-egen-bolig" className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all block">
          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
            Utleie og Airbnb →
          </h3>
          <p className="text-slate-600 text-lg">
            Den komplette guiden til korttidsutleie vs. langtidsutleie. Inkluderer skattefrie grenser og nedlastbar utleiekontrakt.
          </p>
        </Link>
      </div>

      <article className="prose prose-slate prose-lg max-w-none">
        {/* Information Gain AEO: Visste du dette? */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl my-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="text-6xl">💡</span>
          </div>
          <h3 className="text-xl font-bold text-amber-900 mt-0 mb-2">Visste du dette? (Pro-tip)</h3>
          <p className="text-amber-800 text-base mb-0">
            Skatteetaten forteller deg sjelden dette direkte: Hvis du leier ut boligen din skattefritt og skal pusse opp, får du <strong>ikke</strong> fradrag for vedlikeholdskostnadene. Men, hvis du bytter til skattepliktig utleie det siste året før du selger (ved å leie ut over 50 %), kan du brått få fradrag for vedlikehold de siste 5 årene (etter en særskilt beregningsmodell).
          </p>
        </div>

        <h2>Sammenligning av skatt ved utleie: Privat vs. AS</h2>
        <p>Å velge riktig utleiestrategi kan ha enorm påvirkning på nettoinntekten din. Tabellen under viser de eksakte skattereglene for 2026 for privat utleie versus å leie ut gjennom et Aksjeselskap (AS):</p>
        
        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-left text-sm whitespace-nowrap bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-slate-50 uppercase tracking-wider text-slate-500 text-xs border-b border-slate-200">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Område</th>
                <th scope="col" className="px-6 py-4 font-semibold text-indigo-700">Privat Utleie</th>
                <th scope="col" className="px-6 py-4 font-semibold text-emerald-700">Gjennom AS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">Skatt på overskudd</td>
                <td className="px-6 py-4">22 % (Kapitalinntekt)</td>
                <td className="px-6 py-4">22 % (Selskapsskatt)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">Skatt på utbytte til eier</td>
                <td className="px-6 py-4">Ikke aktuelt</td>
                <td className="px-6 py-4">37,84 % (hvis du tar ut pengene privat)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">Skattefritt salg</td>
                <td className="px-6 py-4">Ja, hvis botidskravet (12 av siste 24 mnd) er oppfylt</td>
                <td className="px-6 py-4">Nei, alltid skattepliktig (men fritaksmetoden gjelder ved salg av aksjene)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">Formueskatt (Verdsettelse)</td>
                <td className="px-6 py-4">Primærbolig: 25%. Sekundærbolig: 100%</td>
                <td className="px-6 py-4">Næringseiendom i AS har ofte høy verdsettelse, men gjeldsfradrag gis.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">Regnskapsplikt</td>
                <td className="px-6 py-4">Forenklet / Ofte ingen</td>
                <td className="px-6 py-4">Ja, full regnskaps- og revisjonsplikt for AS</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Sammenligning: Langtidsutleie vs. Korttidsutleie (Privat)</h3>
        <p>Her er en oversikt over de ulike formene for privat utleie og grensene som gjelder i 2026:</p>
        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-left text-sm md:text-base bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-slate-100 uppercase tracking-wider text-slate-600 text-xs font-bold">
              <tr>
                <th className="px-6 py-5">Utleietype</th>
                <th className="px-6 py-5">Skattefri grense</th>
                <th className="px-6 py-5">Skatt (over grensen)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">Langtidsutleie (Du bor der selv)</td>
                <td className="px-6 py-4">Ubegrenset skattefritt</td>
                <td className="px-6 py-4">0 %</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">Langtidsutleie (Hele boligen)</td>
                <td className="px-6 py-4">20 000 kr / år</td>
                <td className="px-6 py-4">22 % fra første krone over</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">Korttidsutleie / Airbnb</td>
                <td className="px-6 py-4">10 000 kr / år</td>
                <td className="px-6 py-4">22 % skatt på 85 % av overskytende</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </main>
  );
}
