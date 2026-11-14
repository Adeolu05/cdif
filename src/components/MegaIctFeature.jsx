import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { megaIctIslandData } from '../data/cdifData';

function PosterWithPlayBadge({ label }) {
  return (
    <>
      <img src={megaIctIslandData.posterImage} alt="" loading="lazy" decoding="async" />
      <span className="mega-poster-shade" aria-hidden="true" />
      <span className="mega-play" aria-hidden="true">
        <Play size={30} fill="currentColor" style={{ marginLeft: '4px' }} />
      </span>
      <span className="mega-poster-chip" aria-hidden="true">{label}</span>
    </>
  );
}

/* With onPlay the poster opens the video; without it the poster links to the initiative page. */
export default function MegaIctFeature({ onPlay }) {
  return (
    <section className="editorial-section section-dark">
      <div className="container">
        <div className="editorial-two-col reveal">
          {onPlay ? (
            <button type="button" onClick={onPlay} aria-label="Play the #MEGA ICT ISLAND Day 1 video" className="media-frame ratio-16-9 mega-poster">
              <PosterWithPlayBadge label="Watch Day 1" />
            </button>
          ) : (
            <Link to="/mega-ict-island" aria-label="Explore #MEGA ICT ISLAND" className="media-frame ratio-16-9 mega-poster">
              <PosterWithPlayBadge label="Day 1 footage" />
            </Link>
          )}

          <div>
            <div className="eyebrow eyebrow-gold">Signature Initiative</div>
            <h2 className="display-2" style={{ marginBottom: '1.5rem' }}>
              {megaIctIslandData.hashtag}
            </h2>
            <p className="body-editorial-large" style={{ marginBottom: '2rem' }}>
              {megaIctIslandData.description}
            </p>

            <dl className="mega-stats">
              {megaIctIslandData.stats.slice(0, 2).map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>

            <Link to="/mega-ict-island" className="btn btn-editorial-gold">
              Explore this Initiative <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .mega-poster {
          display: block;
          padding: 0;
          border: 1px solid var(--cdif-hairline-dark);
          background: #000;
          cursor: pointer;
        }
        .mega-poster img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mega-poster:hover img {
          transform: scale(1.04);
        }
        .mega-poster-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(28, 11, 37, 0.75), rgba(28, 11, 37, 0.1) 60%);
        }
        .mega-play {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 76px;
          height: 76px;
          margin: -38px 0 0 -38px;
          border-radius: 50%;
          background-color: var(--cdif-accent-gold);
          color: var(--cdif-bg-midnight);
          box-shadow: 0 0 0 10px rgba(245, 184, 0, 0.22);
          transition: var(--transition-normal);
        }
        .mega-poster:hover .mega-play {
          box-shadow: 0 0 0 16px rgba(245, 184, 0, 0.18);
        }
        .mega-poster-chip {
          position: absolute;
          left: 1.25rem;
          bottom: 1.1rem;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #FFFFFF;
        }
        .mega-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          border-top: 1px solid var(--cdif-hairline-dark);
          padding-top: 1.75rem;
          margin-bottom: 2.25rem;
        }
        .mega-stats > div {
          display: flex;
          flex-direction: column-reverse;
          justify-content: flex-end;
        }
        .mega-stats dd {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          line-height: 1.2;
          color: var(--cdif-accent-gold);
        }
        .mega-stats dt {
          margin-top: 0.35rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.78);
        }
      `}</style>
    </section>
  );
}
