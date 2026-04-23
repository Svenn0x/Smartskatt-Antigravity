"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HomeIcon, 
  CurrencyDollarIcon, 
  BriefcaseIcon, 
  TruckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

// Reusing existing progress bar or building a simple integrated one.
// We'll build an integrated one for smooth UI.

export default function SmartWizard() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    bolig: "",
    krypto: "",
    jobbreise: "",
    kmPerDag: 40,
    arbeid: ""
  });

  const updateAnswer = (key: string, value: string | number) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleOptionClick = (key: string, value: string | number, autoNext = true) => {
    updateAnswer(key, value);
    if (autoNext && key !== "jobbreise" || (key === "jobbreise" && value === "Nei")) {
      setTimeout(() => {
        nextStep();
      }, 300);
    }
  };

  // Beregn reisefradrag (230 arbeidsdager som standard)
  const calculateReisefradrag = () => {
    const dager = 230;
    const totalKm = answers.kmPerDag * dager;
    const sats = 1.83;
    const egenandel = 15250; // 2025/2026-sats
    
    const fradrag = (totalKm * sats) - egenandel;
    return fradrag > 0 ? Math.round(fradrag) : 0;
  };

  const OptionCard = ({ title, active, onClick, icon: Icon }: { title: string, active: boolean, onClick: () => void, icon?: any }) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full p-4 rounded-xl border-2 text-left flex items-center transition-all ${
        active 
          ? "border-blue-600 bg-blue-50/50 shadow-md" 
          : "border-slate-100 hover:border-blue-300 hover:bg-slate-50 text-slate-700"
      }`}
    >
      <div className={`p-3 rounded-lg mr-4 ${active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
        {Icon && <Icon className="w-6 h-6" />}
      </div>
      <span className={`font-medium ${active ? "text-blue-900" : "text-slate-700"}`}>
        {title}
      </span>
      {active && (
        <CheckCircleIcon className="w-6 h-6 text-blue-600 ml-auto" />
      )}
    </motion.button>
  );

  const getResults = () => {
    const results = [];
    if (answers.krypto === "Ja") {
      results.push({
        title: "Kryptovaluta",
        description: "Du kan ha krav på fradrag for transaksjonsgebyrer og tap. Anbefaling: Les vår guide og lær mer om Kryptosekken for automatisk rapport.",
        actionText: "Les kryptoguide",
        actionUrl: "/krypto"
      });
    }
    if (answers.bolig === "Ja, leier ut (Airbnb/fast)") {
      results.push({
        title: "Utleie av eiendom",
        description: "Husk at du kan trekke fra kostnader til forsikring og annonsering. Anbefaling: Les vår utleieguide for mer informasjon.",
        actionText: "Les boligguide",
        actionUrl: "/bolig"
      });
    }
    if (answers.jobbreise === "Ja") {
      const fradrag = calculateReisefradrag();
      if (fradrag > 0) {
        results.push({
          title: "Reisefradrag",
          description: `Du har estimert ${fradrag.toLocaleString('no-NO')} kr i reisefradrag. Husk å føre dette i post 3.2.8.`,
          actionText: "Les mer",
          actionUrl: "#reisefradrag"
        });
      }
    }
    if (answers.arbeid === "ENK/Bedriftseier") {
      results.push({
        title: "Næringsdrivende",
        description: "Sørg for å få med deg fradrag for hjemmekontor og pass på 30 000 kr grensen for direkte fradrag.",
        actionText: "Les bedriftsguide",
        actionUrl: "/bedrift"
      });
    }
    return results;
  };

  const results = getResults();

  return (
    <div className="w-full max-w-2xl mx-auto my-12 relative z-10">
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 overflow-hidden">
        
        {/* Progress Bar */}
        <div className="h-2 bg-slate-100 w-full relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-blue-600"
            initial={{ width: "20%" }}
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="p-8 md:p-12">
          {step < 5 && (
            <div className="mb-8">
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-2 block">
                Steg {step} av 4
              </span>
            </div>
          )}

          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              
              {/* STEG 1: BOLIG */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                    Eier du bolig eller fritidseiendom?
                  </h2>
                  <div className="space-y-3">
                    <OptionCard 
                      title="Ja, eier og bor selv" 
                      active={answers.bolig === "Ja, eier og bor selv"}
                      onClick={() => handleOptionClick("bolig", "Ja, eier og bor selv")}
                      icon={HomeIcon}
                    />
                    <OptionCard 
                      title="Ja, leier ut (Airbnb/fast)" 
                      active={answers.bolig === "Ja, leier ut (Airbnb/fast)"}
                      onClick={() => handleOptionClick("bolig", "Ja, leier ut (Airbnb/fast)")}
                      icon={HomeIcon}
                    />
                    <OptionCard 
                      title="Nei, leier" 
                      active={answers.bolig === "Nei, leier"}
                      onClick={() => handleOptionClick("bolig", "Nei, leier")}
                      icon={HomeIcon}
                    />
                  </div>
                </motion.div>
              )}

              {/* STEG 2: KRYPTO */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                    Har du handlet eller eid kryptovaluta/NFTs i løpet av året?
                  </h2>
                  <div className="space-y-3">
                    <OptionCard 
                      title="Ja, det har jeg" 
                      active={answers.krypto === "Ja"}
                      onClick={() => handleOptionClick("krypto", "Ja")}
                      icon={CurrencyDollarIcon}
                    />
                    <OptionCard 
                      title="Nei" 
                      active={answers.krypto === "Nei"}
                      onClick={() => handleOptionClick("krypto", "Nei")}
                      icon={CurrencyDollarIcon}
                    />
                  </div>
                </motion.div>
              )}

              {/* STEG 3: REISE */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                    Har du mer enn 20 km reisevei til jobb (tur/retur)?
                  </h2>
                  <div className="space-y-3">
                    <OptionCard 
                      title="Ja, over 20 km" 
                      active={answers.jobbreise === "Ja"}
                      onClick={() => handleOptionClick("jobbreise", "Ja", false)}
                      icon={TruckIcon}
                    />
                    {answers.jobbreise === "Ja" && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pl-4 border-l-2 border-blue-200 py-2 mt-4 space-y-4"
                      >
                        <label className="block text-sm font-medium text-slate-700">
                          Antall km tur/retur per dag
                        </label>
                        <div className="flex items-center gap-4">
                          <input 
                            type="number" 
                            min="20"
                            value={answers.kmPerDag}
                            onChange={(e) => updateAnswer("kmPerDag", Number(e.target.value))}
                            className="w-24 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all outline-none"
                          />
                          <span className="text-slate-500">km</span>
                        </div>
                        <button
                          onClick={nextStep}
                          className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium flex items-center gap-2"
                        >
                          Gå videre <ArrowRightIcon className="w-4 h-4" />
                        </button>
                      </motion.div>
                    )}

                    <OptionCard 
                      title="Nei, kortere reisevei" 
                      active={answers.jobbreise === "Nei"}
                      onClick={() => handleOptionClick("jobbreise", "Nei")}
                      icon={TruckIcon}
                    />
                  </div>
                </motion.div>
              )}

              {/* STEG 4: ARBEID */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                    Er du ansatt, pensjonist eller driver du for deg selv?
                  </h2>
                  <div className="space-y-3">
                    <OptionCard 
                      title="Ansatt" 
                      active={answers.arbeid === "Ansatt"}
                      onClick={() => handleOptionClick("arbeid", "Ansatt", false)}
                      icon={BriefcaseIcon}
                    />
                    <OptionCard 
                      title="Pensjonist" 
                      active={answers.arbeid === "Pensjonist"}
                      onClick={() => handleOptionClick("arbeid", "Pensjonist", false)}
                      icon={BriefcaseIcon}
                    />
                    <OptionCard 
                      title="ENK / Bedriftseier" 
                      active={answers.arbeid === "ENK/Bedriftseier"}
                      onClick={() => handleOptionClick("arbeid", "ENK/Bedriftseier", false)}
                      icon={BriefcaseIcon}
                    />
                  </div>
                  
                  {answers.arbeid && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="pt-6"
                    >
                      <button
                        onClick={nextStep}
                        className="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold flex justify-center items-center gap-2 text-lg shadow-lg shadow-blue-600/30"
                      >
                        <SparklesIcon className="w-6 h-6" />
                        Se mine resultater
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* STEG 5: RESULTATER */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      Vi har funnet {results.length} potensielle {results.length === 1 ? 'fradrag' : 'områder'} for deg!
                    </h2>
                    <p className="text-slate-600 text-lg">
                      Basert på dine svar har vi samlet de viktigste tipsene og verktøyene du trenger.
                    </p>
                  </div>

                  {results.length > 0 ? (
                    <div className="space-y-4 mt-8">
                      {results.map((res, i) => (
                        <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:shadow-md transition-shadow">
                          <div className="flex-1 space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900">{res.title}</h3>
                            <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: res.description.replace(/Anbefaling:/, '<strong>Anbefaling:</strong>') }} />
                          </div>
                          {res.actionUrl.startsWith('#') ? (
                            <button className="whitespace-nowrap px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-sm">
                              {res.actionText}
                            </button>
                          ) : (
                            <Link href={res.actionUrl} className="whitespace-nowrap px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-sm inline-block text-center">
                              {res.actionText}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                      <p className="text-slate-700">
                        Det ser ut til at du har en relativt ukomplisert skattesituasjon i år. Husk likevel å sjekke at forhåndsutfylte tall stemmer med dine årsoppgaver!
                      </p>
                    </div>
                  )}

                  <div className="pt-8 text-center">
                    <button 
                      onClick={() => { setStep(1); setAnswers({ bolig: "", krypto: "", jobbreise: "", kmPerDag: 40, arbeid: "" }); }}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Start på nytt
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Back button */}
          {step > 1 && step < 5 && (
            <div className="mt-8 border-t border-slate-100 pt-6">
              <button 
                onClick={prevStep}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                ← Tilbake til forrige steg
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
