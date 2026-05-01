'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, Coins, Rocket, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

type Step = 'start' | 'trading' | 'passive' | 'exit' | 'resultat';

export default function CryptoChecker() {
  const [currentStep, setCurrentStep] = useState<Step>('start');
  const [answers, setAnswers] = useState({
    hasTraded: '' as '' | 'gevinst' | 'tap' | 'begge' | 'nei',
    hasPassive: '' as '' | 'staking' | 'mining' | 'defi' | 'nei',
    exitRelevant: '' as '' | 'over_500k' | 'under_500k' | 'nei',
  });

  const getProgress = () => {
    const steps: Step[] = ['start', 'trading', 'passive', 'exit', 'resultat'];
    return (steps.indexOf(currentStep) / (steps.length - 1)) * 100;
  };

  return (
    <section className="bg-slate-900 text-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-slate-800 max-w-2xl mx-auto my-12 relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-800">
        <motion.div 
          className="h-full bg-orange-500"
          initial={{ width: 0 }}
          animate={{ width: `${getProgress()}%` }}
        />
      </div>

      <div className="relative min-h-[400px] flex flex-col justify-center mt-4">
        <AnimatePresence mode="wait">
          
          {currentStep === 'start' && (
            <motion.div key="start" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-center">
              <div className="bg-orange-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-orange-500/20">
                <Wallet className="w-10 h-10 text-orange-500" />
              </div>
              <h2 className="text-3xl font-black mb-4">Har du kontroll på krypto-skatten? ₿</h2>
              <p className="text-slate-400 mb-8">Skatteetaten følger med mer enn du tror. La oss sjekke kjapt hva du faktisk må rapportere i 2026.</p>
              <button 
                onClick={() => setCurrentStep('trading')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-orange-500/20"
              >
                Start Krypto-Sjekken 🚀
              </button>
            </motion.div>
          )}

          {currentStep === 'trading' && (
            <motion.div key="trading" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} className="w-full">
              <Coins className="w-8 h-8 text-orange-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-center mb-6">Har du solgt eller byttet krypto i år?</h3>
              <div className="grid gap-3 w-full max-w-md mx-auto">
                {['gevinst', 'tap', 'begge', 'nei'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => { setAnswers({...answers, hasTraded: opt as any}); setCurrentStep('passive'); }}
                    className="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-4 rounded-xl text-left capitalize"
                  >
                    {opt === 'begge' ? 'Ja, både gevinst og tap 📈📉' : opt === 'nei' ? 'Nei, bare HODLet 💎' : `Ja, mest ${opt} 💰`}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 'passive' && (
            <motion.div key="passive" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} className="w-full">
              <Rocket className="w-8 h-8 text-orange-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-center mb-6">Hva med "passiv" inntekt?  passive</h3>
              <div className="grid gap-3 w-full max-w-md mx-auto">
                <button onClick={() => { setAnswers({...answers, hasPassive: 'staking'}); setCurrentStep('exit'); }} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-left">Staking / Renter 🏦</button>
                <button onClick={() => { setAnswers({...answers, hasPassive: 'defi'}); setCurrentStep('exit'); }} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-left">DeFi / Liquidity Pooling 🧪</button>
                <button onClick={() => { setAnswers({...answers, hasPassive: 'nei'}); setCurrentStep('exit'); }} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-left">Ingenting av dette ❌</button>
              </div>
            </motion.div>
          )}

          {currentStep === 'exit' && (
            <motion.div key="exit" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} className="w-full">
              <AlertTriangle className="w-8 h-8 text-rose-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-center mb-2">Vurderer du å flytte fra Norge? ✈️</h3>
              <p className="text-slate-400 text-center mb-6 text-sm">Nye regler for exit-skatt gjelder hvis du har store verdier.</p>
              <div className="grid gap-3 w-full max-w-md mx-auto">
                <button onClick={() => { setAnswers({...answers, exitRelevant: 'over_500k'}); setCurrentStep('resultat'); }} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-left">Ja, og har krypto for over 500k 💸</button>
                <button onClick={() => { setAnswers({...answers, exitRelevant: 'under_500k'}); setCurrentStep('resultat'); }} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-left">Ja, men har mindre verdier 🤏</button>
                <button onClick={() => { setAnswers({...answers, exitRelevant: 'nei'}); setCurrentStep('resultat'); }} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-left">Nei, blir her i landet 🇳🇴</button>
              </div>
            </motion.div>
          )}

          {currentStep === 'resultat' && (
            <motion.div key="resultat" initial={{opacity:0}} animate={{opacity:1}} className="w-full">
              <h3 className="text-3xl font-black text-center mb-6">Krypto-dommen ⚖️</h3>
              <div className="space-y-4 mb-8">
                {answers.hasTraded !== 'nei' && (
                  <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-xl">
                    <p className="font-bold text-orange-400">Husk 22% skatt på gevinst!</p>
                    <p className="text-sm text-slate-300">Men du får også 22% fradrag på tap. Viktig: Du må føre hvert bytte (f.eks BTC til ETH) som et salg!</p>
                  </div>
                )}
                {answers.hasPassive === 'staking' && (
                  <div className="bg-indigo-500/10 border border-indigo-500/30 p-4 rounded-xl">
                    <p className="font-bold text-indigo-400">Staking-inntekter = Lønn</p>
                    <p className="text-sm text-slate-300">Renter og staking-rewards skattelegges som alminnelig inntekt (22%) i det sekundet du mottar dem.</p>
                  </div>
                )}
                {answers.exitRelevant === 'over_500k' && (
                  <div className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-xl">
                    <p className="font-bold text-rose-400">OBS: Exit-skatt-alarm!</p>
                    <p className="text-sm text-slate-300">Med verdier over 500 000 kr kan du bli skattepliktig for urealisert gevinst ved utflytting. Snakk med en proff!</p>
                  </div>
                )}
              </div>
              <button 
                onClick={() => setCurrentStep('start')}
                className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-100 transition-all"
              >
                Prøv igjen 🔄
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
