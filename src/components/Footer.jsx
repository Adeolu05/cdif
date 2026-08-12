import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { orgDetails } from '../data/cdifData';

export default function Footer({ onOpenPartner, onOpenVolunteer }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--cdif-bg-midnight)',
      color: '#FFFFFF',
      paddingTop: '5.5rem',
      paddingBottom: '3rem',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3.5rem',
          marginBottom: '4.5rem'
        }}>
          
          {/* Column 1: Brand Profile */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.4rem' }}>
              <div className="icon-container" style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'var(--cdif-primary)',
                border: '2px solid var(--cdif-accent-gold)',
                color: '#fff',
                boxShadow: '0 4px 14px rgba(106, 27, 110, 0.4)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--cdif-accent-gold)"/>
                  <circle cx="12" cy="10" r="2.5" fill="#fff" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>
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

            <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.58)', lineHeight: 1.5 }}>
              {orgDetails.registration.fullText}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--cdif-accent-gold)', marginBottom: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>About CDIF</Link></li>
              <li><Link to="/programmes" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Our Programmes</Link></li>
              <li><Link to="/mega-ict-island" style={{ color: 'var(--cdif-accent-gold)', fontWeight: 800, textDecoration: 'none' }}>#MEGA ICT ISLAND</Link></li>
              <li><Link to="/impact" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Field Impact & Metrics</Link></li>
              <li><Link to="/get-involved" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Get Involved</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Contact Us & FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Field Offices & Contact */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--cdif-accent-gold)', marginBottom: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>
              Field Operations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--cdif-accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ lineHeight: 1.5 }}>{orgDetails.contact.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={16} color="var(--cdif-accent-gold)" style={{ flexShrink: 0 }} />
                <a href={`tel:${orgDetails.contact.phone}`} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{orgDetails.contact.phone}</a>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={16} color="var(--cdif-accent-gold)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${orgDetails.contact.email}`} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{orgDetails.contact.email}</a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--cdif-accent-gold)', marginBottom: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>
              Field Dispatch
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.55, marginBottom: '1.2rem' }}>
              Subscribe to quarterly field reports, caregiver success stories, and verified impact statistics.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input 
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <button 
                type="submit" 
                className="btn btn-editorial-gold"
                style={{ padding: '0.75rem 1rem', fontSize: '0.88rem', width: '100%' }}
              >
                {subscribed ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}>
                    <Check size={16} /> Subscribed to Field Dispatch
                  </span>
                ) : (
                  <span>Subscribe to Dispatch</span>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.12)', marginBottom: '2rem' }} />

        {/* Bottom Copyright & Rights */}
        <div style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'rgba(255,255,255,0.6)'
        }}>
          <div>
            © {new Date().getFullYear()} {orgDetails.name}. All rights reserved. Registered NGO CAC/IT/8601968.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/transparency" className="footer-policy-link">Child Safeguarding Policy</Link>
            <Link to="/transparency" className="footer-policy-link">Financial Accountability</Link>
            <Link to="/placeholder" className="footer-policy-link">Privacy Policy</Link>
          </div>
        </div>

      </div>

      <style>{`
        .footer-policy-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: var(--transition-fast);
        }
        .footer-policy-link:hover {
          color: var(--cdif-accent-gold);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
      `}</style>
    </footer>
  );
}

