import type { Metadata } from 'next';
import SmartskattKalkulator from '@/components/kalkulator/SmartskattKalkulator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Skattekalkulator 2026 – Beregn din besparelse umiddelbart',
  description:
    'Hvor mye kan du spare på skatten i år? Tast inn dine tall og se potensielle fradrag for lån, reise, krypto og ENK.',
  alternates: {
    canonical: 'https://smartskatt.no/kalkulator',
  },
  openGraph: {
    title: 'Spar penger på skatten med Smartskatt.no',
    description:
      'Hvor mye kan du spare på skatten i år? Tast inn dine tall og se potensielle fradrag for lån, reise, krypto og ENK.',
    url: 'https://smartskatt.no/kalkulator',
    images: [{ url: '/og-social.png', width: 1200, height: 630, alt: 'Spar penger på skatten med Smartskatt.no' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spar penger på skatten med Smartskatt.no',
    description: 'Hvor mye kan du spare på skatten i år? Tast inn dine tall og se potensielle fradrag.',
    images: ['/og-social.png'],
  },
};

export default function KalkulatorPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-24">
      {/* Header Section */}
      <section className="bg-slate-900 text-white pt-16 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Skatteregler for 2025/2026
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Smartskatt Kalkulatoren
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Legg inn dine nøkkeltall og se umiddelbart hva du kan spare. Verktøyet er 100% anonymt og krever ingen innlogging.
          </p>
        </div>
      </section>

      {/* Kalkulator Section */}
      <section className="px-4 sm:px-6 -mt-8 relative z-20">
        <SmartskattKalkulator />
      </section>

      {/* FAQ / Info Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Slik fungerer det</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-900">Hvor nøyaktig er estimatet?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Kalkulatoren bruker forenklede satser for 2025/2026 for å gi et raskt overslag. Ditt faktiske skatteoppgjør kan variere basert på kommunale satser, formueskatt og andre komplekse faktorer vi ikke inkluderer her.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-900">Personvern & Sikkerhet</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Alle beregninger skjer lokalt i din nettleser (JavaScript). Vi lagrer ingen av tallene du legger inn på våre servere.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/veiviser" className="text-blue-600 font-medium hover:text-blue-700 underline underline-offset-4">
            Trenger du hjelp til å finne fradragene? Prøv vår Skatteveiviser.
          </Link>
        </div>
      </section>
    </div>
  );
}
