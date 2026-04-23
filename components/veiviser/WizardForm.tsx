'use client';

import { useState } from 'react';
import ProgressBar from './ProgressBar';
import AffiliateButton from '../shared/AffiliateButton';

interface WizardState {
  hasKrypto: boolean | null;
  hasEnk: boolean | null;
  isCommuter: boolean | null;
  hasSoldProperty: boolean | null;
}

export default function WizardForm() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<WizardState>({
    hasKrypto: null,
    hasEnk: null,
    isCommuter: null,
    hasSoldProperty: null,
  });

  const totalSteps = 4;

  const handleNext = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));
  
  const updateState = (key: keyof WizardState, value: boolean) => {
    setState(prev => ({ ...prev, [key]: value }));
    // Auto-advance after answering a question on steps with single questions
    if (step > 1 && step < totalSteps) {
      setTimeout(handleNext, 400);
    }
  };

  const isStepValid = () => {
    if (step === 1) return state.hasKrypto !== null && state.hasEnk !== null;
    if (step === 2) return state.isCommuter !== null;
    if (step === 3) return state.hasSoldProperty !== null;
    return true;
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-5 blur-3xl pointer-events-none"></div>
      
      <ProgressBar currentStep={step} totalSteps={totalSteps} />
      
      <div className="min-h-[350px] py-6 relative z-10">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 ease-out">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Personlig Situasjon</h2>
            <p className="text-slate-500 mb-8 text-lg text-balance">La oss kartlegge grunnlaget. Velg det som stemmer for deg i 2024.</p>
            
            <div className="space-y-4">
              <BooleanOption 
                label="Eide du eller handlet du kryptovaluta?"
                value={state.hasKrypto}
                onChange={(v) => setState(prev => ({ ...prev, hasKrypto: v }))}
              />
              <BooleanOption 
                label="Drev du eget firma (ENK eller AS)?"
                value={state.hasEnk}
                onChange={(v) => setState(prev => ({ ...prev, hasEnk: v }))}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 ease-out">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Arbeid og Reise</h2>
            <p className="text-slate-500 mb-8 text-lg text-balance">Reisefradraget er et av de mest vanlige glemte fradragene.</p>
            
            <div className="space-y-4">
              <BooleanOption 
                label="Pendlet du til jobb (mer enn 37 km tur/retur per dag)?"
                value={state.isCommuter}
                onChange={(v) => updateState('isCommuter', v)}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 ease-out">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Bolig og Eiendom</h2>
            <p className="text-slate-500 mb-8 text-lg text-balance">Boligsalg med tap kan gi store skattefradrag.</p>
            
            <div className="space-y-4">
              <BooleanOption 
                label="Har du solgt bolig med tap, eller hatt kostnader til utleiebolig?"
                value={state.hasSoldProperty}
                onChange={(v) => updateState('hasSoldProperty', v)}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in zoom-in-95 duration-500 ease-out flex flex-col items-center text-center pt-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Dine Muligheter</h2>
            <p className="text-slate-600 mb-10 max-w-md text-balance text-lg">
              Basert på dine svar ser vi at du har stort potensial for å optimalisere skatten din. Her er verktøyene som fikser det automatisk:
            </p>
            
            <div className="w-full max-w-sm space-y-4">
              {state.hasKrypto && (
                <div className="animate-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both">
                  <AffiliateButton partnerName="Kryptosekken" url="https://kryptosekken.no" label="Beregn Krypto-skatten din automatisk" />
                </div>
              )}
              {state.hasEnk && (
                <div className="animate-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
                  <AffiliateButton partnerName="Fiken" url="https://fiken.no" label="Få kontroll på ENK-fradragene" />
                </div>
              )}
              {(state.hasSoldProperty || state.isCommuter) && (
                <div className="animate-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both">
                  <AffiliateButton partnerName="Lendo" url="https://lendo.no" label="Sjekk om du betaler for mye for lån" />
                </div>
              )}
              
              {!state.hasKrypto && !state.hasEnk && !state.hasSoldProperty && !state.isCommuter && (
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-slate-600">Du ser ut til å ha en ukomplisert skattesituasjon i år. Sjekk likevel at de forhåndsutfylte tallene fra Skatteetaten stemmer overens med årsoppgavene dine.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {step < totalSteps && (
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
          <button 
            onClick={handlePrev} 
            disabled={step === 1}
            className="px-6 py-3 rounded-xl font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 disabled:opacity-0 transition-all"
          >
            Tilbake
          </button>
          <button 
            onClick={handleNext}
            disabled={!isStepValid()}
            className="px-8 py-3 rounded-xl font-semibold bg-slate-900 text-white hover:bg-blue-600 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Neste
          </button>
        </div>
      )}
    </div>
  );
}

function BooleanOption({ label, value, onChange }: { label: string; value: boolean | null; onChange: (v: boolean) => void }) {
  return (
    <div className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl p-4 transition-colors">
      <p className="font-medium text-slate-800 mb-3">{label}</p>
      <div className="flex gap-3">
        <button 
          onClick={() => onChange(true)}
          className={`flex-1 py-3 rounded-xl font-medium transition-all border-2 ${value === true ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-transparent text-slate-600 shadow-sm hover:border-slate-300'}`}
        >
          Ja
        </button>
        <button 
          onClick={() => onChange(false)}
          className={`flex-1 py-3 rounded-xl font-medium transition-all border-2 ${value === false ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-transparent text-slate-600 shadow-sm hover:border-slate-300'}`}
        >
          Nei
        </button>
      </div>
    </div>
  );
}
