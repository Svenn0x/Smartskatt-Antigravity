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

      <section className="section-padding bg-light text-center">
        <div className="container">
          <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Hvorfor velge Smartskatt?</h2>
          <p style={{color: 'var(--text-gray)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto'}}>
            Vi gjør det kompliserte enkelt og sørger for at du ikke betaler en krone for mye i skatt.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><SearchIcon /></div>
              <h3>Automatisk analyse</h3>
              <p>Vi skanner skattemeldingen din mot gjeldende regelverk.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><MoneyIcon /></div>
              <h3>Garantert fradragsfunn</h3>
              <p>Vi finner fradragene du har krav på, men som er vanskelige å finne selv.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><SendIcon /></div>
              <h3>Enkel innsending</h3>
              <p>Send inn korrigert skattemelding direkte til Skatteetaten med ett klikk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Deduction Wizard */}
      <section className="section-padding" style={{ backgroundColor: '#f0f5fa' }}>
        <div className="container">
          <DeductionWizard />
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container">
          <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Slik fungerer det</h2>
          <p style={{color: 'var(--text-gray)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto'}}>
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

      <section className="section-padding bg-light">
        <div className="container text-center">
          <div className="pricing-card">
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
          <div className="security-box">
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
          <button className="btn btn-green">
            <LockIcon /> Kom i gang med Smartskatt nå
          </button>
        </div>
      </section>
    </>
  );
}

function Guides() {
  const articles = [
    { id: 'krypto-fellen', title: 'Unngå den usynlige krypto-fellen i 2025', tag: 'Krypto' },
    { id: 'smb-fradrag', title: 'De glemte fradragene for småbedrifter', tag: 'Bedrift' },
    { id: 'pendler-guide', title: 'Pendler du? Her er 5 fradrag du må kreve', tag: 'Privat' }
  ];

  return (
    <div className="container section-padding">
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Skatteguider</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-gray)', marginBottom: '3rem' }}>
        Les våre eksperttips og lær hvordan du kan maksimere dine fradrag for 2026.
      </p>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        {articles.map(article => (
          <Link key={article.id} to={`/guide/${article.id}`} style={{
            display: 'block', padding: '2rem', border: '1px solid var(--border-color)', 
            borderRadius: '12px', background: 'white', textDecoration: 'none', color: 'inherit',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'transform 0.2s'
          }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <span style={{ background: 'var(--bg-light-gray)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-blue)' }}>{article.tag}</span>
            <h2 style={{ marginTop: '1rem', color: 'var(--text-dark)' }}>{article.title}</h2>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-gray)' }}>Les artikkelen →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function GuideArticle() {
  return (
    <div className="container section-padding" style={{ maxWidth: '800px' }}>
      <Link to="/guider" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--text-gray)' }}>← Tilbake til guider</Link>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Unngå den usynlige krypto-fellen i 2025</h1>
      
      <div style={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--text-dark)' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Hei! Visste du at formuesskatten for kryptovaluta kan gi deg en skikkelig overraskelse? Mange brenner seg på dette fordi Skatteetatens regler for aksjer og krypto er overraskende forskjellige. La oss se på hva dette betyr for deg.
        </p>
        
        <h3 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem', color: 'var(--text-dark)' }}>Aksjer vs. krypto: Forskjellen som koster</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Når du eier vanlige aksjer eller aksjefond, gir staten deg en såkalt verdsettingsrabatt på 20 %. Det betyr at du kun betaler formuesskatt av 80 % av det aksjene dine faktisk er verdt.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          For kryptovaluta finnes det derimot <strong>ingen slik rabatt</strong>. Kryptoen din verdsettes til 100 % av markedsverdien den 31. desember. Har du krypto for én million kroner, skattlegges hele millionen som formue, mens for aksjer ville kun 800 000 kroner blitt regnet med. Denne usynlige fellen gjør at kryptoporteføljen din spiser mer av fribeløpet ditt enn du kanskje tror!
        </p>

        <h3 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem', color: 'var(--primary-blue)' }}>3 ting du må sjekke før 30. april:</h3>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.75rem' }}><strong>Sjekk markedsverdien:</strong> Stemmer verdien av all kryptoen din per 31. desember med det som står i skattemeldingen?</li>
          <li style={{ marginBottom: '0.75rem' }}><strong>Krev fradrag for tap:</strong> Har du solgt krypto med tap i løpet av året? Da har du rett på fradrag, akkurat som du må skatte av gevinst. Mange glemmer dette!</li>
          <li style={{ marginBottom: '0.75rem' }}><strong>Få kontroll på transaksjonene:</strong> Pass på at flytting mellom egne kontoer (wallets) ikke feilaktig står oppført som et skattepliktig salg.</li>
        </ul>

        {/* Smartskatt Anbefaler Boks */}
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderLeft: '4px solid var(--secondary-green)', padding: '2rem', borderRadius: '0 12px 12px 0', marginTop: '3rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dark)' }}>
            <span style={{ fontSize: '1.5rem' }}>💡</span> Smartskatt anbefaler: Bruk Kryptosekken for å få 22% fradrag på selve skatteverktøyet.
          </h4>
          <p style={{ marginBottom: '1.5rem' }}>
            Å regne ut krypto-skatten manuelt er et mareritt. Når du kjøper tilgang til Kryptosekken for å la dem gjøre jobben for deg, er selve kostnaden for verktøyet fradragsberettiget.
          </p>
          <a href="#" className="btn btn-green" style={{ background: 'var(--primary-blue)', textDecoration: 'none' }}>
            Sjekk ut Kryptosekken
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
          <img src="/logo.png" alt="Smartskatt logo" width="32" height="32" style={{ marginRight: '8px' }} />
          Smartskatt
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/guider" style={{ color: 'var(--text-dark)', fontWeight: 500, textDecoration: 'none' }}>Skatteguider</Link>
          <a href="#" style={{ fontWeight: 600, color: 'var(--primary-blue)', textDecoration: 'none' }}>Logg inn</a>
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
            <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="/logo.png" alt="Smartskatt logo" width="32" height="32" />
              Smartskatt
            </div>
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
