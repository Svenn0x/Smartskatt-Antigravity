import type { Metadata } from 'next';
import AffiliateButton from '@/components/shared/AffiliateButton';
import KryptoKalkulator from '@/components/kalkulator/KryptoKalkulator';

export const metadata: Metadata = {
  title: 'Skatt på Kryptovaluta 2026 – Komplett guide til kryptoskatt',
  description:
    'Lær alt om skatt på kryptovaluta i 2025/2026. 22% fradrag for tap, regler for gevinst, mining, staking og riktig rapportering til Skatteetaten.',
  alternates: {
    canonical: 'https://smartskatt.no/guider/krypto',
  },
  openGraph: {
    title: 'Skatt på Kryptovaluta 2026 | Smartskatt',
    description:
      '22% fradrag for tap, regler for gevinst og riktig rapportering til Skatteetaten i 2025/2026.',
    url: 'https://smartskatt.no/guider/krypto',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Kryptoskatt guide 2026 | Smartskatt' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skatt på Kryptovaluta 2026 | Smartskatt',
    description: '22% fradrag for tap og riktig rapportering av krypto til Skatteetaten.',
    images: ['/og-default.png'],
  },
};

export default function KryptoGuidePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Hovedtittel */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Skatt på Kryptovaluta i 2026</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          En komplett guide til hvordan du beregner skatt på Bitcoin, Ethereum og andre kryptovalutaer. Lær om skatt på gevinst, fradrag for tap, formueskatt, mining og staking.
        </p>
      </div>

      {/* Direct Answer Box - Optimalisert for ChatGPT Search / AEO */}
      <div 
        className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-10 shadow-sm"
        id="hvor-mye-skatt-pa-bitcoin"
      >
        <h2 className="text-xl font-bold text-indigo-950 mb-3 flex items-center">
          <span className="mr-2">💡</span> Hvor mye skatt er det på bitcoin i Norge i 2026?
        </h2>
        <div className="text-indigo-900 space-y-2">
          <p>
            I Norge er skatten på gevinst ved salg av bitcoin og annen kryptovaluta <strong>22 % i 2026</strong>. 
            Tilsvarende får du <strong>22 % fradrag</strong> dersom du selger med tap. 
          </p>
          <p>
            I tillegg inngår kryptovaluta i din totale formue og er underlagt formuesskatt. Verdien beregnes ut fra markedsverdien 1. januar i skatteåret, og formuesskatten varierer mellom <strong>0 % og 1,1 %</strong> avhengig av din totale nettoformue.
          </p>
        </div>
      </div>

      <article className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <p className="lead">
          Å rapportere krypto til Skatteetaten kan virke uoversiktlig, spesielt med tusenvis av transaksjoner. Denne guiden gir deg oversikten du trenger for å rapportere riktig.
        </p>

        {/* Kryptoskatt Kalkulator Seksjon */}
        <h2 id="kalkulator">Kryptoskatt-estimat Kalkulator</h2>
        <p>
          Bruk vår enkle kalkulator nedenfor for å raskt estimere skatten på en enkelt handel, enten det er gevinst eller tap. Husk at kryptoskatt flateres på 22 % i 2026.
        </p>
        
        <KryptoKalkulator />

        <h2 id="grunnleggende-regler">1. Grunnleggende regler for skatt på kryptovaluta</h2>
        <p>All kryptovaluta anses som formuesobjekter. Dette betyr at reglene for kapitalinntekt gjelder. Du skattlegges for gevinst, og får fradrag for tap.</p>
        <h3>Når utløses skatteplikt?</h3>
        <ul>
          <li><strong>Salg til fiat:</strong> Å selge Bitcoin for norske kroner (NOK) er en skattepliktig hendelse.</li>
          <li><strong>Krypto til krypto:</strong> Å bytte f.eks. Bitcoin til Ethereum utløser skatt. Gevinsten/tapet beregnes ut fra verdien i NOK på transaksjonstidspunktet.</li>
          <li><strong>Kjøp av varer:</strong> Å bruke krypto til å kjøpe en tjeneste eller vare regnes som en realisasjon.</li>
        </ul>

        <h2 id="formuesskatt">2. Formuesskatt på Krypto (2026-regler)</h2>
        <p>Kryptovalutaen din inngår i formuesgrunnlaget ditt ved årsskiftet.</p>
        <ul>
          <li><strong>Verdsettelse:</strong> Det er markedsverdien den 1. januar i skattemeldingens år som gjelder (f.eks. 1. januar 2026 for inntektsåret 2025).</li>
          <li><strong>Satser:</strong> Du betaler ikke formuesskatt før nettoformuen din overstiger bunnfradraget (1,7 millioner kroner i 2025/2026). Overstiger formuen dette, er satsen vanligvis 1,0 % (1,1 % for formuer over 20 mill.).</li>
        </ul>

        <h2 id="mining-og-staking">3. Mining, Staking og Airdrops</h2>
        <p>Aktiviteter som genererer "nye" krypto-midler skattlegges på en egen måte:</p>
        <ul>
          <li><strong>Mining:</strong> Inntekt fra mining (Proof of Work) skattlegges vanligvis som kapitalinntekt (22 %). Hvis du driver i stor skala, kan Skatteetaten anse det som næringsvirksomhet (opptil ca. 50 % skatt).</li>
          <li><strong>Staking og Yield Farming:</strong> Belønninger anses som skattepliktig kapitalinntekt på det tidspunktet du mottar dem (tilsvarende renteinntekter). Skattesatsen er 22 %.</li>
          <li><strong>Airdrops:</strong> Verdien av airdrops er skattepliktig som inntekt det året du får råderett over tokenene.</li>
        </ul>

        <h2 id="rapportering">4. Hvordan rapportere krypto til Skatteetaten?</h2>
        <p>Skatteetaten får ikke automatisk inn transaksjonene dine fra kryptobørser, i motsetning til norske bankkontoer og aksjer. Du er selv ansvarlig for å fylle inn dette riktig i skattemeldingen.</p>
        <ul>
          <li><strong>FIFO-prinsippet:</strong> For beregning av inngangsverdi brukes «First In, First Out» (Først inn, først ut). Den kryptoen du kjøpte først, anses for å være den du selger først.</li>
          <li><strong>Dokumentasjon:</strong> Du må kunne dokumentere alle transaksjoner hvis Skatteetaten spør. Behold historikk fra børser og lommebøker.</li>
        </ul>

        <h2 id="verktoy">5. Verktøy for automatisk beregning</h2>
        <p>Det er praktisk talt umulig å regne ut FIFO-gevinst manuelt hvis du har gjort mer enn et par titalls handler.</p>
        
        <div className="my-10 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-3 text-slate-800">Gjør det enkelt med Kryptosekken</h3>
          <p className="mb-6 text-slate-600 max-w-lg">
            Kryptosekken integrerer direkte mot dine børser, regner ut nøyaktig gevinst/tap og formue, og gir deg ferdig utfylte tall klare til å kopieres rett inn i skattemeldingen.
          </p>
          <AffiliateButton partnerName="Kryptosekken" url="https://kryptosekken.no" label="Prøv Kryptosekken" />
        </div>
      </article>
    </div>
  );
}
