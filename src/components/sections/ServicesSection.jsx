import { ASSET_ROOT, services as defaultServices } from '../../data/landingData.js';
import { ActionLink, ArrowIcon } from '../ui/ActionLink.jsx';

export default function ServicesSection({ items = defaultServices }) {
  return (
    <section id="services" className="services-section dark-section">
      <div className="page-container services-heading section-grid">
        <p className="section-label">Services</p>
        <h2>
          How HAVEN
          <br />
          <span data-tone>Can Help You</span>
        </h2>
      </div>

      <div className="service-list">
        {items.map((service) => (
          <a className={`service-row service-row-${service.number}`} href="#footer" key={service.label}>
            <img src={`${ASSET_ROOT}/${service.image}`} alt="" loading="lazy" />
            <div className="page-container service-row-inner">
              <span className="service-number">{service.number}</span>
              <p>{service.copy}</p>
              <span className="service-name">{service.label}</span>
              {service.number === '3' && <ArrowIcon />}
            </div>
          </a>
        ))}
      </div>

      <div className="page-container service-closing">
        <p>
          Our certified agents guide you through every stage of real estate{' '}
          <span data-tone>with expert knowledge and reliable support.</span>
        </p>
        <ActionLink dark>Get Started with HAVEN</ActionLink>
      </div>
    </section>
  );
}
