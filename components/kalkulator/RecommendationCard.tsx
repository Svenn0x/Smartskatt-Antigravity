import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RecommendationCardProps {
  tittel: string;
  tekst: string;
  partner: string;
  url: string;
  label: string;
  ikon?: React.ReactNode;
}

export default function RecommendationCard({
  tittel,
  tekst,
  partner,
  url,
  label,
  ikon
}: RecommendationCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300 flex flex-col h-full animate-in fade-in zoom-in-95 duration-500">
      <div className="absolute top-0 left-0 w-1 h-full bg-secondary group-hover:bg-cyan-600 transition-colors"></div>
      
      {/* Badge */}
      <div className="inline-flex items-center self-start bg-cyan-50 text-secondary text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide mb-4">
        Anbefalt for deg
      </div>
      
      <div className="flex items-start gap-3 mb-2">
        {ikon && (
          <div className="text-secondary mt-1">
            {ikon}
          </div>
        )}
        <h4 className="text-base font-semibold text-slate-900 leading-tight">
          {tittel}
        </h4>
      </div>
      
      <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
        {tekst}
      </p>
      
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex justify-center items-center gap-2 bg-[#27AE60] hover:bg-[#219653] text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm group-hover:shadow group-hover:-translate-y-0.5"
      >
        {label}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
