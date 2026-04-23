import React from 'react';
import Link from 'next/link';

interface AffiliateCardProps {
  partnerName: string;
  description: string;
  affiliateLink: string;
}

export default function AffiliateCard({ partnerName, description, affiliateLink }: AffiliateCardProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 items-start sm:items-center">
      <div className="w-16 h-16 bg-white border border-blue-100 rounded-lg flex items-center justify-center font-bold text-2xl text-blue-800 shrink-0 shadow-sm">
        {partnerName.charAt(0)}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold tracking-wider text-green-600 uppercase mb-1">Smartskatt Anbefaler</h3>
        <h4 className="text-xl font-bold text-slate-900 mb-2">{partnerName}</h4>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
      <div className="shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
        <Link 
          href={affiliateLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full sm:w-auto text-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-sm"
        >
          Prøv {partnerName}
        </Link>
      </div>
    </div>
  );
}
