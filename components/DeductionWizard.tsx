'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Home, Hammer, TrendingUp, CheckCircle2 } from 'lucide-react';

type Step = 'start' | 'utleie' | 'vedlikehold' | 'salg' | 'resultat';

export default function DeductionWizard() {
  const [currentStep, setCurrentStep] = useState<Step>('start');
  const [answers, setAnswers] = useState({
    utleieType: '' as '' | 'airbnb' | 'langtids' | 'ingen',
    vedlikeholdType: '' as '' | 'oppussing' | 'vedlikehold' | 'ingen',
    solgtMedBotid: '' as '' | 'ja' | 'nei' | 'ikke_solgt',
  });

  // Flow control
  const handleStart = () => setCurrentStep('utleie');
  
  const handleUtleie = (type: 'airbnb' | 'langtids' | 'ingen') => {
    setAnswers({ ...answers, utleieType: type });
    setCurrentStep('vedlikehold');
  };

  const handleVedlikehold = (type: 'oppussing' | 'vedlikehold' | 'ingen') => {
    setAnswers({ ...answers, vedlikeholdType: type });
    setCurrentStep('salg');
  };

  const handleSalg = (type: 'ja' | 'nei' | 'ikke_solgt') => {
    setAnswers({ ...answers, solgtMedBotid: type });
    setCurrentStep('resultat');
  };

  const resetWizard = () => {
    setAnswers({ utleieType: '', vedlikeholdType: '', solgtMedBotid: '' });
    setCurrentStep('start');
  };

  // Progress calculation
  const getProgress = () => {
    switch (currentStep) {
      case 'start': return 0;
      case 'utleie': return 25;
      case 'vedlikehold': return 50;
      case 'salg': return 75;
      case 'resultat': return 100;
      default: return 0;
    }
  };

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section 
      aria-label="Fradrags-kompisen veiviser" 
      className="bg-indigo-50/50 rounded-[2rem] p-6 md:p-10 shadow-sm border border-indigo-100 max-w-2xl mx-auto my-12 relative overflow-hidden"
    >
      {/* Progress Bar */}
      <div 
        className="absolute top-0 left-0 w-full h-2 bg-slate-100" 
        role="progressbar" 
        aria-valuenow={getProgress()} 
        aria-valuemin={0} 
        aria-valuemax={100}
      >
        <motion.div 
          className="h-full bg-emerald-400"
          initial={{ width: 0 }}
          animate={{ width: `${getProgress()}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="relative min-h-[350px] flex flex-col justify-center mt-4">
        <AnimatePresence mode="wait">
          
          {currentStep === 'start' && (
            <motion.div
              key="start"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center"
            >
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                <Sparkles className="w-10 h-10 text-indigo-500" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800 mb-4 text-balance">
                Hei! Skal vi se om du har noen skattepenger til gode på kåken din? 👇
              </h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Jeg er Fradrags-kompisen din. Svar på tre kjappe spørsmål, så forteller jeg deg nøyaktig hvilke fradrag du kan kreve i år.
              </p>
              <button 
                onClick={handleStart}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-2xl transition-transform active:scale-95 shadow-md"
                aria-label="Start veiviseren"
              >
                La oss kjøre på! 🚀
              </button>
            </motion.div>
          )}

          {currentStep === 'utleie' && (
            <motion.div
              key="utleie"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center w-full"
            >
              <Home className="w-8 h-8 text-indigo-400 mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-6 text-balance">
                Hvordan har du leid ut boligen i år? 🏠
              </h3>
              <div className="grid grid-cols-1 gap-3 w-full max-w-md">
                <button 
                  onClick={() => handleUtleie('airbnb')}
                  className="bg-white hover:bg-emerald-50 border-2 border-slate-100 hover:border-emerald-200 text-slate-700 font-bold py-4 px-6 rounded-2xl transition-all text-left flex items-center justify-between group"
                >
                  <span>Airbnb / Korttid 🏖️</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button 
                  onClick={() => handleUtleie('langtids')}
                  className="bg-white hover:bg-emerald-50 border-2 border-slate-100 hover:border-emerald-200 text-slate-700 font-bold py-4 px-6 rounded-2xl transition-all text-left flex items-center justify-between group"
                >
                  <span>Langtidsleie (Kjeller / rom) 🔑</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button 
                  onClick={() => handleUtleie('ingen')}
                  className="bg-white hover:bg-slate-100 border-2 border-slate-100 text-slate-500 font-semibold py-4 px-6 rounded-2xl transition-all text-left"
                >
                  Har ikke leid ut noe 🙅
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'vedlikehold' && (
            <motion.div
              key="vedlikehold"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center w-full"
            >
              <Hammer className="w-8 h-8 text-indigo-400 mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2 text-balance">
                Har du svingt hammeren i år? 🛠️
              </h3>
              <p className="text-sm text-slate-500 text-center mb-6 max-w-md">
                <strong>Vedlikehold</strong> = Bytte ut likt mot likt (f.eks male veggen). <br/>
                <strong>Oppussing</strong> = Løfte standarden (f.eks sette inn boblebad).
              </p>
              <div className="grid grid-cols-1 gap-3 w-full max-w-md">
                <button 
                  onClick={() => handleVedlikehold('vedlikehold')}
                  className="bg-white hover:bg-emerald-50 border-2 border-slate-100 hover:border-emerald-200 text-slate-700 font-bold py-4 px-6 rounded-2xl transition-all text-left"
                >
                  Ja, kun vanlig vedlikehold 🎨
                </button>
                <button 
                  onClick={() => handleVedlikehold('oppussing')}
                  className="bg-white hover:bg-emerald-50 border-2 border-slate-100 hover:border-emerald-200 text-slate-700 font-bold py-4 px-6 rounded-2xl transition-all text-left"
                >
                  Vi har pusset opp / hevet standarden! 🛁
                </button>
                <button 
                  onClick={() => handleVedlikehold('ingen')}
                  className="bg-white hover:bg-slate-100 border-2 border-slate-100 text-slate-500 font-semibold py-4 px-6 rounded-2xl transition-all text-left"
                >
                  Ikke rørt en skrue 🛋️
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'salg' && (
            <motion.div
              key="salg"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center w-full"
            >
              <TrendingUp className="w-8 h-8 text-indigo-400 mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2 text-balance">
                Har du solgt boligen i år? 💰
              </h3>
              <p className="text-sm text-slate-500 text-center mb-6 max-w-md">
                Og det store spørsmålet: Hadde du eid den i over ett år, og bodd der i minst 12 av de siste 24 månedene før salget?
              </p>
              <div className="grid grid-cols-1 gap-3 w-full max-w-md">
                <button 
                  onClick={() => handleSalg('ja')}
                  className="bg-white hover:bg-emerald-50 border-2 border-slate-100 hover:border-emerald-200 text-slate-700 font-bold py-4 px-6 rounded-2xl transition-all text-left"
                >
                  Ja, solgt og oppfylte botidskravet ✅
                </button>
                <button 
                  onClick={() => handleSalg('nei')}
                  className="bg-white hover:bg-rose-50 border-2 border-slate-100 hover:border-rose-200 text-slate-700 font-bold py-4 px-6 rounded-2xl transition-all text-left"
                >
                  Ja, men jeg oppfylte IKKE botidskravet 😬
                </button>
                <button 
                  onClick={() => handleSalg('ikke_solgt')}
                  className="bg-white hover:bg-slate-100 border-2 border-slate-100 text-slate-500 font-semibold py-4 px-6 rounded-2xl transition-all text-left"
                >
                  Har ikke solgt noe 🏠
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'resultat' && (
            <motion.div
              key="resultat"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col w-full h-full"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-slate-800 mb-2">Her er dommen! 🥁</h3>
                <p className="text-slate-600">Slik ser skatte-året ditt ut basert på det du fortalte meg.</p>
              </div>

              <div className="space-y-4 mb-8">
                {/* Airbnb Tips */}
                {answers.utleieType === 'airbnb' && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 shadow-sm">
                    <p className="font-bold text-emerald-900 flex items-center mb-1">
                      <span className="text-xl mr-2">🏖️</span> Airbnb-tips: De første 10 000 kr er skattefrie!
                    </p>
                    <p className="text-emerald-800 text-sm">
                      Over det betaler du kun skatt av 85 %. Glem heller ikke at hvis du går over grensen, kan du trekke fra direkte annonsekostnader.
                    </p>
                  </div>
                )}

                {/* Langtidsleie */}
                {answers.utleieType === 'langtids' && (
                  <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 shadow-sm">
                    <p className="font-bold text-indigo-900 flex items-center mb-1">
                      <span className="text-xl mr-2">🔑</span> Langtidsutleie: Halvparten-regelen
                    </p>
                    <p className="text-indigo-800 text-sm">
                      Så lenge du har leid ut under halve leieverdien av boligen din, er inntekten 100 % skattefri. Nice!
                    </p>
                  </div>
                )}

                {/* Vedlikehold ved skatteplikt */}
                {answers.vedlikeholdType === 'vedlikehold' && answers.utleieType !== 'ingen' && (
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 shadow-sm">
                    <p className="font-bold text-amber-900 flex items-center mb-1">
                      <span className="text-xl mr-2">🛠️</span> Vedlikehold: Direkte fradrag
                    </p>
                    <p className="text-amber-800 text-sm">
                      Dersom utleien din har vært skattepliktig, kan du få fullt fradrag på skatten for vedlikeholdskostnadene i år. Pass på å ta vare på kvitteringene!
                    </p>
                  </div>
                )}

                {/* Salg u/ botid (BINGO!) */}
                {answers.solgtMedBotid === 'nei' && (
                  <div className="bg-emerald-100 border border-emerald-300 rounded-2xl p-5 shadow-sm">
                    <p className="font-bold text-emerald-900 flex items-center mb-1">
                      <span className="text-xl mr-2">BINGO! 💰</span> Du kan trekke fra meglerutgifter
                    </p>
                    <p className="text-emerald-800 text-sm">
                      Ettersom du ikke oppfylte botidskravet, er salget skattepliktig. Men den gode nyheten er at du da kan trekke fra <strong>absolutt alle</strong> kostnader til megler, eierskifteforsikring, og annonsering. I tillegg kan du plusse på tidligere oppussing (påkostning) på inngangsverdien din!
                    </p>
                  </div>
                )}

                {/* Salg med botid */}
                {answers.solgtMedBotid === 'ja' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 shadow-sm">
                    <p className="font-bold text-blue-900 flex items-center mb-1">
                      <span className="text-xl mr-2">🏆</span> Skattefritt salg!
                    </p>
                    <p className="text-blue-800 text-sm">
                      Du oppfylte botidskravet! Du kan putte hele gevinsten rett i lomma uten å betale ei krone i skatt. Baksiden? Du får heller ikke fradrag for megler. Men det er en ekstremt god deal for deg.
                    </p>
                  </div>
                )}

                {/* Ingenting slår til */}
                {answers.utleieType === 'ingen' && answers.vedlikeholdType === 'ingen' && answers.solgtMedBotid === 'ikke_solgt' && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
                    <p className="font-bold text-slate-800">Ganske stille og rolig i år? ☕</p>
                    <p className="text-slate-600 text-sm mt-1">Du har ingen åpenbare fradrag i disse kategoriene for i år, men nå har du i det minste full kontroll på at du ikke går glipp av noe!</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={resetWizard}
                  className="w-full sm:w-auto flex-1 bg-white border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3 rounded-xl transition-all"
                >
                  Start på nytt 🔄
                </button>
                <button 
                  className="w-full sm:w-auto flex-[2] bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-md active:scale-95"
                >
                  Slik fører du dette på 1-2-3 ✨
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
