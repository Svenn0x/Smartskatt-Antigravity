"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

type Kategori = 'Privat' | 'Bedrift';

interface Fradrag {
  tittel: string;
  forklaring: string;
  kategori: Kategori;
  bokstav: string;
  link: string;
  anbefaltVerktoy?: {
    navn: string;
    url: string;
  };
}

export const fradragData: Fradrag[] = [
  {
    tittel: "Arbeidstøy",
    forklaring: "Kun fradrag for spesialutstyr og verneutstyr som ikke egner seg for privat bruk.",
    kategori: "Bedrift",
    bokstav: "A",
    link: "/guider/smb-enk",
  },
  {
    tittel: "Aviser",
    forklaring: "Fradrag gis kun dersom avisen har direkte relevans for yrket ditt.",
    kategori: "Bedrift",
    bokstav: "A",
    link: "/guider/smb-enk",
  },
  {
    tittel: "Bilgodtgjørelse",
    forklaring: "Skattefritt inntil 1,83 kr/km (2024/2025) for bruk av privat bil i næring.",
    kategori: "Bedrift",
    bokstav: "B",
    link: "/guider/smb-enk",
    anbefaltVerktoy: { navn: "Fiken", url: "https://fiken.no" }
  },
  {
    tittel: "BSU-sparing",
    forklaring: "Gir inntil 5 500 kr i direkte skattefradrag hvis du sparer 27 500 kr og er under 34 år.",
    kategori: "Privat",
    bokstav: "B",
    link: "/guider/eiendom",
  },
  {
    tittel: "Fagforeningskontingent",
    forklaring: "Du kan trekke fra inntil 8 700 kr for innbetalt fagforeningskontingent i 2025.",
    kategori: "Privat",
    bokstav: "F",
    link: "/",
  },
  {
    tittel: "Foreldrefradrag (Barnehage/SFO)",
    forklaring: "Fradrag for pass av barn under 12 år. Inntil 25 000 kr for ett barn, deretter 15 000 kr pr ekstra barn.",
    kategori: "Privat",
    bokstav: "F",
    link: "/",
  },
  {
    tittel: "Gaver til frivillighet",
    forklaring: "Donasjoner til godkjente frivillige organisasjoner inntil 25 000 kr gir 22% fradrag.",
    kategori: "Privat",
    bokstav: "G",
    link: "/",
  },
  {
    tittel: "Hjemmekontor",
    forklaring: "Standard sats på 2 050 kr for hjemmekontor i næring, eller faktiske utgifter for eget rom.",
    kategori: "Bedrift",
    bokstav: "H",
    link: "/guider/smb-enk",
  },
  {
    tittel: "Mobil og Internett",
    forklaring: "Du kan trekke fra regningen i ENK, men må skatte av en privat fordel på inntil 4 392 kr.",
    kategori: "Bedrift",
    bokstav: "M",
    link: "/guider/smb-enk",
    anbefaltVerktoy: { navn: "Luca", url: "https://lucaregnskap.no" }
  },
  {
    tittel: "Pendlerfradrag",
    forklaring: "Fradrag for merutgifter til kost og losji når du bor utenfor hjemmet på grunn av jobb.",
    kategori: "Privat",
    bokstav: "P",
    link: "/guider/reisefradrag",
  },
  {
    tittel: "Rentefradrag",
    forklaring: "Fullstendig rentefradrag for alle typer lån (boliglån, billån, forbrukslån, studielån).",
    kategori: "Privat",
    bokstav: "R",
    link: "/",
  },
  {
    tittel: "Telefon",
    forklaring: "Se 'Mobil og Internett'. Samme regler gjelder for elektronisk kommunikasjon.",
    kategori: "Bedrift",
    bokstav: "T",
    link: "/guider/smb-enk",
  },
  {
    tittel: "Tap på krypto",
    forklaring: "Realisert tap på kryptovaluta gir 22% fradrag. Husk at du må levere skattemelding for krypto.",
    kategori: "Privat",
    bokstav: "T",
    link: "/guider/krypto",
    anbefaltVerktoy: { navn: "Kryptosekken", url: "https://kryptosekken.no" }
  }
];

const ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ".split('');

export default function FradragOrdbok() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!searchQuery) return fradragData;
    const lowerQuery = searchQuery.toLowerCase();
    return fradragData.filter(item => 
      item.tittel.toLowerCase().includes(lowerQuery) ||
      item.forklaring.toLowerCase().includes(lowerQuery) ||
      item.kategori.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  // Group by letter
  const groupedData = useMemo(() => {
    const groups: Record<string, Fradrag[]> = {};
    filteredData.forEach(item => {
      if (!groups[item.bokstav]) {
        groups[item.bokstav] = [];
      }
      groups[item.bokstav].push(item);
    });
    return groups;
  }, [filteredData]);

  const activeLetters = Object.keys(groupedData).sort();

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Fradrags-ordbok <span className="text-blue-600">2025/2026</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          Det ultimate leksikonet for norske skattefradrag. Finn ut nøyaktig hva du kan trekke fra på skatten som privatperson eller bedriftseier.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 md:text-lg border border-slate-200 rounded-2xl text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 shadow-sm transition-shadow hover:shadow-md min-h-[56px]"
            placeholder="Hva lurer du på om du kan trekke fra?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Alphabet Filter */}
      {!searchQuery && (
        <div className="mb-12 bg-white rounded-2xl shadow-sm border border-slate-100 p-3 md:p-4 overflow-x-auto scrollbar-hide snap-x touch-pan-x">
          <div className="flex md:flex-wrap gap-2 min-w-max md:min-w-0 justify-start md:justify-center px-1">
            {ALFABET.map((letter) => {
              const isActive = activeLetters.includes(letter);
              return (
                <button
                  key={letter}
                  onClick={() => isActive && scrollToLetter(letter)}
                  disabled={!isActive}
                  className={`
                    w-12 h-12 md:w-10 md:h-10 rounded-xl font-medium text-base md:text-sm transition-all flex items-center justify-center shrink-0 snap-center active:scale-95
                    ${isActive 
                      ? 'bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white cursor-pointer shadow-sm' 
                      : 'text-slate-300 cursor-not-allowed'}
                  `}
                  aria-label={`Gå til bokstav ${letter}`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Results Container */}
      <div className="space-y-12">
        {activeLetters.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100">
            <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900">Ingen treff</h3>
            <p className="text-slate-500">Prøv å søke på et annet ord eller begrep.</p>
          </div>
        ) : (
          activeLetters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl font-bold text-slate-900 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl">
                  {letter}
                </h2>
                <div className="h-px bg-slate-200 flex-1"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groupedData[letter].map((fradrag, index) => (
                  <div 
                    key={index} 
                    className="group bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all flex flex-col relative overflow-hidden active:scale-[0.99] active:bg-slate-50 md:active:scale-100 md:active:bg-white cursor-pointer md:cursor-default"
                  >
                    {/* Category Tag */}
                    <div className="absolute top-6 right-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                        fradrag.kategori === 'Bedrift' 
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' 
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      }`}>
                        {fradrag.kategori}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 pr-20">{fradrag.tittel}</h3>
                    <p className="text-slate-600 mb-6 flex-1">{fradrag.forklaring}</p>
                    
                    {/* Recommended Tool Badge */}
                    {fradrag.anbefaltVerktoy && (
                      <div className="mb-6 flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-slate-600">
                          Anbefalt verktøy: <a href={fradrag.anbefaltVerktoy.url} target="_blank" rel="noopener noreferrer" className="font-medium text-slate-900 hover:text-blue-600 transition-colors">{fradrag.anbefaltVerktoy.navn}</a>
                        </span>
                      </div>
                    )}

                    <Link 
                      href={fradrag.link}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-auto md:group-hover:underline py-2 active:text-blue-800"
                    >
                      Slik fører du det
                      <ArrowRight className="w-4 h-4 ml-1 transform md:group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
