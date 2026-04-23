import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import DeductionWizard from './components/DeductionWizard';

// SVG Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <path d="M11 8v6"></path>
    <path d="M8 11h6"></path>
  </svg>
);

const MoneyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20"></path>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <rect x="9" y="9" width="6" height="6" rx="1" ry="1"></rect>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Få bedre råd. Automatiske skattefradrag rett i lomma.</h1>
            <p>Smartskatt analyserer skattemeldingen din på sekunder og finner fradragene du har krav på, men som Skatteetaten ofte går glipp av. Trygt, enkelt og effektivt.</p>
            <button className="btn btn-green">
              <div>
                <span>Sjekk din skattemelding nå</span>
                <span className="btn-subtext">(Logg inn med BankID)</span>
              </div>
            </button>
          </div>
          <div className="hero-image-wrapper">
            <img src="/hero.png" alt="Smartskatt plattform illustrasjon" />
          </div>
        </div>
      </section>

      <section className="trust-bar text-center">
        <div className="container">
          <p>Allerede hjulpet <strong>15.000+ nordmenn</strong> med å spare <strong>25 mill.+ kroner</strong>.</p>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container">
          <h2 style={{fontSize: '2.8rem', marginBottom: '1.5rem'}}>Hvorfor velge Smartskatt?</h2>
          <p style={{color: 'var(--text-gray)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto'}}>
            Vi gjør det kompliserte enkelt og sørger for at du ikke betaler en krone for mye i skatt.
          </p>
          
          <div className="features-grid">
            <div className="feature-card glass-card">
              <div className="feature-icon"><SearchIcon /></div>
              <h3>Automatisk analyse</h3>
              <p>Vi skanner skattemeldingen din mot gjeldende regelverk.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon"><MoneyIcon /></div>
              <h3>Garantert fradragsfunn</h3>
              <p>Vi finner fradragene du har krav på, men som er vanskelige å finne selv.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon"><SendIcon /></div>
              <h3>Enkel innsending</h3>
              <p>Send inn korrigert skattemelding direkte til Skatteetaten med ett klikk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deduction Wizard */}
      <section className="section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <DeductionWizard />
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container">
          <h2 style={{fontSize: '2.8rem', marginBottom: '1.5rem'}}>Slik fungerer det</h2>
          <p style={{color: 'var(--text-gray)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto'}}>
            Tre enkle steg til en mer optimalisert skattemelding.
          </p>
          
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Logg inn</h3>
              <p>Koble sikkert med BankID.</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Analyser</h3>
              <p>Smartskatt finner dine potensielle besparelser.</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Godkjenn</h3>
              <p>Se over og send inn til Skatteetaten.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container text-center">
          <div className="pricing-card glass-card">
            <h2 className="pricing-title">Enkel og rettferdig prising</h2>
            <div className="pricing-highlight">
              <CheckIcon /> Ingen fradrag funnet = Gratis
            </div>
            <p className="pricing-text">
              Vi tar kun en liten prosentandel av beløpet vi sparer deg. Hvis vi ikke finner noen nye fradrag, betaler du ingenting.
            </p>
          </div>
        </div>
      </section>

      <section className="security-section">
        <div className="container">
          <div className="security-box glass-card">
            <div className="security-icon"><ShieldIcon /></div>
            <div className="security-content">
              <h3>Datasikkerhet i toppklasse</h3>
              <p>Vi bruker BankID for identifisering og dine data er kryptert etter bankstandard. Vi lagrer aldri sensitive opplysninger lenger enn nødvendig.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue cta-bottom">
        <div className="container">
          <h2>Klar for å få mer igjen på skatten?</h2>
          <button className="btn btn-green" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
            <LockIcon /> Kom i gang med Smartskatt nå
          </button>
        </div>
      </section>
    </>
  );
}

function Guides() {
  const articles = [
    { id: 'krypto-fellen', title: 'Krypto-fellen: Slik unngår du baksmell', tag: 'Krypto' },
    { id: 'smb-fradrag', title: 'De glemte fradragene for småbedrifter', tag: 'Bedrift' },
    { id: 'pendler-guide', title: 'Pendler du? Her er 5 fradrag du må kreve', tag: 'Privat' }
  ];

  return (
    <div className="container section-padding">
      <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Skatteguider</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-gray)', marginBottom: '4rem', maxWidth: '700px' }}>
        Les våre eksperttips og lær hvordan du kan maksimere dine fradrag for 2026.
      </p>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        {articles.map(article => (
          <Link key={article.id} to={`/guide/${article.id}`} className="affiliate-box" style={{
            display: 'block', padding: '2.5rem', textDecoration: 'none', color: 'inherit'
          }}>
            <span style={{ background: 'var(--bg-light-blue)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-blue)' }}>{article.tag}</span>
            <h2 style={{ marginTop: '1.5rem', color: 'var(--text-dark)', fontSize: '1.8rem' }}>{article.title}</h2>
            <p style={{ marginTop: '0.8rem', color: 'var(--primary-blue)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Les artikkelen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function GuideArticle() {
  return (
    <div className="container section-padding" style={{ maxWidth: '800px' }}>
      <Link to="/guider" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', color: 'var(--text-gray)', fontWeight: 500 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        Tilbake til guider
      </Link>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Krypto-fellen: Slik unngår du baksmell</h1>
      
      <div style={{ lineHeight: 1.8, fontSize: '1.2rem', color: 'var(--text-dark)' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Nordmenn har investert milliarder i kryptovaluta, men overraskende mange glemmer å rapportere det riktig i skattemeldingen. Dette kan føre til stor baksmell eller til og med straffeskatt fra Skatteetaten.
        </p>
        
        <h3 style={{ fontSize: '1.8rem', margin: '3rem 0 1.5rem', color: 'var(--primary-blue)' }}>De viktigste punktene du må huske:</h3>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem' }}>
          <li style={{ marginBottom: '0.8rem' }}>Hver eneste handel utløser en realisasjon og skal skattlegges.</li>
          <li style={{ marginBottom: '0.8rem' }}>Du har <strong>krav på fradrag</strong> for tap! Mange glemmer dette i nedgangstider.</li>
          <li style={{ marginBottom: '0.8rem' }}>Krypto inngår i formuesgrunnlaget.</li>
        </ul>
        
        <p style={{ marginBottom: '2.5rem' }}>
          Skattemeldingen for krypto er beryktet for å være ekstremt komplisert å fylle ut manuelt, spesielt hvis du har handlet på flere børser.
        </p>

        {/* Smartskatt Anbefaler Boks */}
        <div className="affiliate-box" style={{ borderLeft: '4px solid var(--secondary-green)', padding: '2.5rem', marginTop: '4rem' }}>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontSize: '1.8rem' }}>💡</span> Smartskatt anbefaler
          </h4>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            For å være 100% sikker på at du får med alle fradrag for tap, og for å slippe å regne ut hundrevis av transaksjoner manuelt, anbefaler vi å bruke et spesialisert verktøy.
          </p>
          <a href="#" className="btn btn-green" style={{ background: '#6366f1', textDecoration: 'none', display: 'inline-flex' }}>
            Opprett gratis konto hos Kryptosekken
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav className="container navbar">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20"></path>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          Smartskatt
        </Link>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <Link to="/guider" style={{ color: 'var(--text-dark)', fontWeight: 500, textDecoration: 'none', fontSize: '1.1rem' }}>Skatteguider</Link>
          <a href="#" className="btn" style={{ background: 'var(--bg-light-blue)', color: 'var(--primary-blue)', padding: '0.6rem 1.5rem', fontSize: '1rem' }}>Logg inn</a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guider" element={<Guides />} />
        <Route path="/guide/:id" element={<GuideArticle />} />
      </Routes>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Smartskatt</div>
            <div className="footer-links">
              <Link to="/guider">Skatteguider</Link>
              <a href="#">Om oss</a>
              <a href="#">Kontakt</a>
              <a href="#">Personvern</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Smartskatt AS. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
