import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Home, Download, FileText, Check } from 'lucide-react';
import DeductionWizard from '@/components/kalkulator/DeductionWizard';

export const metadata: Metadata = {
  title: 'Utleie av egen bolig: Airbnb, Regler og Skatt (2026)',
  description: 'Unngå skattesmell ved utleie av egen bolig. Lær 20.000-kronersregelen, skatt på Airbnb og last ned gratis mal for utleiekontrakt.',
  alternates: {
    canonical: 'https://smartskatt.no/eiendom/utleie-egen-bolig',
  },
  openGraph: {
    title: 'Regler for skattefri utleie og Airbnb i 2026',
    description: 'Slik maksimerer du skattefrie leieinntekter. Sjekk 20.000-kronersregelen og last ned vår gratis mal for husleiekontrakt.',
    url: 'https://smartskatt.no/eiendom/utleie-egen-bolig',
    type: 'article',
    images: [{ url: '/images/utleie-egen-bolig-2026.webp', width: 1200, height: 630, alt: 'Regler for utleie av egen bolig' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regler for skattefri utleie og Airbnb i 2026',
    description: 'Sjekk 20.000-kronersregelen og last ned vår gratis mal for husleiekontrakt.',
    images: ['/images/utleie-egen-bolig-2026.webp'],
  },
};

export default function UtleieEgenBoligPage() {
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
          <Home className="w-4 h-4" />
          <span>Dypdykk: Utleie og Airbnb</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Hvor mye kan du leie ut skattefritt i 2026? Her er fasiten. ✌️
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Leier du ut kåken, en kjellerleilighet eller kanskje hytta? La oss droppe stammespråket og se nøyaktig når du kan stikke hele leieinntekten rett i lomma (100 % skattefritt), og når Skatteetaten vil ha sin del (22 %).
        </p>
      </header>

      {/* Information Gain AEO: Visste du dette? */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl mb-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="text-6xl">💡</span>
        </div>
        <h3 className="text-xl font-bold text-amber-900 mt-0 mb-2">Visste du dette? (Pro-tip om møblert utleie)</h3>
        <p className="text-amber-800 text-base mb-0">
          Leier du ut <strong>skattepliktig</strong> og boligen er møblert? Da kan du kreve et årlig "møbelsjablong-fradrag" på hele 15 % av brutto leieinntekt! Det er et digg fradrag mange rett og slett glemmer å føre. Det erstatter faktiske utgifter til vedlikehold av møbler, så du slipper å ta vare på hver minste kvittering fra IKEA.
        </p>
      </div>

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-indigo-600 prose-headings:text-slate-900">
        <h2>Langtidsutleie: Halvparten-regelen vs. 20.000-kronersregelen 🤓</h2>
        <p>
          Når du leier ut boligen du selv bor i, er det én ting som gjelder: Hvor mye av boligen bruker du selv? (Og vi snakker om <em>leieverdi</em> – hva man kunne fått for det på det åpne markedet, ikke antall kvadratmeter).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-emerald-900 mt-0 mb-3">Du bruker {'>'} 50 % selv</h3>
            <p className="text-emerald-800 text-sm mb-0">
              Hvis du bor i boligen og bruker minst halvparten av boligens leieverdi til eget bruk, er <strong>hele leieinntekten 100% skattefri</strong>, uansett hvor høy den er. Du trenger ikke føre dette i skattemeldingen.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-amber-900 mt-0 mb-3">Du leier ut {'>'} 50 %</h3>
            <p className="text-amber-800 text-sm mb-0">
              Leier du ut mer enn halvparten, slår <strong>20.000-kronersregelen</strong> inn. Leieinntekten er kun skattefri opp til 20.000 kr i løpet av inntektsåret. Tjener du f.eks. 21.000 kr, blir <em>hele</em> beløpet (fra første krone) skattepliktig med 22%.
            </p>
          </div>
        </div>

        <hr className="my-10" />

        <h2 id="airbnb">Airbnb-spesial: Slik funker korttidsutleie i 2026 🏖️</h2>
        <p>
          Korttidsutleie (under 30 dager per gjest) har fått sine egne, litt strengere regler. Men fortvil ikke! Enten du leier ut hele boligen mens du er på ferie i Spania, eller låner ut et rom, gjelder denne "sjablongregelen" for 2026:
        </p>
        
        <div className="bg-white border-2 border-indigo-100 p-8 rounded-2xl shadow-sm mb-6">
          <h3 className="text-2xl font-bold text-indigo-900 mt-0 mb-4">Airbnb-formelen på 1-2-3 🧮</h3>
          <ul className="space-y-3 m-0">
            <li className="flex items-center text-slate-700">
              <Check className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
              <span>De første <strong>10.000 kr</strong> du tjener er 100 % skattefrie. Kos deg! 🎉</span>
            </li>
            <li className="flex items-center text-slate-700">
              <Check className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
              <span>Av beløpet <em>over</em> 10.000 kr, regnes bare <strong>85 %</strong> som skattepliktig inntekt.</span>
            </li>
            <li className="flex items-center text-slate-700">
              <Check className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
              <span>Denne inntekten skatter du vanlig <strong>22 %</strong> av.</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl mb-8">
          <p className="text-blue-900 font-bold mb-1 mt-0">Kompis-tips! 😉</p>
          <p className="text-blue-800 text-sm mb-0">Husk at du kan trekke fra annonseutgifter på Airbnb også! Ting du betaler direkte for å få leid ut, som plattformgebyrer eller fotografering, kan føres som fradrag dersom du leier ut over fribeløpet.</p>
        </div>
        <p>
          <em>Viktig:</em> Fribeløpet på 10.000 kr gjelder per bolig per år, ikke per leietaker. Skatteetaten mottar i de fleste tilfeller opplysninger direkte fra plattformer som Airbnb og Booking.com, så informasjonen ligger ofte forhåndsutfylt.
        </p>

        <DeductionWizard />

        {/* Konverteringspunkt: Lure */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-8 md:p-10 rounded-3xl my-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
          <FileText className="w-12 h-12 mx-auto text-indigo-300 mb-4" />
          <h2 className="text-3xl font-extrabold text-white mt-0 mb-4">Gratis Mal: Standard Husleiekontrakt</h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            Skal du leie ut langsiktig? En juridisk vanntett kontrakt beskytter deg mot tvister, sikrer depositum og regulerer vedlikehold. Last ned vår gratis mal godkjent av jurister.
          </p>
          <a 
            href="#last-ned-kontrakt" 
            className="inline-flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-emerald-500/30"
          >
            <Download className="w-5 h-5" />
            <span>Last ned kontrakt (Word)</span>
          </a>
          <p className="text-indigo-200 text-sm mt-6">
            Inkluderer også et enkelt Excel-ark for å holde oversikt over leieinntektene.
          </p>
        </section>

      </article>
    </main>
  );
}
