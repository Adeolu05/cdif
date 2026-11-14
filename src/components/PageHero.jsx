import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PageHero({ eyebrow, title, intro, backLink, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-inner">
          {backLink && (
            <Link to={backLink.to} className="page-hero-back">
              <ArrowLeft size={16} aria-hidden="true" /> {backLink.label}
            </Link>
          )}
          {eyebrow && <div className="eyebrow eyebrow-accent">{eyebrow}</div>}
          <h1 className="display-1">{title}</h1>
          {intro && <p className="body-editorial-large">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
