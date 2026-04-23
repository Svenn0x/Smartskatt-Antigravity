'use client';

import { useState, useMemo } from 'react';
import AffiliateButton from '../shared/AffiliateButton';
import { formatKr } from '@/lib/taxCalculations';

export default function SmartskattKalkulator() {
  const [inntekt, setInntekt] = useState<number>(650000);
  const [gjeld, setGjeld] = useState<number>(2500000);
  const [reiseKm, setReiseKm] = useState<number>(15);
  const [kryptoTap, setKryptoTap] = useState<number>(0);

  // Kalkulasjonslogikk
  const resultater = useMemo(() => {
    // Reise: ((km * 2 * 230 dager) * 1.83) - 15250 (egenandel 2025)
    // Skattebesparelsen er 22% av fradraget
    const totalKmAar = reiseKm * 2 * 230;
    const reiseFradrag = Math.max(0, (totalKmAar * 1.83) - 15250);
    const reiseBesparelse = reiseFradrag * 0.22;

    // Gjeld: (Gjeld * 0.05 rente) * 0.22
    const renteFradrag = gjeld * 0.05;
    const gjeldBesparelse = renteFradrag * 0.22;

    // Krypto: Tap * 0.22
    const kryptoBesparelse = kryptoTap * 0.22;

    const totalBesparelse = reiseBesparelse + gjeldBesparelse + kryptoBesparelse;

    return {
      reiseBesparelse,
      gjeldBesparelse,
      kryptoBesparelse,
      totalBesparelse,
    };
  }, [gjeld, reiseKm, kryptoTap]);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
      {/* 1. Input-skjema (Grid) */}
      <div className="w-full lg:w-7/12 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Dine opplysninger</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Lønn/Inntekt */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
              Lønn/Inntekt (kr)
            </label>
            <input
              type="number"
              value={inntekt || ''}
              onChange={(e) => setInntekt(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm font-medium"
            />
          </div>

          {/* Samlet gjeld */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
              Samlet gjeld (kr)
            </label>
            <input
              type="number"
              value={gjeld || ''}
              onChange={(e) => setGjeld(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm font-medium"
            />
          </div>

          {/* Krypto-tap i år */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
              Krypto-tap i år (kr)
            </label>
            <input
              type="number"
              value={kryptoTap || ''}
              onChange={(e) => setKryptoTap(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm font-medium"
            />
          </div>

          {/* Reisevei til jobb */}
          <div className="space-y-4 sm:col-span-2 mt-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-semibold text-slate-700">
                Reisevei til jobb (en vei)
              </label>
              <span className="text-blue-600 font-bold bg-blue-100 px-3 py-1 rounded-full text-sm">
                {reiseKm} km
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={reiseKm}
              onChange={(e) => setReiseKm(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-slate-500 font-medium">
              <span>0 km</span>
              <span>200 km</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. The Magic Box (Resultater) */}
      <div className="w-full lg:w-5/12 space-y-6 sticky top-24">
        <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group border border-slate-800">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
          
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Ditt Skatteestimat</h3>
          
          <div className="space-y-6 relative z-10">
            <div>
              <span className="block text-lg font-medium text-slate-300 mb-2">Potensiell skattebesparelse</span>
              <div className="text-5xl font-extrabold text-emerald-400 drop-shadow-md">
                {formatKr(resultater.totalBesparelse)}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-700/50">
              {resultater.gjeldBesparelse > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Rentefradrag:</span>
                  <span className="font-medium">{formatKr(resultater.gjeldBesparelse)}</span>
                </div>
              )}
              {resultater.reiseBesparelse > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Reisefradrag:</span>
                  <span className="font-medium">{formatKr(resultater.reiseBesparelse)}</span>
                </div>
              )}
              {resultater.kryptoBesparelse > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Kryptofradrag:</span>
                  <span className="font-medium">{formatKr(resultater.kryptoBesparelse)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. Affiliate-trigger */}
        {resultater.totalBesparelse > 5000 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              
              <h4 className="text-lg font-bold text-slate-900 mb-2">Du har betydelige fradrag! 🎯</h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Bruk <strong className="font-bold text-emerald-800">Fiken</strong> (for ENK) eller <strong className="font-bold text-emerald-800">Kryptosekken</strong> (for krypto) for å sikre at tallene blir riktige i skattemeldingen.
              </p>
              
              <div className="space-y-3">
                <AffiliateButton partnerName="fiken" url="https://fiken.no" label="Kom i gang med Fiken" />
                {kryptoTap > 0 && (
                  <AffiliateButton partnerName="kryptosekken" url="https://kryptosekken.no" label="Kom i gang med Kryptosekken" />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
