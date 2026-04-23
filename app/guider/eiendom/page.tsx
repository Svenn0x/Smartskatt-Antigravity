import AffiliateButton from '@/components/shared/AffiliateButton';

export default function EiendomGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Eiendom og Utleie</h1>
      <article className="prose prose-slate max-w-none">
        <p>Leier du ut bolig, eller har du solgt med tap? Dette kan gi store utslag på skatten.</p>
        <p>Sjekk om utleien din er skattepliktig, og pass på å få med fradrag for vedlikehold og felleskostnader.</p>
        
        <div className="my-10 bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="text-xl font-semibold mb-2">Sammenlign lån med Lendo</h3>
          <p className="mb-4 text-slate-600">Skal du refinansiere etter oppussing? Sjekk hvilket lån som gir best betingelser og skattefordeler.</p>
          <AffiliateButton partnerName="Lendo" url="https://lendo.no" label="Sammenlign lån" />
        </div>
      </article>
    </div>
  );
}
