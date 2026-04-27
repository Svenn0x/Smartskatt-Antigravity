"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="group active:scale-95 transition-transform hover:opacity-90">
            <Logo variant="light" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-6">
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors flex items-center gap-1 cursor-default py-2">
                Skatteguider
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
                <Link href="/krypto" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600">Krypto</Link>
                <Link href="/bedrift" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 border-t border-slate-50">Bedrift</Link>
                <Link href="/bolig" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 border-t border-slate-50">Bolig</Link>
              </div>
            </div>
            <Link href="/fradrag" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2 active:scale-95">
              Fradrag A-Å
            </Link>
            <Link href="/kalkulator" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1 py-2 active:scale-95">
              Kalkulator
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </Link>
          </nav>

          <div className="hidden sm:flex items-center">
            <Link href="/veiviser" className="text-sm font-semibold bg-slate-900 hover:bg-primary text-white px-5 py-2.5 rounded-full transition-all hover:shadow-md hover:scale-105 active:scale-95">
              Skatteveiviser
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-100 bg-white shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <div className="py-2">
                <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Skatteguider</p>
                <div className="space-y-1">
                  <Link href="/krypto" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 active:bg-slate-100">Krypto</Link>
                  <Link href="/bedrift" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 active:bg-slate-100">Bedrift</Link>
                  <Link href="/bolig" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 active:bg-slate-100">Bolig</Link>
                </div>
              </div>
              <div className="h-px bg-slate-100 my-2"></div>
              <Link href="/fradrag" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 active:bg-slate-100">
                Fradrag A-Å
              </Link>
              <Link href="/kalkulator" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 active:bg-slate-100 flex items-center gap-2">
                Kalkulator
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Mobile CTA */}
      <div className="sm:hidden fixed bottom-4 left-0 right-0 z-40 px-4 pointer-events-none">
        <div className="flex justify-center pointer-events-auto">
          <Link 
            href="/veiviser" 
            className="flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all hover:opacity-95"
          >
            Start Skatteveiviseren
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
      </div>
    </>
  );
}
