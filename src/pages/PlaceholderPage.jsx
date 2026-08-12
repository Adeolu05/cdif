import React from 'react';

export default function PlaceholderPage({ title }) {
  return (
    <div className="editorial-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="display-1" style={{ color: 'var(--cdif-text-heading)', marginBottom: '1.5rem' }}>
          {title}
        </h1>
        <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)' }}>
          This section is currently being developed and will be available soon.
        </p>
      </div>
    </div>
  );
}
