import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Briefcase, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skatt og Fradrag for Pendlerbolig (2026 Regler)',
  description: 'Lær hvordan botidskravet for skattefritt salg gjelder for pendlerboliger, og hvordan du kan få fradrag for boutgifter når du jobber i en annen by.',
  alternates: {
    canonical: 'https://smartskatt.no/eiendom/spesialtilfeller/pendlerbolig-fradrag',
  },
};

export default function PendlerboligFradragPage() {
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
          <Briefcase className="w-4 h-4" />
          <span>Spesialtilfelle: Pendlerbolig</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Pendlerbolig og skattefritt salg
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Må du jobbe i en annen by, og sitter med to boliger? Skattereglene for pendlere er komplekse, men kan være ekstremt gunstige om de gjøres rett.
        </p>
      </header>

      {/* Information Gain AEO: Visste du dette? */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl mb-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="text-6xl">💡</span>
        </div>
        <h3 className="text-xl font-bold text-amber-900 mt-0 mb-2">Visste du dette? (Fradrag for Pendlerbolig med familie)</h3>
        <p className="text-amber-800 text-base mb-0">
          De fleste pendlere er klar over at de kan selge <em>primærboligen</em> skattefritt selv om de bor i pendlerboligen på grunn av "brukshindring". Men visste du at du ofte kan få <strong>fradrag for husleien i pendlerboligen</strong> dersom du er gift eller har barn som bor igjen i primærboligen (familiependler)? Dette kan utgjøre over 150 000 kroner i fradrag i året! Hvis du derimot kjøper pendlerboligen, får du kun fradrag for renter (ikke selve avdragene).
        </p>
      </div>

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-indigo-600 prose-headings:text-slate-900">
        <h2>Botidskravet: Godkjent fravær (Brukshindring)</h2>
        <p>Hovedregelen for å selge egen bolig skattefritt, er at du må ha bodd der i 12 av de siste 24 månedene før salget. Men pendlere omfattes av en gullkantet unntaksregel kalt "brukshindring".</p>
        
        <p>
          Hvis du må bo et annet sted på grunn av arbeidet ditt, regnes tiden du er borte som om du <em>faktisk</em> hadde bodd i primærboligen. Kravene for at dette skal godkjennes er:
        </p>

        <ul className="space-y-2 mt-4 mb-8">
          <li className="flex items-start">
            <MapPin className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
            <span>Du bodde i boligen da du fikk beskjed om at du måtte jobbe en annen plass.</span>
          </li>
          <li className="flex items-start">
            <MapPin className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
            <span>Fraværet skyldes jobb, studier eller helsemessige årsaker.</span>
          </li>
          <li className="flex items-start">
            <MapPin className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
            <span>Du visste ikke om jobben/studiet på tidspunktet du kjøpte boligen.</span>
          </li>
        </ul>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl my-8">
          <h3 className="text-xl font-bold text-emerald-900 mt-0 mb-2">Utleie under fraværet</h3>
          <p className="text-emerald-800 text-sm mb-0">
            Du kan faktisk leie ut primærboligen din 100 % mens du er borte, uten at du mister retten til skattefritt salg. Selve <em>leieinntekten</em> vil imidlertid være skattepliktig (22 %), ettersom du fysisk ikke bor der og oppfyller "halvparten-regelen".
          </p>
        </div>

        <h2>Salg av selve pendlerboligen</h2>
        <p>
          Mange ender opp med å kjøpe en pendlerbolig (sekundærbolig) framfor å leie. Hvis du har bodd i pendlerboligen 4 dager i uken gjennom mange år, anser Skatteetaten denne som din primære bolig skattemessig? 
        </p>
        <p>
          Nei, ikke nødvendigvis. For ugifte kan boligen med flest oppholdsdager regnes som primærbolig. Men for <em>ektefeller</em> regnes den felles boligen hvor ektefellen/barna bor som det faste bostedet, uansett antall døgn du tilbringer i pendlerboligen. Det betyr at pendlerboligen ofte regnes som sekundærbolig og er skattepliktig ved salg – <em>med mindre</em> du har benyttet den som pendlerbolig og kan påberope deg egne botidsregler for pendlere (pendlerbolig-fritaket for salg av sekundærbolig benyttet til egen pendling).
        </p>

      </article>
    </main>
  );
}
