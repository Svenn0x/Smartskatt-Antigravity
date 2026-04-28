import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const DeductionWizard = lazy(() => import('../components/DeductionWizard'));

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

export default function Home() {
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
            <img src="/hero.webp" alt="Smartskatt plattform illustrasjon" width="800" height="600" loading="eager" fetchpriority="high" />
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
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Laster veiviser...</div>}>
            <DeductionWizard />
          </Suspense>
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
