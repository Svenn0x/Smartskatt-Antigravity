import type { Metadata } from 'next';
import Link from 'next/link';
import DidYouKnow from '@/components/DidYouKnow';
import ComparisonGrid from '@/components/ComparisonGrid';
import HeroSlider from '@/components/HeroSlider';

export const metadata: Metadata = {
  title: 'Smartskatt | Finn dine glemte skattefradrag (Oppdatert 2026)',
  description:
    'Ikke betal mer skatt enn du må. Prøv vår gratis skatteveiviser og finn fradragene som sparer deg for tusenvis av kroner. Enkelt og anonymt.',
  alternates: {
    canonical: 'https://smartskatt.no',
  },
  openGraph: {
    title: 'Spar penger på skatten med Smartskatt.no',
    description:
      'Ikke betal mer skatt enn du må. Finn fradragene som sparer deg for tusenvis av kroner. Gratis og anonymt.',
    url: 'https://smartskatt.no',
    images: [{ url: '/og-social.png', width: 1200, height: 630, alt: 'Spar penger på skatten med Smartskatt.no' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spar penger på skatten med Smartskatt.no',
    description: 'Ikke betal mer skatt enn du må. Finn fradragene som sparer deg for tusenvis av kroner.',
    images: ['/og-social.png'],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full pb-24">
      {/* Enterprise Hero Slider Section */}
      <HeroSlider />

      {/* Did You Know Widget */}
      <DidYouKnow />

      {/* Guide Cards Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Dypdykk i fradragene</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Våre guider oversetter komplekse regler til enkle grep som sparer deg for penger.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <GuideCard 
            title="Krypto" 
            href="/guider/krypto" 
            description="Optimaliser fradrag for tap, mining og staking."
            icon="₿"
            color="from-orange-500 to-yellow-400"
          />
          <GuideCard 
            title="SMB / ENK" 
            href="/guider/smb-enk" 
            description="Hjemmekontor, bilbruk og firmakostnader gjort enkelt."
            icon="🏢"
            color="from-blue-500 to-indigo-500"
          />
          <GuideCard 
            title="Reise" 
            href="/guider/reisefradrag" 
            description="Pendlerfradrag og utgifter knyttet til arbeidsreiser."
            icon="🚗"
            color="from-purple-500 to-pink-500"
          />
        </div>
      </section>

      {/* Sammenligninger Section */}
      <section id="sammenlign" className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 scroll-mt-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-bold mb-4">
            <span>⚖️ Best i test 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Sammenlign tjenester</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg text-balance">Vi tester markedets verktøy så du slipper. Her er de beste løsningene for din økonomi.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
          <GuideCard 
            title="Kryptoskatt-verktøy" 
            href="/sammenlign/kryptoskatt" 
            description="Kryptosekken vs Firi vs Koinly. Hvem er best for norske regler?"
            icon="₿"
            color="from-orange-500 to-yellow-400"
          />
          <GuideCard 
            title="Regnskapsprogram" 
            href="/sammenlign/regnskapsprogram-enk" 
            description="Fiken vs Conta vs Tripletex for Enkeltpersonforetak."
            icon="💼"
            color="from-emerald-500 to-teal-500"
          />
          <GuideCard 
            title="Utleiesystemer" 
            href="/sammenlign/utleiesystemer" 
            description="Hybel.no vs Husleie.no. Hvem beskytter deg best?"
            icon="🏠"
            color="from-indigo-500 to-purple-500"
          />
        </div>
      </section>

      {/* Våre Anbefalte Verktøy */}
      <ComparisonGrid 
        title="Våre anbefalte verktøy for 2026" 
        category="skatt og økonomi" 
        tools={[
          {
            id: 1,
            name: 'Fiken',
            logo: 'https://www.google.com/s2/favicons?domain=fiken.no&sz=128',
            bestFor: 'Regnskap for ENK og små AS',
            isBest: true,
            rating: 5,
            pros: ['Gjør regnskap ufattelig enkelt', 'Automatisk skattemelding'],
            cons: ['Koster fra 179,- mnd'],
            link: 'https://fiken.no?ref=smartskatt',
            price: 'Fra 179 kr pr. mnd'
          },
          {
            id: 2,
            name: 'Kryptosekken',
            logo: 'https://www.google.com/s2/favicons?domain=kryptosekken.no&sz=128',
            bestFor: 'Kryptoskatt og RF-1159 skjema',
            isBest: true,
            rating: 5,
            pros: ['Skreddersydd for Skatteetaten', 'Støtter tusenvis av børser'],
            cons: ['Krever API-oppsett'],
            link: 'https://kryptosekken.no?ref=smartskatt',
            price: 'Gratis opptil 100 tx'
          },
          {
            id: 3,
            name: 'Hybel.no',
            logo: 'https://www.google.com/s2/favicons?domain=hybel.no&sz=128',
            bestFor: 'Forvaltning av utleiebolig',
            isBest: true,
            rating: 5,
            pros: ['Gratis husleiekontrakt', 'Automatisk innkreving'],
            cons: ['Gebyrer på noen tjenester'],
            link: 'https://hybel.no?ref=smartskatt',
            price: 'Gratis basisversjon'
          }
        ]}
      />

      {/* Eksperthjelp innen Eiendom Section (Focus on One Clear Message & CTA) */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Eksperthjelp innen Eiendom</h2>
              
              <Link 
                href="/eiendom/utleie-egen-bolig" 
                className="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-900 font-bold px-4 py-2 rounded-full mb-6 text-sm hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20"
              >
                NYHET: Prøv Fradrags-kompisen og finn dine skjulte boligfradrag! 🏠✨
              </Link>

              <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                Lurer du på skatt ved utleie eller salg av bolig? Vi har bygget Norges mest komplette guide, inkludert en dynamisk kalkulator som forteller deg nøyaktig hva du må betale.
              </p>
              
              <Link 
                href="/eiendom" 
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
              >
                Prøv Gevinstkalkulatoren
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
            
            <div className="flex-1 w-full space-y-4">
              <Link href="/eiendom/skatt-salg-bolig" className="block bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-5 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-1 group-hover:text-indigo-300 transition-colors">Slik selger du boligen skattefritt i 2026 →</h3>
                <p className="text-sm text-slate-400">Botidskrav, fradrag for oppussing og arv.</p>
              </Link>
              <Link href="/eiendom/utleie-egen-bolig" className="block bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-5 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-1 group-hover:text-indigo-300 transition-colors">Regler for utleie og Airbnb →</h3>
                <p className="text-sm text-slate-400">Halvparten-regelen, 20.000 kr og sjablongmetoden.</p>
              </Link>
              <Link href="/eiendom" className="block bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-5 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-1 group-hover:text-indigo-300 transition-colors">Formuesverdi og Eiendomsskatt →</h3>
                <p className="text-sm text-slate-400">Verdsettelse av primær- og sekundærbolig.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Eksperthjelp innen Krypto Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-24">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Krypto-skatt gjort enkelt</h2>
              
              <Link 
                href="/krypto" 
                className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-slate-900 font-bold px-4 py-2 rounded-full mb-6 text-sm hover:scale-105 transition-transform shadow-lg shadow-orange-500/20"
              >
                NYHET: Prøv Krypto-Sjekken og unngå baksmell! ₿🚀
              </Link>

              <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                Har du handlet krypto, drevet med staking eller DeFi? Vi har trålet gjennom Skatte-ABC 2026 så du slipper, og gir deg den mest forståelige guiden i Norge.
              </p>
              
              <Link 
                href="/krypto" 
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
              >
                Til Krypto-Guiden
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
            
            <div className="flex-1 w-full space-y-4">
              <Link href="/krypto/tap-og-gevinst" className="block bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-5 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-1 group-hover:text-orange-300 transition-colors">Beregning av Gevinst og Tap (FIFO) →</h3>
                <p className="text-sm text-slate-400">Slik utnytter du tapsfradraget på 22%.</p>
              </Link>
              <Link href="/krypto/staking-og-mining" className="block bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-5 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-1 group-hover:text-orange-300 transition-colors">Staking, DeFi og Mining →</h3>
                <p className="text-sm text-slate-400">Passiv inntekt fra krypto må rapporteres.</p>
              </Link>
              <Link href="/krypto" className="block bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-5 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-1 group-hover:text-orange-300 transition-colors">Beste Krypto-skatteverktøy →</h3>
                <p className="text-sm text-slate-400">Automatiser rapporteringen.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Eksperthjelp innen Frilans Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-24">
        <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Driver du for deg selv?</h2>
              
              <Link 
                href="/frilans" 
                className="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-900 font-bold px-4 py-2 rounded-full mb-6 text-sm hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20"
              >
                NYHET: Fradrags-Automaten for ENK! 💼✨
              </Link>

              <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                Skatt er ikke kjipt hvis du vet hva du kan trekke fra. Vi viser deg hvordan du fører PC, reiser og kaffe som næringsutgift, helt lovlig!
              </p>
              
              <Link 
                href="/frilans" 
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
              >
                Til Frilans-Guiden
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
            
            <div className="flex-1 w-full space-y-4">
              <Link href="/frilans/fradrag-sjekkliste" className="block bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-5 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-1 group-hover:text-emerald-300 transition-colors">Den Store Fradragslisten →</h3>
                <p className="text-sm text-slate-400">Topp 5 ting frilansere glemmer å skrive av.</p>
              </Link>
              <Link href="/frilans" className="block bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-5 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-1 group-hover:text-emerald-300 transition-colors">ENK vs AS i 2026 →</h3>
                <p className="text-sm text-slate-400">Når bør du bytte til Aksjeselskap?</p>
              </Link>
              <Link href="/frilans" className="block bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-5 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-1 group-hover:text-emerald-300 transition-colors">Slik fungerer Skatten →</h3>
                <p className="text-sm text-slate-400">Sjablongfradrag, kjøregodtgjørelse og forskuddsskatt.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GuideCard({ title, href, description, icon, color }: { title: string; href: string; description: string, icon: string, color: string }) {
  return (
    <Link href={href} className="group relative block p-6 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] active:bg-slate-50 overflow-hidden">
      {/* Background glow effect on hover */}
      <div className={`absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>
      
      <div className="flex items-center justify-center w-12 h-12 bg-slate-50 text-2xl rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 border border-slate-100 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      
      <div className="mt-6 flex items-center text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
        Les guiden
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </div>
    </Link>
  );
}
