import React from 'react';
import FradragOrdbok from './FradragOrdbok';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fradrags-ordbok 2025/2026 | Smartskatt',
  description: 'Det ultimate leksikonet over norske skattefradrag. Finn ut nøyaktig hva du kan trekke fra på skatten som privatperson eller bedriftseier i 2025.',
  openGraph: {
    title: 'Fradrags-ordbok 2025/2026 | Smartskatt',
    description: 'Det ultimate leksikonet over norske skattefradrag. Finn ut nøyaktig hva du kan trekke fra på skatten som privatperson eller bedriftseier i 2025.',
  }
};

export default function FradragPage() {
  return (
    <main className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <FradragOrdbok />
    </main>
  );
}
