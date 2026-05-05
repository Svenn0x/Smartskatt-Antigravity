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
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    /* ── WRAPPER: Mørk bakgrunn, ingen innhold kan lekke ut ── */
    <section className="relative w-full overflow-hidden bg-slate-900">

      {/* ── GRID: 1 kolonne mobil → 2 kolonner desktop (50/50) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] lg:min-h-[600px]">

        {/* ═══════════════════════════════════════════════════════
            VENSTRE SIDE: TEKST & KNAPPER
            100 % solid bg-slate-900 — aldri gjennomsiktig.
            z-20 sikrer at ingenting kan legge seg oppå.
            ═══════════════════════════════════════════════════════ */}
        <div className="relative z-20 flex flex-col justify-center px-6 py-16 lg:px-20 bg-slate-900">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest mb-8 lg:mb-10 shadow-sm backdrop-blur-md self-start">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Oppdatert for Skatteåret 2026
          </div>

          {/* Overskrift med slide-animasjon — synkronisert med bildet */}
          <div className="relative w-full min-h-[200px] sm:min-h-[220px] lg:min-h-[260px] mb-8">
            <AnimatePresence mode="sync">
              <motion.h1
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0 text-4xl lg:text-6xl font-black text-white leading-tight text-balance"
              >
                {slides[current].text}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* CTA-knapper */}
          <div className="mt-28 flex flex-col sm:flex-row gap-4">
            <Link
              href="/veiviser"
              id="hero-cta-veiviser"
              className="inline-flex justify-center items-center gap-2 bg-emerald-500 text-white font-medium px-8 py-4 min-h-[56px] rounded-lg shadow-sm hover:shadow-md hover:bg-emerald-600 transition-all active:scale-[0.98]"
            >
              Start Skatteveiviseren
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href="#sammenlign"
              id="hero-cta-sammenlign"
              className="inline-flex justify-center items-center gap-2 bg-white/10 text-white border border-white/20 font-medium px-8 py-4 min-h-[56px] rounded-lg shadow-sm hover:bg-white/20 backdrop-blur-md transition-all active:scale-[0.98]"
            >
              Se Sammenligninger
            </a>
          </div>

          <p className="mt-6 text-xs text-white/70 font-medium tracking-wide">
            100% Gratis • Ingen innlogging påkrevd
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════
            HØYRE SIDE: BILDER
            Fullstendig isolert i sin egen grid-celle.
            overflow-hidden sikrer at intet bilde lekker ut.
            Kan ALDRI overlappe teksten pga. grid-layout.
            ═══════════════════════════════════════════════════════ */}
        <div className="relative h-[300px] lg:h-full w-full overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={`hero-img-${current}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={slides[current].image}
                alt={slides[current].text}
                fill
                priority={current === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtil gradient fra venstre for myk overgang til mørk bakgrunn */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                'linear-gradient(to right, rgba(15,23,42,0.6) 0%, rgba(15,23,42,0) 40%)',
            }}
          />
        </div>

      </div>
    </section>
  );
}
