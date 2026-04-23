import WizardForm from '@/components/veiviser/WizardForm';

export default function VeiviserPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-slate-900">Finn dine skattefradrag</h1>
      <p className="text-center text-slate-600 mb-8">Svar på noen enkle spørsmål for å se hva du kan spare.</p>
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <WizardForm />
      </div>
    </div>
  );
}
