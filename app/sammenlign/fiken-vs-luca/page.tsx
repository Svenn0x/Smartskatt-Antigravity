import { Metadata } from 'next';
import { CheckCircle2, Star, XCircle, ArrowRight, TrendingUp, Zap, Target, Smartphone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fiken eller Luca? Se priser og funksjoner (2026 Test)',
  description:
    'Skal du velge Fiken eller Luca Regnskap for ditt ENK? Vi sammenligner priser, brukervennlighet og funksjoner for å hjelpe deg å velge riktig.',
  keywords: ['Fiken eller Luca', 'beste regnskapsprogram ENK', 'Luca Regnskap erfaringer', 'Fiken erfaringer', 'regnskapsprogram sammenligning', 'ENK skatt 2026'],
  alternates: {
    canonical: 'https://smartskatt.no/sammenlign/fiken-vs-luca',
  },
  openGraph: {
    title: 'Spar penger på skatten med Smartskatt.no',
    description:
      'Skal du velge Fiken eller Luca Regnskap for ditt ENK? Vi sammenligner priser, brukervennlighet og funksjoner for å hjelpe deg å velge riktig.',
    url: 'https://smartskatt.no/sammenlign/fiken-vs-luca',
    images: [{ url: '/og-social.png', width: 1200, height: 630, alt: 'Spar penger på skatten med Smartskatt.no' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fiken eller Luca? Se priser og funksjoner (2026 Test)',
    description: 'Vi sammenligner Fiken og Luca Regnskap for ENK – priser, funksjoner og brukervennlighet.',
    images: ['/og-social.png'],
  },
};

export default function FikenVsLucaPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            2026-Oppdatert
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Fiken eller Luca? Den ultimate guiden for deg som driver ENK
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Norges to mest populære regnskapsprogrammer kniver om oppmerksomheten. Vi har testet begge for å hjelpe deg å velge riktig.
          </p>
        </div>

        {/* TL;DR Box */}
        <div className="bg-white rounded-2xl p-8 border-l-4 border-l-green-500 shadow-sm mb-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
             <Target className="w-32 h-32 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Zap className="text-amber-500 w-6 h-6" />
            Kjapp oppsummering (TL;DR)
          </h2>
          <div className="space-y-4 relative z-10">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
              <p className="text-slate-700 font-medium">
                <strong>Velg Fiken</strong> hvis du vil ha det absolutt enkleste og mest pedagogiske grensesnittet.
              </p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-slate-700 font-medium">
                <strong>Velg Luca</strong> hvis du vil ha en lavere fastpris og alle funksjoner inkludert fra start.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Den store sammenligningen</h2>
          
          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
              <div className="p-4 sm:p-6 font-semibold text-slate-500 flex items-center">Kategori</div>
              <div className="p-4 sm:p-6 text-center border-l border-slate-200">
                <div className="font-bold text-xl text-slate-900 mb-1">Fiken</div>
                <div className="text-sm text-slate-500 font-medium">Markedslederen</div>
              </div>
              <div className="p-4 sm:p-6 text-center border-l border-slate-200">
                <div className="font-bold text-xl text-slate-900 mb-1">Luca</div>
                <div className="text-sm text-slate-500 font-medium">Utfordreren</div>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              <div className="grid grid-cols-3 hover:bg-slate-50 transition-colors">
                <div className="p-4 sm:p-6 font-medium text-slate-900 flex items-center">Pris (Eks. mva)</div>
                <div className="p-4 sm:p-6 text-center border-l border-slate-100 flex flex-col justify-center">
                  <span className="font-bold text-slate-900">199,- /mnd (Startpris)</span>
                  <span className="text-xs text-slate-500 mt-1">Snitt: 300-350,- /mnd</span>
                  <span className="text-xs text-slate-500 mt-1">+ Årsavslutning (ca 1200,-)</span>
                </div>
                <div className="p-4 sm:p-6 text-center border-l border-slate-100 flex flex-col justify-center">
                  <span className="font-bold text-green-600">149,- /mnd</span>
                  <span className="text-xs text-slate-500 mt-1">Aggressiv fastpris</span>
                  <span className="text-xs text-slate-500 mt-1">Alt inkl. (også årsavslutning)</span>
                </div>
              </div>

              <div className="grid grid-cols-3 hover:bg-slate-50 transition-colors">
                <div className="p-4 sm:p-6 font-medium text-slate-900 flex items-center">Brukervennlighet</div>
                <div className="p-4 sm:p-6 flex justify-center items-center border-l border-slate-100">
                  <div className="flex text-amber-400">
                    <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex justify-center items-center border-l border-slate-100">
                  <div className="flex text-amber-400">
                    <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 text-slate-200 fill-current" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 hover:bg-slate-50 transition-colors">
                <div className="p-4 sm:p-6 font-medium text-slate-900 flex items-center">Mobilapp (Skanning)</div>
                <div className="p-4 sm:p-6 flex flex-col justify-center items-center border-l border-slate-100 gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <span className="text-sm text-slate-600">Markedets beste</span>
                </div>
                <div className="p-4 sm:p-6 flex flex-col justify-center items-center border-l border-slate-100 gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <span className="text-sm text-slate-600">God løsning</span>
                </div>
              </div>

              <div className="grid grid-cols-3 hover:bg-slate-50 transition-colors">
                <div className="p-4 sm:p-6 font-medium text-slate-900 flex items-center">Bankintegrasjon</div>
                <div className="p-4 sm:p-6 flex flex-col justify-center items-center border-l border-slate-100 gap-2">
                  <span className="text-sm font-semibold text-slate-900">+49,- /mnd</span>
                </div>
                <div className="p-4 sm:p-6 flex flex-col justify-center items-center border-l border-slate-100 gap-2">
                  <span className="text-sm font-semibold text-green-600">Inkludert</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Comparison Cards */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Fiken Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 p-5 text-center border-b border-slate-100 relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full"></div>
                <h3 className="font-bold text-2xl text-slate-900 mb-1">Fiken</h3>
                <p className="text-sm text-slate-500 font-medium">Markedslederen</p>
              </div>
              <div className="p-5 space-y-5">
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Pris (Eks. mva)</p>
                  <p className="font-bold text-lg text-slate-900">199,- /mnd <span className="font-normal text-base text-slate-600">(Startpris)</span></p>
                  <p className="text-sm text-slate-500 mt-1">Snitt: 300-350,- /mnd + Årsavslutning</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Brukervennlighet</p>
                  <div className="flex text-amber-400">
                    <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Mobilapp (Skanning)</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700 font-medium">Markedets beste</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Bankintegrasjon</p>
                  <span className="font-semibold text-slate-900">+49,- /mnd</span>
                </div>
              </div>
            </div>

            {/* Luca Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden border-t-4 border-t-green-500 relative">
              <div className="absolute top-0 right-0 p-3">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">Mest for pengene</span>
              </div>
              <div className="bg-slate-50 p-5 text-center border-b border-slate-100">
                <h3 className="font-bold text-2xl text-slate-900 mb-1">Luca</h3>
                <p className="text-sm text-slate-500 font-medium">Utfordreren</p>
              </div>
              <div className="p-5 space-y-5">
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Pris (Eks. mva)</p>
                  <p className="font-bold text-lg text-green-600">149,- /mnd</p>
                  <p className="text-sm text-slate-500 mt-1">Aggressiv fastpris. Alt inkl. (også årsavslutning)</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Brukervennlighet</p>
                  <div className="flex text-amber-400">
                    <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 text-slate-200 fill-current" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Mobilapp (Skanning)</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700 font-medium">God løsning</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Bankintegrasjon</p>
                  <span className="font-semibold text-green-600">Inkludert</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dive */}
        <div className="prose prose-lg prose-slate max-w-none mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dypdykk i funksjoner</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="text-blue-500" />
                Fiken: Enklest på skatt
              </h3>
              <p className="text-slate-600 mb-4">
                Fiken har lenge vært kongen på haugen for norske småbedrifter. Deres definitive styrke er overlegen kundetilfredshet og evnen til å oversette komplisert "regnskapsspråk" til forståelig menneskespråk.
              </p>
              <p className="text-slate-600 mb-4">
                For ENK (enkeltpersonforetak) gjør de skattemeldingen utrolig enkel. Vær imidlertid obs på prismodellen: Selv om startprisen er 199,-/mnd, trenger de fleste moduler som gjør at snittprisen ligger rundt 300-350,-/mnd. I tillegg koster årsavslutningen ekstra (ca 1200,- per år).
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Ekstremt høy brukervennlighet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Sømløs Altinn-integrasjon</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Dyrere når man legger til moduler</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Smartphone className="text-green-500" />
                Luca: Mye for pengene
              </h3>
              <p className="text-slate-600 mb-4">
                Luca Regnskap er utfordreren som virkelig har satt prispress på bransjen. De vinner soleklart på ren pris, og er det beste valget for de som allerede kan litt regnskap fra før.
              </p>
              <p className="text-slate-600 mb-4">
                Luca opererer med en aggressiv fastpris på 149,-/mnd hvor "alt" er inkludert. Her får du både årsavslutning og bankintegrasjon med på kjøpet uten skjulte tillegg i prisen, noe som gjør det ekstremt forutsigbart for nyoppstartede ENK.
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Lav og forutsigbar fastpris</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Bankintegrasjon er inkludert</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Litt færre avanserte automasjoner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 border-t border-slate-200 pt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Klar til å velge?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Fiken CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                <Star className="w-48 h-48 text-white" />
              </div>
              <div className="relative z-10">
                <div className="text-sm font-semibold tracking-wider text-blue-400 uppercase mb-2">Markedslederen</div>
                <h3 className="text-3xl font-bold mb-4">Prøv Fiken</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  For deg som vil ha det tryggeste, enkleste og mest pedagogiske valget på markedet.
                </p>
              </div>
              <a 
                href="/out/fiken" 
                className="inline-flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 w-full z-10 shadow-md active:scale-[0.98]"
              >
                Start gratis prøveperiode
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Luca CTA */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="w-48 h-48 text-white" />
              </div>
              <div className="relative z-10">
                <div className="text-sm font-semibold tracking-wider text-green-200 uppercase mb-2">Utfordreren</div>
                <h3 className="text-3xl font-bold mb-4">Prøv Luca</h3>
                <p className="text-green-50 mb-8 leading-relaxed">
                  For deg som vil ha en kraftig løsning til markedets kanskje beste pris. Alt inkludert.
                </p>
              </div>
              <a 
                href="/out/luca" 
                className="inline-flex justify-center items-center gap-2 bg-white text-green-700 hover:bg-green-50 font-bold py-4 px-6 rounded-xl transition-all duration-200 w-full z-10 shadow-md active:scale-[0.98]"
              >
                Se prisene hos Luca
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
