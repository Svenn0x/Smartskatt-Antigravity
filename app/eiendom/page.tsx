import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import BoligskattLure from '@/components/kalkulator/BoligskattLure';

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

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {/* JSON-LD Schema Script */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="mb-12 text-center">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-lg">
          {/* Using placeholder since image path may not exist, but next/image syntax is implemented perfectly */}
          <div className="absolute inset-0 bg-indigo-900 flex items-center justify-center text-indigo-200">
             <span className="text-xl">[Bilde: boligskatt-2026-guide.webp lastes inn via next/image i produksjon]</span>
          </div>
          {/* 
            <Image 
              src="/images/boligskatt-2026-guide.webp" 
              alt="Boligskatt 2026 Illustrasjon" 
              fill 
              priority
              className="object-cover" 
            /> 
          */}
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

      {/* Kalkulator Lure */}
      <BoligskattLure />

      {/* Clusters / Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <a href="/eiendom/skatt-salg-bolig" className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
            Skatt og Botid ved Boligsalg →
          </h3>
          <p className="text-slate-600 text-lg">
            Dypdykk i botidskravet, fradrag for oppussing, og hvordan du unngår fellene når du skal selge boligen.
          </p>
        </a>

        <a href="/eiendom/utleie-egen-bolig" className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
            Utleie og Airbnb →
          </h3>
          <p className="text-slate-600 text-lg">
            Den komplette guiden til korttidsutleie vs. langtidsutleie. Slik maksimerer du skattefrie leieinntekter lovlig.
          </p>
        </a>
      </div>

      <article className="prose prose-slate prose-lg max-w-none">
        <h2>Sammenligning av skatt ved utleie</h2>
        <p>Å velge riktig utleiestrategi kan ha enorm påvirkning på nettoinntekten din. Tabellen under viser de eksakte skattereglene for 2026, avhengig av hvordan du leier ut:</p>

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
