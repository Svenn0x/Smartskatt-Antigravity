import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fradrag for ENK: Den komplette sjekklisten (2026)',
  description: 'Hva kan du egentlig trekke fra på skatten som frilanser? Vi gir deg den definitive sjekklisten for Enkeltpersonforetak.',
  alternates: {
    canonical: 'https://smartskatt.no/frilans/fradrag-sjekkliste',
  },
};

export default function FradragSjekklistePage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Link 
          href="/frilans" 
          className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbake til ENK-guiden
        </Link>
      </div>

      <header className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
          <CheckCircle2 className="w-4 h-4" />
          <span>Sjekkliste</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Den store fradrags-listen for ENK
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Det er én ting Skatteetaten hater, og det er fradrag du ikke har kvittering på. Det de elsker, er når du følger reglene. Her er oversikten!
        </p>
      </header>

      <article className="prose prose-slate prose-lg max-w-none prose-a:text-indigo-600 prose-headings:text-slate-900">
        <h2>1. Hjemmekontor</h2>
        <p>Bruker du et rom i hjemmet ditt <em>utelukkende</em> til jobb? Da kan du velge mellom sjablongfradrag (2 150 kr pr år i 2026) eller fradrag for faktiske utgifter (strøm, forsikring etc fordelt på kvadratmeter).</p>
        
        <h2>2. Internett og Telefoni</h2>
        <p>Ekom-tjenester (mobil og bredbånd) kan trekkes fra, men det beregnes et "sjablongtillegg" på inntil 4 392 kr i året (elektronisk kommunikasjon) som legges til inntekten din for privat bruk.</p>
        
        <h2>3. Mat og Representasjon</h2>
        <p>Tar du med en kunde ut på middag? Kjøper du over disk, koster maten under ca. 500 kr per hode, og alkohol droppes? Da er det faktisk fradragsberettiget! Overtidsmat kan du også skrive av, om du jobber mer enn 12 timer hjemmefra.</p>
        
        <h2>4. Avskrivninger (Saldoavskrivning)</h2>
        <p>Kjøper du en Mac til 25 000 kr, kan du ikke føre hele summen i år. Du må avskrive den. Grensen for direkte fradragføring (i samme år) ligger normalt på 15 000 kr.</p>
      </article>
    </main>
  );
}
