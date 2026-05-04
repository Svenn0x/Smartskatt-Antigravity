import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center text-sm">
        <Logo variant="dark" size={48} className="mb-6 opacity-90" />
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 font-semibold">
          <a href="/eiendom" className="hover:text-white transition-colors">Eiendom & Bolig</a>
          <a href="/krypto" className="hover:text-white transition-colors">Krypto-Skatt</a>
          <a href="/frilans" className="hover:text-white transition-colors">Frilans & ENK</a>
        </div>

        <p>&copy; {new Date().getFullYear()} Smartskatt.no. Alle rettigheter reservert.</p>
        <p className="mt-2 text-slate-500">Tjenesten er kun veiledende. Sjekk alltid mot Skatteetatens offisielle sider.</p>
      </div>
    </footer>
  );
}
