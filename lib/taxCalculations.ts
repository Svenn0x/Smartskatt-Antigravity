// ============================================================
// Smartskatt Kalkulatoren – Skattereglar 2025 (forenklet)
// ============================================================

export const TAX_YEAR = 2025;

// ---- Satser ------------------------------------------------
const TRINNSKATT_BRACKETS = [
  { limit: 217400,   rate: 0 },
  { limit: 306050,   rate: 0.017 },
  { limit: 697150,   rate: 0.04 },
  { limit: 942400,   rate: 0.136 },
  { limit: 1410750,  rate: 0.166 },
  { limit: Infinity, rate: 0.176 },
];

const FLAT_TAX_RATE        = 0.22;   // alminnelig inntektsskatt
const TRAVEL_RATE_PER_KM   = 1.83;   // kr/km 2025
const TRAVEL_THRESHOLD     = 15000;  // egenandel reisefradrag
const AVG_INTEREST_RATE    = 0.05;   // antatt snittrente
const MINSTEFRADRAG_RATE   = 0.46;   // 46 % av lønn
const MINSTEFRADRAG_MAX    = 104450; // maksfradrag 2025
const PERSONAL_DEDUCTION   = 108550; // personfradrag 2025
const DONATION_MIN         = 500;    // minstegrense gave

// ---- Hjelpefunksjonar --------------------------------------
function calcTrinnskatt(income: number): number {
  let prev = 0;
  let tax = 0;
  for (const bracket of TRINNSKATT_BRACKETS) {
    const taxable = Math.min(income, bracket.limit) - prev;
    if (taxable <= 0) break;
    tax += taxable * bracket.rate;
    prev = bracket.limit;
  }
  return tax;
}

function calcAlminneligInntektsskatt(taxableIncome: number): number {
  return Math.max(0, taxableIncome) * FLAT_TAX_RATE;
}

// ---- Hovudeksport ------------------------------------------
export interface KalkulatorInput {
  inntekt:           number;   // Bruttoinntekt
  gjeld:             number;   // Samla gjeld
  kryptoGevinst:     number;   // Positiv = gevinst, negativ = tap
  reiseKm:           number;   // Km til/fra jobb per år
  harHjemmekontor:   boolean;
  leierUtRom:        boolean;
  harDonert:         boolean;
  donertBelop:       number;   // Beløp donert (>=500 for fradrag)
}

export interface KalkulatorResultat {
  // Fradrag
  reisefradrag:        number;
  gjeldsrentefradrag:  number;
  kryptofradrag:       number;
  gavefradrag:         number;
  hjemmekontorFradrag: number;
  minstefradrag:       number;

  // Skatt
  estimertSkattUten:   number;
  optimalisertSkatt:   number;
  besparelse:          number;

  // Ekstra info for affiliate-triggere
  effektivLanRente:    number;
}

export function beregnSkatt(input: KalkulatorInput): KalkulatorResultat {
  const {
    inntekt, gjeld, kryptoGevinst, reiseKm,
    harHjemmekontor, leierUtRom, harDonert, donertBelop,
  } = input;

  // ---- Reisefradrag ----------------------------------------
  const bruttoReise   = reiseKm * TRAVEL_RATE_PER_KM;
  const reisefradrag  = Math.max(0, bruttoReise - TRAVEL_THRESHOLD);

  // ---- Gjeldsrentefradrag ----------------------------------
  const aarsrenter         = gjeld * AVG_INTEREST_RATE;
  const gjeldsrentefradrag = aarsrenter * FLAT_TAX_RATE;

  // ---- Kryptofradrag (kun ved tap) -------------------------
  const kryptofradrag = kryptoGevinst < 0
    ? Math.abs(kryptoGevinst) * FLAT_TAX_RATE
    : 0;

  // ---- Gavefradrag -----------------------------------------
  const gavefradrag = (harDonert && donertBelop >= DONATION_MIN)
    ? donertBelop * FLAT_TAX_RATE
    : 0;

  // ---- Hjemmekontor (sjablongfradrag) ----------------------
  const hjemmekontorFradrag = harHjemmekontor ? 2500 * FLAT_TAX_RATE : 0;

  // ---- Utleieinntekt (leier ut rom) ------------------------
  // 85%-regelen: inntil 85% av leieinntekten er skattefri
  // Vi modellerer ikkje inntekta men informerer brukaren

  // ---- Minstefradrag (alltid berekna) ----------------------
  const minstefradrag = Math.min(
    inntekt * MINSTEFRADRAG_RATE,
    MINSTEFRADRAG_MAX
  );

  // ======= UTAN optimalisering =============================
  const skattbarInntektUten  = Math.max(0, inntekt - minstefradrag - PERSONAL_DEDUCTION);
  const alminneligUten       = calcAlminneligInntektsskatt(skattbarInntektUten);
  const trinnskattUten       = calcTrinnskatt(inntekt);
  const estimertSkattUten    = alminneligUten + trinnskattUten;

  // ======= MED optimalisering ==============================
  const ekstraFradrag =
    reisefradrag + hjemmekontorFradrag;

  // Fradrag som redusererer grunnlaget direkte (kr-fradrag på skatt)
  const skattelette =
    gjeldsrentefradrag + kryptofradrag + gavefradrag;

  const skattbarInntektMed  = Math.max(0, inntekt - minstefradrag - PERSONAL_DEDUCTION - ekstraFradrag);
  const alminneligMed       = calcAlminneligInntektsskatt(skattbarInntektMed);
  const trinnskattMed       = calcTrinnskatt(inntekt); // trinnskatt påvirkas ikke av fradrag
  const optimalisertSkatt   = Math.max(0, alminneligMed + trinnskattMed - skattelette);

  const besparelse = Math.max(0, estimertSkattUten - optimalisertSkatt);

  return {
    reisefradrag,
    gjeldsrentefradrag,
    kryptofradrag,
    gavefradrag,
    hjemmekontorFradrag,
    minstefradrag,
    estimertSkattUten,
    optimalisertSkatt,
    besparelse,
    effektivLanRente: AVG_INTEREST_RATE,
  };
}

export function formatKr(amount: number): string {
  return new Intl.NumberFormat('nb-NO', {
    style: 'currency',
    currency: 'NOK',
    maximumFractionDigits: 0,
  }).format(amount);
}
