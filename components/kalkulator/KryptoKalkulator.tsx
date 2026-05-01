'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, TrendingDown, Info } from 'lucide-react';

export default function KryptoKalkulator() {
  const [kjopesum, setKjopesum] = useState<string>('');
  const [salgssum, setSalgssum] = useState<string>('');

  const k = parseFloat(kjopesum.replace(/\s/g, '').replace(/,/g, '.')) || 0;
  const s = parseFloat(salgssum.replace(/\s/g, '').replace(/,/g, '.')) || 0;
  
  const isCalculable = kjopesum !== '' && salgssum !== '';
  const differanse = s - k;
  const skatt = Math.abs(differanse * 0.22);
  const isGevinst = differanse >= 0;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('no-NO', {
      style: 'currency',
      currency: 'NOK',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100 my-10 max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
        <div className="flex items-center space-x-3 mb-2">
          <Calculator className="w-6 h-6 text-emerald-100" />
          <h3 className="text-xl font-bold m-0">Kryptoskatt Estimat 2026</h3>
        </div>
        <p className="text-emerald-50 text-sm m-0">
          Beregn estimert skatt på gevinst eller fradrag for tap (22%) for én enkelt handel.
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Kjøpesum (NOK)
            </label>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                value={kjopesum}
                onChange={(e) => setKjopesum(e.target.value.replace(/[^0-9,\s]/g, ''))}
                placeholder="F.eks. 50 000"
                className="block w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none text-lg font-medium"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">kr</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Salgssum (NOK)
            </label>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                value={salgssum}
                onChange={(e) => setSalgssum(e.target.value.replace(/[^0-9,\s]/g, ''))}
                placeholder="F.eks. 80 000"
                className="block w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none text-lg font-medium"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">kr</span>
            </div>
          </div>
        </div>

        {isCalculable && (
          <div className={`mt-6 p-6 rounded-xl border ${isGevinst ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'} transition-all duration-500 animate-in fade-in slide-in-from-bottom-4`}>
            <div className="flex items-start justify-between">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-wider mb-1 ${isGevinst ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {isGevinst ? 'Estimert Gevinst' : 'Estimert Tap'}
                </p>
                <div className="flex items-center space-x-2">
                  <span className={`text-3xl font-bold ${isGevinst ? 'text-emerald-900' : 'text-rose-900'}`}>
                    {formatCurrency(Math.abs(differanse))}
                  </span>
                  {isGevinst ? <TrendingUp className="w-6 h-6 text-emerald-500" /> : <TrendingDown className="w-6 h-6 text-rose-500" />}
                </div>
              </div>
              
              <div className="text-right">
                <p className={`text-sm font-semibold uppercase tracking-wider mb-1 ${isGevinst ? 'text-slate-500' : 'text-slate-500'}`}>
                  {isGevinst ? 'Skatt å betale (22%)' : 'Skattefradrag (22%)'}
                </p>
                <span className={`text-3xl font-bold ${isGevinst ? 'text-slate-900' : 'text-slate-900'}`}>
                  {formatCurrency(skatt)}
                </span>
              </div>
            </div>
            
            <div className={`mt-4 pt-4 border-t flex items-start space-x-2 text-sm ${isGevinst ? 'border-emerald-200 text-emerald-800' : 'border-rose-200 text-rose-800'}`}>
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                {isGevinst 
                  ? 'Gevinsten skal føres i skattemeldingen, og øker din skatt med 22% av det opptjente beløpet.'
                  : 'Tapet kan føres som fradrag i skattemeldingen, noe som reduserer din totale skatt med 22% av tapet.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
