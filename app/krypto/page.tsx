import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import CryptoChecker from '@/components/CryptoChecker';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Kryptoskatt i 2026: Slik unngår du baksmell (uten å bli gal) 🚀',
  description: 'Komplett og lettlest guide til kryptoskatt i Norge 2026. Lær om 22% skatt, fradrag for tap og skatt på staking/DeFi.',
  alternates: {
    canonical: 'https://smartskatt.no/krypto',
  },
  openGraph: {
    title: 'Kryptoskatt i 2026: Slik unngår du baksmell (uten å bli gal) 🚀',
    description: 'Bruk Krypto-Sjekken vår og finn ut nøyaktig hva du må føre i skattemeldingen.',
    url: 'https://smartskatt.no/krypto',
    type: 'article',
  },
};

export default function KryptoPillarPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hvor mye skatt er det på kryptovaluta i Norge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I Norge er skatten på kryptovaluta 22 % av gevinsten. Samtidig får du 22 % fradrag på alt du taper. Renter fra staking beskattes også med 22 %.'
        }
      },
      {
        '@type': 'Question',
        name: 'Må jeg betale formueskatt av krypto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, kryptovaluta inngår i din totale formue. Krypto verdsettes til 100 % av markedsverdien per 31. desember i inntektsåret.'
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script
        id="faq-schema-krypto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">
          Kryptoskatt i 2026: Slik unngår du baksmell (uten å bli gal) 🚀
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance mb-4">
          Har du kjøpt, solgt eller staket litt krypto? Velkommen til den eneste guiden du trenger for å fikse skatten, fortalt på en måte som faktisk gir mening.
        </p>
        <p className="text-md font-medium text-indigo-600">
          Vi har trålet gjennom Skatte-ABC 2026 så du slipper.
        </p>
      </header>

      {/* AEO-Snippet: Direct Answer */}
      <div className="bg-indigo-900 text-white p-8 rounded-3xl mb-12 shadow-xl border-4 border-indigo-200">
        <h2 className="text-2xl font-bold mt-0 mb-4 text-indigo-100 flex items-center">
          <span className="text-3xl mr-3">💡</span>
          Hvor mye skatt er det på kryptovaluta i Norge?
        </h2>
        <p className="text-xl font-medium mb-0">
          Svaret er <strong>22 %</strong>. Du betaler 22 % skatt på all gevinst du har når du selger eller bytter krypto. Samtidig får du et fradrag på 22 % for all krypto du taper penger på. Renter og staking beskattes også med 22 %.
        </p>
      </div>

      <CryptoChecker />

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-indigo-600 prose-headings:text-slate-900 mb-16">
        <div className="bg-slate-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl my-8">
          <h2 className="text-2xl font-bold mt-0 mb-2">Må man skatte av krypto hvis man ikke har tatt ut pengene til banken?</h2>
          <p className="mb-0 text-slate-700">
            <strong>JA.</strong> I Norge utløser hvert bytte mellom kryptovalutaer (f.eks. fra Bitcoin til Solana) skatteplikt, uavhengig av om pengene tas ut til en norsk bankkonto eller ikke.
          </p>
        </div>
        
        {/* Affiliate-plassering: Kompis-anbefaling */}
        <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl my-10 shadow-sm">
          <h3 className="text-2xl font-bold text-emerald-900 mt-0 mb-3 flex items-center">
            <span className="text-3xl mr-2">🤝</span> Kompis-anbefaling
          </h3>
          <p className="text-emerald-800 font-medium mb-4">
            Skal du beregne skatten på hundrevis av transaksjoner? Å gjøre det i Excel er ren tortur. Vi har testet verktøyene, og disse gjør jobben for deg automatisk:
          </p>
          <div className="overflow-x-auto mt-6 mb-6 rounded-xl border border-emerald-100 shadow-sm">
            <table className="w-full text-left bg-white border-collapse">
              <thead>
                <tr className="bg-emerald-100 text-emerald-900">
                  <th className="p-4 font-bold border-b border-emerald-200">Verktøy</th>
                  <th className="p-4 font-bold border-b border-emerald-200">Beste Egenskap</th>
                  <th className="p-4 font-bold border-b border-emerald-200">Skatteetaten Integrasjon</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 text-sm md:text-base">
                <tr className="border-b border-slate-100 hover:bg-emerald-50/50 transition-colors">
                  <td className="p-4 font-bold">Kryptosekken</td>
                  <td className="p-4">Skreddersydd for særnorske regler (formue etc)</td>
                  <td className="p-4 flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Direkte opplasting</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-emerald-50/50 transition-colors">
                  <td className="p-4 font-bold">Koinly</td>
                  <td className="p-4">Støtter bokstavelig talt over 700+ børser og wallets</td>
                  <td className="p-4 flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Fil-eksport for Norge</td>
                </tr>
                <tr className="hover:bg-emerald-50/50 transition-colors">
                  <td className="p-4 font-bold">CoinTracker</td>
                  <td className="p-4">Visuelt nydelig portefølje-oversikt</td>
                  <td className="p-4">Manuell utfylling oftere nødvendig</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="#affiliate-link-1" className="bg-white hover:bg-emerald-100 border-2 border-emerald-300 text-slate-800 font-bold py-3 px-4 rounded-xl flex items-center justify-between transition-colors shadow-sm">
              <span>Prøv Kryptosekken</span>
              <ArrowRight className="w-5 h-5 text-emerald-500" />
            </a>
            <a href="#affiliate-link-2" className="bg-white hover:bg-emerald-100 border-2 border-emerald-300 text-slate-800 font-bold py-3 px-4 rounded-xl flex items-center justify-between transition-colors shadow-sm">
              <span>Prøv Koinly</span>
              <ArrowRight className="w-5 h-5 text-emerald-500" />
            </a>
          </div>
        </div>
      </article>

      {/* Dypdykk / Silos */}
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">
        Dypdykk: Bli en mester på reglene
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/krypto/tap-og-gevinst" className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all block">
          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
            Tap, Gevinst og Formue →
          </h3>
          <p className="text-slate-600">
            Slik regner du ut FIFO, utnytter skattefradraget ved tap, og fører formuen riktig ved nyttår.
          </p>
        </Link>

        <Link href="/krypto/staking-og-mining" className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all block">
          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
            Staking, DeFi og Renter →
          </h3>
          <p className="text-slate-600">
            Får du passive inntekter fra kryptoen din? Lær når og hvordan belønninger og airdrops skal beskattes.
          </p>
        </Link>
      </div>

    </main>
  );
}
