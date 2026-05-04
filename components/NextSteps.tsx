import Link from 'next/link';

export default function NextSteps({ currentHub }: { currentHub: 'eiendom' | 'krypto' | 'frilans' }) {
  const hubs = [
    {
      id: 'eiendom',
      title: 'Bolig & Eiendom',
      description: 'Lær hvordan du selger bolig skattefritt og leier ut riktig.',
      href: '/eiendom',
      icon: '🏠'
    },
    {
      id: 'krypto',
      title: 'Krypto-Skatt',
      description: 'Unngå baksmell på trading, staking og DeFi.',
      href: '/krypto',
      icon: '₿'
    },
    {
      id: 'frilans',
      title: 'Frilans & ENK',
      description: 'Maksimalt utbytte av foretaket ditt med Fradrags-Automaten.',
      href: '/frilans',
      icon: '💼'
    }
  ];

  const recommendations = hubs.filter(hub => hub.id !== currentHub);

  return (
    <section className="bg-slate-50 rounded-3xl p-8 my-16 border border-slate-200 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Neste steg for deg 🎯</h3>
      <p className="text-center text-slate-600 mb-8 max-w-lg mx-auto">
        Har du skatte-situasjoner i flere kategorier? Utforsk våre andre dyptgående guider og kalkulatorer for å sikre at du ikke betaler en krone for mye.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {recommendations.map(hub => (
          <Link href={hub.href} key={hub.id} className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-300 transition-all flex items-start gap-4">
            <div className="text-4xl bg-slate-50 p-3 rounded-xl group-hover:scale-110 transition-transform">{hub.icon}</div>
            <div>
              <h4 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{hub.title}</h4>
              <p className="text-sm text-slate-600 mt-1">{hub.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
