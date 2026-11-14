import React from 'react';
import PageHero from '../components/PageHero';
import ProgrammeList from '../components/ProgrammeList';
import MegaIctFeature from '../components/MegaIctFeature';
import usePageMeta from '../hooks/usePageMeta';

export default function ProgrammesPage() {
  usePageMeta('Our Programmes', 'Food and educational support, caregiver economic empowerment, and youth skills development for vulnerable families.');

  return (
    <div>
      <PageHero
        eyebrow="Our Programmes"
        title={<>Interventions that <span style={{ color: 'var(--cdif-primary)' }}>Create Lasting Impact.</span></>}
        intro="From quarterly food support to long-term economic empowerment, our programmes are designed to build resilience in vulnerable households."
      />

      <section className="editorial-section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <ProgrammeList headingLevel="h2" />
        </div>
      </section>

      <MegaIctFeature />
    </div>
  );
}
