import type { Metadata } from 'next';
import WizardForm from '@/components/veiviser/WizardForm';

export const metadata: Metadata = {
  title: 'Skatteveiviser – Finn dine fradrag på 2 minutter',
  description:
    'Svar på noen enkle spørsmål og finn skattefradragene du har krav på. Gratis og tilpasset norske skatteregler for 2025/2026.',
  alternates: {
    canonical: 'https://smartskatt.no/veiviser',
  },
  openGraph: {
    title: 'Skatteveiviser – Finn dine fradrag på 2 minutter | Smartskatt',
    description:
      'Svar på noen enkle spørsmål og finn skattefradragene du har krav på. Gratis og tilpasset norske skatteregler for 2025/2026.',
    url: 'https://smartskatt.no/veiviser',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Smartskatt Skatteveiviser' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skatteveiviser – Finn dine fradrag på 2 minutter | Smartskatt',
    description: 'Finn skattefradragene du har krav på. Gratis og tilpasset norske skatteregler.',
    images: ['/og-default.png'],
  },
};

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
