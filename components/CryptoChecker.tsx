'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bitcoin, Coins, Globe, Wallet, CheckCircle2 } from 'lucide-react';

type Step = 'start' | 'trading' | 'defi' | 'exit' | 'resultat';

export default function CryptoChecker() {
  const [currentStep, setCurrentStep] = useState<Step>('start');
  const [answers, setAnswers] = useState({
    trading: '' as '' | 'ja' | 'nei',
    defi: '' as '' | 'ja' | 'nei',
    exit: '' as '' | 'ja' | 'nei',
  });

  const handleStart = () => setCurrentStep('trading');
  
  const handleTrading = (val: 'ja' | 'nei') => {
    setAnswers({ ...answers, trading: val });
    setCurrentStep('defi');
  };

  const handleDefi = (val: 'ja' | 'nei') => {
    setAnswers({ ...answers, defi: val });
    setCurrentStep('exit');
  };

  const handleExit = (val: 'ja' | 'nei') => {
    setAnswers({ ...answers, exit: val });
    setCurrentStep('resultat');
  };

  const resetWizard = () => {
    setAnswers({ trading: '', defi: '', exit: '' });
    setCurrentStep('start');
  };

  const getProgress = () => {
    switch (currentStep) {
      case 'start': return 0;
      case 'trading': return 25;
      case 'defi': return 50;
      case 'exit': return 75;
      case 'resultat': return 100;
      default: return 0;
    }
  };

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const needsToReport = answers.trading === 'ja' || answers.defi === 'ja' || answers.exit === 'ja';

  return (
    <section 
      aria-label="Krypto-Sjekken veiviser" 
      className="bg-indigo-50/50 rounded-[2rem] p-6 md:p-10 shadow-sm border border-indigo-100 max-w-2xl mx-auto my-12 relative overflow-hidden"
    >
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
                <Bitcoin className="w-10 h-10 text-orange-500" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800 mb-4 text-balance">
                Krypto-Sjekken: Må du skatte i år? 👇
              </h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Ta 1 minutt og sjekk akkurat hva du må føre opp i skattemeldingen din (og unngå straffeskatt). Null stress, vi fikser dette.
              </p>
              <button 
                onClick={handleStart}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-2xl transition-transform active:scale-95 shadow-md"
              >
                Kjør i gang! 🚀
              </button>
            </motion.div>
          )}

          {currentStep === 'trading' && (
            <motion.div
              key="trading"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center w-full"
            >
              <Wallet className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2 text-balance">
                Har du solgt krypto eller NFT-er i år? 📉📈
              </h3>
              <p className="text-sm text-slate-500 text-center mb-6 max-w-md">
                Dette gjelder også om du har byttet én krypto mot en annen (f.eks BTC til ETH).
              </p>
              <div className="flex flex-col gap-3 w-full max-w-md">
                <button 
                  onClick={() => handleTrading('ja')}
                  className="bg-white hover:bg-emerald-50 border-2 border-slate-100 hover:border-emerald-200 text-slate-700 font-bold py-4 px-6 rounded-2xl transition-all text-left flex justify-between"
                >
                  <span>Ja, jeg har tradet / solgt 💸</span>
                </button>
                <button 
                  onClick={() => handleTrading('nei')}
                  className="bg-white hover:bg-slate-100 border-2 border-slate-100 text-slate-500 font-semibold py-4 px-6 rounded-2xl transition-all text-left"
                >
                  Nei, jeg har bare HODL-et (ikke solgt noe) 💎🙌
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'defi' && (
            <motion.div
              key="defi"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center w-full"
            >
              <Coins className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2 text-balance">
                Har du mottatt "renter" fra staking eller lån (DeFi)? 🌾
              </h3>
              <p className="text-sm text-slate-500 text-center mb-6 max-w-md">
                Staking, yield farming, eller renter fra plattformer som Nexo og Binance Earn.
              </p>
              <div className="flex flex-col gap-3 w-full max-w-md">
                <button 
                  onClick={() => handleDefi('ja')}
                  className="bg-white hover:bg-emerald-50 border-2 border-slate-100 hover:border-emerald-200 text-slate-700 font-bold py-4 px-6 rounded-2xl transition-all text-left flex justify-between"
                >
                  <span>Ja, har fått passive inntekter 💰</span>
                </button>
                <button 
                  onClick={() => handleDefi('nei')}
                  className="bg-white hover:bg-slate-100 border-2 border-slate-100 text-slate-500 font-semibold py-4 px-6 rounded-2xl transition-all text-left"
                >
                  Nei, har ikke drevet med sånt 😴
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'exit' && (
            <motion.div
              key="exit"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center w-full"
            >
              <Globe className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2 text-balance">
                Har du flyttet ut av Norge med krypto? ✈️
              </h3>
              <p className="text-sm text-slate-500 text-center mb-6 max-w-md">
                Hvis du har meldt utvandring fra Norge, og har urealisert krypto-gevinst over 500 000 kr, gjelder egne (strenge) regler.
              </p>
              <div className="flex flex-col gap-3 w-full max-w-md">
                <button 
                  onClick={() => handleExit('ja')}
                  className="bg-white hover:bg-rose-50 border-2 border-slate-100 hover:border-rose-200 text-slate-700 font-bold py-4 px-6 rounded-2xl transition-all text-left flex justify-between"
                >
                  <span>Ja, har flyttet med store verdier 🌍</span>
                </button>
                <button 
                  onClick={() => handleExit('nei')}
                  className="bg-white hover:bg-slate-100 border-2 border-slate-100 text-slate-500 font-semibold py-4 px-6 rounded-2xl transition-all text-left"
                >
                  Nei, jeg bor (skattemessig) i Norge 🇳🇴
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
                {needsToReport ? (
                  <>
                    <h3 className="text-3xl font-black text-indigo-600 mb-2">Her er dommen! 🥁</h3>
                    <p className="text-slate-600">Dette må du huske å fylle ut i skattemeldingen for krypto i år:</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-emerald-600 mb-2">Du har det chill! 🏖️</h3>
                    <p className="text-slate-600">Siden du kun har kjøpt og "HODL-et", er det ingen skatt å betale i år.</p>
                  </>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {!needsToReport && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 shadow-sm">
                    <p className="font-bold text-emerald-900 flex items-center mb-1">
                      <span className="text-xl mr-2">💎</span> Bare formue
                    </p>
                    <p className="text-emerald-800 text-sm">
                      Alt du trenger å gjøre er å føre opp formuesverdien (hva kryptoen din var verdt per 31. desember). Ingen gevinstskatt!
                    </p>
                  </div>
                )}

                {answers.trading === 'ja' && (
                  <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 shadow-sm">
                    <p className="font-bold text-indigo-900 flex items-center mb-1">
                      <span className="text-xl mr-2">⚖️</span> Gevinst og Tap
                    </p>
                    <p className="text-indigo-800 text-sm">
                      Du må regne ut og føre opp total gevinst (beskattes 22 %) eller tap (gir fradrag 22 %) for alle transaksjonene dine. Husk at <strong>tap er gull verdt</strong> for skatteregningen din!
                    </p>
                  </div>
                )}

                {answers.defi === 'ja' && (
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 shadow-sm">
                    <p className="font-bold text-amber-900 flex items-center mb-1">
                      <span className="text-xl mr-2">🌾</span> Staking-inntekter
                    </p>
                    <p className="text-amber-800 text-sm">
                      Renter og rewards fra staking anses som kapitalinntekt. Dette skattlegges som regel på det tidspunktet du får "råderett" over dem, med 22 % skatt.
                    </p>
                  </div>
                )}

                {answers.exit === 'ja' && (
                  <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 shadow-sm">
                    <p className="font-bold text-rose-900 flex items-center mb-1">
                      <span className="text-xl mr-2">🚨</span> Pass på Exit-skatten
                    </p>
                    <p className="text-rose-800 text-sm">
                      Flytter du ut med urealiserte gevinster på over 500 000 kr totalt i aksjer/krypto, kan du bli truffet av reglene om utflyttingsskatt ("Exit-skatt"). Det krever nøyaktig rapportering til Skatteetaten!
                    </p>
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
                  Slik beregner du skatten 👇
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
