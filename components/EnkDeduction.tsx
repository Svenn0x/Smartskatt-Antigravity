'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Home, Laptop, Car, GraduationCap, Coins, CheckCircle2 } from 'lucide-react';

type Step = 'start' | 'hjemmekontor' | 'elektronikk' | 'reise' | 'kurs' | 'resultat';

export default function EnkDeduction() {
  const [currentStep, setCurrentStep] = useState<Step>('start');
  const [answers, setAnswers] = useState({
    hjemmekontor: false,
    elektronikk: false,
    reise: false,
    kurs: false,
  });

  const getProgress = () => {
    const steps: Step[] = ['start', 'hjemmekontor', 'elektronikk', 'reise', 'kurs', 'resultat'];
    return (steps.indexOf(currentStep) / (steps.length - 1)) * 100;
  };

  const handleAnswer = (stepKey: keyof typeof answers, val: boolean, nextStep: Step) => {
    setAnswers(prev => ({ ...prev, [stepKey]: val }));
    setCurrentStep(nextStep);
  };

  const hasDeductions = Object.values(answers).some(val => val === true);

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section aria-label="Fradrags-Automaten for ENK" className="bg-gradient-to-br from-indigo-50 to-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-indigo-100 max-w-2xl mx-auto my-12 relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-100" role="progressbar" aria-valuenow={getProgress()} aria-valuemin={0} aria-valuemax={100}>
        <motion.div 
          className="h-full bg-emerald-400"
          initial={{ width: 0 }}
          animate={{ width: `${getProgress()}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="relative min-h-[380px] flex flex-col justify-center mt-4">
        <AnimatePresence mode="wait">
          
          {currentStep === 'start' && (
            <motion.div key="start" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="text-center">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Briefcase className="w-10 h-10 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800 mb-4 text-balance">
                Fradrags-Automaten for ENK 💼
              </h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Skal du levere næringsoppgave? Ikke betal mer skatt enn du må. La oss finne dine skjulte penger på under 1 minutt! 👇
              </p>
              <button 
                onClick={() => setCurrentStep('hjemmekontor')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-md active:scale-95"
              >
                Start jakten på fradragene 🚀
              </button>
            </motion.div>
          )}

          {currentStep === 'hjemmekontor' && (
            <motion.div key="hjemmekontor" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full text-center">
              <Home className="w-8 h-8 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Har du et dedikert rom hjemme du kun bruker til jobb? 🏠</h3>
              <div className="grid gap-3 w-full max-w-md mx-auto">
                <button onClick={() => handleAnswer('hjemmekontor', true, 'elektronikk')} className="bg-white hover:bg-emerald-50 border-2 border-slate-100 hover:border-emerald-200 text-slate-700 font-bold p-4 rounded-xl text-left flex justify-between group">
                  <span>Ja, har eget kontor! 🤓</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button onClick={() => handleAnswer('hjemmekontor', false, 'elektronikk')} className="bg-white hover:bg-slate-100 border-2 border-slate-100 text-slate-500 font-semibold p-4 rounded-xl text-left">
                  Sitter ved kjøkkenbordet ☕
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'elektronikk' && (
            <motion.div key="elektronikk" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full text-center">
              <Laptop className="w-8 h-8 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Har du kjøpt PC, mobil eller utstyr til firmaet? 💻</h3>
              <div className="grid gap-3 w-full max-w-md mx-auto">
                <button onClick={() => handleAnswer('elektronikk', true, 'reise')} className="bg-white hover:bg-emerald-50 border-2 border-slate-100 hover:border-emerald-200 text-slate-700 font-bold p-4 rounded-xl text-left flex justify-between group">
                  <span>Mye nytt stæsj i år! 🎧</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button onClick={() => handleAnswer('elektronikk', false, 'reise')} className="bg-white hover:bg-slate-100 border-2 border-slate-100 text-slate-500 font-semibold p-4 rounded-xl text-left">
                  Bruker det jeg hadde fra før 📱
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'reise' && (
            <motion.div key="reise" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full text-center">
              <Car className="w-8 h-8 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Bruker du egen bil til kundemøter eller oppdrag? 🚗</h3>
              <div className="grid gap-3 w-full max-w-md mx-auto">
                <button onClick={() => handleAnswer('reise', true, 'kurs')} className="bg-white hover:bg-emerald-50 border-2 border-slate-100 hover:border-emerald-200 text-slate-700 font-bold p-4 rounded-xl text-left flex justify-between group">
                  <span>Kjører mye for bedriften 🛣️</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button onClick={() => handleAnswer('reise', false, 'kurs')} className="bg-white hover:bg-slate-100 border-2 border-slate-100 text-slate-500 font-semibold p-4 rounded-xl text-left">
                  Tar buss, eller jobber remote 🌍
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'kurs' && (
            <motion.div key="kurs" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full text-center">
              <GraduationCap className="w-8 h-8 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Betalt for kurs for å holde deg oppdatert i faget? 📚</h3>
              <div className="grid gap-3 w-full max-w-md mx-auto">
                <button onClick={() => handleAnswer('kurs', true, 'resultat')} className="bg-white hover:bg-emerald-50 border-2 border-slate-100 hover:border-emerald-200 text-slate-700 font-bold p-4 rounded-xl text-left flex justify-between group">
                  <span>Ja, må jo henge med! 🧠</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button onClick={() => handleAnswer('kurs', false, 'resultat')} className="bg-white hover:bg-slate-100 border-2 border-slate-100 text-slate-500 font-semibold p-4 rounded-xl text-left">
                  Kun YouTube i år 🎬
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'resultat' && (
            <motion.div key="resultat" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full">
              <div className="text-center mb-8">
                {hasDeductions ? (
                  <>
                    <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-full mb-4">
                      <Coins className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-800 mb-2">Her er dine skjulte penger! 💰</h3>
                    <p className="text-slate-600">Skriv dette bak øret til næringsoppgaven:</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-3xl font-black text-slate-800 mb-2">Null stress joggedress! 🧘</h3>
                    <p className="text-slate-600">Du har færre utgifter enn de fleste. Det betyr høyere overskudd rett i lomma!</p>
                  </>
                )}
              </div>

              {hasDeductions && (
                <div className="space-y-4 mb-8">
                  {answers.hjemmekontor && (
                    <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-2xl shadow-sm">
                      <p className="font-bold text-indigo-900 flex items-center mb-1">
                        <Home className="w-5 h-5 mr-2" /> Standardfradrag for hjemmekontor
                      </p>
                      <p className="text-sm text-indigo-800">
                        Har du et eksklusivt kontorrom, kan du kreve 2 150 kr (2026-sats) i skattefritt sjablongfradrag, uavhengig av faktiske utgifter!
                      </p>
                    </div>
                  )}
                  {answers.elektronikk && (
                    <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl shadow-sm">
                      <p className="font-bold text-emerald-900 flex items-center mb-1">
                        <Laptop className="w-5 h-5 mr-2" /> Direkte fradrag for utstyr
                      </p>
                      <p className="text-sm text-emerald-800">
                        PC og mobil under 15 000 kr kan føres som en direkte utgift og spise ned skatten din umiddelbart. Over 15k? Da må den avskrives over flere år (saldoavskrivning).
                      </p>
                    </div>
                  )}
                  {answers.reise && (
                    <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl shadow-sm">
                      <p className="font-bold text-amber-900 flex items-center mb-1">
                        <Car className="w-5 h-5 mr-2" /> Kjøregodtgjørelse (3,50 kr pr km)
                      </p>
                      <p className="text-sm text-amber-800">
                        Skriv kjørebok! Du kan kreve fradrag pr. kilometer du kjører privatbilen for firmaet. Og bompenger? Det kommer på toppen!
                      </p>
                    </div>
                  )}
                  {answers.kurs && (
                    <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl shadow-sm">
                      <p className="font-bold text-rose-900 flex items-center mb-1">
                        <GraduationCap className="w-5 h-5 mr-2" /> Oppdateringskurs
                      </p>
                      <p className="text-sm text-rose-800">
                        Merk: Du får fradrag for å holde deg oppdatert (f.eks et nytt Excel-kurs for regnskapsførere), men IKKE grunnutdanning for å bytte yrke.
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => {
                    setAnswers({ hjemmekontor: false, elektronikk: false, reise: false, kurs: false });
                    setCurrentStep('start');
                  }}
                  className="w-full sm:w-auto flex-1 bg-white border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3 rounded-xl transition-all"
                >
                  Start på nytt 🔄
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
