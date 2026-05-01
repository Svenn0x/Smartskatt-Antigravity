'use client';

import React, { useState } from 'react';
import { Home, TrendingUp, TrendingDown, Info, CheckCircle2, AlertCircle } from 'lucide-react';

export default function BoligsalgKalkulator() {
  const [salgssum, setSalgssum] = useState<string>('');
  const [kjopesum, setKjopesum] = useState<string>('');
  const [omkKjop, setOmkKjop] = useState<string>('');
  const [omkSalg, setOmkSalg] = useState<string>('');
  const [pakostninger, setPakostninger] = useState<string>('');
  const [oppfyllerBokrav, setOppfyllerBokrav] = useState<boolean>(true);

  const parseNum = (val: string) => parseFloat(val.replace(/\s/g, '').replace(/,/g, '.')) || 0;

  const s = parseNum(salgssum);
  const k = parseNum(kjopesum);
  const ok = parseNum(omkKjop);
  const os = parseNum(omkSalg);
  const p = parseNum(pakostninger);

  const isCalculable = salgssum !== '' && kjopesum !== '';
  
  // Beregning
  const inngangsverdi = k + ok + p;
  const nettosalg = s - os;
  const differanse = nettosalg - inngangsverdi;
  const isGevinst = differanse >= 0;
  
  // Skatt
  const skatt = oppfyllerBokrav ? 0 : Math.abs(differanse * 0.22);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('no-NO', {
      style: 'currency',
      currency: 'NOK',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100 my-10 max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 md:p-8 text-white">
        <div className="flex items-center space-x-3 mb-3">
          <Home className="w-8 h-8 text-blue-100" />
          <h3 className="text-2xl font-bold m-0 text-white">Gevinstkalkulator ved Boligsalg</h3>
        </div>
        <p className="text-blue-100 text-base m-0 max-w-xl">
          Beregn estimert skatt på gevinst eller fradrag for tap (22%) ved salg av bolig. 
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        
        {/* Bokrav-toggle */}
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <label className="flex items-start space-x-3 cursor-pointer">
            <div className="flex-shrink-0 mt-1">
              <input 
                type="checkbox" 
                checked={oppfyllerBokrav}
                onChange={(e) => setOppfyllerBokrav(e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-1">Har du eid og bodd i boligen i minst ett av de siste to årene før salget?</p>
              <p className="text-sm text-slate-500">
                Eier- og botidskravet avgjør om gevinsten er skattefri (og tapet ikke fradragsberettiget).
              </p>
            </div>
          </label>
        </div>

        {/* Input felter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Salgssum (NOK)</label>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                value={salgssum}
                onChange={(e) => setSalgssum(e.target.value.replace(/[^0-9,\s]/g, ''))}
                placeholder="F.eks. 4 500 000"
                className="block w-full pl-4 pr-12 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-lg font-medium shadow-sm"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">kr</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Kjøpesum opprinnelig (NOK)</label>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                value={kjopesum}
                onChange={(e) => setKjopesum(e.target.value.replace(/[^0-9,\s]/g, ''))}
                placeholder="F.eks. 3 800 000"
                className="block w-full pl-4 pr-12 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-lg font-medium shadow-sm"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">kr</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Omkostninger ved salg (Megler etc.)</label>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                value={omkSalg}
                onChange={(e) => setOmkSalg(e.target.value.replace(/[^0-9,\s]/g, ''))}
                placeholder="F.eks. 100 000"
                className="block w-full pl-4 pr-12 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-lg font-medium shadow-sm"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">kr</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Omk. ved kjøp (Dok.avgift etc.)</label>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                value={omkKjop}
                onChange={(e) => setOmkKjop(e.target.value.replace(/[^0-9,\s]/g, ''))}
                placeholder="F.eks. 95 000"
                className="block w-full pl-4 pr-12 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-lg font-medium shadow-sm"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">kr</span>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Påkostninger (Oppgraderinger)</label>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                value={pakostninger}
                onChange={(e) => setPakostninger(e.target.value.replace(/[^0-9,\s]/g, ''))}
                placeholder="F.eks. 350 000"
                className="block w-full pl-4 pr-12 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-lg font-medium shadow-sm"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">kr</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Kun påkostninger som har hevet standarden kan trekkes fra (ikke vanlig vedlikehold).</p>
          </div>
        </div>

        {/* Resultat */}
        {isCalculable && (
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className={`p-6 rounded-2xl border-2 ${oppfyllerBokrav ? 'bg-emerald-50 border-emerald-200' : (isGevinst ? 'bg-rose-50 border-rose-200' : 'bg-blue-50 border-blue-200')} transition-all duration-500 animate-in fade-in`}>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    {isGevinst ? 'Beregnet Gevinst' : 'Beregnet Tap'}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {formatCurrency(Math.abs(differanse))}
                    </span>
                    {isGevinst ? <TrendingUp className="w-6 h-6 text-emerald-500" /> : <TrendingDown className="w-6 h-6 text-rose-500" />}
                  </div>
                </div>
                
                <div className="bg-white/60 p-4 rounded-xl border border-white/40 shadow-sm min-w-[200px]">
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    {oppfyllerBokrav 
                      ? 'Skatt å betale' 
                      : (isGevinst ? 'Skatt å betale (22%)' : 'Skattefradrag (22%)')}
                  </p>
                  <span className={`text-3xl font-bold ${oppfyllerBokrav ? 'text-emerald-600' : 'text-slate-900'}`}>
                    {formatCurrency(skatt)}
                  </span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 text-sm">
                {oppfyllerBokrav ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-emerald-800 font-medium">
                      Siden du har eid og bodd i boligen i minst 1 av de siste 2 årene, er {isGevinst ? 'gevinsten helt skattefri!' : 'tapet dessverre ikke fradragsberettiget.'}
                    </p>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">
                      Du oppfyller ikke botidskravet. Derfor er {isGevinst ? 'gevinsten skattepliktig' : 'tapet fradragsberettiget'}. Beløpet skal føres i skattemeldingen.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
