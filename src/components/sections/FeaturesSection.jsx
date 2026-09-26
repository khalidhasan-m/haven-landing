import { ASSET_ROOT, features as defaultFeatures } from '../../data/landingData.js';
import { ActionLink, ArrowIcon } from '../ui/ActionLink.jsx';

export function FeatureCard({ title, copy, image }) {
  return (
    <article className="feature-card">
      <img src={`${ASSET_ROOT}/${image}`} alt={title} loading="lazy" />
      <div className="feature-card-content">
        <h3>{title}</h3>
        <p>{copy}</p>
        <a href="#footer">
          Learn More <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

export default function FeaturesSection({ items = defaultFeatures }) {
  return (
    <section className="features-section dark-section">
      <div className="page-container">
        <div className="features-intro section-grid">
          <h2>
            Support
            <br />
            Beyond <span data-tone>Buying<br />and Selling</span>
          </h2>
          <div>
            <p>
              The real estate market never stands still — and neither do we.{' '}
              <span data-tone>
                Our experts offer continued support beyond the sale, helping you maximize your investment.
              </span>
            </p>
            <ActionLink dark>Discover Our Services</ActionLink>
          </div>
        </div>

        <div className="feature-cards">
          {items.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              copy={feature.copy}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
