import type { Metadata } from 'next';
import ComparisonGrid from '@/components/ComparisonGrid';
import NextSteps from '@/components/NextSteps';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Beste Utleiesystem for Utleiere (2026)',
  description: 'Hybel.no vs Husleie.no. Hvilket system er best for administrasjon av utleiebolig, depositum og innkreving av leie?',
  alternates: {
    canonical: 'https://smartskatt.no/sammenlign/utleiesystemer',
  },
};

export default function RentalSystemsPage() {
  const tools = [
    {
      id: 1,
      name: 'Hybel.no Premium',
      logo: 'https://www.google.com/s2/favicons?domain=hybel.no&sz=128',
      bestFor: 'Norges største markedsplass for utleie, kombinert med et solid forvaltningssystem.',
      isBest: true,
      rating: 5,
      pros: ['Alt på ett sted (Annonsering + Forvaltning)', 'Gratis depositumskonto og inkasso', 'Signering med BankID'],
      cons: ['Annonsering i selve appen gir ikke samme rekkevidde som Finn.no', 'Koster penger ved mange leieforhold'],
      link: 'https://hybel.no?ref=smartskatt',
      price: 'Gratis for 1 leieforhold'
    },
    {
      id: 2,
      name: 'Husleie.no',
      logo: 'https://www.google.com/s2/favicons?domain=husleie.no&sz=128',
      bestFor: 'Fokusert utelukkende på forvaltning og juss for utleiere. Bygget av utleie-eksperter.',
      isBest: false,
      rating: 4,
      pros: ['Svært gode leiekontrakter', 'Automatisk innkreving og purring', 'Gode samarbeidsavtaler for strøm/forsikring'],
      cons: ['Annonsering må gjøres på andre plattformer (f.eks Finn)', 'Noen tjenester er priset litt høyt'],
      link: 'https://husleie.no?ref=smartskatt',
      price: '99 kr pr. mnd per bolig'
    }
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
          <span>⚖️ Sammenligning</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">
          De Beste Forvaltningssystemene for Utleie
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
          Ikke krev inn leie manuelt, og for guds skyld: Ikke ha depositumet på din egen konto (det er ulovlig!). Her er systemene som automatiserer utleien din.
        </p>
      </header>

      <ComparisonGrid tools={tools} title="Selskapene vi anbefaler" category="utleiesystemer" />

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-indigo-600 prose-headings:text-slate-900 mb-16 mt-16">
        <h2 className="text-3xl font-black">Ekspertens vurdering</h2>
        <p>
          <em>"Leier du ut sokkelleiligheten eller en pendlerbolig? Både Hybel.no og Husleie.no automatiserer den verste delen av utleie: purring på manglende innbetalinger og oppretting av depositumskonto. Hybel stikker av med seieren i vår bok fordi de kombinerer annonsering og forvaltning i én app, og gir deg den første boligen helt gratis. Det betyr 0 kr i kostnader for deg som bare har den ene kjellerleiligheten. Husleie.no er derimot knallsterkt på jus-siden om du driver mer proft."</em>
        </p>

        <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl my-12">
          <h3 className="flex items-center gap-2 text-xl font-bold mt-0 mb-4">
            <ShieldCheck className="w-6 h-6 text-slate-700" />
            Slik vurderer vi selskapene
          </h3>
          <p className="text-sm text-slate-600 mb-0">
            Smartskatt tester utleiesystemene ved å se på hvor juridisk vanntette leiekontraktene er opp mot Husleieloven, og hvor automatisert opprettelsen av depositumskonto er i 2026. Som alltid: Trygghet for utleier er prioritet nummer 1. Enkelte knapper på denne siden er annonselenker, som støtter driften av Smartskatt, men vår "Best i Test" er 100% redaksjonelt valgt basert på hva som gir mest verdi for privat-utleieren.
          </p>
        </div>
      </article>

      <NextSteps currentHub="eiendom" />
    </main>
  );
}
