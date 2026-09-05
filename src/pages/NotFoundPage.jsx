import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="editorial-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <div className="eyebrow eyebrow-gold">Page not found</div>
        <h1 className="display-1" style={{ marginBottom: '1.5rem' }}>
          This path is not on the site.
        </h1>
        <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)', marginBottom: '2rem' }}>
          The address may be mistyped, or the page has moved.
        </p>
        <Link to="/" className="btn btn-editorial-primary">
          Back to home
        </Link>
      </div>
    </div>
  );
}
