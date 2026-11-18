import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, Search, Building, Copy, Handshake } from 'lucide-react';
import { coreProgrammes, successStories, fieldMedia, orgDetails } from '../data/cdifData';
import useDialog from '../hooks/useDialog';

/* Generic Base Modal Overlay */
function ModalBase({ isOpen, onClose, title, children }) {
  const dialogRef = useDialog(isOpen, onClose);
  const titleId = useId();

  if (!isOpen) return null;

  return (
    <div
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--cdif-overlay)',
        backdropFilter: 'blur(12px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.2s ease-out'
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        className="modal-panel"
      >
        <button 
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="icon-container"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--cdif-bg-subtle)',
            color: 'var(--cdif-text-heading)',
            cursor: 'pointer',
            border: 'none',
            transition: 'var(--transition-fast)'
          }}
        >
          <X size={22} aria-hidden="true" />
        </button>

        {title && (
          <h2 id={titleId} style={{
            fontSize: '1.65rem',
            color: 'var(--cdif-text-heading)',
            marginBottom: '1.5rem',
            paddingRight: '3rem',
            lineHeight: 1.2,
            fontWeight: 800
          }}>
            {title}
          </h2>
        )}

        {children}
      </div>
      <style>{`
        .modal-panel {
          position: relative;
          width: 100%;
          max-width: 620px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2.5rem 1.5rem 2rem;
          border-radius: var(--radius-lg);
          background-color: var(--cdif-bg-surface);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .modal-panel:focus { outline: none; }
        @media (min-width: 576px) {
          .modal-panel { padding: 3rem 2.5rem; }
        }
      `}</style>
    </div>
  );
}

/* Corporate Partner Modal */
export function PartnerModal({ isOpen, onClose }) {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title="Initiate Corporate Partnership">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <p style={{ fontSize: '1rem', color: 'var(--cdif-text-body)', lineHeight: 1.6 }}>
          We collaborate with forward-thinking organisations to execute high-impact CSR initiatives. From sponsoring our #MEGA ICT Bootcamp to co-funding community drives, let's align our values.
        </p>

        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--cdif-bg-subtle)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start'
        }}>
          <div className="icon-container" style={{ color: 'var(--cdif-primary)' }}>
            <Building size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--cdif-text-heading)', marginBottom: '0.5rem' }}>
              Institutional Proposals
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--cdif-text-body)', marginBottom: 0 }}>
              To ensure your proposal reaches the correct desk, please email our partnerships team directly with a brief outline of your intended scope and objectives.
            </p>
          </div>
        </div>

        <a 
          href={`mailto:${orgDetails.contact.partnershipsEmail || orgDetails.contact.email}?subject=Corporate%20Partnership%20Inquiry`}
          className="btn btn-editorial-gold" 
          style={{ width: '100%', marginTop: '0.5rem' }}
        >
          <Handshake size={16} />
          <span>Email Partnerships Desk</span>
        </a>
      </div>
    </ModalBase>
  );
}

/* 3. Donate / Direct Support Modal */
export function DonateModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState('');
  const bank = orgDetails.bankDetails;
  const bankLive = Boolean(bank.verified && bank.accountNumber);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    } catch {
      setCopied('');
    }
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title="Support CDIF's Work">
      <div>
        <p style={{ fontSize: '1rem', color: 'var(--cdif-text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Your donation funds food drives, school kits, and livelihood tools for caregivers. Bank details appear here only after CDIF verifies them.
        </p>

        {bankLive ? (
          <div style={{
            padding: '1.2rem',
            backgroundColor: 'var(--cdif-bg-subtle)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2rem',
            borderLeft: '4px solid var(--cdif-primary)'
          }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--cdif-primary)', marginBottom: '1.2rem' }}>
              Direct Bank Transfer
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', fontWeight: 600 }}>Account Name</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--cdif-text-heading)' }}>{bank.accountName}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', fontWeight: 600 }}>Account Number</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--cdif-primary)', letterSpacing: '1px' }}>{bank.accountNumber}</div>
                </div>
                <button 
                  type="button"
                  onClick={() => handleCopy(bank.accountNumber, 'accountNumber')}
                  className="btn btn-editorial-outline" 
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  {copied === 'accountNumber' ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
                </button>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', fontWeight: 600 }}>Bank</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--cdif-text-heading)' }}>{bank.bankName}</div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{
            padding: '1.2rem',
            backgroundColor: 'var(--cdif-bg-subtle)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2rem',
            borderLeft: '4px solid var(--cdif-accent-gold)'
          }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--cdif-primary)', marginBottom: '0.6rem' }}>
              Transfer details coming next
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--cdif-text-body)', margin: 0 }}>
              Email us and we will send verified account details.
            </p>
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <a href={`mailto:${orgDetails.contact.email}?subject=Donation%20enquiry`} className="btn btn-editorial-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
            Email a donation enquiry
          </a>
        </div>
      </div>
    </ModalBase>
  );
}

export function VideoModal({ isOpen, onClose, videoSrc, videoTitle }) {
  if (!videoSrc) return (
    <ModalBase isOpen={isOpen} onClose={onClose} title={videoTitle || 'Field video'}>
      <p style={{ color: 'var(--cdif-text-muted)' }}>This clip is not available yet.</p>
    </ModalBase>
  );

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title={videoTitle}>
      <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: '#000', border: '2px solid rgba(245, 184, 0, 0.4)' }}>
        <video 
          src={videoSrc}
          controls
          autoPlay={isOpen}
          playsInline
          style={{ width: '100%', maxHeight: '75vh', display: 'block' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </ModalBase>
  );
}

export function CertificateViewerModal({ isOpen, onClose }) {
  if (!fieldMedia.certificate) return null;

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title="Certificate of Incorporation">
      <div style={{ backgroundColor: '#fff', borderRadius: 'var(--radius-md)', padding: '0.5rem', border: '1px solid var(--cdif-hairline-strong)' }}>
        <img 
          src={fieldMedia.certificate} 
          alt="CAC Certificate of Incorporation" 
          style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-sm)' }} 
        />
      </div>
    </ModalBase>
  );
}

export function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const close = () => {
    setQuery('');
    onClose();
  };
  const dialogRef = useDialog(isOpen, close);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();
  const filteredProgs = coreProgrammes.filter(p => p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q));
  const filteredStories = successStories.filter(s => s.caregiverName.toLowerCase().includes(q) || s.programme.toLowerCase().includes(q));

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(28, 11, 37, 0.97)',
        backdropFilter: 'blur(16px)',
        zIndex: 3000,
        padding: '2rem 1.5rem',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '100%', maxWidth: '720px', display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
        <button type="button" onClick={close} aria-label="Close search" className="icon-container" style={{ width: '44px', height: '44px', color: '#fff', cursor: 'pointer', background: 'none', border: 'none' }}>
          <X size={32} aria-hidden="true" />
        </button>
      </div>

      <div style={{ width: '100%', maxWidth: '720px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          borderBottom: '2px solid var(--cdif-primary)',
          paddingBottom: '0.8rem',
          marginBottom: '2rem'
        }}>
          <Search size={28} color="var(--cdif-accent-gold)" aria-hidden="true" />
          <input 
            type="search"
            data-autofocus
            aria-label="Search programmes and stories"
            placeholder="Search programmes or stories"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '1.5rem',
              outline: 'none'
            }}
          />
        </div>

        {q && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxHeight: '60vh', overflowY: 'auto' }}>
            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--cdif-accent-gold)', marginBottom: '0.8rem', fontWeight: 700 }}>
                Programmes ({filteredProgs.length})
              </div>
              {filteredProgs.map(p => (
                <Link
                  key={p.id}
                  to={`/programmes/${p.id}`}
                  onClick={close}
                  style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', marginBottom: '0.5rem', display: 'block', color: '#fff', textDecoration: 'none' }}
                >
                  <div style={{ fontWeight: 700 }}>{p.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{p.subtitle}</div>
                </Link>
              ))}
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--cdif-accent-gold)', marginBottom: '0.8rem', fontWeight: 700 }}>
                Stories ({filteredStories.length})
              </div>
              {filteredStories.map(s => (
                <Link
                  key={s.id}
                  to="/impact"
                  onClick={close}
                  style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', marginBottom: '0.5rem', display: 'block', color: '#fff', textDecoration: 'none' }}
                >
                  <div style={{ fontWeight: 700 }}>{s.caregiverName}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{s.programme}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
