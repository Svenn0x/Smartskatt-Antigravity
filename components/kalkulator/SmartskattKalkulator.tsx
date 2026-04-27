'use client';

import { useState, useMemo } from 'react';
import AffiliateButton from '../shared/AffiliateButton';
import RecommendationCard from './RecommendationCard';
import ComparisonBox from './ComparisonBox';
import { Building2, Bitcoin, Home, Landmark, Wallet } from 'lucide-react';
import { formatKr } from '@/lib/taxCalculations';

export default function SmartskattKalkulator() {
  const [inntekt, setInntekt] = useState<number>(650000);
  const [gjeld, setGjeld] = useState<number>(2500000);
  const [reiseKm, setReiseKm] = useState<number>(15);
  const [kryptoTap, setKryptoTap] = useState<number>(0);
  const [kryptoGevinst, setKryptoGevinst] = useState<number>(0);
  const [utleieInntekt, setUtleieInntekt] = useState<number>(0);
  const [formue, setFormue] = useState<number>(0);
  const [fagforening, setFagforening] = useState<number>(0);
  const [antallBarn, setAntallBarn] = useState<number>(0);
  const [gaver, setGaver] = useState<number>(0);
  const [arbeidstype, setArbeidstype] = useState<'ansatt' | 'bedrift/ENK'>('ansatt');

  // Kalkulasjonslogikk
  const resultater = useMemo(() => {
    // Reise: ((km * 2 * 230 dager) * 1.83) - 15250 (egenandel 2025/2026)
    // Skattebesparelsen er 22% av fradraget
    const totalKmAar = reiseKm * 2 * 230;
    const reiseFradrag = Math.max(0, (totalKmAar * 1.83) - 15250);
    const reiseBesparelse = reiseFradrag * 0.22;

    // Gjeld: (Gjeld * 0.05 rente) * 0.22
    const renteFradrag = gjeld * 0.05;
    const gjeldBesparelse = renteFradrag * 0.22;

    // Krypto: Tap * 0.22
    const kryptoBesparelse = kryptoTap * 0.22;

    // Fagforening: Maks 8 700 kr
    const fagforeningFradrag = Math.min(fagforening, 8700);
    const fagforeningBesparelse = fagforeningFradrag * 0.22;

    // Foreldrefradrag: 25 000 kr for første barn, 15 000 kr per påfølgende
    let foreldreFradrag = 0;
    if (antallBarn > 0) {
      foreldreFradrag = 25000 + (antallBarn - 1) * 15000;
    }
    const foreldreBesparelse = foreldreFradrag * 0.22;

    // Gaver: Maks 25 000 kr
    const gaveFradrag = Math.min(gaver, 25000);
    const gaveBesparelse = gaveFradrag * 0.22;

    // Personfradrag: 108 550 kr
    const personFradrag = 108550;
    const personBesparelse = personFradrag * 0.22;

    const totalBesparelse = reiseBesparelse + gjeldBesparelse + kryptoBesparelse + 
                            fagforeningBesparelse + foreldreBesparelse + gaveBesparelse + personBesparelse;

    return {
      reiseBesparelse,
      gjeldBesparelse,
      kryptoBesparelse,
      fagforeningBesparelse,
      foreldreBesparelse,
      gaveBesparelse,
      personBesparelse,
      totalBesparelse,
    };
  }, [gjeld, reiseKm, kryptoTap, fagforening, antallBarn, gaver]);

  // Anbefalings-logikk
  const anbefalinger = useMemo(() => {
    const list = [];

    // Scenario D: Bedriftseier
    if (arbeidstype === 'bedrift/ENK') {
      list.push({
        id: 'fiken',
        tittel: 'Siden du driver ENK:',
        tekst: 'Slipp frykten for å gjøre feil. Fiken gjør regnskapet forståelig for alle.',
        partner: 'fiken',
        url: 'https://fiken.no',
        label: 'Start gratis',
        ikon: <Building2 className="w-5 h-5" />
      });
    }

    // Scenario B: Kryptoinvestor
    if (kryptoGevinst > 0 || kryptoTap > 0) {
      list.push({
        id: 'kryptosekken',
        tittel: 'Siden du har handlet krypto:',
        tekst: 'Unngå baksmell. Få en ferdig utfylt rapport til skattemeldingen på få minutter.',
        partner: 'kryptosekken',
        url: 'https://kryptosekken.no',
        label: 'Start gratis',
        ikon: <Bitcoin className="w-5 h-5" />
      });
    }

    // Scenario: Formue (Kron)
    if (formue > 0) {
      list.push({
        id: 'kron',
        tittel: 'Siden du har formue:',
        tekst: 'Få pengene dine til å vokse smartere med Norges enkleste investeringsapp.',
        partner: 'kron',
        url: 'https://kron.no',
        label: 'Start gratis',
        ikon: <Wallet className="w-5 h-5" />
      });
    }

    // Scenario C: Utleier
    if (utleieInntekt > 0) {
      list.push({
        id: 'hybel',
        tittel: 'Siden du leier ut:',
        tekst: 'Gjør utleien profesjonell og trygg. Bruk Hybel.no for kontrakter og depositum.',
        partner: 'hybel',
        url: 'https://hybel.no',
        label: 'Gå til Hybel.no',
        ikon: <Home className="w-5 h-5" />
      });
    }

    // Scenario A: Lønnstaker med mye gjeld
    if (gjeld > 500000 && arbeidstype === 'ansatt') {
      list.push({
        id: 'lendo',
        tittel: `Siden du har over ${formatKr(gjeld)} i lån:`,
        tekst: 'Du kan potensielt spare flere tusen i måneden på å samle lånene dine.',
        partner: 'lendo',
        url: 'https://lendo.no',
        label: 'Sjekk din rente',
        ikon: <Landmark className="w-5 h-5" />
      });
    }

    return list.slice(0, 2);
  }, [arbeidstype, kryptoGevinst, kryptoTap, utleieInntekt, gjeld, formue]);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* 1. Input-skjema (Grid) */}
        <div className="w-full lg:w-7/12 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Dine opplysninger</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Arbeidstype */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">
                Arbeidssituasjon
              </label>
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setArbeidstype('ansatt')}
                  className={`flex-1 py-4 px-4 rounded-xl border font-medium transition-all active:scale-[0.98] ${
                    arbeidstype === 'ansatt'
                      ? 'bg-cyan-50 border-secondary text-cyan-700 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Lønnstaker
                </button>
                <button
                  type="button"
                  onClick={() => setArbeidstype('bedrift/ENK')}
                  className={`flex-1 py-4 px-4 rounded-xl border font-medium transition-all active:scale-[0.98] ${
                    arbeidstype === 'bedrift/ENK'
                      ? 'bg-cyan-50 border-secondary text-cyan-700 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Bedrift / ENK
                </button>
              </div>
            </div>
            {/* Lønn/Inntekt */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Lønn/Inntekt (kr)
              </label>
              <input
                type="number"
                value={inntekt || ''}
                onChange={(e) => setInntekt(Number(e.target.value))}
                className="w-full px-4 py-4 min-h-[56px] bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all shadow-sm font-medium text-lg"
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
                className="w-full px-4 py-4 min-h-[56px] bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all shadow-sm font-medium text-lg"
              />
            </div>

            {/* Formue */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Total formue / Oppsparte midler (kr)
              </label>
              <input
                type="number"
                value={formue || ''}
                onChange={(e) => setFormue(Number(e.target.value))}
                className="w-full px-4 py-4 min-h-[56px] bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all shadow-sm font-medium text-lg"
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
                className="w-full px-4 py-4 min-h-[56px] bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all shadow-sm font-medium text-lg"
              />
            </div>

            {/* Krypto-gevinst i år */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Krypto-gevinst i år (kr)
              </label>
              <input
                type="number"
                value={kryptoGevinst || ''}
                onChange={(e) => setKryptoGevinst(Number(e.target.value))}
                className="w-full px-4 py-4 min-h-[56px] bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all shadow-sm font-medium text-lg"
              />
            </div>

            {/* Utleieinntekt */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Utleieinntekt i år (kr)
              </label>
              <input
                type="number"
                value={utleieInntekt || ''}
                onChange={(e) => setUtleieInntekt(Number(e.target.value))}
                className="w-full px-4 py-4 min-h-[56px] bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all shadow-sm font-medium text-lg"
              />
            </div>

            {/* Fagforeningskontingent */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Fagforeningskontingent (kr)
              </label>
              <input
                type="number"
                value={fagforening || ''}
                onChange={(e) => setFagforening(Number(e.target.value))}
                className="w-full px-4 py-4 min-h-[56px] bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all shadow-sm font-medium text-lg"
              />
            </div>

            {/* Antall barn under 12 år */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Antall barn (12 år og yngre)
              </label>
              <input
                type="number"
                value={antallBarn || ''}
                onChange={(e) => setAntallBarn(Number(e.target.value))}
                className="w-full px-4 py-4 min-h-[56px] bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all shadow-sm font-medium text-lg"
              />
            </div>

            {/* Gaver til frivillige organisasjoner */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">
                Gaver til frivillige organisasjoner (kr)
              </label>
              <input
                type="number"
                value={gaver || ''}
                onChange={(e) => setGaver(Number(e.target.value))}
                className="w-full px-4 py-4 min-h-[56px] bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all shadow-sm font-medium text-lg"
              />
            </div>

            {/* Reisevei til jobb */}
            <div className="space-y-4 md:col-span-2 mt-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-semibold text-slate-700">
                  Reisevei til jobb (en vei)
                </label>
                <span className="text-secondary font-bold bg-cyan-100 px-3 py-1 rounded-full text-sm">
                  {reiseKm} km
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={reiseKm}
                onChange={(e) => setReiseKm(Number(e.target.value))}
                className="w-full h-4 md:h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary"
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
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700"></div>
            
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Ditt Skatteestimat</h3>
            
            <div className="space-y-6 relative z-10">
              <div>
                <span className="block text-lg font-medium text-slate-300 mb-2">Potensiell skattebesparelse</span>
                <div className="text-5xl font-extrabold text-secondary drop-shadow-md">
                  {formatKr(resultater.totalBesparelse)}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-700/50">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Personfradrag (fast):</span>
                  <span className="font-medium">{formatKr(resultater.personBesparelse)}</span>
                </div>
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
                {resultater.fagforeningBesparelse > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Fagforening:</span>
                    <span className="font-medium">{formatKr(resultater.fagforeningBesparelse)}</span>
                  </div>
                )}
                {resultater.foreldreBesparelse > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Foreldrefradrag:</span>
                    <span className="font-medium">{formatKr(resultater.foreldreBesparelse)}</span>
                  </div>
                )}
                {resultater.gaveBesparelse > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Gavefradrag:</span>
                    <span className="font-medium">{formatKr(resultater.gaveBesparelse)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 3. Ditt neste steg */}
          {anbefalinger.length > 0 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {anbefalinger.map((anb) => (
                  <RecommendationCard
                    key={anb.id}
                    tittel={anb.tittel}
                    tekst={anb.tekst}
                    partner={anb.partner}
                    url={anb.url}
                    label={anb.label}
                    ikon={anb.ikon}
                  />
                ))}
              </div>
            </div>
          )}

          {/* 4. Sammenligningsboks for Bedrift/ENK */}
          {arbeidstype === 'bedrift/ENK' && (
            <ComparisonBox />
          )}
        </div>
      </div>

      {/* 4. Lead Magnet / Email Capture */}
      <LeadCapture 
        kalkulatorData={{ inntekt, gjeld, reiseKm, kryptoTap, totalBesparelse: resultater.totalBesparelse }} 
      />
    </div>
  );
}

function LeadCapture({ kalkulatorData }: { kalkulatorData: any }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    setIsValid(!!validateEmail(val));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus('loading');

    // MOCK API Call - Logging to "Supabase" leads table
    setTimeout(() => {
      console.log('Lagrer til Supabase leads:', { email, ...kalkulatorData });
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="w-full bg-cyan-50/50 border border-cyan-100 rounded-3xl p-6 md:p-12 relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[300px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-400/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-sm animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 z-10">Sjekk innboksen din!</h3>
        <p className="text-slate-600 text-lg max-w-md z-10">Vi har sendt deg beregningen og sjekklisten for skattefradrag du ikke må glemme.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-cyan-50/80 border border-cyan-100 rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-sm">
      {/* Glow / Premium effect */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="inline-block bg-accent text-white shadow-sm text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
          Gratis Bonus
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Vil du beholde oversikten?</h3>
        <p className="text-slate-600 text-lg mb-8">
          Send denne beregningen til din e-post, så sender vi deg også en sjekkliste for skattefradragene du ikke må glemme før fristen 30. april.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Din e-post..."
            className="flex-1 px-5 py-4 min-h-[56px] bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all shadow-sm text-lg"
            required
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={!isValid || status === 'loading'}
            className={`px-8 py-4 min-h-[56px] rounded-xl font-bold text-white transition-all shadow-md whitespace-nowrap active:scale-[0.98] ${
              isValid && status !== 'loading' 
                ? 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5' 
                : 'bg-emerald-400 cursor-not-allowed'
            }`}
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Sender...
              </span>
            ) : 'Send meg resultatene (Gratis)'}
          </button>
        </form>
        <p className="text-xs text-slate-500 mt-4">
          Ved å sende godtar du at vi lagrer informasjonen for å sende deg relevante skattetips.
        </p>
      </div>
    </div>
  );
}
