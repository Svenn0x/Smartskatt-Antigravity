import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GuideArticleComponent() {
  const [showFacade, setShowFacade] = useState(true);

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

        {/* Third-Party Facade Example for Chatbot / Heavy Widget */}
        <div style={{ marginTop: '4rem', padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'var(--bg-light-gray)', textAlign: 'center' }}>
          {showFacade ? (
            <div onClick={() => setShowFacade(false)} style={{ cursor: 'pointer', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Trenger du hjelp med krypto-skatten?</h4>
              <p style={{ color: 'var(--text-gray)', marginBottom: '1rem' }}>Klikk her for å starte chat med vår AI-skatteassistent.</p>
              <button className="btn btn-green" style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>Start Chat</button>
            </div>
          ) : (
            <div style={{ padding: '2rem' }}>
              <p style={{ color: 'var(--text-gray)', fontStyle: 'italic' }}>Laster inn tung tredjeparts chat-klient...</p>
              {/* Simulated heavy script load would happen here */}
            </div>
          )}
        </div>

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
