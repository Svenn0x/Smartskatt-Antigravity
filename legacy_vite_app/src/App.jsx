import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const Guides = lazy(() => import('./pages/Guides'));
const GuideArticle = lazy(() => import('./pages/GuideArticle'));

function App() {
  return (
    <BrowserRouter>
      <nav className="container navbar">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <img src="/logo.webp" alt="Smartskatt logo" width="160" height="40" loading="eager" fetchpriority="high" style={{ objectFit: 'contain' }} />
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/guider" style={{ color: 'var(--text-dark)', fontWeight: 500, textDecoration: 'none' }}>Skatteguider</Link>
          <a href="#" style={{ fontWeight: 600, color: 'var(--primary-blue)', textDecoration: 'none' }}>Logg inn</a>
        </div>
      </nav>

      <Suspense fallback={<div style={{textAlign: 'center', padding: '4rem'}}>Laster side...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guider" element={<Guides />} />
          <Route path="/guide/:id" element={<GuideArticle />} />
        </Routes>
      </Suspense>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo.webp" alt="Smartskatt logo" width="160" height="40" loading="lazy" style={{ objectFit: 'contain' }} />
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
