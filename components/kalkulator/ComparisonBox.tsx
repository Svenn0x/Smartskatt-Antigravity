import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import AffiliateButton from '../shared/AffiliateButton';

export default function ComparisonBox() {
  const fikenUrl = process.env.NEXT_PUBLIC_FIKEN_URL || 'https://fiken.no';
  const lucaUrl = process.env.NEXT_PUBLIC_LUCA_URL || 'https://lucaregnskap.no';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="bg-slate-50 border-b border-slate-100 p-6 pb-4">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          Usikker på hva du skal velge?
        </h3>
        <p className="text-sm text-slate-500 mt-1">Sammenlign de to beste alternativene for bedrifter.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        {/* Fiken (Left) */}
        <div className="p-6 flex flex-col h-full hover:bg-slate-50/50 transition-colors">
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center font-bold text-emerald-700 text-xl shadow-sm">
                F
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Fiken</h4>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide bg-emerald-50 px-2 py-0.5 rounded">Markedslederen</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Perfekt for deg som vil ha alt forklart på menneskespråk. Superenkelt å bruke, selv uten forkunnskaper.
            </p>
          </div>
          <a
            href={fikenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center gap-2 bg-[#27AE60] hover:bg-[#219653] text-white font-medium py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow"
          >
            Prøv Fiken
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Luca (Right) */}
        <div className="p-6 flex flex-col h-full hover:bg-slate-50/50 transition-colors">
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center font-bold text-cyan-700 text-xl shadow-sm">
                L
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Luca</h4>
                <span className="text-xs font-semibold text-secondary uppercase tracking-wide bg-cyan-50 px-2 py-0.5 rounded">Utfordreren</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Rimeligere alternativ med alle funksjoner inkludert. Enkelt grensesnitt og lav terskel for å komme i gang.
            </p>
          </div>
          <a
            href={lucaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center gap-2 bg-white border-2 border-slate-200 hover:border-secondary hover:text-secondary text-slate-700 font-medium py-3 px-4 rounded-xl transition-all shadow-sm"
          >
            Sjekk Luca
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Ekspert-dom */}
      <div className="bg-slate-900 p-5 flex items-start gap-3">
        <div className="text-yellow-400 mt-0.5">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Vår vurdering</span>
          <p className="text-slate-300 text-sm leading-relaxed">
            Velg <strong className="text-white">Fiken</strong> hvis du hater regnskap og vil ha det enklest mulig. 
            Velg <strong className="text-white">Luca</strong> hvis du er prisbevisst og vil ha mest verdi for pengene.
          </p>
        </div>
      </div>
    </div>
  );
}
