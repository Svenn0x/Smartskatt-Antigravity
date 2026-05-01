import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, TrendingDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skatt på Krypto: Tap, Gevinst og Formue (2026)',
  description: 'Slik regner du ut FIFO, maksimerer fradraget ved krypto-tap, og fyller ut formuesverdien riktig.',
  alternates: {
    canonical: 'https://smartskatt.no/krypto/tap-og-gevinst',
  },
};

export default function TapOgGevinstPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Link 
          href="/krypto" 
          className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbake til Krypto-guiden
        </Link>
      </div>

      <header className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
          <TrendingDown className="w-4 h-4" />
          <span>Dypdykk: Gevinst og Tap</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Beregning av Gevinst og Tap (FIFO)
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Kjøpt Bitcoin på ti forskjellige tidspunkter, og solgt halvparten? Velkommen til hodepinen kalt FIFO (First In, First Out).
        </p>
      </header>

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-indigo-600 prose-headings:text-slate-900">
        <h2>FIFO-prinsippet</h2>
        <p>Skatteetaten krever at du bruker FIFO-prinsippet. Det betyr at den første kryptovalutaen du kjøpte (f.eks Bitcoin i 2017), anses for å være den første du selger (i f.eks 2026), selv om du oppbevarer dem i forskjellige wallets.</p>
        
        <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-2xl my-8">
          <h3 className="text-xl font-bold text-rose-900 mt-0 mb-2">Ikke glem tapet! 📉</h3>
          <p className="text-rose-800 text-sm mb-0">
            Har du tapt penger på shitcoins? Tap gir deg <strong>22 % fradrag</strong> på skatten! Men husk at tapet kun kan trekkes fra når du <em>realiserer</em> tapet (selger eller bytter). Hvis en coin har gått til null, men du fortsatt eier den, har du strengt tatt ikke realisert tapet. Et tips er å sende dem til en "burn-adresse" (da regnes de som tapt/realisert).
          </p>
        </div>

        <h2>Krypto til Krypto = Salg</h2>
        <p>Mange tror de bare må skatte når de tar pengene ut til norske kroner. Dette er feil. Hvis du bytter 1 Ethereum mot Solana, har du skattemessig <em>solgt</em> din Ethereum for norske kroner, og kjøpt Solana for disse. Ethvert bytte utløser en gevinst- eller tapsberegning.</p>
      </article>
    </main>
  );
}
