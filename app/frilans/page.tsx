import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Info, CheckCircle2, Star, AlertCircle } from 'lucide-react';
import EnkDeduction from '@/components/EnkDeduction';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Frilans-guiden: Maksimalt utbytte av ditt ENK i 2026 🚀',
  description: 'Skatt er ikke kjipt hvis du vet hva du kan trekke fra! Her er topp 5 fradrag for Enkeltpersonforetak og vår interaktive fradrags-automat.',
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
          text: 'Som innehaver av et ENK kan du trekke fra alle utgifter som er nødvendige for å skape inntekt i bedriften. Dette inkluderer hjemmekontor, elektronikk, programvare, yrkesreiser, og kurs.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hva er standardfradraget for hjemmekontor i 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I 2026 er standardfradraget (sjablongfradraget) for hjemmekontor 2 150 kroner, forutsatt at du har et eksklusivt rom i boligen som kun benyttes til jobb.'
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
        <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
          <span>💼 Frilans & Enkeltpersonforetak</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">
          Frilans-guiden: Maksimalt utbytte av ditt ENK i 2026 🚀
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance mb-4">
          Mange tror at skatt er kjipt. Men vet du hva som er gøy? Å oppdage at du kan føre store deler av livsstilen din (PC, reiser, kaffe) som næringsutgift! Slik gjør du det lovlig og smart.
        </p>
      </header>

      {/* Fradrags-Automaten */}
      <EnkDeduction />

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-emerald-600 prose-headings:text-slate-900 mb-16 mt-16">
        
        {/* AEO: Topp 5 glemte fradrag */}
        <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden my-12 border-4 border-slate-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-3xl font-black mt-0 mb-6 text-emerald-400 flex items-center gap-3">
            <Star className="w-8 h-8" />
            Topp 5 fradrag alle ENK-eiere glemmer
          </h2>
          <p className="text-slate-300 mb-8 font-medium">Skatteetaten forteller deg ikke automatisk hva du har krav på. Sørg for at du har med disse fem gullgruvene i næringsoppgaven din:</p>
          
          <div className="space-y-6">
            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mt-0 mb-2 flex items-center gap-2">
                <span className="bg-emerald-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span> 
                Hjemmekontor-fella
              </h3>
              <p className="text-slate-400 mb-0 text-base">Har du et eget rom til kontor? Du kan kreve <strong>2 150 kr</strong> (2026-sats) skattefritt! Har du det stående tomt? Ikke la staten få de pengene.</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mt-0 mb-2 flex items-center gap-2">
                <span className="bg-emerald-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span> 
                Mobil & Internett (Ekom)
              </h3>
              <p className="text-slate-400 mb-0 text-base">Firmaet ditt kan betale hele regningen for bredbånd og mobil. Du får et sjablongtillegg for privat bruk på 4 392 kr på toppen av inntekten din, men selve kostnaden – inkludert moms (hvis du er mva-registrert) – får du trukket fra.</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mt-0 mb-2 flex items-center gap-2">
                <span className="bg-emerald-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span> 
                Faglig oppdatering (Kurs)
              </h3>
              <p className="text-slate-400 mb-0 text-base">Kjøpt et kurs på nettet for å bli bedre i jobben din? Så lenge kurset <em>vedlikeholder</em> kompetansen din (og ikke er en helt ny grunnutdanning), er det 100 % fradragsberettiget.</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mt-0 mb-2 flex items-center gap-2">
                <span className="bg-emerald-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span> 
                Programvare og "Småting"
              </h3>
              <p className="text-slate-400 mb-0 text-base">Adobe-lisenser, webhotell, domener, apper, og ChatGPT Plus. Hver hundrelapp teller når du skal senke skattebyrden. Før opp alt!</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mt-0 mb-2 flex items-center gap-2">
                <span className="bg-emerald-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span> 
                Tilleggsforsikring
              </h3>
              <p className="text-slate-400 mb-0 text-base">Hvis du som selvstendig næringsdrivende kjøper en tilleggsforsikring hos NAV (slik at du får sykepenger fra dag 1 istedenfor dag 17), er denne premien fullt ut fradragsberettiget i næringsinntekten.</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl my-10">
          <h2 className="text-2xl font-bold mt-0 mb-2 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-emerald-600" />
            Husk kvitteringene!
          </h2>
          <p className="mb-0 text-slate-700">
            Den gylne regelen: Ingen kvittering, intet fradrag. Bruk en app som Fiken eller Conta til å ta bilde av kaffekopp-kvitteringen med én gang, så slipper du å grave i jakkelommene i april.
          </p>
        </div>

        <h2 className="text-3xl font-bold">Skal du velge ENK eller AS i 2026?</h2>
        <p>
          Den klassiske debatten. Mange starter som ENK, men når overskuddet runder en halv million, begynner AS å bli fristende av skattemessige årsaker (pluss redusert personlig risiko!).
        </p>
        
        {/* Comparison Table ENK vs AS */}
        <div className="overflow-x-auto mt-6 mb-6 rounded-xl border border-emerald-100 shadow-sm">
          <table className="w-full text-left bg-white border-collapse">
            <thead>
              <tr className="bg-emerald-50 text-emerald-900">
                <th className="p-4 font-bold border-b border-emerald-200">Kategori</th>
                <th className="p-4 font-bold border-b border-emerald-200 text-center w-1/3">Enkeltpersonforetak (ENK)</th>
                <th className="p-4 font-bold border-b border-emerald-200 text-center w-1/3">Aksjeselskap (AS)</th>
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

      </article>

      {/* Dypdykk / Silos */}
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">
        Dypdykk: Bli en mester på reglene
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/frilans/fradrag-sjekkliste" className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all block">
          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
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
