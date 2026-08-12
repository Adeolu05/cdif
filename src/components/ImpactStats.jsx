import React from 'react';
import { Target, Users, BookOpen, HandHeart } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    { icon: <Users size={24} />, number: '5,000+', label: 'Families Supported' },
    { icon: <HandHeart size={24} />, number: '12,000+', label: 'Meals Provided' },
    { icon: <BookOpen size={24} />, number: '1,200+', label: 'Educational Kits' },
    { icon: <Target size={24} />, number: '4', label: 'Active Programmes' }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--cdif-primary)', color: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="icon-container" style={{ width: '64px', height: '64px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--cdif-accent-gold)', marginBottom: '1.5rem' }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{stat.number}</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
