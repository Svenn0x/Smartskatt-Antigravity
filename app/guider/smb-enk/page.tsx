import type { Metadata } from 'next';
import AffiliateButton from '@/components/shared/AffiliateButton';

export const metadata: Metadata = {
  title: 'Skatt for SMB og ENK 2026 – Alle fradragene du har krav på',
  description:
    'Komplett skatteguide for enkeltpersonforetak (ENK) og SMB i 2025/2026. Hjemmekontor, bilbruk, telefon og SkatteFUNN forklart enkelt.',
  alternates: {
    canonical: 'https://smartskatt.no/guider/smb-enk',
  },
  openGraph: {
    title: 'Skatt for SMB og ENK 2026 | Smartskatt',
    description:
      'Hjemmekontor, bilbruk, telefon og SkatteFUNN forklart enkelt for deg som driver ENK eller SMB.',
    url: 'https://smartskatt.no/guider/smb-enk',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'ENK og SMB skatteguide 2026 | Smartskatt' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skatt for SMB og ENK 2026 | Smartskatt',
    description: 'Alle fradragene for hjemmekontor, bil, telefon og SkatteFUNN for ENK i 2025/2026.',
    images: ['/og-default.png'],
  },
};

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
