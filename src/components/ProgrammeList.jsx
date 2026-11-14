import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { coreProgrammes } from '../data/cdifData';

function ProgrammeCards({ Heading }) {
  return (
    <div className="grid-3">
      {coreProgrammes.map((prog, idx) => (
        <Link key={prog.id} to={`/programmes/${prog.id}`} className="card card-link reveal" aria-label={`${prog.title}: learn more`}>
          <div className="media-frame ratio-4-3">
            <img src={prog.image} alt="" loading="lazy" decoding="async" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '1.75rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.6rem' }}>
              0{idx + 1} — {prog.category}
            </div>
            <Heading style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              {prog.title}
            </Heading>
            <p className="line-clamp-3" style={{ color: 'var(--cdif-text-muted)', marginBottom: '1.5rem' }}>
              {prog.overview}
            </p>
            <span className="text-link" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
              Learn more <ArrowRight size={16} aria-hidden="true" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ProgrammeRows({ Heading }) {
  return (
    <div className="editorial-rows">
      {coreProgrammes.map((prog, idx) => {
        const imageFirst = idx % 2 === 0;
        return (
          <article key={prog.id} className="editorial-two-col reveal">
            <div className="media-frame ratio-4-3" style={{ order: imageFirst ? 1 : 2 }}>
              <img src={prog.image} alt={prog.title} loading="lazy" decoding="async" />
            </div>

            <div style={{ order: imageFirst ? 2 : 1 }}>
              <div className="eyebrow">
                0{idx + 1} — {prog.category}
              </div>
              <Heading className="display-3" style={{ marginBottom: '1.25rem' }}>
                {prog.title}
              </Heading>
              <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)', marginBottom: '2rem' }}>
                {prog.overview}
              </p>
              <Link to={`/programmes/${prog.id}`} className="text-link">
                Read Full Story <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function ProgrammeList({ headingLevel = 'h3', variant = 'rows' }) {
  const Heading = headingLevel;
  return variant === 'cards' ? <ProgrammeCards Heading={Heading} /> : <ProgrammeRows Heading={Heading} />;
}
