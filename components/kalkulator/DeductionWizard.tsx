'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Step = 'airbnb' | 'vedlikehold' | 'salg' | 'resultat';

export default function DeductionWizard() {
  const [currentStep, setCurrentStep] = useState<Step>('airbnb');
  const [answers, setAnswers] = useState({
    airbnb: false,
    vedlikehold: false,
    salg: false,
  });

  const handleAnswer = (step: Step, value: boolean) => {
    setAnswers({ ...answers, [step]: value });
    
    // Navigate to next step
    if (step === 'airbnb') setCurrentStep('vedlikehold');
    if (step === 'vedlikehold') setCurrentStep('salg');
    if (step === 'salg') setCurrentStep('resultat');
  };

  const calculateTotal = () => {
    let total = 0;
    if (answers.airbnb) total += 3200;
    if (answers.vedlikehold) total += 12500;
    if (answers.salg) total += 45000;
    return total;
  };

  const showEncouragement = answers.airbnb || answers.vedlikehold || answers.salg;

  // Animation variants
  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white border border-indigo-100 rounded-3xl p-6 md:p-10 shadow-xl max-w-2xl mx-auto my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Din smarte fradrags-kompis ✌️</h2>
        <p className="text-slate-500 text-lg">Svar på 3 kjappe spørsmål for å se hva du kan spare.</p>
      </div>

      <div className="relative min-h-[250px]">
        <AnimatePresence mode="wait">
          {currentStep === 'airbnb' && (
            <motion.div
              key="airbnb"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center justify-center space-y-6 h-full"
            >
              <h3 className="text-2xl font-bold text-slate-800 text-center text-balance">
                Har du leid ut kåken via Airbnb i år? 🏠
              </h3>
              <div className="flex space-x-4 w-full max-w-sm">
                <button 
                  onClick={() => handleAnswer('airbnb', true)}
                  className="flex-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold py-4 rounded-2xl transition-transform active:scale-95"
                >
                  Ja, litt cash! 💸
                </button>
                <button 
                  onClick={() => handleAnswer('airbnb', false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-2xl transition-transform active:scale-95"
                >
                  Nikkes 🙅
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
              className="flex flex-col items-center justify-center space-y-6 h-full"
            >
              <h3 className="text-2xl font-bold text-slate-800 text-center text-balance">
                Har du fikset på noe for å holde standarden oppe? 🛠️
              </h3>
              <p className="text-sm text-slate-500 text-center">Ny maling, fikset en lekk kran, eller lagt nytt gulv fordi det gamle var slitt?</p>
              <div className="flex space-x-4 w-full max-w-sm">
                <button 
                  onClick={() => handleAnswer('vedlikehold', true)}
                  className="flex-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold py-4 rounded-2xl transition-transform active:scale-95"
                >
                  Oh yes! 🔨
                </button>
                <button 
                  onClick={() => handleAnswer('vedlikehold', false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-2xl transition-transform active:scale-95"
                >
                  Ikke i år 🛋️
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
              className="flex flex-col items-center justify-center space-y-6 h-full"
            >
              <h3 className="text-2xl font-bold text-slate-800 text-center text-balance">
                Solgt boligen din nylig? 💰
              </h3>
              <div className="flex space-x-4 w-full max-w-sm">
                <button 
                  onClick={() => handleAnswer('salg', true)}
                  className="flex-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold py-4 rounded-2xl transition-transform active:scale-95"
                >
                  Jepp! 🤝
                </button>
                <button 
                  onClick={() => handleAnswer('salg', false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-2xl transition-transform active:scale-95"
                >
                  Sitter stille i båten 🚣
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
              <div className="text-center mb-6">
                {showEncouragement ? (
                  <>
                    <h3 className="text-3xl font-black text-indigo-600 mb-2">Se der ja! 🚀</h3>
                    <p className="text-slate-600">Her ligger det potensielle tusenlapper og venter på deg.</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-700 mb-2">Alt ser ryddig ut! 🧹</h3>
                    <p className="text-slate-600">Du ser ikke ut til å ha store uutnyttede fradrag i år, men det er greit å ha sjekket!</p>
                  </>
                )}
              </div>

              {showEncouragement && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Din Fradrags-meny 🧾</p>
                  <ul className="space-y-4">
                    {answers.airbnb && (
                      <li className="flex items-start">
                        <span className="text-xl mr-3">🧽</span>
                        <div>
                          <p className="font-bold text-slate-800">Airbnb-fradrag</p>
                          <p className="text-sm text-slate-500">Husk at du kan trekke fra annonsekostnader, plattformgebyrer (hvis skattepliktig), og utvask mellom leietakere.</p>
                        </div>
                      </li>
                    )}
                    {answers.vedlikehold && (
                      <li className="flex items-start">
                        <span className="text-xl mr-3">🎨</span>
                        <div>
                          <p className="font-bold text-slate-800">Vedlikeholdskostnader</p>
                          <p className="text-sm text-slate-500">Maling, rørlegger eller snekker for å opprettholde standarden kan gi direkte fradrag på skatten.</p>
                        </div>
                      </li>
                    )}
                    {answers.salg && (
                      <li className="flex items-start">
                        <span className="text-xl mr-3">📉</span>
                        <div>
                          <p className="font-bold text-slate-800">Salg og Megler</p>
                          <p className="text-sm text-slate-500">Solgt med tap eller ikke oppfylt botidskravet? Du kan trekke fra hele megleregningen!</p>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              <button 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95"
                onClick={() => alert("Starter fradragsføring...")}
              >
                Slik fører du dette på 1-2-3 ✨
              </button>
              
              <button 
                onClick={() => {
                  setAnswers({ airbnb: false, vedlikehold: false, salg: false });
                  setCurrentStep('airbnb');
                }}
                className="w-full mt-4 text-slate-400 font-semibold text-sm hover:text-slate-600 underline"
              >
                Start på nytt 🔄
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
