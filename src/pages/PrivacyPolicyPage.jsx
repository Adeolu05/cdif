import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { orgDetails } from '../data/cdifData';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';

export default function PrivacyPolicyPage() {
  usePageMeta('Privacy Policy', 'What this website does with personal information, and how to contact CDIF about it.');

  return (
    <div>
      <PageHero
        eyebrow={<><ShieldCheck size={16} aria-hidden="true" /> Legal & Privacy</>}
        title="Privacy Policy"
        intro="This notice describes the only personal information this website handles."
      />

      <section className="editorial-section section-surface">
        <div className="container">
          <div className="policy-copy">
            <h2>Who we are</h2>
            <p>
              {orgDetails.name} ({orgDetails.shortName}) is a community-based non-governmental organisation registered with the Corporate Affairs Commission (CAC/IT/{orgDetails.registration.number}). The public website is <a href="https://cdifnigeria.org">cdifnigeria.org</a>. Questions about this notice go to <a href={`mailto:${orgDetails.contact.email}`}>{orgDetails.contact.email}</a>.
            </p>

            <h2>What this site collects</h2>
            <p>
              The site has no accounts, donation forms, or comment boxes. It does not use advertising or analytics cookies. An email link opens the mail app on your own device. If you write to us, we receive the address you send from and whatever you choose to put in the message.
            </p>

            <h2>Hosting</h2>
            <p>
              The site is hosted by Vercel. Delivering a page may involve technical information such as an IP address. CDIF does not use that information to identify visitors.
            </p>

            <h2>Photographs</h2>
            <p>
              Photographs are published to show CDIF's work. If you appear in a photograph, or you are the parent or caregiver of a child who does, email {orgDetails.contact.email} and ask us to take it down.
            </p>

            <h2>Children</h2>
            <p>
              This website does not ask children to send personal information. Our commitment to children in CDIF's programmes is on the <Link to="/safeguarding">child safeguarding</Link> page.
            </p>

            <h2>Sharing and keeping messages</h2>
            <p>
              We do not sell personal information. We keep an email for as long as we need it to reply and to keep a record of the enquiry. You can ask us to delete it by writing to the same address.
            </p>

            <h2>Your requests</h2>
            <p>
              You may ask what information we hold from your emails, ask us to correct it, or ask us to delete it, by emailing {orgDetails.contact.email}. You may also contact the Nigeria Data Protection Commission.
            </p>

            <p className="policy-updated">Updated 18 November 2026.</p>
          </div>
        </div>
      </section>

      <style>{`
        .policy-copy {
          max-width: 760px;
        }
        .policy-copy h2 {
          font-size: 1.45rem;
          margin: 2rem 0 0.75rem;
        }
        .policy-copy h2:first-child {
          margin-top: 0;
        }
        .policy-copy p {
          color: var(--cdif-text-muted);
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }
        .policy-copy a {
          color: var(--cdif-primary);
          font-weight: 700;
          text-underline-offset: 3px;
        }
        .policy-updated {
          margin-top: 2rem;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
