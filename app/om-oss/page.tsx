import type { Metadata } from 'next';
import { Heart, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Om oss – Smartskatt.no',
  description: 'Vi gjør kompliserte skatteregler forståelige for vanlige folk.',
};

export default function OmOssPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white pt-20 pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-emerald-400 text-sm font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span>Om Smartskatt</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-balance">
            Vi gjør skatt enkelt. For alle.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed text-balance">
            Smartskatt ble bygget med ett mål: Å gjøre kompliserte regler forståelige for vanlige folk, slik at ingen betaler mer skatt enn de absolutt må.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12 mb-16">
          <div className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-a:text-emerald-600 max-w-none">
            <h2>Hvorfor Smartskatt?</h2>
            <p>
              Har du noen gang prøvd å lese Skatte-ABC? Det har vi. Det er tusenvis av sider med tungt byråkratisk språk, forbehold og unntak. Resultatet er at nordmenn hvert år går glipp av milliarder i fradrag de egentlig har krav på.
            </p>
            <p>
              Enten du har solgt krypto for første gang, driver et lite enkeltpersonforetak, eller nettopp har solgt boligen din – reglene bør ikke være en barriere. Vi mener at skatt ikke trenger å være skummelt. Derfor bygget vi Smartskatt.
            </p>
            
            <h2>Vår filosofi</h2>
            <p>
              Vi tråler gjennom lovverket slik at du slipper. Vi bygger interaktive kalkulatorer og veivisere som gir deg nøyaktig de svarene du trenger, uten at du må være økonom for å forstå dem. Hos oss får du 100% gratis, anonym, og lettlest veiledning. 
            </p>
            <p>
              Velkommen til en enklere skattehverdag!
            </p>
          </div>
        </div>
        
        {/* Values */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Trygt & Anonymt</h3>
            <p className="text-sm text-slate-600">Vi lagrer aldri dataene dine. Alle beregninger skjer lokalt i nettleseren.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Raskt & Enkelt</h3>
            <p className="text-sm text-slate-600">Ingen byråkratspråk. Vi gir deg svarene rett på sak, med en gang.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Laget for deg</h3>
            <p className="text-sm text-slate-600">Designet spesielt for frilansere, investorer og vanlige lønnstakere.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
