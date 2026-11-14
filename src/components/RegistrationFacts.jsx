import { BadgeCheck, Receipt, CalendarCheck } from 'lucide-react';
import { orgDetails } from '../data/cdifData';

const facts = [
  { icon: BadgeCheck, label: 'CAC Registration', value: `CAC/IT/${orgDetails.registration.number}` },
  { icon: Receipt, label: 'Tax ID (TIN)', value: orgDetails.registration.tin },
  { icon: CalendarCheck, label: 'Incorporated', value: orgDetails.registration.date }
];

export default function RegistrationFacts() {
  return (
    <dl className="grid-3 registration-facts">
      {facts.map(({ icon: Icon, label, value }) => (
        <div key={label} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="icon-badge" aria-hidden="true">
            <Icon size={22} />
          </span>
          <div style={{ minWidth: 0 }}>
            <dt style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--cdif-text-muted)' }}>
              {label}
            </dt>
            <dd style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--cdif-text-heading)', overflowWrap: 'anywhere' }}>
              {value}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
