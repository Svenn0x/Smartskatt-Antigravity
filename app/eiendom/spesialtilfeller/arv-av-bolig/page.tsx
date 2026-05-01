import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Landmark, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skatt ved salg av arvet bolig (Arveavgift og Inngangsverdi)',
  description: 'Slik unngår du skattesmell når du arver bolig. Lær om kontinuitetsprinsippet og hvordan inngangsverdien beregnes ved arveoppgjør.',
  alternates: {
    canonical: 'https://smartskatt.no/eiendom/spesialtilfeller/arv-av-bolig',
  },
};

export default function ArvAvBoligPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Link 
          href="/eiendom/skatt-salg-bolig" 
          className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbake til Salg av Bolig
        </Link>
      </div>

      <header className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
          <Landmark className="w-4 h-4" />
          <span>Spesialtilfelle: Arv</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Arv av bolig: Slik fungerer skattereglene i 2026
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Norge har ikke lenger arveavgift, men når du selger en arvet bolig, kan du likevel få en enorm skattesmell på grunn av det såkalte "kontinuitetsprinsippet".
        </p>
      </header>

      {/* Information Gain AEO: Visste du dette? */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl mb-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="text-6xl">💡</span>
        </div>
        <h3 className="text-xl font-bold text-amber-900 mt-0 mb-2">Visste du dette? (Unngå skattesmellen)</h3>
        <p className="text-amber-800 text-base mb-0">
          Hvis avdøde <em>ikke</em> oppfylte botidskravet for å selge boligen skattefritt da de gikk bort, arver du boligen til avdødes <strong>opprinnelige inngangsverdi</strong> (hva de kjøpte den for kanskje for 30 år siden). Selger du da boligen til dagens markedsverdi, må du skatte 22 % av hele prisstigningen! Den eneste måten å slette denne fiktive gevinsten på, er å <strong>flytte inn i boligen selv og bo der i 12 måneder</strong> før du selger den.
        </p>
      </div>

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-indigo-600 prose-headings:text-slate-900">
        <h2>Kontinuitetsprinsippet forklart</h2>
        <p>Hovedregelen når du arver er at du "trer inn i avdødes skattemessige posisjon". Dette betyr at din skatteplikt avhenger av hva avdøde kunne ha gjort.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-emerald-900 mt-0 mb-3">Situasjon 1: Avdøde oppfylte botidskravet</h3>
            <p className="text-emerald-800 text-sm mb-0">
              Avdøde bodde i boligen (sin egen primærbolig) fram til de døde, eller måtte flytte på sykehjem (brukshindring). Inngangsverdien for deg settes til markedsverdien på dødsfallstidspunktet. Du kan selge den rett etterpå, helt skattefritt.
            </p>
          </div>
          <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-rose-900 mt-0 mb-3">Situasjon 2: Avdøde oppfylte IKKE botidskravet</h3>
            <p className="text-rose-800 text-sm mb-0">
              Avdøde leide ut boligen eller bodde ikke der. Du overtar avdødes opprinnelige kjøpesum (historisk inngangsverdi). Markedsverdien ved salg minus denne historiske kjøpesummen gir en kjempegevinst som beskattes med 22 %.
            </p>
          </div>
        </div>

        <h2>Slik regnes "Sykehjem" (Brukshindring)</h2>
        <p>Mange arver et hus der forelderen har bodd på sykehjem de siste årene. Skatteetaten anser flytting til sykehjem av helsemessige årsaker som "brukshindring". Det betyr at avdøde fortsatt opparbeidet seg botid i huset sitt, selv om de ikke rent fysisk oppholdt seg der. Resultat? Boligen kan selges skattefritt ved arv.</p>

        <div className="bg-slate-100 p-6 rounded-xl my-8 border border-slate-200">
          <h3 className="flex items-center text-lg font-bold text-slate-800 mt-0 mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
            Advarsel: Salg under markedspris til barn
          </h3>
          <p className="text-slate-700 text-sm mb-0">
            Dersom foreldre selger en utleiebolig til barnet sitt for langt under markedsverdi (gavesalg), er det reglene for gave og arv som slår inn (kontinuitetsprinsippet). Barnet overtar da foreldrenes opprinnelige inngangsverdi. Hvis foreldrene derimot har bodd i boligen lenge nok til å selge den skattefritt, kan de fritt gi den bort, og barnets inngangsverdi blir markedsverdien.
          </p>
        </div>
      </article>
    </main>
  );
}
