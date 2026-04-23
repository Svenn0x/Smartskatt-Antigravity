import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full pb-24">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center lg:pt-32 lg:pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          Oppdatert med skatteregler for 2024
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 text-balance leading-tight">
          Ikke betal mer skatt <br className="hidden sm:block" />
          enn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">du absolutt må.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 text-balance">
          Svar på 4 enkle spørsmål og finn ut nøyaktig hvilke skattefradrag du har krav på – helt gratis og uforpliktende.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/veiviser" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all hover:-translate-y-1 active:translate-y-0">
            Start Skatteveiviseren
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-500 font-medium uppercase tracking-wider">Tar under 2 minutter • Krever ingen innlogging</p>
      </section>

      {/* Guide Cards Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Dypdykk i fradragene</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Våre guider oversetter komplekse regler til enkle grep som sparer deg for penger.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <GuideCard 
            title="Krypto" 
            href="/guider/krypto" 
            description="Optimaliser fradrag for tap, mining og staking."
            icon="₿"
            color="from-orange-500 to-yellow-400"
          />
          <GuideCard 
            title="SMB / ENK" 
            href="/guider/smb-enk" 
            description="Hjemmekontor, bilbruk og firmakostnader gjort enkelt."
            icon="🏢"
            color="from-blue-500 to-indigo-500"
          />
          <GuideCard 
            title="Eiendom" 
            href="/guider/eiendom" 
            description="Fradrag for utleie, vedlikehold og boligsalg."
            icon="🏠"
            color="from-emerald-500 to-teal-400"
          />
          <GuideCard 
            title="Reise" 
            href="/guider/reisefradrag" 
            description="Pendlerfradrag og utgifter knyttet til arbeidsreiser."
            icon="🚗"
            color="from-purple-500 to-pink-500"
          />
        </div>
      </section>
    </div>
  );
}

function GuideCard({ title, href, description, icon, color }: { title: string; href: string; description: string, icon: string, color: string }) {
  return (
    <Link href={href} className="group relative block p-6 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Background glow effect on hover */}
      <div className={`absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>
      
      <div className="flex items-center justify-center w-12 h-12 bg-slate-50 text-2xl rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 border border-slate-100 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      
      <div className="mt-6 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
        Les guiden
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </div>
    </Link>
  );
}
