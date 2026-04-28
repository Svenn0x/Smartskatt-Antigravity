import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GuidesComponent() {
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
