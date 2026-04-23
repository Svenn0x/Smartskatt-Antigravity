'use client';

import { trackAffiliateClick } from '@/lib/tracking';
import TrustBadge from './TrustBadge';

interface AffiliateButtonProps {
  partnerName: string;
  url: string;
  label: string;
}

export default function AffiliateButton({ partnerName, url, label }: AffiliateButtonProps) {
  const handleClick = () => {
    trackAffiliateClick(partnerName);
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full my-6 p-6 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 group">
      <a 
        href={url} 
        onClick={handleClick}
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full relative overflow-hidden bg-slate-900 text-white font-semibold py-4 px-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group-hover:bg-blue-600 flex justify-center items-center gap-2"
      >
        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
        
        {label}
        <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
      <TrustBadge />
    </div>
  );
}
