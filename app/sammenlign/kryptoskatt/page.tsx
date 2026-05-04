import type { Metadata } from 'next';
import ComparisonGrid from '@/components/ComparisonGrid';
import NextSteps from '@/components/NextSteps';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'De Beste Kryptoskatt-Verktøyene (2026 Test)',
  description: 'Sammenligning av Firi, Kryptosekken og Koinly. Hvilket verktøy er best for å rapportere kryptoskatt i Norge?',
  alternates: {
    canonical: 'https://smartskatt.no/sammenlign/kryptoskatt',
  },
};

export default function CryptoToolsPage() {
  const tools = [
    {
      id: 1,
      name: 'Kryptosekken',
      logo: 'https://logo.clearbit.com/kryptosekken.no',
      bestFor: 'Norskutviklet og skreddersydd for Skatteetatens systemer. Henter data automatisk fra de fleste børser.',
      isBest: true,
      rating: 5,
      pros: ['100% tilpasset norske skatteregler', 'Ferdig utfylt RF-1159 skjema', 'Integrasjon mot Altinn'],
      cons: ['Litt datert brukergrensesnitt', 'Support kan ta tid i høysesong'],
      link: 'https://kryptosekken.no?ref=smartskatt',
      price: 'Fra 0 kr (inntil 100 transaksjoner)'
    },
    {
      id: 2,
      name: 'Firi',
      logo: 'https://logo.clearbit.com/firi.com',
      bestFor: 'Nordens største kryptobørs. Gjør skatteberegningen lekende lett, men kun for handlene du gjør hos dem.',
      isBest: false,
      rating: 4,
      pros: ['Skatteberegning er innebygd og gratis', 'Super-enkel app', 'Trygt (Norsk selskap)'],
      cons: ['Støtter ikke beregning av krypto kjøpt på andre børser', 'Begrenset utvalg av mynter'],
      link: 'https://firi.com/no?ref=smartskatt',
      price: 'Gratis skatterapport for egne kunder'
    },
    {
      id: 3,
      name: 'Koinly',
      logo: 'https://logo.clearbit.com/koinly.io',
      bestFor: 'Verdensledende verktøy som støtter alt av børser og DeFi. Kraftig, men krever at du forstår reglene litt selv.',
      isBest: false,
      rating: 4,
      pros: ['Enorm støtte for internasjonale børser og DeFi', 'Vakkert og raskt UI', 'Gode portefølje-oversikter'],
      cons: ['Ikke 100% tilpasset norske sær-regler på alt', 'Kan være dyrt for mange transaksjoner'],
      link: 'https://koinly.io?ref=smartskatt',
      price: 'Fra 490 kr pr. skatteår'
    }
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
          <span>⚖️ Sammenligning</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">
          De Beste Krypto-skatteverktøyene i 2026
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
          Å regne ut kryptoskatt manuelt med Excel er som å grave en tunnel med en teskje. Her er verktøyene som gjør jobben for deg, helt lovlig og uten feil.
        </p>
      </header>

      <ComparisonGrid tools={tools} title="Verktøyene vi anbefaler" category="kryptoskatt" />

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-orange-600 prose-headings:text-slate-900 mb-16 mt-16">
        <h2 className="text-3xl font-black">Ekspertens vurdering</h2>
        <p>
          <em>"Kryptosekken vinner på walkover hvis du har tradet på Binance, KuCoin eller drevet med staking. Det er kanskje ikke det peneste verktøyet i verden, men det spytter ut de nøyaktige tallene Skatteetaten krever. Har du derimot kun kjøpt Bitcoin og Ethereum inne på Firi-appen? Da trenger du ikke betale for noe eksternt verktøy i det hele tatt – Firi løser alt for deg i appen deres."</em>
        </p>

        <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl my-12">
          <h3 className="flex items-center gap-2 text-xl font-bold mt-0 mb-4">
            <ShieldCheck className="w-6 h-6 text-slate-700" />
            Slik vurderer vi selskapene
          </h3>
          <p className="text-sm text-slate-600 mb-0">
            Smartskatt er 100 % uavhengig. Vi tester verktøyene ved å laste opp komplekse transaksjonslogger (inkludert DeFi og tap/gevinst-scenarier) og vurderer hvor godt de håndterer Skatteetatens særnorske regler for 2026. Noen lenker på denne siden er annonselenker, som betyr at vi kan få en provisjon om du handler, men dette påvirker aldri hvem vi kårer til testvinner.
          </p>
        </div>
      </article>

      <NextSteps currentHub="krypto" />
    </main>
  );
}
