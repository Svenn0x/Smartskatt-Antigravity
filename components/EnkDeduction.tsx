'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Laptop, Coffee, Car, CheckCircle2, Zap } from 'lucide-react';

type Step = 'start' | 'office' | 'tech' | 'travel' | 'resultat';

export default function EnkDeduction() {
  const [currentStep, setCurrentStep] = useState<Step>('start');
  const [answers, setAnswers] = useState({
    officeType: '' as '' | 'eget_rom' | 'stue_kjokken' | 'ingen',
    techSpend: '' as '' | 'under_15k' | 'over_15k' | 'nei',
    travelType: '' as '' | 'bil' | 'kollektiv' | 'nei',
  });

  const getProgress = () => {
    const steps: Step[] = ['start', 'office', 'tech', 'travel', 'resultat'];
    return (steps.indexOf(currentStep) / (steps.length - 1)) * 100;
  };

  return (
    <section className="bg-emerald-50/30 rounded-[2rem] p-6 md:p-10 shadow-sm border border-emerald-100 max-w-2xl mx-auto my-12 relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-emerald-100/50">
        <motion.div 
          className="h-full bg-emerald-500"
          initial={{ width: 0 }}
          animate={{ width: `${getProgress()}%` }}
        />
      </div>

      <div className="relative min-h-[400px] flex flex-col justify-center mt-4">
        <AnimatePresence mode="wait">
          
          {currentStep === 'start' && (
            <motion.div key="start" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-center">
              <div className="bg-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-4">Driver du ENK? La oss finne pengene dine! 💼</h2>
              <p className="text-slate-600 mb-8">Mange frilansere betaler for mye skatt fordi de glemmer de små tingene. Sjekk hva du kan føre i regnskapet ditt nå.</p>
              <button 
                onClick={() => setCurrentStep('office')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-2xl transition-transform active:scale-95 shadow-lg"
              >
                Start Fradrags-Automaten ✨
              </button>
            </motion.div>
          )}

          {currentStep === 'office' && (
            <motion.div key="office" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} className="w-full">
              <Coffee className="w-8 h-8 text-emerald-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">Jobber du hjemmefra? 🏠</h3>
              <div className="grid gap-3 w-full max-w-md mx-auto">
                <button onClick={() => { setAnswers({...answers, officeType: 'eget_rom'}); setCurrentStep('tech'); }} className="bg-white hover:border-emerald-500 border-2 border-slate-100 p-4 rounded-xl text-left font-semibold">Ja, har et eget kontor-rom 🖥️</button>
                <button onClick={() => { setAnswers({...answers, officeType: 'stue_kjokken'}); setCurrentStep('tech'); }} className="bg-white hover:border-emerald-500 border-2 border-slate-100 p-4 rounded-xl text-left font-semibold">Ja, men i stua / på kjøkkenet ☕</button>
                <button onClick={() => { setAnswers({...answers, officeType: 'ingen'}); setCurrentStep('tech'); }} className="bg-white hover:border-slate-300 border-2 border-slate-100 p-4 rounded-xl text-left text-slate-500">Nei, leier kontor ute 🏢</button>
              </div>
            </motion.div>
          )}

          {currentStep === 'tech' && (
            <motion.div key="tech" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} className="w-full">
              <Laptop className="w-8 h-8 text-emerald-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">Kjøpt ny tech eller utstyr? 💻</h3>
              <div className="grid gap-3 w-full max-w-md mx-auto">
                <button onClick={() => { setAnswers({...answers, techSpend: 'under_15k'}); setCurrentStep('travel'); }} className="bg-white hover:border-emerald-500 border-2 border-slate-100 p-4 rounded-xl text-left font-semibold">Ja, ting under 15 000 kr 🎧</button>
                <button onClick={() => { setAnswers({...answers, techSpend: 'over_15k'}); setCurrentStep('travel'); }} className="bg-white hover:border-emerald-500 border-2 border-slate-100 p-4 rounded-xl text-left font-semibold">Ja, dyrere ting (PC/Kamera) 📸</button>
                <button onClick={() => { setAnswers({...answers, techSpend: 'nei'}); setCurrentStep('travel'); }} className="bg-white hover:border-slate-300 border-2 border-slate-100 p-4 rounded-xl text-left text-slate-500">Ikke i år ❌</button>
              </div>
            </motion.div>
          )}

          {currentStep === 'travel' && (
            <motion.div key="travel" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} className="w-full">
              <Car className="w-8 h-8 text-emerald-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">Mye farting på kundemøter? 🚗</h3>
              <div className="grid gap-3 w-full max-w-md mx-auto">
                <button onClick={() => { setAnswers({...answers, travelType: 'bil'}); setCurrentStep('resultat'); }} className="bg-white hover:border-emerald-500 border-2 border-slate-100 p-4 rounded-xl text-left font-semibold">Ja, bruker egen bil 🏎️</button>
                <button onClick={() => { setAnswers({...answers, travelType: 'kollektiv'}); setCurrentStep('resultat'); }} className="bg-white hover:border-emerald-500 border-2 border-slate-100 p-4 rounded-xl text-left font-semibold">Ja, tog/buss/fly ✈️</button>
                <button onClick={() => { setAnswers({...answers, travelType: 'nei'}); setCurrentStep('resultat'); }} className="bg-white hover:border-slate-300 border-2 border-slate-100 p-4 rounded-xl text-left text-slate-500">Sitter stort sett stille 🧘</button>
              </div>
            </motion.div>
          )}

          {currentStep === 'resultat' && (
            <motion.div key="resultat" initial={{opacity:0}} animate={{opacity:1}} className="w-full">
              <div className="text-center mb-6">
                <Zap className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                <h3 className="text-3xl font-black text-slate-800">Fradrags-fangsten! 💰</h3>
              </div>
              <div className="space-y-4 mb-8">
                {answers.officeType === 'eget_rom' && (
                  <div className="bg-white border-l-4 border-emerald-500 p-4 rounded-r-xl shadow-sm">
                    <p className="font-bold text-slate-800">Standardfradrag for hjemmekontor</p>
                    <p className="text-sm text-slate-600">Siden du har et eget rom, kan du føre 2 050 kr rett i fradrag uten kvittering. Enkelt og greit!</p>
                  </div>
                )}
                {answers.techSpend === 'under_15k' && (
                  <div className="bg-white border-l-4 border-emerald-500 p-4 rounded-r-xl shadow-sm">
                    <p className="font-bold text-slate-800">Direkte utgiftsføring</p>
                    <p className="text-sm text-slate-600">Alt under 15 000 kr (inkl. mva) kan du føre som en direkte kostnad i året du kjøpte det. Fullt fradrag med en gang!</p>
                  </div>
                )}
                {answers.travelType === 'bil' && (
                  <div className="bg-white border-l-4 border-emerald-500 p-4 rounded-r-xl shadow-sm">
                    <p className="font-bold text-slate-800">Kjøregodtgjørelse (Sats 2026)</p>
                    <p className="text-sm text-slate-600">Husk å føre kjørebok! Du får 4,90 kr per km (estimert sats) for yrkeskjøring med egen bil.</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => setCurrentStep('start')} className="w-full sm:w-auto flex-1 bg-white border-2 border-slate-200 text-slate-700 font-bold py-4 rounded-xl hover:bg-slate-50 transition-all">
                  Sjekk på nytt 🔄
                </button>
                <a 
                  href="/frilans"
                  className="w-full sm:w-auto flex-[2] bg-slate-800 text-white font-bold py-4 rounded-xl hover:bg-slate-900 transition-all text-center flex items-center justify-center shadow-md active:scale-95"
                >
                  Gå til Frilans-Guiden ✨
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
