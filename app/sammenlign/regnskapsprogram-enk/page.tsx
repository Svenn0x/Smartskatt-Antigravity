import type { Metadata } from 'next';
import ComparisonGrid from '@/components/ComparisonGrid';
import NextSteps from '@/components/NextSteps';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Beste Regnskapsprogram for ENK (2026)',
  description: 'Fiken vs Conta vs Tripletex. Vi har testet de beste regnskapsprogrammene for frilansere og Enkeltpersonforetak i Norge.',
  alternates: {
    canonical: 'https://smartskatt.no/sammenlign/regnskapsprogram-enk',
  },
};

export default function EnkAccountingPage() {
  const tools = [
    {
      id: 1,
      name: 'Fiken',
      logo: '',
      bestFor: 'Norges soleklare favoritt for "ikke-økonomer". Gjør regnskap så enkelt at selv bestemor forstår det.',
      isBest: true,
      rating: 5,
      pros: ['Ekstremt brukervennlig', 'Super app for å scanne kvitteringer', 'Utmerket kundeservice'],
      cons: ['Ikke det billigste alternativet', 'Litt begrensende hvis firmaet vokser veldig stort'],
      link: 'https://fiken.no?ref=smartskatt',
      price: 'Fra 179 kr pr. mnd'
    },
    {
      id: 2,
      name: 'Conta',
      logo: '',
      bestFor: 'Sterk utfordrer til Fiken med svært gode faktureringsløsninger. Ligner mer på tradisjonelt regnskap.',
      isBest: false,
      rating: 4,
      pros: ['Markedets beste faktureringsmodul', 'Litt billigere enn Fiken', 'Solid økosystem'],
      cons: ['Litt brattere læringskurve', 'Ekstra moduler koster raskt ekstra'],
      link: 'https://conta.no?ref=smartskatt',
      price: 'Fra 159 kr pr. mnd'
    },
    {
      id: 3,
      name: 'Tripletex (Basis)',
      logo: '',
      bestFor: 'Kraftig plattform eiet av Visma. Vokser sømløst i takt med at ENK-et ditt blir til et stort AS.',
      isBest: false,
      rating: 4,
      pros: ['Svært skalerbart', 'Mange integrasjoner mot nettbutikker og banker', 'Proft dashboard'],
      cons: ['Altfor avansert for små frilansere', 'Mye "regnskaps-stammespråk"'],
      link: 'https://tripletex.no?ref=smartskatt',
      price: 'Fra 149 kr pr. mnd'
    }
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
          <span>⚖️ Sammenligning</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">
          Det Beste Regnskapsprogrammet for ENK
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
          Ikke prøv å gjøre regnskapet i Excel. En god skyløsning sparer deg for timevis med frustrasjon før skattemeldingen.
        </p>
      </header>

      <ComparisonGrid tools={tools} title="Selskapene vi anbefaler" category="regnskapsprogram" />

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-emerald-600 prose-headings:text-slate-900 mb-16 mt-16">
        <h2 className="text-3xl font-black">Ekspertens vurdering</h2>
        <p>
          <em>"Fiken er fantastisk for deg som hater debet/kredit og bare vil at ting skal funke. De har byttet ut 'kredit' med 'penger ut'. Det er genialt. Men det koster noen lapper i året. Hvis du bare har tre bilag i året, og sender én faktura i måneden, er Fiken kanskje overkill. Da kan du klare deg med Conta sitt gratis faktura-program og føre skatten manuelt. Men for 90% av frilansere i Norge, vil Fiken betale seg selv i form av sparte timer (og reddet nattesøvn)."</em>
        </p>

        <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl my-12">
          <h3 className="flex items-center gap-2 text-xl font-bold mt-0 mb-4">
            <ShieldCheck className="w-6 h-6 text-slate-700" />
            Slik vurderer vi selskapene
          </h3>
          <p className="text-sm text-slate-600 mb-0">
            Vi i Smartskatt har drevet ENK i årevis og kjenner smertene med Næringsoppgave 1. Verktøyene testes basert på tre kriterier: 1) Klarer de å snakke norsk istedenfor regnskapsspråk? 2) Integrerer de sømløst mot Altinn for Skattemeldingen? 3) Har de mobilapper som gjør kvitteringsskanning til en lek? Vi mottar provisjon via annonselenkene, men vi anbefaler kun verktøy vi aktivt bruker eller har testet grundig i produksjon.
          </p>
        </div>
      </article>

      <NextSteps currentHub="frilans" />
    </main>
  );
}
