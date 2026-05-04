'use client';

import React from 'react';
import { Check, X, Star, ExternalLink, Award } from 'lucide-react';

interface Tool {
  id: number;
  name: string;
  logo: string;
  rating: number;
  bestFor: string;
  pros: string[];
  cons: string[];
  link: string;
  isBest: boolean;
  price: string;
}

interface Props {
  title: string;
  tools: Tool[];
  category: string;
}

export default function ComparisonGrid({ title, tools, category }: Props) {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{title}</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Vi har testet markedets største aktører innen {category}. Her er våre objektive vurderinger for 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <div 
            key={tool.id} 
            className={`relative flex flex-col bg-white rounded-3xl transition-all duration-300 ${
              tool.isBest 
                ? 'ring-4 ring-indigo-500 shadow-2xl scale-105 z-10' 
                : 'border border-slate-200 shadow-sm hover:shadow-md'
            }`}
          >
            {tool.isBest && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-6 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                <Award className="w-4 h-4" /> BEST I TEST
              </div>
            )}

            <div className="p-8 flex-1">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl text-slate-400 overflow-hidden shadow-sm">
                  {tool.logo ? (
                    <img src={tool.logo} alt={`${tool.name} logo`} className="w-full h-full object-contain p-2" />
                  ) : (
                    <span>LOGO</span>
                  )}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < tool.rating ? 'fill-current' : 'text-slate-200'}`} />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{tool.price}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">{tool.name}</h3>
              <p className="text-indigo-600 font-semibold text-sm mb-6">{tool.bestFor}</p>

              {/* Pros & Cons */}
              <div className="space-y-4 mb-8">
                <div className="space-y-2">
                  {tool.pros.map((pro, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-sm text-slate-600">{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-50 space-y-2">
                  {tool.cons.map((con, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-rose-100 rounded-full p-0.5">
                        <X className="w-3 h-3 text-rose-600" />
                      </div>
                      <span className="text-sm text-slate-500 italic">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 pt-0">
              <a 
                href={tool.link} 
                target="_blank" 
                rel="nofollow sponsored"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all ${
                  tool.isBest 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' 
                    : 'bg-slate-900 text-white hover:bg-black'
                }`}
              >
                Gå til nettside <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
