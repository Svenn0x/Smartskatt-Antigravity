'use client';

import React, { useState } from 'react';
import { Home, Hammer, TrendingUp, Key, ChevronRight, CheckCircle2, ArrowLeft, Coins, Receipt } from 'lucide-react';

type Category = 'utleie' | 'vedlikehold' | 'salg' | 'airbnb';

const categories = [
  { id: 'utleie', title: 'Langtidsutleie', icon: Home, desc: 'Deler av egen bolig eller sekundærbolig' },
  { id: 'airbnb', title: 'Korttidsutleie', icon: Key, desc: 'Airbnb, Booking.com (under 30 dager)' },
  { id: 'vedlikehold', title: 'Oppussing / Vedlikehold', icon: Hammer, desc: 'Påkostning eller vedlikehold?' },
  { id: 'salg', title: 'Salg av bolig', icon: TrendingUp, desc: 'Inngangsverdi og skattefritt salg' },
];

export default function FradragsVeiviser() {
  const [step, setStep] = useState<number>(1);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  
  const toggleCategory = (id: Category) => {
    setSelectedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const calculatePotentialSavings = () => {
    // A playful, estimate calculation based on selected categories
    let savings = 0;
    if (selectedCategories.includes('utleie')) savings += 8500;
    if (selectedCategories.includes('airbnb')) savings += 3200;
    if (selectedCategories.includes('vedlikehold')) savings += 15000;
    if (selectedCategories.includes('salg')) savings += 45000;
    return savings;
  };

  const renderStep1 = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Hva gjelder for deg i 2026?</h3>
      <p className="text-slate-600 mb-8">Velg ett eller flere områder for å se skjulte fradrag du kan ha krav på.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategories.includes(cat.id as Category);
          return (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.id as Category)}
              className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 flex items-start space-x-4 ${
                isSelected 
                  ? 'border-indigo-600 bg-indigo-50 shadow-md transform scale-[1.02]' 
                  : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
              }`}
            >
              <div className={`p-3 rounded-full ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`font-bold text-lg mb-1 ${isSelected ? 'text-indigo-900' : 'text-slate-900'}`}>{cat.title}</h4>
                <p className="text-sm text-slate-500">{cat.desc}</p>
              </div>
              {isSelected && <CheckCircle2 className="w-6 h-6 text-indigo-600 ml-auto flex-shrink-0" />}
            </button>
          )
        })}
      </div>
      
      <button 
        onClick={() => setStep(2)}
        disabled={selectedCategories.length === 0}
        className="w-full bg-slate-900 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all hover:bg-slate-800"
      >
        <span>Generer min fradragsliste</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  const renderStep2 = () => {
    const savings = calculatePotentialSavings();
    return (
      <div className="animate-in fade-in slide-in-from-right-4 duration-500">
        <button onClick={() => setStep(1)} className="flex items-center text-sm font-semibold text-slate-500 hover:text-slate-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Endre valg
        </button>
        
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Din Personlige Fradragsrapport (2026)</h3>
        
        {/* Skattefordel-måler (Fintech Vibe) */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 text-white mb-8 shadow-xl shadow-emerald-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
          <div className="flex items-center space-x-4 relative z-10">
            <div className="bg-white/20 p-4 rounded-full">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-emerald-100 font-medium mb-1">Potensielt skattefradrag (estimat)</p>
              <p className="text-4xl font-black tracking-tight">{savings.toLocaleString('no-NO')} kr</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {selectedCategories.includes('utleie') && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="flex items-center font-bold text-slate-900 text-lg mb-3">
                <Home className="w-5 h-5 mr-2 text-indigo-600" /> Langtidsutleie
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-600">
                  <Receipt className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>15% Møbelsjablong:</strong> Hvis du leier ut møblert (og skattepliktig), kan du trekke fra 15% av leieinntekten fremfor faktiske utgifter.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <Receipt className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Forsikring & Felleskostnader:</strong> Trekk fra den andelen som gjelder utleiedelen (ved skattepliktig utleie).</span>
                </li>
              </ul>
            </div>
          )}

          {selectedCategories.includes('airbnb') && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="flex items-center font-bold text-slate-900 text-lg mb-3">
                <Key className="w-5 h-5 mr-2 text-indigo-600" /> Korttidsutleie (Airbnb)
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-600">
                  <Receipt className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Plattformgebyrer:</strong> Trekkes <em>ikke</em> fra før de første 10.000 kr, da dette dekkes av det skattefrie fribeløpet og sjablongen på 85%.</span>
                </li>
              </ul>
            </div>
          )}

          {selectedCategories.includes('vedlikehold') && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="flex items-center font-bold text-slate-900 text-lg mb-3">
                <Hammer className="w-5 h-5 mr-2 text-indigo-600" /> Oppussing / Vedlikehold
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-600">
                  <Receipt className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Påkostning vs. Vedlikehold:</strong> Ved skattepliktig utleie kan løpende vedlikehold (male, bytte lik standard) fradragsføres med en gang. Påkostning (ny standard) må aktiveres.</span>
                </li>
              </ul>
            </div>
          )}

          {selectedCategories.includes('salg') && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="flex items-center font-bold text-slate-900 text-lg mb-3">
                <TrendingUp className="w-5 h-5 mr-2 text-indigo-600" /> Salg av bolig
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-600">
                  <Receipt className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Fradrag ved tap:</strong> Hvis salget ville vært skattepliktig ved gevinst, har du rett på fullt fradrag for megler, takst, og selve tapet.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <Receipt className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Påkostninger:</strong> Hvis du har oppgradert standarden mens du bodde der, kan dette legges til inngangsverdien og redusere skatten (hvis salget er skattepliktig).</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-xl max-w-3xl mx-auto my-16">
      {/* Progress */}
      <div className="flex items-center space-x-2 mb-8">
        <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-indigo-600' : 'bg-slate-100'} transition-colors`}></div>
        <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-indigo-600' : 'bg-slate-100'} transition-colors`}></div>
      </div>
      
      {step === 1 ? renderStep1() : renderStep2()}
    </div>
  );
}
