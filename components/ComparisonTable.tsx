import React from 'react';
import { CheckCircle2, XCircle, Star, ExternalLink } from 'lucide-react';

export type ComparisonItem = {
  id: string;
  name: string;
  description: string;
  isBestInTest?: boolean;
  rating: number; // 1 to 5
  pros: string[];
  cons: string[];
  affiliateLink: string;
  priceText: string;
};

export default function ComparisonTable({ items, title }: { items: ComparisonItem[], title: string }) {
  return (
    <div className="w-full my-12">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">{title}</h2>
      
      <div className="flex flex-col gap-8">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`relative bg-white border ${item.isBestInTest ? 'border-indigo-400 shadow-xl shadow-indigo-100' : 'border-slate-200 shadow-sm'} rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 transition-all hover:-translate-y-1`}
          >
            {item.isBestInTest && (
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-indigo-600 text-white font-bold px-4 py-1.5 rounded-full text-sm flex items-center shadow-md">
                <Star className="w-4 h-4 fill-white text-white mr-1" />
                Best i test 2026
              </div>
            )}
            
            <div className="flex-[2] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-black text-slate-900">{item.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < item.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-100 text-slate-200'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-6">{item.description}</p>
              </div>
              
              <div className="hidden lg:block">
                <p className="text-lg font-bold text-slate-900 mb-4">{item.priceText}</p>
                <a 
                  href={item.affiliateLink}
                  rel="nofollow sponsored"
                  target="_blank"
                  className={`w-full text-center flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl transition-all ${item.isBestInTest ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md active:scale-95' : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-95'}`}
                >
                  Gå til {item.name} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex-[3] grid sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div>
                <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
                  Fordeler
                </h4>
                <ul className="space-y-3">
                  {item.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-rose-800 mb-4 flex items-center gap-2">
                  Ulemper
                </h4>
                <ul className="space-y-3">
                  {item.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="block lg:hidden mt-4 pt-6 border-t border-slate-100">
              <p className="text-lg font-bold text-slate-900 mb-4 text-center">{item.priceText}</p>
              <a 
                href={item.affiliateLink}
                rel="nofollow sponsored"
                target="_blank"
                className={`w-full text-center flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl transition-all ${item.isBestInTest ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md active:scale-95' : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-95'}`}
              >
                Gå til {item.name} <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
