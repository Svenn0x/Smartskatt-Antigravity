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
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
          Har du kjøpt, solgt eller staket litt krypto? Velkommen til den eneste guiden du trenger for å fikse skatten, fortalt på en måte som faktisk gir mening.
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
        <h2>Hvordan fungerer skatten i praksis?</h2>
        <p>
          Hver gang du selger en krypto, eller bytter én krypto mot en annen (for eksempel fra Bitcoin til Ethereum), utløser du skatt. Skatteetaten bryr seg ikke om du har tatt pengene ut til den norske bankkontoen din; transaksjonen skjer i det øyeblikket handelen utføres på kryptobørsen.
        </p>
        
        {/* Affiliate-plassering: Kompis-anbefaling */}
        <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl my-10 shadow-sm">
          <h3 className="text-2xl font-bold text-emerald-900 mt-0 mb-3 flex items-center">
            <span className="text-3xl mr-2">🤝</span> Kompis-anbefaling
          </h3>
          <p className="text-emerald-800 font-medium mb-4">
            Skal du beregne skatten på hundrevis av transaksjoner? Å gjøre det i Excel er ren tortur. Vi har testet verktøyene, og disse gjør jobben for deg automatisk:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="#affiliate-link-1" className="bg-white hover:bg-emerald-100 border-2 border-emerald-300 text-slate-800 font-bold py-3 px-4 rounded-xl flex items-center justify-between transition-colors">
              <span>KryptoSek (Norsk favoritt)</span>
              <ArrowRight className="w-5 h-5 text-emerald-500" />
            </a>
            <a href="#affiliate-link-2" className="bg-white hover:bg-emerald-100 border-2 border-emerald-300 text-slate-800 font-bold py-3 px-4 rounded-xl flex items-center justify-between transition-colors">
              <span>Koinly (Global gigant)</span>
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
