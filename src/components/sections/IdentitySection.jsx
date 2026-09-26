import { ASSET_ROOT } from '../../data/landingData.js';

export default function IdentitySection() {
  return (
    <section className="identity-section section-light">
      <div className="page-container identity-inner">
        <h2>
          This isn’t just <span data-tone>about real estate.</span>
        </h2>
        <div className="identity-arrows" aria-hidden="true" data-media-reveal>
          {[1, 2, 3, 4].map((number) => (
            <div className={`identity-arrow identity-arrow-${number}`} key={number}>
              <img src={`${ASSET_ROOT}/arrow-0${number}.jpg`} alt="" loading="lazy" />
            </div>
          ))}
        </div>
        <p>
          It’s about identity. Progress. Getting unstuck. You’re not just looking for a place.{' '}
          <span data-tone>You’re looking for alignment. That’s what we help you build.</span>
        </p>
      </div>
    </section>
  );
}
