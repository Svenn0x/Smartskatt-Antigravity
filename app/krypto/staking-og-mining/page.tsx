import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Pickaxe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skatte på Staking, DeFi og Mining (2026)',
  description: 'Komplett guide for beskatning av passive krypto-inntekter som staking, liquidity pools, og mining.',
  alternates: {
    canonical: 'https://smartskatt.no/krypto/staking-og-mining',
  },
};

export default function StakingOgMiningPage() {
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
          <Pickaxe className="w-4 h-4" />
          <span>Dypdykk: DeFi & Passive Inntekter</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Skatt på Staking, DeFi og Mining
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Tjener kryptoen din egne penger mens du sover? Kult for deg, men Skatteetaten anser dette som kapitalinntekt og krever 22 % skatt. Her er reglene.
        </p>
      </header>

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-indigo-600 prose-headings:text-slate-900">
        <h2>Staking og "Renter" (Yield)</h2>
        <p>Når du låser kryptoen din for å validere nettverket (staking), eller låner ut krypto via DeFi-protokoller, mottar du ofte "rewards".</p>
        <p><strong>Når inntreffer skatten?</strong> Skatten slår inn på det tidspunktet du får råderett over kryptovalutaen. Hvis du for eksempel staker Ethereum og får rewards utbetalt hver dag, skal du i teorien beregne verdien av rewarden (i NOK) hver eneste dag. Det samlede beløpet føres som kapitalinntekt (22 %).</p>
        
        <h2>Liquidity Pools (LP)</h2>
        <p>Når du legger tokens i en Liquidity Pool (f.eks på Uniswap), bytter du i praksis dine tokens mot en LP-token. Dette byttet utløser realisasjon (og dermed skatt) på dine opprinnelige tokens. Når du senere tar pengene ut av poolen, er det et nytt salg av LP-tokenen. Eventuelle gebyr-inntekter fra poolen løpende regnes som kapitalinntekt.</p>
      </article>
    </main>
  );
}
