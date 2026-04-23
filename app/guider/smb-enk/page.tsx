import AffiliateButton from '@/components/shared/AffiliateButton';

export default function SmbGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Skatt for SMB og ENK</h1>
      <article className="prose prose-slate max-w-none">
        <p>Å drive eget selskap betyr at du har mange muligheter for skattefradrag, men det krever også god orden i regnskapet.</p>
        <p>Husk fradrag for hjemmekontor, telefon/internett og bilbruk.</p>
        
        <div className="my-10 bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="text-xl font-semibold mb-2">Gjør regnskapet lekende lett med Fiken</h3>
          <p className="mb-4 text-slate-600">Fiken passer perfekt for deg som driver for deg selv og vil ha kontroll på skatt og fradrag.</p>
          <AffiliateButton partnerName="Fiken" url="https://fiken.no" label="Prøv Fiken gratis" />
        </div>
      </article>
    </div>
  );
}
