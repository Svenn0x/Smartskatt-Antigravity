import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FeaturedSnippet, VerifisertInnhold, RelatedGuides } from '@/components/shared/GuideComponents';

export const metadata: Metadata = {
  title: 'ENK vs AS i 2026 – Når lønner det seg å skifte selskapsform?',
  description: 'Sammenlign skatt for ENK og AS i 2026. Marginalsats, utbytte, personlig ansvar og trygderettigheter. Finn ut når du bør bytte fra ENK til AS.',
  alternates: { canonical: 'https://smartskatt.no/guide/enk-vs-as-skatt' },
  openGraph: { title: 'ENK vs AS – Skattesammenligning 2026', description: 'Når lønner det seg å gå fra ENK til AS?', url: 'https://smartskatt.no/guide/enk-vs-as-skatt', type: 'article' },
};

export default function EnkVsAsPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'Hva er forskjellen på ENK og AS i skatt?', acceptedAnswer: { '@type': 'Answer', text: 'I ENK beskattes overskuddet som personinntekt (opp til 50,6 % marginalskatt inkl. trygdeavgift). I AS betales 22 % selskapsskatt, og utbytte til eier beskattes med 37,84 % (etter skjermingsfradrag). Total skatt i AS kan bli lavere ved høye overskudd.' } },
    { '@type': 'Question', name: 'Når lønner det seg å gå fra ENK til AS?', acceptedAnswer: { '@type': 'Answer', text: 'Tommelfingerregel: Når overskuddet passerer 500 000–750 000 kr per år, begynner AS å bli skattemessig gunstigere. Men det avhenger av om du tar ut overskuddet som utbytte eller lar det stå i selskapet.' } },
    { '@type': 'Question', name: 'Hva er trygdeavgiften for ENK i 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Trygdeavgiften for næringsinntekt (ENK) er 11,2 % i 2026. For lønnsinntekt er den 7,9 %. Denne forskjellen er en av de viktigste kostnadene ved ENK sammenlignet med AS.' } },
  ]};

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Script id="faq-enk-vs-as" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-sm font-bold mb-4"><span>⚖️</span> Selskapsform</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-balance">ENK vs AS i 2026 – Når lønner det seg å skifte selskapsform?</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed text-balance">Bør du drive som enkeltpersonforetak eller aksjeselskap? Svaret avhenger av overskudd, risiko og hva du vil gjøre med pengene. Her er den ærlige skattesammenligningen for 2026.</p>
        <p className="text-sm text-slate-400 mt-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Sist oppdatert: 4. mai 2026</p>
      </header>
      <FeaturedSnippet title="Kort oppsummering: ENK vs AS" points={[
        'ENK: Overskudd beskattes som personinntekt (opp til 50,6 % marginalsats).',
        'AS: 22 % selskapsskatt + 37,84 % utbytteskatt ved uttak.',
        'ENK lønner seg: Ved lavt overskudd (under ~500 000 kr).',
        'AS lønner seg: Ved høyt overskudd du kan la stå i selskapet.',
        'Personlig ansvar: ENK = ubegrenset. AS = begrenset til innskutt kapital.',
        'Trygdeavgift ENK: 11,2 % vs. 7,9 % som ansatt i eget AS.',
      ]} />
      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-emerald-600">
        <h2>Hva er forskjellen på ENK og AS i skatt?</h2>
        <p>Den fundamentale forskjellen er <em>når</em> og <em>hvor mye</em> du beskattes:</p>
        <ul>
          <li><strong>ENK:</strong> Hele overskuddet beskattes som din personinntekt det året det opptjenes. Marginalskatten kan bli opp til <strong>50,6 %</strong> (inkl. trinnskatt og trygdeavgift på 11,2 %).</li>
          <li><strong>AS:</strong> Selskapet betaler 22 % selskapsskatt av overskuddet. Tar du ut pengene som utbytte, beskattes det med 37,84 % (etter skjermingsfradrag). Men lar du pengene stå i selskapet, betaler du bare de 22 %.</li>
        </ul>

        <h2>Skattesammenligning: Konkrete tall</h2>
        <div className="overflow-x-auto my-6 not-prose">
          <table className="min-w-full text-left bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm text-sm">
            <thead className="bg-slate-50 uppercase tracking-wider text-slate-500 text-xs">
              <tr>
                <th className="px-6 py-4 font-semibold">Overskudd</th>
                <th className="px-6 py-4 font-semibold text-emerald-700">ENK (total skatt)</th>
                <th className="px-6 py-4 font-semibold text-indigo-700">AS (utbytte tatt ut)</th>
                <th className="px-6 py-4 font-semibold text-violet-700">AS (beholdt i selskap)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr><td className="px-6 py-4 font-medium">300 000 kr</td><td className="px-6 py-4">~93 000 kr (31 %)</td><td className="px-6 py-4">~120 000 kr (40 %)</td><td className="px-6 py-4">66 000 kr (22 %)</td></tr>
              <tr><td className="px-6 py-4 font-medium">500 000 kr</td><td className="px-6 py-4">~185 000 kr (37 %)</td><td className="px-6 py-4">~200 000 kr (40 %)</td><td className="px-6 py-4">110 000 kr (22 %)</td></tr>
              <tr><td className="px-6 py-4 font-medium">750 000 kr</td><td className="px-6 py-4">~310 000 kr (41 %)</td><td className="px-6 py-4">~300 000 kr (40 %)</td><td className="px-6 py-4">165 000 kr (22 %)</td></tr>
              <tr className="bg-emerald-50"><td className="px-6 py-4 font-bold">1 000 000 kr</td><td className="px-6 py-4 font-bold text-rose-600">~450 000 kr (45 %)</td><td className="px-6 py-4 font-bold text-emerald-700">~400 000 kr (40 %)</td><td className="px-6 py-4 font-bold text-emerald-700">220 000 kr (22 %)</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Når lønner det seg å gå fra ENK til AS?</h2>
        <p><strong>Tommelfingerregel:</strong> Når overskuddet passerer <strong>500 000–750 000 kr per år</strong>, begynner AS å bli gunstigere – spesielt dersom du kan la deler av overskuddet stå i selskapet. Ved overskudd over 1 million er fordelen tydelig.</p>
        <p>Men det er ikke bare skatt som teller:</p>

        <h2>Personlig ansvar: Den store forskjellen</h2>
        <p>I ENK har du <strong>ubegrenset personlig ansvar</strong> for all gjeld og alle forpliktelser. Går det galt, risikerer du privatøkonomien. I AS er ansvaret <strong>begrenset til innskutt aksjekapital</strong> (minimum 30 000 kr). For de fleste næringsdrivende er dette den viktigste grunnen til å vurdere AS.</p>

        <h2>Trygdeavgift: En skjult ENK-kostnad</h2>
        <p>Trygdeavgiften for næringsinntekt (ENK) er <strong>11,2 %</strong>, mot <strong>7,9 %</strong> for lønnsinntekt. I AS kan du ta ut lønn (7,9 %) + utbytte – og dermed optimalisere trygdeavgiften. Over et helt yrkesliv utgjør dette hundretusener.</p>

        <h2>ENK-fordeler du mister ved overgang til AS</h2>
        <ul>
          <li>Enklere administrasjon – ingen styremøter, årsregnskap eller revisor.</li>
          <li>Fritt uttak av penger (i ENK tar du ut hva du vil, når du vil).</li>
          <li>Lavere formelle krav og oppstartskostnader.</li>
          <li>Mulighet for skattefordeler ved lave overskudd.</li>
        </ul>

        <h2>Oppsummering: Hvem bør velge hva?</h2>
        <ul>
          <li><strong>ENK:</strong> Frilansere, gig-arbeidere og hobbynæring med overskudd under 500 000 kr.</li>
          <li><strong>AS:</strong> Næringsdrivende med overskudd over 750 000 kr, behov for ansvarsbegrensning, eller planer om å investere overskuddet i selskapet.</li>
        </ul>
        <p>Bruk vår <Link href="/frilans" className="font-bold">Fradrags-Automat for ENK</Link> for å optimalisere skatten uansett selskapsform.</p>
      </article>
      <RelatedGuides guides={[
        { href: '/guide/fradrag-enk-oversikt', title: 'Alle ENK-fradrag 2026', description: 'Komplett oversikt over fradrag for enkeltpersonforetak.' },
        { href: '/guide/hjemmekontor-fradrag-enk', title: 'Hjemmekontor-fradrag', description: 'Sjablong vs. faktiske kostnader.' },
        { href: '/sammenlign/regnskapsprogram-enk', title: 'Regnskapsprogram for ENK', description: 'Fiken vs Conta vs Tripletex.' },
        { href: '/frilans', title: 'Frilans-guiden', description: 'Hovedguiden for ENK og frilansere.' },
      ]} />
      <VerifisertInnhold />
    </main>
  );
}
