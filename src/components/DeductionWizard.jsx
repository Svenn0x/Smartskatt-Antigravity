import React, { useState } from 'react';
import { Briefcase, Coins, Home, Car, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function DeductionWizard() {
  const [step, setStep] = useState(1);
  const [situation, setSituation] = useState(null);

  const situations = [
    { id: 'business', icon: <Briefcase size={24} />, title: 'Bedriftseier / ENK', desc: 'Finn fradrag for drift og utstyr' },
    { id: 'crypto', icon: <Coins size={24} />, title: 'Krypto-investor', desc: 'Skatt på Bitcoin og annen krypto' },
    { id: 'homeowner', icon: <Home size={24} />, title: 'Boligeier', desc: 'Rentefradrag og refinansiering' },
    { id: 'commuter', icon: <Car size={24} />, title: 'Pendler', desc: 'Reisefradrag til og fra jobb' },
  ];

  const handleSelect = (id) => {
    setSituation(id);
    setStep(2);
  };

  return (
    <div className="wizard-container glass-card" style={{
      maxWidth: '800px', margin: '0 auto', padding: '3rem'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Fradrags-veiviseren 🧙‍♂️</h2>
      
      {step === 1 && (
        <>
          <p style={{ textAlign: 'center', color: 'var(--text-gray)', marginBottom: '2rem', fontSize: '1.2rem' }}>
            Hvilken situasjon passer best for deg? Velg for å se dine potensielle fradrag.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {situations.map((sit) => (
              <button 
                key={sit.id} 
                onClick={() => handleSelect(sit.id)}
                className="affiliate-box"
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
                  padding: '2rem', cursor: 'pointer', textAlign: 'center'
                }}
              >
                <div style={{ color: 'var(--primary-blue)', background: 'rgba(0, 26, 51, 0.05)', padding: '1rem', borderRadius: '50%' }}>
                  {sit.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>{sit.title}</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{sit.desc}</p>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <div className="wizard-result fade-in">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ color: 'var(--secondary-green)', display: 'inline-block', marginBottom: '1rem' }}>
              <CheckCircle2 size={48} />
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Vi fant potensielle fradrag for deg!</h3>
          </div>
          
          <div style={{ background: 'var(--bg-light-blue)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
            {situation === 'business' && (
              <>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>💡 For Bedriftseiere:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', color: 'var(--text-gray)' }}>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Fradrag for hjemmekontor og internett</li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Avskrivning av PC og telefon</li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Diett og reisekostnader</li>
                </ul>
                <div className="affiliate-box" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <p style={{ fontWeight: '600' }}>For å få med deg alt automatisk anbefaler vi Fiken.</p>
                  <a href="#" className="btn btn-green" style={{ textDecoration: 'none', width: '100%' }}>
                    Prøv Fiken gratis i 30 dager <ChevronRight size={20} />
                  </a>
                </div>
              </>
            )}

            {situation === 'crypto' && (
              <>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>💡 For Krypto-investorer:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', color: 'var(--text-gray)' }}>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Fradrag for tap ved salg av krypto</li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Fradrag for transaksjonsgebyrer</li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Formuesrabatt på kryptovaluta</li>
                </ul>
                <div className="affiliate-box" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <p style={{ fontWeight: '600' }}>Regn ut kryptoskatten automatisk før du sender inn.</p>
                  <a href="#" className="btn btn-green" style={{ textDecoration: 'none', width: '100%', background: '#6366f1' }}>
                    Få kontroll på kryptoskatten med Kryptosekken <ChevronRight size={20} />
                  </a>
                </div>
              </>
            )}

            {situation === 'homeowner' && (
              <>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>💡 For Boligeiere:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', color: 'var(--text-gray)' }}>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Rentefradrag på boliglån (22%)</li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Fradrag for fellesgjeld i borettslag</li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Gjeldsforsikring (i noen tilfeller)</li>
                </ul>
                <div className="affiliate-box" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <p style={{ fontWeight: '600' }}>Sikker på at du har best rente? Et kutt i renten kan spare deg titusenvis.</p>
                  <a href="#" className="btn btn-green" style={{ textDecoration: 'none', width: '100%', background: '#ff3e6c' }}>
                    Spar mer ved å refinansiere boliglånet <ChevronRight size={20} />
                  </a>
                </div>
              </>
            )}

            {situation === 'commuter' && (
              <>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>💡 For Pendlere:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', color: 'var(--text-gray)' }}>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Fradrag for reise mellom hjem og arbeid (1.70 kr/km)</li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Bompengefradrag (hvis tidsbesparelsen er over 2 timer)</li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary-green)"/> Utgifter til bom/ferge utover 3300 kr</li>
                </ul>
                <div className="affiliate-box" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <p style={{ fontWeight: '600' }}>Få Smartskatt til å finne pendlerrutene dine automatisk.</p>
                  <button className="btn btn-green" style={{ width: '100%' }}>
                    Sjekk min skattemelding <ChevronRight size={20} />
                  </button>
                </div>
              </>
            )}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => setStep(1)} 
              style={{ background: 'transparent', border: 'none', color: 'var(--text-gray)', textDecoration: 'underline', cursor: 'pointer', fontSize: '1rem' }}
            >
              Start på nytt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
