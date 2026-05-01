import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, AlertTriangle } from 'lucide-react';
import BotidTeller from '@/components/kalkulator/BotidTeller';

export const metadata: Metadata = {
  title: 'Skatt ved salg av bolig: Gevinst, Inngangsverdi og Arv (2026)',
  description: 'Slik beregner du gevinst ved boligsalg. Komplett guide til inngangsverdi, arv av bolig, pendlerbolig og utleiedel.',
  alternates: {
    canonical: 'https://smartskatt.no/eiendom/skatt-salg-bolig',
  },
};

export default function SkattSalgBoligPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Link 
          href="/eiendom" 
          className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbake til hovedguiden for eiendom
        </Link>
      </div>

      <header className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
          <BookOpen className="w-4 h-4" />
          <span>Dypdykk: Boligsalg</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Skatt ved salg av bolig: Gevinst, botid og særtilfeller
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Oppfyller du ikke botidskravet? Her er alt du trenger å vite om hvordan du beregner skattepliktig gevinst, samt reglene for arv og pendlerboliger.
        </p>
      </header>

      {/* AEO Snippet: Slik beregner du inngangsverdi og gevinst */}
      <section 
        className="bg-white border-2 border-slate-200 p-8 rounded-2xl mb-12 shadow-sm"
        id="beregne-inngangsverdi-gevinst"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Slik beregner du inngangsverdi og gevinst
        </h2>
        <p className="text-slate-700 mb-4">
          Når et boligsalg er skattepliktig (fordi eier- og botidskravet på 1 år ikke er oppfylt), skattlegges nettogevinsten med 22 %. Gevinsten regnes ut fra salgssum minus inngangsverdi og omkostninger.
        </p>
        <ul className="space-y-3 text-slate-800">
          <li className="flex items-start">
            <span className="text-indigo-600 font-bold mr-2">1.</span>
            <span><strong>Finn opprinnelig kjøpesum:</strong> Prisen du ga for boligen.</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 font-bold mr-2">2.</span>
            <span><strong>Legg til kjøpsomkostninger:</strong> Dokumentavgift (2,5 %), tinglysingsgebyr og eierskifteforsikring. Dette blir din <em>inngangsverdi</em>.</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 font-bold mr-2">3.</span>
            <span><strong>Legg til påkostninger:</strong> Fradrag gis kun for oppgraderinger som hever boligens standard over det den var ved kjøp (f.eks. bygge på et bad). Vanlig vedlikehold gir <em>ikke</em> fradrag.</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 font-bold mr-2">4.</span>
            <span><strong>Trekk fra salgsomkostninger:</strong> Meglerhonorar, takstmann, styling og boligselgerforsikring trekkes fra selve salgssummen (vederlaget).</span>
          </li>
        </ul>
        <div className="mt-6 p-4 bg-slate-50 rounded-lg text-sm text-slate-600 border border-slate-100">
          <strong>Formel:</strong> (Salgssum - Salgsomkostninger) - (Kjøpesum + Kjøpsomkostninger + Påkostninger) = Skattepliktig Gevinst
        </div>
      </section>

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-indigo-600 prose-headings:text-slate-900">
        <h2>Interaktiv Botid-teller</h2>
        <p>Er du usikker på om du oppfyller kravet til 12 måneders botid? Bruk telleren under for å verifisere nøyaktig hvor mange måneder du har bodd i boligen.</p>
        
        <BotidTeller />

        <hr className="my-10" />

        <h2>Særtilfeller ved boligsalg</h2>
        <p>Ikke alle eiendomsoverdragelser er et standard kjøp og salg. Her er reglene for de vanligste særtilfellene:</p>

        <h3>1. Salg av arvet bolig</h3>
        <p>Når du arver en bolig, tar du også over arvelaters skatteposisjon. Dette kalles <strong>kontinuitetsprinsippet</strong>.</p>
        <ul>
          <li><strong>Hvis arvelater oppfylte botidskravet:</strong> Du kan selge boligen skattefritt umiddelbart, uten å måtte bo der selv. Inngangsverdien din settes til markedsverdien på dødsfallstidspunktet.</li>
          <li><strong>Hvis arvelater IKKE oppfylte botidskravet:</strong> Du må overta arvelaters opprinnelige inngangsverdi (hva vedkommende kjøpte boligen for). Salget blir skattepliktig, med mindre du selv velger å flytte inn og bo der i 12 måneder før du selger.</li>
        </ul>

        <h3>2. Pendlerbolig</h3>
        <p>For pendlere gjelder et særskilt unntak, ofte kalt <strong>brukshindring</strong>. Hvis du tvinges til å flytte fra boligen din på grunn av jobb (eller helse/sykdom), kan du få godskrevet botid mens du er borte.</p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r text-sm text-amber-900">
          <strong className="flex items-center mb-1"><AlertTriangle className="w-4 h-4 mr-1"/> Krav til brukshindring:</strong>
          Du må ikke ha visst om brukshindringen da du kjøpte boligen. Det må altså ha skjedd en uforutsett endring i jobbsituasjon som krevde flytting.
        </div>

        <h3>3. Salg av bolig med utleiedel (Seksjonering)</h3>
        <p>Dersom du har en bolig med en adskilt utleiedel (f.eks. en sokkelleilighet), vurderes skatteplikten ut fra verdien på den delen du har brukt selv.</p>
        <p>Har du brukt <strong>minst halvparten</strong> av boligen selv (regnet etter utleieverdi), regnes hele boligen som din egen bolig. Oppfyller du botidskravet i hoveddelen, kan hele eiendommen selges skattefritt.</p>
      </article>
    </main>
  );
}
