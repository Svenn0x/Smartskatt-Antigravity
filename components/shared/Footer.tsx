import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center text-sm">
        <Logo variant="dark" size={48} className="mb-6 opacity-90" />
        <p>&copy; {new Date().getFullYear()} Smartskatt.no. Alle rettigheter reservert.</p>
        <p className="mt-2 text-slate-500">Tjenesten er kun veiledende. Sjekk alltid mot Skatteetatens offisielle sider.</p>
      </div>
    </footer>
  );
}
