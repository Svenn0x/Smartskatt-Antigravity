import type { Metadata } from 'next';
import AffiliateCard from '@/components/shared/AffiliateCard';

export const metadata: Metadata = {
  title: 'Smarte fradrag for deg som driver for deg selv',
  description:
    'Komplett guide for ENK og SMB. Lær om 30 000 kr-grensen, hjemmekontor, bilgodtgjørelse og SkatteFUNN. Oppdatert for 2026.',
  alternates: {
    canonical: 'https://smartskatt.no/bedrift',
  },
  openGraph: {
    title: 'Smarte fradrag for deg som driver for deg selv | Smartskatt',
    description:
      'Komplett guide for ENK og SMB. Lær om 30 000 kr-grensen, hjemmekontor, bilgodtgjørelse og SkatteFUNN. Oppdatert for 2026.',
    url: 'https://smartskatt.no/bedrift',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'ENK og SMB Skattefradrag | Smartskatt' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smarte fradrag for deg som driver for deg selv | Smartskatt',
    description: 'Komplett guide for ENK og SMB. Finn alle fradragene du har krav på.',
    images: ['/og-default.png'],
  },
};

export default function BedriftPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Smarte fradrag for deg som driver for deg selv</h1>
      <p className="text-lg text-slate-600 mb-10">
        Som ENK- eller AS-eier har du tilgang til en rekke fradrag som lønnstakere ikke kan benytte seg av. Her er det som virkelig monner på skatten.
      </p>
      <article className="prose prose-slate max-w-none">
        <h2>30 000 kr-grensen for investering</h2>
        <p>
          Kjøper du utstyr som koster under 30 000 kr ekskl. mva, kan du kostnadsføre hele beløpet direkte i innkjøpsåret. Over denne grensen må du avskrive over tid.
        </p>

        <h2>Hjemmekontor</h2>
        <p>
          Som ENK kan du kreve fradrag for en forholdsmessig del av boligkostnadene dersom du har et eget rom dedikert til næringsvirksomhet. Alternativt kan du bruke sjablongsatsen på 2 050 kr per år.
        </p>

        <h2>Bilgodtgjørelse og kjøregodtgjørelse</h2>
        <p>
          Bruker du privatbil i næringen, kan du trekke fra 1,83 kr/km for oppdragskjøring. Husk å føre kjørebok!
        </p>

        <h2>SkatteFUNN</h2>
        <p>
          Forsker og utvikler bedriften din ny teknologi eller løsninger? SkatteFUNN gir deg 19% skattefradrag på godkjente FoU-kostnader.
        </p>

        <div className="my-10">
          <AffiliateCard
            partnerName="Fiken"
            affiliateLink="https://fiken.no"
            description="Norges enkleste regnskapsprogram for småbedrifter. Fiken hjelper deg å få med alle fradragene du har krav på."
          />
        </div>
      </article>
    </div>
  );
}
