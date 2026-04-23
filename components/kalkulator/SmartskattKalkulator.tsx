'use client';

import { useState, useMemo, useEffect } from 'react';
import { KalkulatorInput, beregnSkatt, formatKr } from '@/lib/taxCalculations';
import AffiliateButton from '../shared/AffiliateButton';

const defaultInput: KalkulatorInput = {
  inntekt: 650000,
  gjeld: 2500000,
  kryptoGevinst: 0,
  reiseKm: 0,
  harHjemmekontor: false,
  leierUtRom: false,
  harDonert: false,
  donertBelop: 0,
};

export default function SmartskattKalkulator() {
  const [input, setInput] = useState<KalkulatorInput>(defaultInput);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resultater = useMemo(() => beregnSkatt(input), [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : Number(value) || 0,
    }));
  };

  if (!mounted) return null;

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
      {/* Input Seksjon */}
      <div className="w-full lg:w-7/12 bg-white rounded-3xl shadow-sm border border-slate-200/60 p-6 sm:p-8 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Dine nøkkeltall</h2>
          <p className="text-slate-600">Legg inn dine estimater for året. Tallene lagres kun lokalt.</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Årlig bruttoinntekt (lønn/pensjon)
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="inntekt"
                  value={input.inntekt || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pl-12 text-lg font-medium"
                  placeholder="F.eks. 650000"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">kr</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Samlet lån (bolig/forbruk/studielån)
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="gjeld"
                  value={input.gjeld || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pl-12 text-lg font-medium"
                  placeholder="F.eks. 2500000"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">kr</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Gevinst/tap på kryptovaluta i år
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="kryptoGevinst"
                  value={input.kryptoGevinst || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pl-12 text-lg font-medium"
                  placeholder="F.eks. -15000 (bruk minus for tap)"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">kr</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Antall km reist til/fra jobb per år
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="reiseKm"
                  value={input.reiseKm || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pl-12 text-lg font-medium"
                  placeholder="F.eks. 12000"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">km</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Smarte Valg</h3>
            <div className="space-y-3">
              <label className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  name="harHjemmekontor"
                  checked={input.harHjemmekontor}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <div className="flex-1">
                  <span className="block font-medium text-slate-900">Har hjemmekontor</span>
                  <span className="block text-sm text-slate-500">Fast avsatt rom i boligen.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  name="leierUtRom"
                  checked={input.leierUtRom}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <div className="flex-1">
                  <span className="block font-medium text-slate-900">Leier ut rom i egen bolig</span>
                  <span className="block text-sm text-slate-500">Skattefritt opptil 100% om du bruker over halvparten selv.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  name="harDonert"
                  checked={input.harDonert}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <div className="flex-1">
                  <span className="block font-medium text-slate-900">Har donert til veldedighet</span>
                  <span className="block text-sm text-slate-500">Fradrag for gaver over 500 kr til godkjente organisasjoner.</span>
                </div>
              </label>
            </div>
            
            {input.harDonert && (
              <div className="mt-4 pl-11">
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Donert beløp
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="donertBelop"
                    value={input.donertBelop || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Min. 500 kr"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Resultat Seksjon */}
      <div className="w-full lg:w-5/12 space-y-6 sticky top-24">
        {/* Hovedkort */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden group">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-700"></div>
          
          <h3 className="text-lg font-medium text-slate-300 mb-6">Ditt Skatteestimat</h3>
          
          <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-end border-b border-slate-700/50 pb-4">
              <div>
                <span className="block text-sm text-slate-400 mb-1">Estimert skatt (standard)</span>
                <span className="text-2xl font-bold text-red-400/90">{formatKr(resultater.estimertSkattUten)}</span>
              </div>
            </div>

            <div className="flex justify-between items-end border-b border-slate-700/50 pb-4">
              <div>
                <span className="block text-sm text-emerald-400/80 mb-1">Din optimaliserte skatt</span>
                <span className="text-2xl font-bold text-emerald-400">{formatKr(resultater.optimalisertSkatt)}</span>
              </div>
            </div>

            <div className="pt-4">
              <span className="block text-sm font-medium text-slate-300 mb-2">Potensiell besparelse</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 animate-pulse drop-shadow-md">
                {formatKr(resultater.besparelse)}
              </div>
            </div>
          </div>
          
          {/* Visual Progress / Chart abstraction */}
          {resultater.besparelse > 0 && (
             <div className="mt-8 pt-6 border-t border-slate-800">
               <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-1000 ease-out relative"
                   style={{ 
                     width: `${Math.min(100, (resultater.besparelse / resultater.estimertSkattUten) * 100 * 5)}%` // Multiplied by 5 just for visual effect on small savings
                   }}
                 >
                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                 </div>
               </div>
               <p className="text-xs text-slate-400 mt-2 text-center">Basert på utvalgte fradrag</p>
             </div>
          )}
        </div>

        {/* Affiliate Anbefalinger (The Money Maker) */}
        <div className="space-y-4">
          {input.gjeld > 2000000 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm relative overflow-hidden">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                 <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                   <span className="text-lg">🏦</span> Refinansieringsmulighet
                 </h4>
                 <p className="text-sm text-slate-600 mb-4">Med {formatKr(input.gjeld)} i lån kan selv 0.5% rentekutt spare deg tusenvis. Du kan spare mer!</p>
                 <AffiliateButton partnerName="lendo" url="https://lendo.no" label="Sjekk din beste rente (Lendo)" />
               </div>
            </div>
          )}

          {input.kryptoGevinst !== 0 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <div className="bg-white p-5 rounded-2xl border border-orange-100 shadow-sm relative overflow-hidden">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                 <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                   <span className="text-lg">₿</span> Krypto-skatt er komplekst
                 </h4>
                 <p className="text-sm text-slate-600 mb-4">Ikke gjør feil i utfyllingen. Unngå straffeskatt med en automatisert rapport.</p>
                 <AffiliateButton partnerName="kryptosekken" url="https://kryptosekken.no" label="Beregn nøyaktig krypto-skatt" />
               </div>
            </div>
          )}

          {resultater.besparelse > 10000 && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-2xl border border-emerald-100 shadow-sm">
                 <h4 className="font-bold text-slate-900 mb-2">Wow, over 10 000 kr i fradrag! 🎯</h4>
                 <p className="text-sm text-slate-700 mb-4">La oss sende deg en steg-for-steg guide for hvordan du fyller ut dette i skattemeldingen.</p>
                 <div className="flex gap-2">
                   <input type="email" placeholder="Din e-post" className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
                   <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                     Send
                   </button>
                 </div>
                 <p className="text-xs text-slate-500 mt-2">Du melder deg samtidig på vårt nyhetsbrev med flere tips.</p>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
