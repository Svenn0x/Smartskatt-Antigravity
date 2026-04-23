import React from 'react';
import AffiliateCard from '@/components/shared/AffiliateCard';

export const metadata = {
  title: 'Utleieguiden 2025: Slik beholder du mer av leieinntekten | Smartskatt',
  description: 'Skatteguide for utleie av bolig. Lær om Airbnb 85%-regelen og skattefri utleie.',
};

export default function BoligPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Utleieguiden 2025: Slik beholder du mer av leieinntekten</h1>
      
      <div className="prose prose-xl prose-slate max-w-none mb-12">
        <p className="lead text-2xl text-slate-600 font-medium mb-8">
          Investering i og utleie av eiendom er nordmenns favorittsport. Skattereglene gir deg svært gunstige vilkår, spesielt hvis du leier ut en del av din egen bolig. Slik sikrer du mest mulig avkastning i 2025.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Skattefri utleie i egen bolig</h2>
        <p>
          Den desidert mest lønnsomme måten å leie ut på, er skattefri utleie fra ditt eget hjem:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-3">
          <li><strong>Under 50% av boligen:</strong> Leier du ut en del av din egen bolig, og den delen du selv bor i har <strong>høyere utleieverdi</strong> enn delen du leier ut (under 50% av utleieverdi), er <strong>alle leieinntekter 100% skattefrie</strong>.</li>
          <li><strong>Ingen beløpsgrense:</strong> Så lenge kravet over er oppfylt, spiller det ingen rolle om du tjener 50 000 eller 250 000 kr i året – alt er skattefritt!</li>
        </ul>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Airbnb og korttidsutleie (85%-regelen)</h2>
        <p>
          Leier du ut din egen bolig, eller deler av den, over kortere perioder (under 30 dager per leietaker), gjelder egne regler (ofte kalt Airbnb-regelen):
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-3">
          <li><strong>Bunnfradrag på 10 000 kr:</strong> De første 10 000 kronene du tjener per utleieenhet er <strong>helt skattefrie</strong>.</li>
          <li><strong>85%-regelen:</strong> Av det overskytende beløpet (over 10 000 kr) regnes kun <strong>85% som skattepliktig inntekt</strong>. De resterende 15% er et sjablongfradrag for utgifter.</li>
        </ul>
        <p>
          <em>Eksempel: Tjener du 25 000 kr på Airbnb, er 10 000 kr skattefritt. Av de resterende 15 000 kr, er 85% (12 750 kr) skattepliktig. Skatten på dette er 22%, som tilsvarer kun 2 805 kr i skatt.</em>
        </p>
      </div>

      <div className="mt-16">
        <AffiliateCard 
          partnerName="Hybel.no" 
          description="Sikre leieforholdet med digital leiekontrakt, gratis depositumskonto og sikker innkreving av husleien med Hybel.no."
          affiliateLink="https://hybel.no"
        />
      </div>
    </main>
  );
}
