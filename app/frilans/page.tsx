import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import EnkDeduction from '@/components/EnkDeduction';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Frilans og ENK: Fradrag og skatt i 2026',
  description: 'Slik maksimerer du fradragene for enkeltpersonforetak (ENK). Finn skjulte penger til hjemmekontor, utstyr og bil.',
  alternates: {
    canonical: 'https://smartskatt.no/frilans',
  },
};

export default function FrilansPillarPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hva kan jeg trekke fra på skatten i mitt ENK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Som innehaver av et ENK kan du trekke fra alle utgifter som er direkte knyttet til inntektens ervervelse. Dette inkluderer blant annet hjemmekontor (2 150 kr standardfradrag i 2026), elektronikk, programvare, yrkesreiser og kurs.'
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script
        id="faq-schema-frilans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <header className="mb-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
          <span>💼 Frilans & Enkeltpersonforetak</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">
          Skatteguiden for ENK: Få med deg hvert eneste fradrag i 2026
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance mb-4">
          Driver du for deg selv? Gratulerer! Men pass på at du ikke betaler mer skatt enn du må. Slik navigerer du jungelen av fradrag (sagt med vanlige ord).
        </p>
      </header>

      {/* AEO-Snippet: Direct Answer */}
      <div className="bg-indigo-900 text-white p-8 rounded-3xl mb-12 shadow-xl border-4 border-indigo-200">
        <h2 className="text-2xl font-bold mt-0 mb-4 text-indigo-100 flex items-center">
          <span className="text-3xl mr-3">💡</span>
          Hva kan jeg trekke fra på skatten i mitt ENK?
        </h2>
        <p className="text-xl font-medium mb-0 leading-relaxed">
          Skatteetaten har én hovedregel: Du kan trekke fra <strong>alle kostnader som er nødvendige for å skape inntekt i bedriften din</strong>. Kjøper du en bærbar PC til koding, leier du et kontor, eller reiser du til en kunde? Alt dette spiser ned overskuddet ditt – slik at du betaler mindre skatt.
        </p>
      </div>

      <EnkDeduction />

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-indigo-600 prose-headings:text-slate-900 mb-16 mt-12">
        <h2 className="text-3xl font-bold">Skal du velge ENK eller AS i 2026?</h2>
        <p>
          Den klassiske debatten. Mange starter som ENK, men når overskuddet runder en halv million, begynner AS å bli fristende av skattemessige årsaker (pluss redusert personlig risiko!).
        </p>
        
        {/* Comparison Table ENK vs AS */}
        <div className="overflow-x-auto mt-6 mb-6 rounded-xl border border-indigo-100 shadow-sm">
          <table className="w-full text-left bg-white border-collapse">
            <thead>
              <tr className="bg-indigo-50 text-indigo-900">
                <th className="p-4 font-bold border-b border-indigo-200">Kategori</th>
                <th className="p-4 font-bold border-b border-indigo-200 text-center w-1/3">Enkeltpersonforetak (ENK)</th>
                <th className="p-4 font-bold border-b border-indigo-200 text-center w-1/3">Aksjeselskap (AS)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 text-sm md:text-base">
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold">Skattesats på overskudd</td>
                <td className="p-4 text-center">Inntil 49,6 % (Trinnskatt)</td>
                <td className="p-4 text-center">Flat 22 % (Selskapsskatt)</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold">Skatt på uttak (utbytte)</td>
                <td className="p-4 text-center">Ingen! (Skattes løpende)</td>
                <td className="p-4 text-center">37,84 % (Utbytteskatt)</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold">Sykepenger fra NAV</td>
                <td className="p-4 text-center">80 % fra dag 17</td>
                <td className="p-4 text-center">100 % fra dag 17 (som ansatt)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold">Minste startkapital</td>
                <td className="p-4 text-center">0 kr</td>
                <td className="p-4 text-center">30 000 kr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-slate-500 italic mt-2 mb-8">
          Kompis-tips: Selv om totalbeskatningen for AS (overskudd + utbytte) nærmer seg ENK sin maks-skatt, er fordelen med AS at du kan <strong>reinvestere</strong> overskuddet i selskapet for kun 22 % skatt!
        </p>

      </article>

      {/* Dypdykk / Silos */}
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">
        Dypdykk: Bli en mester på ENK-reglene
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/frilans/fradrag-sjekkliste" className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all block">
          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
            Den komplette fradragslisten →
          </h3>
          <p className="text-slate-600">
            Fra bredbånd og kaffe til representasjon og bil. Her er alt du kan skrive av på skatten.
          </p>
        </Link>
      </div>

    </main>
  );
}
