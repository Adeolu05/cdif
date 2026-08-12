import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Heart, Search, Menu, X, Phone, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { orgDetails } from '../data/cdifData';

export default function Header({ onOpenDonate, onOpenVolunteer, onOpenPartner, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Micro Announcement Bar */}
      <div style={{
        backgroundColor: 'var(--cdif-bg-midnight)',
        color: '#FFFFFF',
        padding: '0.4rem 1rem',
        fontSize: '0.78rem',
        borderBottom: '1px solid rgba(245, 184, 0, 0.2)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{
              backgroundColor: 'var(--cdif-accent-gold)',
              color: 'var(--cdif-bg-midnight)',
              padding: '0.1rem 0.6rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: 800,
              fontSize: '0.68rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              FEATURED DISPATCH
            </span>
            <Link to="/mega-ict-island" style={{ opacity: 0.92, fontWeight: 500, color: '#FFFFFF', textDecoration: 'none' }}>
              #MEGA ICT ISLAND: Day 1 ICT Training Section Sponsored by CDIF
            </Link>
          </div>

          <div style={{ display: 'none', alignItems: 'center', gap: '1.2rem' }} className="header-top-contacts">
            <a href={`tel:${orgDetails.contact.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', opacity: 0.88, color: '#fff', textDecoration: 'none' }}>
              <Phone size={11} color="var(--cdif-accent-gold)" />
              <span>{orgDetails.contact.phone}</span>
            </a>
            <a href={`mailto:${orgDetails.contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', opacity: 0.88, color: '#fff', textDecoration: 'none' }}>
              <Mail size={11} color="var(--cdif-accent-gold)" />
              <span>{orgDetails.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Quiet Editorial Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.97)' : 'rgba(250, 246, 252, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid var(--cdif-hairline)' : '1px solid transparent',
        transition: 'var(--transition-normal)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px'
        }}>
          
          {/* Logo Area (Left Aligned, Flex 1 on desktop) */}
          <div className="header-left" style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--cdif-primary)',
                border: '1.5px solid var(--cdif-accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 4px 10px rgba(106, 27, 110, 0.2)',
                flexShrink: 0
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--cdif-accent-gold)"/>
                  <circle cx="12" cy="10" r="2.5" fill="#fff" />
                </svg>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  color: 'var(--cdif-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1
                }}>
                  CDIF
                </div>
                <div style={{
                  fontSize: '0.6rem',
                  fontWeight: 800,
                  color: 'var(--cdif-text-heading)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginTop: '2px'
                }}>
                  Initiative for Families
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links (Centered) */}
          <nav style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.8rem'
          }} className="desktop-nav">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
            <NavLink to="/programmes" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Programmes</NavLink>
            <NavLink to="/impact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Impact</NavLink>
            
            <NavLink to="/mega-ict-island" className={({ isActive }) => isActive ? 'nav-link active mega-link' : 'nav-link mega-link'}>#MEGA ICT</NavLink>
            <NavLink to="/get-involved" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Get Involved</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
          </nav>

          {/* Action Area (Right Aligned, Flex 1 on desktop) */}
          <div className="header-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.8rem' }}>
            <button 
              onClick={onOpenSearch} 
              aria-label="Search platform"
              className="icon-container"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--cdif-bg-subtle)',
                color: 'var(--cdif-text-heading)',
                border: '1px solid var(--cdif-hairline)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              <Search size={15} />
            </button>

            <button 
              onClick={onOpenDonate} 
              className="btn btn-editorial-outline desktop-btn"
              style={{
                padding: '0.45rem 1.15rem',
                fontSize: '0.82rem',
                borderWidth: '1px'
              }}
            >
              <Heart size={13} fill="currentColor" />
              <span>Support CDIF</span>
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle icon-container"
              aria-label="Toggle navigation drawer"
              style={{
                width: '36px',
                height: '36px',
                color: 'var(--cdif-text-heading)',
                cursor: 'pointer',
                background: 'none',
                border: 'none'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 68px)',
            backgroundColor: 'var(--cdif-bg-surface)',
            zIndex: 999,
            padding: '2.5rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-medium)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', fontSize: '1.15rem', fontWeight: 700 }}>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link to="/programmes" onClick={() => setMobileMenuOpen(false)}>Our Programmes</Link>
              <Link to="/impact" onClick={() => setMobileMenuOpen(false)}>Field Impact & Stories</Link>
              <Link to="/mega-ict-island" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--cdif-primary)' }}>#MEGA ICT ISLAND</Link>
              <Link to="/get-involved" onClick={() => setMobileMenuOpen(false)}>Get Involved</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us & FAQ</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '2rem' }}>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenPartner(); }} 
                className="btn btn-editorial-outline" 
                style={{ width: '100%' }}
              >
                Partner With Us
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenVolunteer(); }} 
                className="btn btn-editorial-primary" 
                style={{ width: '100%' }}
              >
                Apply to Volunteer
              </button>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .nav-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--cdif-text-body);
          position: relative;
          padding: 0.3rem 0;
          text-decoration: none;
          transition: var(--transition-fast);
        }
        .nav-link:hover, .nav-link.active {
          color: var(--cdif-primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--cdif-accent-gold);
          border-radius: 2px;
        }
        .mega-link {
          color: var(--cdif-primary) !important;
          font-weight: 800 !important;
        }
        @media (min-width: 768px) {
          .header-top-contacts { display: flex !important; }
        }
        @media (min-width: 992px) {
          .header-left { flex: 1; }
          .header-right { flex: 1; }
          .desktop-nav { display: flex !important; }
          .desktop-btn { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}

