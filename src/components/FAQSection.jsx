import React, { useState } from 'react';
import { faqs } from '../data/cdifData';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--cdif-bg-surface)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="display-3" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--cdif-text-heading)' }}>
          Frequently Asked Questions
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                style={{ 
                  border: '1px solid var(--cdif-hairline-strong)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: '#fff'
                }}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{ 
                    width: '100%', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--cdif-text-heading)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    textAlign: 'left'
                  }}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                      color: 'var(--cdif-primary)'
                    }} 
                  />
                </button>
                {isOpen && (
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--cdif-text-body)', lineHeight: 1.6 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
