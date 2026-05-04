import Link from 'next/link';
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

const LAST_UPDATED = '4. mai 2026';

interface RelatedGuide {
  href: string;
  title: string;
  description: string;
}

/**
 * E-E-A-T "Verifisert Innhold" modul.
 * Vises nederst på alle guide-sider for å øke tillitsscoren hos Google.
 */
export function VerifisertInnhold({ lastUpdated = LAST_UPDATED }: { lastUpdated?: string }) {
  return (
    <div className="mt-16 border-t border-slate-200 pt-8">
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-emerald-700" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Verifisert innhold</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Innholdet på denne siden er utarbeidet med utgangspunkt i gjeldende
              regelverk fra <strong>Skatteetaten</strong> og <strong>Skatteloven</strong> for
              inntektsåret 2025 / skatteåret 2026. Alle satser og regler er kvalitetssikret
              mot offisielle kilder.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Sist oppdatert: {lastUpdated}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Kilde: Skatte-ABC 2026, Skatteloven
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Featured Snippet-boks som vises øverst i guiden.
 * Google snapper gjerne opp bullet-lister i denne posisjonen.
 */
export function FeaturedSnippet({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 md:p-8 rounded-r-2xl mb-10 shadow-sm">
      <h2 className="text-xl font-bold text-indigo-950 mb-4 flex items-center gap-2">
        <span className="text-2xl" aria-hidden="true">💡</span>
        {title}
      </h2>
      <ul className="space-y-2 text-indigo-900 text-base">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Automatisk "Les også"-modul for intern lenking.
 * Spreader link-juice mellom relaterte guider.
 */
export function RelatedGuides({ guides }: { guides: RelatedGuide[] }) {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Les også</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all block"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
              {guide.title} →
            </h3>
            <p className="text-sm text-slate-600">{guide.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
