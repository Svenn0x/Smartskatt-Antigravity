'use client';

import React, { useState } from 'react';
import { Calendar, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function BotidTeller() {
  const [innflytt, setInnflytt] = useState<string>('');
  const [utflytt, setUtflytt] = useState<string>('');

  let botidManeder = 0;
  let isValid = false;

  if (innflytt && utflytt) {
    const start = new Date(innflytt);
    const end = new Date(utflytt);
    if (!isNaN(start.getTime()) && !isNaN(end.getTime()) && end >= start) {
      isValid = true;
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      botidManeder = Math.floor(diffDays / 30.44); // Gjennomsnittlig dager i en måned
    }
  }

  const oppfyllerKrav = botidManeder >= 12;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden my-8">
      <div className="bg-slate-50 p-6 border-b border-slate-200 flex items-center space-x-3">
        <Calendar className="w-6 h-6 text-indigo-600" />
        <h3 className="text-xl font-bold m-0 text-slate-800">Botid-teller for skattefritt boligsalg</h3>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Når flyttet du inn?</label>
            <input 
              type="date" 
              value={innflytt}
              onChange={(e) => setInnflytt(e.target.value)}
              className="block w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Når flytter du / flyttet du ut?</label>
            <input 
              type="date" 
              value={utflytt}
              onChange={(e) => setUtflytt(e.target.value)}
              className="block w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all outline-none"
            />
          </div>
        </div>

        {isValid && (
          <div className={`p-6 rounded-xl border-2 flex items-start space-x-4 transition-all duration-300 animate-in fade-in ${oppfyllerKrav ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-rose-50 border-rose-500 text-rose-900'}`}>
            {oppfyllerKrav ? (
              <CheckCircle2 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-8 h-8 text-rose-600 flex-shrink-0" />
            )}
            <div>
              <h4 className="text-lg font-bold mb-1">
                Beregnet botid: {botidManeder} måneder
              </h4>
              <p className="text-sm font-medium">
                {oppfyllerKrav 
                  ? 'Kravet til 12 måneders botid er oppfylt! Pass på at eiertiden din (fra signert kjøpekontrakt til signert bud ved salg) også er over 12 måneder.'
                  : 'Kravet til 12 måneders botid er IKKE oppfylt. Du må bo i boligen i minst 12 av de siste 24 månedene før du kan selge skattefritt.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
