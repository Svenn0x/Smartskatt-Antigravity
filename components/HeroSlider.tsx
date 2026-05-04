'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
  {
    id: 'eiendom',
    text: 'Den smarte måten å håndtere boligskatten din på 🏠',
    image: '/hero_eiendom.webp',
  },
  {
    id: 'krypto',
    text: 'Den smarte måten å håndtere kryptoskatten din på ₿',
    image: '/hero_krypto.webp',
  },
  {
    id: 'frilans',
    text: 'Den smarte måten å håndtere ENK-skatten din på 💼',
    image: '/hero_frilans.webp',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full mx-auto pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden lg:overflow-visible">
      {/* Bakgrunnsbilde på mobil / Høyre kolonne på desktop */}
      <div className="absolute inset-0 lg:hidden z-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-900/70 z-10"></div> {/* Mørk overlay for lesbarhet */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].text}
              fill
              priority={current === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh] lg:min-h-0">
          
          {/* Venstre Kolonne (Tekst & Knapper) */}
          <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 lg:bg-slate-50 border border-white/20 lg:border-slate-200 text-white lg:text-slate-600 text-xs font-semibold uppercase tracking-widest mb-8 lg:mb-10 shadow-sm backdrop-blur-md lg:backdrop-blur-none">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 lg:bg-emerald-500"></span>
              Oppdatert for Skatteåret 2026
            </div>
            
            <div className="relative w-full h-[160px] sm:h-[180px] lg:h-[220px]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={current}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white lg:text-slate-900 text-balance leading-[1.1]"
                >
                  {slides[current].text}
                </motion.h1>
              </AnimatePresence>
            </div>
            
            <p className="text-lg sm:text-xl font-light max-w-xl mb-10 text-balance leading-relaxed text-slate-200 lg:text-slate-500">
              Uavhengige sammenligninger, interaktive fradragsveivisere og dypdykk-guider som hjelper deg med å ta lønnsomme valg for din økonomi.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pointer-events-auto">
              <Link href="/veiviser" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-emerald-500 lg:bg-slate-900 text-white font-medium px-8 py-4 min-h-[56px] rounded-lg shadow-sm hover:shadow-md hover:bg-emerald-600 lg:hover:bg-slate-800 transition-all active:scale-[0.98]">
                Start Skatteveiviseren
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
              <a href="#sammenlign" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/10 lg:bg-white text-white lg:text-slate-700 border border-white/20 lg:border-slate-200 font-medium px-8 py-4 min-h-[56px] rounded-lg shadow-sm hover:bg-white/20 lg:hover:bg-slate-50 backdrop-blur-md lg:backdrop-blur-none transition-all active:scale-[0.98]">
                Se Sammenligninger
              </a>
            </div>
            <p className="mt-6 text-xs text-white/70 lg:text-slate-400 font-medium tracking-wide">100% Gratis • Ingen innlogging påkrevd</p>
          </div>

          {/* Høyre Kolonne (Bilde på desktop) */}
          <div className="hidden lg:block w-full relative aspect-[4/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 bg-slate-100 pointer-events-none">
            <AnimatePresence mode="sync">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[current].image}
                  alt={slides[current].text}
                  fill
                  priority={current === 0}
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/10"></div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
