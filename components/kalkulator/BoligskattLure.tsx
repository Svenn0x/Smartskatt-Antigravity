'use client';

import React, { useState } from 'react';
import { Home, Download, AlertCircle, CheckCircle2, Info } from 'lucide-react';

export default function BoligskattLure() {
  const [kjopspris, setKjopspris] = useState<string>('');
  const [salgspris, setSalgspris] = useState<string>('');
  const [eiertid, setEiertid] = useState<string>('');
  const [botid, setBotid] = useState<string>('');

  const parseNum = (val: string) => parseFloat(val.replace(/\s/g, '').replace(/,/g, '.')) || 0;

  const k = parseNum(kjopspris);
  const s = parseNum(salgspris);
  const eierManeder = parseInt(eiertid, 10) || 0;
  const boManeder = parseInt(botid, 10) || 0;

  const isCalculable = kjopspris !== '' && salgspris !== '' && eiertid !== '' && botid !== '';
  
  const differanse = s - k;
  const isGevinst = differanse >= 0;
  
  // Regler for skattefritt boligsalg:
  // Eiet boligen mer enn 12 måneder (av de siste 24)
  // Bodd i boligen mer enn 12 måneder (av de siste 24)
  const oppfyllerKrav = eierManeder >= 12 && boManeder >= 12;
  const skatt = oppfyllerKrav ? 0 : Math.abs(differanse * 0.22);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('no-NO', {
      style: 'currency',
      currency: 'NOK',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section 
      aria-label="Kalkulator for boligskatt"
      className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-slate-100 my-10 w-full max-w-2xl mx-auto"
    >
      <div className="bg-gradient-to-r from-slate-900 to-indigo-900 p-8 text-white text-center">
        <Home className="w-10 h-10 mx-auto text-indigo-300 mb-4" aria-hidden="true" />
        <h2 className="text-3xl font-extrabold m-0 text-white tracking-tight">Er boligsalget skattefritt?</h2>
        <p className="text-indigo-100 text-lg mt-2 font-medium">
          Sjekk botidskravet og beregn gevinst automatisk.
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label htmlFor="kjopspris" className="block text-sm font-semibold text-slate-700">
              Kjøpspris (NOK)
            </label>
            <div className="relative">
              <input
                id="kjopspris"
                type="text"
                inputMode="numeric"
                value={kjopspris}
                onChange={(e) => setKjopspris(e.target.value.replace(/[^0-9,\s]/g, ''))}
                placeholder="F.eks. 3 500 000"
                className="block w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all outline-none text-lg font-medium text-slate-900"
                aria-describedby="kjopspris-help"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium" aria-hidden="true">kr</span>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="salgspris" className="block text-sm font-semibold text-slate-700">
              Salgspris (NOK)
            </label>
            <div className="relative">
              <input
                id="salgspris"
                type="text"
                inputMode="numeric"
                value={salgspris}
                onChange={(e) => setSalgspris(e.target.value.replace(/[^0-9,\s]/g, ''))}
                placeholder="F.eks. 4 800 000"
                className="block w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all outline-none text-lg font-medium text-slate-900"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium" aria-hidden="true">kr</span>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="eiertid" className="block text-sm font-semibold text-slate-700">
              Eiertid (Antall måneder)
            </label>
            <div className="relative">
              <input
                id="eiertid"
                type="number"
                min="0"
                value={eiertid}
                onChange={(e) => setEiertid(e.target.value)}
                placeholder="F.eks. 36"
                className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all outline-none text-lg font-medium text-slate-900"
              />
            </div>
            <p className="text-xs text-slate-500">Hvor lenge har du eid boligen?</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="botid" className="block text-sm font-semibold text-slate-700">
              Botid (Antall måneder)
            </label>
            <div className="relative">
              <input
                id="botid"
                type="number"
                min="0"
                value={botid}
                onChange={(e) => setBotid(e.target.value)}
                placeholder="F.eks. 24"
                className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all outline-none text-lg font-medium text-slate-900"
              />
            </div>
            <p className="text-xs text-slate-500">Antall måneder du har bodd der de siste 2 årene.</p>
          </div>
        </form>

        {isCalculable && (
          <div 
            className={`mt-8 p-6 rounded-2xl border-2 transition-all duration-500 animate-in fade-in slide-in-from-bottom-2 ${oppfyllerKrav ? 'bg-emerald-50 border-emerald-500' : 'bg-rose-50 border-rose-500'}`}
            role="alert"
            aria-live="polite"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                {oppfyllerKrav ? (
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <AlertCircle className="w-10 h-10 text-rose-600 flex-shrink-0" aria-hidden="true" />
                )}
                <div>
                  <h3 className={`text-xl font-bold ${oppfyllerKrav ? 'text-emerald-900' : 'text-rose-900'}`}>
                    {oppfyllerKrav ? '100% Skattefritt!' : 'Skattepliktig salg'}
                  </h3>
                  <p className={`mt-1 text-sm ${oppfyllerKrav ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {oppfyllerKrav 
                      ? 'Du oppfyller kravene til 12 måneders eiertid og 12 måneders botid. Gevinsten skal ikke skattlegges.' 
                      : 'Du oppfyller ikke kravet til eier- og botid (12 av siste 24 mnd). Du må skatte 22% av gevinsten, eller du får fradrag for tap.'}
                  </p>
                </div>
              </div>

              {!oppfyllerKrav && (
                <div className="text-center md:text-right bg-white p-4 rounded-xl shadow-sm border border-rose-100 min-w-[180px]">
                  <p className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                    Estimert Skatt (22%)
                  </p>
                  <p className="text-3xl font-extrabold text-slate-900">
                    {formatCurrency(skatt)}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="pt-8 border-t border-slate-100 flex flex-col items-center text-center">
          <p className="text-slate-600 mb-4 font-medium">Vil du være 100% sikker på at du gjør alt riktig? Last ned vår komplette sjekkliste for skattefritt boligsalg.</p>
          <a 
            href="#last-ned" 
            className="inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 focus:ring-4 focus:ring-indigo-300 focus:outline-none shadow-lg shadow-indigo-200"
            aria-label="Last ned sjekkliste for boligsalg"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            <span>Last ned sjekkliste (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
