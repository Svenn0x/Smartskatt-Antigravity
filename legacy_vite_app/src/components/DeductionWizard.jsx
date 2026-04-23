import React, { useState } from 'react';
import { Briefcase, Coins, Home, Car, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DeductionWizard() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    airbnb: null,
    crypto: null,
    enk: null,
    commuter: null,
  });

  const handleAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setStep(prev => prev + 1);
  };

  const questions = [
    {
      key: 'airbnb',
      icon: <Home size={40} color="var(--primary-blue)" />,
      question: "Eier du egen bolig eller leier du ut via Airbnb?",
    },
    {
      key: 'crypto',
      icon: <Coins size={40} color="#f59e0b" />,
      question: "Har du investert i Bitcoin eller annen krypto i år?",
    },
    {
      key: 'enk',
      icon: <Briefcase size={40} color="#10b981" />,
      question: "Driver du enkeltpersonforetak eller småbedrift?",
    },
    {
      key: 'commuter',
      icon: <Car size={40} color="#ef4444" />,
      question: "Har du pendlet mer enn 20 km til jobb i 2025?",
    }
  ];

  const renderResult = () => {
    const hasDeductions = Object.values(answers).some(a => a);

    return (
      <div className="wizard-result" style={{ animation: 'fadeIn 0.5s' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ color: 'var(--secondary-green)', display: 'inline-block', marginBottom: '1rem' }}>
            <CheckCircle2 size={48} />
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            {hasDeductions ? "Dine potensielle fradrag!" : "Få maks ut av skatten din!"}
          </h3>
          <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>
            Basert på dine svar har vi funnet følgende muligheter for deg.
          </p>
        </div>
        
        <div style={{ background: 'var(--bg-light-gray)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
          {answers.airbnb && (
             <div style={{ marginBottom: '1.5rem', background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
               <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Home size={20} color="var(--primary-blue)" /> Airbnb / Utleie
               </h4>
               <p style={{ color: 'var(--text-gray)' }}>Husk 85%-regelen: 85% av leieinntektene over 10 000 kr er skattefrie hvis du leier ut mindre enn 30 dager per forhold.</p>
             </div>
          )}
          {answers.crypto && (
             <div style={{ marginBottom: '1.5rem', background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
               <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Coins size={20} color="#f59e0b" /> Krypto-investor
               </h4>
               <p style={{ color: 'var(--text-gray)' }}>Du har krav på fradrag for tap ved salg og transaksjonsgebyrer. Pass på formuesrabatten!</p>
             </div>
          )}
          {answers.enk && (
             <div style={{ marginBottom: '1.5rem', background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
               <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Briefcase size={20} color="#10b981" /> Bedriftseier / ENK
               </h4>
               <p style={{ color: 'var(--text-gray)' }}>Glem ikke fradrag for hjemmekontor, avskrivning av PC/telefon, og reisekostnader (diett).</p>
             </div>
          )}
          {answers.commuter && (
             <div style={{ marginBottom: '1.5rem', background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
               <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Car size={20} color="#ef4444" /> Reise & Pendling
               </h4>
               <p style={{ color: 'var(--text-gray)' }}>Sats: 1,83 kr per km i fradrag for pendling over 20 km, pluss eventuelle bompenger (ved &gt;2t spart tid).</p>
             </div>
          )}

          {!hasDeductions && (
             <div style={{ marginBottom: '1.5rem', background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
               <p style={{ color: 'var(--text-gray)' }}>Selv om du har en enkel skattesituasjon kan det være penger å spare. Sjekk skattemeldingen nøye før du leverer!</p>
             </div>
          )}
        </div>

        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '2px solid var(--secondary-green)', textAlign: 'center' }}>
          <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Få hjelp av ekspertene</h4>
          <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
            Å regne ut alt manuelt kan være tidkrevende og komplisert.
          </p>
          <a href="#" className="btn btn-green" style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '0.5rem',
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            borderRadius: '8px',
            background: 'var(--secondary-green)',
            color: 'white',
            fontWeight: '600',
            transition: 'transform 0.2s',
            border: 'none',
            cursor: 'pointer'
          }}>
            Spar tid på rapporteringen – bruk [Partnernavn] <ArrowRight size={20} />
          </a>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button 
            onClick={() => { setStep(1); setAnswers({ airbnb: null, crypto: null, enk: null, commuter: null }); }} 
            style={{ background: 'transparent', border: 'none', color: 'var(--text-gray)', textDecoration: 'underline', cursor: 'pointer', fontSize: '1rem' }}
          >
            Start på nytt
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="wizard-container" style={{
      maxWidth: '800px', margin: '0 auto', background: 'white', 
      borderRadius: '20px', padding: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
      border: '1px solid var(--border-color)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Fradrags-veiviseren 🧙‍♂️</h2>
      
      {step <= 4 ? (
        <div style={{ animation: 'fadeIn 0.5s' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            {[1,2,3,4].map(s => (
              <div key={s} style={{ 
                height: '8px', width: '40px', borderRadius: '4px', 
                background: s <= step ? 'var(--primary-blue)' : 'var(--border-color)',
                transition: 'background 0.3s'
              }} />
            ))}
          </div>

          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ display: 'inline-flex', background: 'rgba(0, 74, 153, 0.05)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
              {questions[step - 1].icon}
            </div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '3rem' }}>
              {questions[step - 1].question}
            </h3>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                onClick={() => handleAnswer(questions[step - 1].key, true)}
                style={{
                  padding: '1rem 3rem', fontSize: '1.2rem', fontWeight: '600',
                  background: 'white', color: 'var(--primary-blue)',
                  border: '2px solid var(--primary-blue)', borderRadius: '12px',
                  cursor: 'pointer', transition: 'all 0.2s', minWidth: '150px'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary-blue)'; e.currentTarget.style.color = 'white'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--primary-blue)'; }}
              >
                Ja
              </button>
              <button 
                onClick={() => handleAnswer(questions[step - 1].key, false)}
                style={{
                  padding: '1rem 3rem', fontSize: '1.2rem', fontWeight: '600',
                  background: 'white', color: 'var(--text-gray)',
                  border: '2px solid var(--border-color)', borderRadius: '12px',
                  cursor: 'pointer', transition: 'all 0.2s', minWidth: '150px'
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--text-gray)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
              >
                Nei
              </button>
            </div>
          </div>
        </div>
      ) : renderResult()}
    </div>
  );
}

