"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { fradragData } from '@/app/fradrag/FradragOrdbok';

export default function DidYouKnow() {
  const [randomFact, setRandomFact] = useState<typeof fradragData[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const pickRandom = () => {
      const randomIndex = Math.floor(Math.random() * fradragData.length);
      setRandomFact(fradragData[randomIndex]);
      setIsVisible(true);
    };

    pickRandom();
    
    // Change fact every 15 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        pickRandom();
      }, 500); // Wait for fade out before changing text
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  if (!randomFact) return null;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 mt-4 mb-8 min-h-[200px] md:min-h-[160px] flex items-center">
      <div 
        className={`w-full relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {/* Abstract Glow Effects */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Icon Container */}
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center border border-orange-200/50 shadow-sm">
            <Lightbulb className="w-7 h-7 text-orange-500" />
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xs md:text-sm font-bold text-orange-600 uppercase tracking-widest mb-1.5">
              Visste du at...
            </h3>
            <p className="text-slate-900 text-lg md:text-xl font-bold mb-2">
              {randomFact.tittel}
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
              {randomFact.forklaring}
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0 mt-4 md:mt-0 w-full md:w-auto">
            <Link 
              href={`/fradrag#letter-${randomFact.bokstav}`}
              className="group flex w-full md:w-auto items-center justify-center gap-2 px-6 py-4 md:py-3.5 rounded-xl bg-white/80 hover:bg-white text-slate-700 font-semibold border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 hover:text-blue-600 active:scale-[0.98] active:bg-slate-50 transition-all backdrop-blur-md"
            >
              Les mer
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
