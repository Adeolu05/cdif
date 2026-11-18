import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { orgDetails } from '../data/cdifData';
import LogoMark from './LogoMark';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About CDIF' },
  { to: '/programmes', label: 'Our Programmes' },
  { to: '/mega-ict-island', label: '#MEGA ICT ISLAND', featured: true },
  { to: '/impact', label: 'Field Impact & Stories' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/transparency', label: 'Transparency & Governance' },
  { to: '/contact', label: 'Contact Us & FAQ' }
];

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--cdif-bg-midnight)',
      color: '#FFFFFF',
      paddingTop: '4.5rem',
      paddingBottom: '3rem',
      position: 'relative'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.4rem' }}>
              <LogoMark size={46} />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>
                  CDIF
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--cdif-accent-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>
                  {orgDetails.motto}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {orgDetails.tagline}
            </p>

            <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5 }}>
              {orgDetails.registration.fullText}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="footer-heading">Navigation</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={link.featured ? 'footer-link footer-link-featured' : 'footer-link'}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer-heading">Field Operations</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              {orgDetails.contact.address && (
                <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                  <MapPin size={16} color="var(--cdif-accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                  <span style={{ lineHeight: 1.5 }}>{orgDetails.contact.address}</span>
                </div>
              )}
              {orgDetails.contact.phone && (
                <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                  <Phone size={16} color="var(--cdif-accent-gold)" style={{ flexShrink: 0 }} aria-hidden="true" />
                  <a href={`tel:${orgDetails.contact.phone}`} className="footer-link">{orgDetails.contact.phone}</a>
                </div>
              )}
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={16} color="var(--cdif-accent-gold)" style={{ flexShrink: 0 }} aria-hidden="true" />
                <a href={`mailto:${orgDetails.contact.email}`} className="footer-link">{orgDetails.contact.email}</a>
              </div>
            </div>
          </div>

        </div>

        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.12)', marginBottom: '2rem' }} />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'rgba(255,255,255,0.65)'
        }}>
          <div>
            © {new Date().getFullYear()} {orgDetails.name}. All rights reserved. Registered NGO CAC/IT/{orgDetails.registration.number}.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/transparency" className="footer-policy-link">Transparency & Governance</Link>
            <Link to="/safeguarding" className="footer-policy-link">Child Safeguarding</Link>
            <Link to="/privacy-policy" className="footer-policy-link">Privacy Policy</Link>
          </div>
        </div>

      </div>

      <style>{`
        .footer-heading {
          font-size: 1rem;
          color: var(--cdif-accent-gold);
          margin-bottom: 1.4rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
        }
        .footer-link {
          color: rgba(255, 255, 255, 0.85);
          transition: var(--transition-fast);
        }
        .footer-link-featured {
          color: var(--cdif-accent-gold);
          font-weight: 800;
        }
        .footer-policy-link {
          color: rgba(255, 255, 255, 0.65);
          transition: var(--transition-fast);
        }
        .footer-link:hover,
        .footer-policy-link:hover {
          color: var(--cdif-accent-gold);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
      `}</style>
    </footer>
  );
}
