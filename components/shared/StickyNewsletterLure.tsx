'use client';

import React, { useState, useEffect } from 'react';
import { Mail, X } from 'lucide-react';

export default function StickyNewsletterLure() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible && !isModalOpen) return null;

  return (
    <>
      {/* Sticky Bar for Mobile */}
      <div 
        className={`md:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-500 transform ${isVisible && !isModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-slate-900 text-white rounded-2xl p-4 shadow-2xl flex items-center justify-between border border-slate-700 active:scale-95 transition-transform"
        >
          <div className="flex items-center space-x-3 text-left">
            <div className="bg-emerald-500 p-2 rounded-full">
              <Mail className="w-5 h-5 text-slate-900" />
            </div>
            <div>
              <p className="font-bold text-sm leading-tight">Gratis PDF-sjekkliste</p>
              <p className="text-xs text-slate-300">Få skatte-sjekklisten for boligeiere</p>
            </div>
          </div>
          <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Last ned</span>
        </button>
      </div>

      {/* Floating Action Button / Bar for Desktop (Optional, but user said 'følger brukeren på mobil') 
          We'll keep it hidden on desktop to not annoy desktop users, or show a subtle version. 
          Let's stick to mobile primarily as requested. */}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
                <Mail className="w-8 h-8 text-emerald-600 -rotate-3" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Få skatte-sjekklisten for boligeiere</h3>
              <p className="text-slate-600 mb-6">Skriv inn e-posten din, så sender vi deg den komplette sjekklisten (PDF) umiddelbart – helt gratis.</p>
              
              {!submitted ? (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if(email) setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <input 
                    type="email" 
                    required
                    placeholder="din@epost.no"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all outline-none text-center text-lg"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold text-lg px-5 py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                  >
                    Send meg PDF-en
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-xl border border-emerald-200">
                  <p className="font-bold text-lg mb-1">Sjekklisten er på vei!</p>
                  <p className="text-sm">Sjekk innboksen din om et par minutter.</p>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 text-emerald-700 font-semibold underline text-sm"
                  >
                    Lukk vinduet
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
