import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center text-sm">
        <Logo variant="dark" size={48} className="mb-8 opacity-80" />
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 font-semibold">
          <a href="/eiendom" className="hover:text-white transition-colors">Eiendom & Bolig</a>
          <a href="/krypto" className="hover:text-white transition-colors">Krypto-Skatt</a>
          <a href="/frilans" className="hover:text-white transition-colors">Frilans & ENK</a>
        </div>

        <div className="max-w-2xl mx-auto mb-8 text-slate-400 space-y-4">
          <div>
            <h4 className="text-white font-bold mb-2">Om Smartskatt</h4>
            <p>
              Vi bygget Smartskatt.no fordi vi mener at skatt ikke trenger å være gresk. Vår misjon er å gjøre norske skatteregler forståelige, tilgjengelige og rettferdige for folk flest – enten du er frilanser, boligeier eller kryptoinvestor. Skatt gjort enkelt, rett og slett.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-800">
            <h4 className="text-slate-500 font-bold mb-2 uppercase tracking-wider text-xs">Ansvarsfraskrivelse</h4>
            <p className="text-xs text-slate-500">
              Smartskatt.no er en uavhengig, veiledende tjeneste og erstatter ikke profesjonell skatterådgivning eller bindende svar fra Skatteetaten. Sjablonger, beløpsgrenser og regler oppdateres årlig, og selv om vi streber etter 100 % nøyaktighet, fraskriver vi oss ethvert økonomisk eller juridisk ansvar som følge av feil eller mangler på siden. Sjekk alltid mot Skatteetatens offisielle sider (skatteetaten.no) ved tvil.
            </p>
          </div>
        </div>

        <p className="text-slate-400">&copy; {new Date().getFullYear()} Smartskatt.no. Alle rettigheter reservert.</p>
      </div>
    </footer>
  );
}
