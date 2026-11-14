import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Heart, Search, Menu, X, Phone, Mail } from 'lucide-react';
import { orgDetails } from '../data/cdifData';
import LogoMark from './LogoMark';
import useDialog from '../hooks/useDialog';

const navItems = [
  { to: '/about', label: 'About', mobileLabel: 'About Us' },
  { to: '/programmes', label: 'Programmes', mobileLabel: 'Our Programmes' },
  { to: '/impact', label: 'Impact', mobileLabel: 'Field Impact & Stories' },
  { to: '/mega-ict-island', label: '#MEGA ICT', mobileLabel: '#MEGA ICT ISLAND', featured: true },
  { to: '/get-involved', label: 'Get Involved', mobileLabel: 'Get Involved' },
  { to: '/transparency', label: 'Transparency', mobileLabel: 'Transparency & Governance' },
  { to: '/contact', label: 'Contact', mobileLabel: 'Contact Us & FAQ' }
];

const navLinkClass = (featured) => ({ isActive }) =>
  ['nav-link', isActive && 'active', featured && 'mega-link'].filter(Boolean).join(' ');

export default function Header({ onOpenDonate, onOpenVolunteer, onOpenPartner, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerTop, setDrawerTop] = useState(0);
  const headerRef = useRef(null);
  const closeMenu = () => setMobileMenuOpen(false);
  const drawerRef = useDialog(mobileMenuOpen, closeMenu);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (!mobileMenuOpen) {
      setDrawerTop(headerRef.current.getBoundingClientRect().bottom);
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
          gap: '0.4rem 2rem'
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
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}>
              Featured
            </span>
            <Link to="/mega-ict-island" style={{ opacity: 0.92, fontWeight: 500, color: '#FFFFFF' }}>
              Watch Day 1 of #MEGA ICT ISLAND
            </Link>
          </div>

          <div style={{ display: 'none', alignItems: 'center', gap: '1.2rem' }} className="header-top-contacts">
            {orgDetails.contact.phone && (
              <a href={`tel:${orgDetails.contact.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', opacity: 0.88, color: '#fff' }}>
                <Phone size={11} color="var(--cdif-accent-gold)" aria-hidden="true" />
                <span>{orgDetails.contact.phone}</span>
              </a>
            )}
            <a href={`mailto:${orgDetails.contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', opacity: 0.88, color: '#fff' }}>
              <Mail size={11} color="var(--cdif-accent-gold)" aria-hidden="true" />
              <span>{orgDetails.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Quiet Editorial Navbar */}
      <header ref={headerRef} style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.97)' : 'rgba(250, 246, 252, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled || mobileMenuOpen ? '1px solid var(--cdif-hairline)' : '1px solid transparent',
        transition: 'var(--transition-normal)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          height: '64px'
        }}>
          
          <div className="header-left" style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" aria-label="CDIF home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <LogoMark size={36} />
              <span>
                <span style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'var(--cdif-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1
                }}>
                  CDIF
                </span>
                <span className="logo-subtitle">
                  Initiative for Families
                </span>
              </span>
            </Link>
          </div>

          <nav aria-label="Main" className="desktop-nav">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass(item.featured)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.7rem' }}>
            <button 
              type="button"
              onClick={onOpenSearch} 
              aria-label="Search programmes and stories"
              className="icon-container"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--cdif-bg-subtle)',
                color: 'var(--cdif-text-heading)',
                border: '1px solid var(--cdif-hairline)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              <Search size={16} aria-hidden="true" />
            </button>

            <button 
              type="button"
              onClick={onOpenDonate} 
              className="btn btn-editorial-outline"
              style={{
                padding: '0.5rem 1.1rem',
                fontSize: '0.82rem',
                borderWidth: '1px'
              }}
            >
              <Heart size={13} fill="currentColor" aria-hidden="true" />
              <span>Support CDIF</span>
            </button>

            <button 
              type="button"
              onClick={toggleMenu}
              className="mobile-toggle icon-container"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              style={{
                width: '40px',
                height: '40px',
                color: 'var(--cdif-text-heading)',
                cursor: 'pointer',
                background: 'none',
                border: 'none'
              }}
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer (outside the header: its backdrop-filter would make it the drawer's containing block) */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          tabIndex={-1}
          className="mobile-drawer"
          style={{ top: `${drawerTop}px` }}
        >
          <nav aria-label="Mobile" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <NavLink to="/" end onClick={closeMenu} className={navLinkClass(false)}>Home</NavLink>
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={closeMenu} className={navLinkClass(item.featured)}>
                {item.mobileLabel}
              </NavLink>
            ))}
          </nav>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' }}>
            <button 
              type="button"
              onClick={() => { closeMenu(); onOpenDonate(); }} 
              className="btn btn-editorial-primary" 
              style={{ width: '100%' }}
            >
              <Heart size={14} fill="currentColor" aria-hidden="true" /> Support CDIF
            </button>
            <button 
              type="button"
              onClick={() => { closeMenu(); onOpenPartner(); }} 
              className="btn btn-editorial-outline" 
              style={{ width: '100%' }}
            >
              Partner With Us
            </button>
            <button 
              type="button"
              onClick={() => { closeMenu(); onOpenVolunteer(); }} 
              className="btn btn-editorial-outline" 
              style={{ width: '100%' }}
            >
              Apply to Volunteer
            </button>
          </div>
        </div>
      )}

      <style>{`
        .logo-subtitle {
          display: block;
          font-size: 0.6rem;
          font-weight: 800;
          color: var(--cdif-text-heading);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          white-space: nowrap;
          margin-top: 2px;
        }
        .desktop-nav {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 1.6rem;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--cdif-text-body);
          position: relative;
          padding: 0.3rem 0;
          white-space: nowrap;
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
          color: var(--cdif-primary);
          font-weight: 800;
        }
        .mobile-drawer {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          overflow-y: auto;
          padding: 1.5rem 1.5rem 2rem;
          background-color: var(--cdif-bg-surface);
          animation: fadeIn 0.2s ease-out;
        }
        .mobile-drawer .nav-link {
          display: block;
          padding: 0.55rem 0;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--cdif-text-heading);
          border-bottom: 1px solid var(--cdif-hairline);
        }
        .mobile-drawer .nav-link.active {
          color: var(--cdif-primary);
        }
        .mobile-drawer .nav-link.active::after {
          display: none;
        }
        .mobile-drawer .mega-link {
          color: var(--cdif-primary);
        }
        @media (max-width: 479px) {
          .logo-subtitle { display: none; }
        }
        @media (min-width: 768px) {
          .header-top-contacts { display: flex !important; }
        }
        @media (min-width: 1200px) {
          .header-left { flex: 1; }
          .header-right { flex: 1; }
          .desktop-nav { display: flex; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
