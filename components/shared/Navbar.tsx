import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-md transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold shadow-sm shadow-blue-200 group-hover:bg-blue-700 transition-colors">
            S
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
            Smartskatt
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          <div className="relative group">
            <button className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors flex items-center gap-1 cursor-default py-2">
              Skatteguider
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
              <Link href="/krypto" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600">Krypto</Link>
              <Link href="/bedrift" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 border-t border-slate-50">Bedrift</Link>
              <Link href="/bolig" className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 border-t border-slate-50">Bolig</Link>
            </div>
          </div>
          <Link href="/kalkulator" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1 py-2">
            Kalkulator
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          </Link>
        </nav>
        <div className="flex items-center">
          <Link href="/veiviser" className="text-sm font-semibold bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full transition-all hover:shadow-md hover:scale-105 active:scale-95">
            Skatteveiviser
          </Link>
        </div>
      </div>
    </header>
  );
}
