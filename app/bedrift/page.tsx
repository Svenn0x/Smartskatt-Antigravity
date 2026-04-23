import React from 'react';
import AffiliateCard from '@/components/shared/AffiliateCard';

export const metadata = {
  title: 'Smarte fradrag for deg som driver for deg selv | Smartskatt',
  description: 'Guide for ENK og SMB. Lær om 30 000 kr-grensen og SkatteFUNN.',
};

export default function BedriftPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Smarte fradrag for deg som driver for deg selv</h1>
      
      <div className="prose prose-xl prose-slate max-w-none mb-12">
        <p className="lead text-2xl text-slate-600 font-medium mb-8">
          Å optimalisere likviditeten er avgjørende for små og mellomstore bedrifter (SMB) samt enkeltpersonforetak (ENK). Her er fradragene og støtteordningene du må kjenne til i 2025.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Hevet grense for direkte fradrag</h2>
        <p>
          En av de viktigste endringene for å sikre god likviditet, er reglene for utgiftsføring av driftsmidler:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-3">
          <li><strong>30 000 kr-grensen:</strong> Den nye grensen for direkte utgiftsføring av driftsmidler (som PC, verktøy, eller programvare) er nå hevet til <strong>30 000 kr</strong>.</li>
          <li><strong>Direkte skatteeffekt:</strong> Kjøper du noe under denne grensen, kan du kreve hele beløpet som fradrag umiddelbart, i stedet for å måtte avskrive det over flere år. Dette reduserer årets overskudd og skatten din betraktelig.</li>
        </ul>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">SkatteFUNN: Få betalt for å innovere</h2>
        <p>
          Utvikler bedriften din nye tjenester, produkter eller produksjonsprosesser? Da kan du ha krav på betydelig støtte:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-3">
          <li><strong>19% fradrag:</strong> Gjennom SkatteFUNN-ordningen kan du få <strong>19% av prosjektkostnadene</strong> som skattefradrag.</li>
          <li><strong>Utbetaling:</strong> Er bedriften i en vekstfase og går med underskudd, vil skattefradraget <strong>utbetales i kontanter</strong> fra Skatteetaten i forbindelse med skatteoppgjøret.</li>
        </ul>
      </div>

      <div className="mt-16">
        <AffiliateCard 
          partnerName="Fiken" 
          description="Norges enkleste regnskapsprogram for småbedrifter. Fiken hjelper deg å få med alle fradragene du har krav på."
          affiliateLink="https://fiken.no"
        />
      </div>
    </main>
  );
}
