import React from 'react';
import { Target } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="display-1" style={{ color: 'var(--cdif-text-heading)', marginBottom: '1.5rem' }}>
              Our Philosophy
            </h2>
            <p className="body-editorial" style={{ color: 'var(--cdif-text-body)', marginBottom: '1.5rem' }}>
              We believe that sustainable change begins at the family unit. By empowering caregivers with economic tools and youth with modern skills, we break the cycle of poverty from the inside out.
            </p>
            <p className="body-editorial" style={{ color: 'var(--cdif-text-body)' }}>
              True empowerment is not charity; it is capacity development.
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--cdif-bg-subtle)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <div className="icon-container" style={{ backgroundColor: 'var(--cdif-primary)', color: '#fff', width: '48px', height: '48px', marginBottom: '1.5rem' }}>
              <Target size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--cdif-text-heading)', marginBottom: '1rem' }}>Our Mission</h3>
            <p style={{ color: 'var(--cdif-text-body)', lineHeight: 1.6 }}>
              To provide immediate relief and long-term economic enablement to vulnerable families through targeted educational support, food security, and skills training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
