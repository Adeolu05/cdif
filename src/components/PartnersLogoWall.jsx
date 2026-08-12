import React from 'react';
import { Building } from 'lucide-react';

export default function PartnersLogoWall({ onOpenPartner }) {
  return (
    <section className="section-padding" style={{ backgroundColor: '#fff', borderTop: '1px solid var(--cdif-hairline-strong)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--cdif-text-muted)', marginBottom: '3rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Our Institutional Partners
        </h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.6, marginBottom: '3rem' }}>
          {/* Dummy placeholders for partner logos */}
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cdif-text-muted)' }}>Tech4Dev</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cdif-text-muted)' }}>Lagos State Govt</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cdif-text-muted)' }}>FoodBank NG</div>
        </div>

        <button onClick={onOpenPartner} className="btn btn-editorial-outline">
          Become a Partner
        </button>
      </div>
    </section>
  );
}
