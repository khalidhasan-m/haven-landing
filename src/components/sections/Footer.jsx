import { ASSET_ROOT } from '../../data/landingData.js';
import { ActionLink, ArrowIcon } from '../ui/ActionLink.jsx';

const LEGAL_LINKS = [
  'Terms',
  'Privacy policy',
  'Fair Housing Notice',
  'Reasonable Accommodation Notice',
  'Operating Procedure',
  'Press',
  'Housing Choice Vouchers Welcome',
  'Se Aceptan Vales de Elección de Vivienda',
  'HAVEN Real Estate',
];

const NAV_LINKS = ['Search', 'Agents', 'Join', 'About Us', 'Agent Portal'];
const SOCIAL_LINKS = ['Facebook', 'Instagram', 'Youtube', 'Linkedin'];

export default function Footer() {
  return (
    <>
      <section className="outro-section">
        <img src={`${ASSET_ROOT}/outro-bg.jpg`} alt="" loading="lazy" />
        <div className="outro-content">
          <h2>Home Is Where Your Story Starts. Let’s Write It Together.</h2>
          <ActionLink dark>Let’s Get Started</ActionLink>
        </div>
      </section>

      <footer id="footer" className="site-footer">
        <div className="page-container footer-grid">
          <div className="footer-newsletter">
            <h2>Subscribe to our Newsletter!</h2>
            <form onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input id="newsletter-email" type="email" placeholder="Enter address" />
              <button type="submit" aria-label="Subscribe">
                <ArrowIcon />
              </button>
            </form>
          </div>

          <address className="footer-contacts">
            <div className="footer-contact footer-contact-address">
              <span>Head Office</span>
              <p>5 West 37th Street, 12th Floor,</p>
              <p>New York, NY 10018</p>
            </div>
            <div className="footer-contact footer-contact-email">
              <span>Email Us</span>
              <a href="mailto:hello@havenrealestate.com">hello@havenrealestate.com</a>
            </div>
            <div className="footer-contact footer-contact-phone">
              <span>Call Us</span>
              <a href="tel:+12129949965">+1 212 994 9965</a>
            </div>
          </address>

          <div className="footer-links">
            <nav aria-label="Footer navigation">
              {NAV_LINKS.map((label) => (
                <a href="#top" key={label}>
                  {label}
                </a>
              ))}
            </nav>
            <nav className="footer-socials" aria-label="Social media">
              {SOCIAL_LINKS.map((label) => (
                <a href="#footer" key={label}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <img className="footer-logo" src="/assets/haven-wordmark.svg" alt="HAVEN" />

          <div className="footer-legal">
            {LEGAL_LINKS.map((label) => (
              <a href="#footer" key={label}>
                {label}
              </a>
            ))}
            <span>Copyright © 2026</span>
          </div>
        </div>
      </footer>
    </>
  );
}
