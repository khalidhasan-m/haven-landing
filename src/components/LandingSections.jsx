import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ASSET_ROOT = '/assets/sections';

const testimonials = [
  {
    quote:
      '"Maya was an incredible agent. She listened carefully, understood exactly what we wanted, and never once made us feel rushed. She knew every street, every price trend, and every detail. We found the right home in three weeks and could not be happier."',
    author: 'Bernadette Hogan',
  },
  {
    quote:
      '"Working with the HAVEN team felt effortless from day one. They were patient, honest, and always one step ahead. Every question we had was answered before we even thought to ask it."',
    author: 'Tyleen',
  },
  {
    quote:
      '"Daniel made the entire process clear for us as first-time buyers. His problem-solving skills stood out from the start, and his calm guidance turned a stressful decision into an easy one. We are truly happy in our new home!"',
    author: 'Johanna Nieto',
  },
  {
    quote:
      '"An invaluable guide through the whole home-buying process. They immediately understood what we wanted and moved every stage forward with a steady, reassuring hand."',
    author: 'mattmpowers',
  },
  {
    quote:
      '"After 12 years in NYC, I had my best broker experience by far with Fay. She found a beautiful Upper West Side apartment that fit my needs like a glove and communicated brilliantly throughout."',
    author: 'Giavridis Theodore',
  },
];

const services = [
  {
    number: '1',
    label: 'Buy',
    image: 'service-buy.jpg',
    copy:
      'Buy smarter with expert agents backed by mortgage, legal, and appraisal pros—dialed in to get you the best deal, fast. We’ve done this over 10,000 times, and we know what wins.',
  },
  {
    number: '2',
    label: 'Sell',
    image: 'service-sell.jpg',
    copy:
      'Sell fast, sell high. Your listing gets pro staging, strategic pricing, constant open houses, and agents who never stop working until the right buyer signs.',
  },
  {
    number: '3',
    label: 'Rent',
    image: 'service-rent.jpg',
    copy:
      'Access hidden rentals before they hit the market through agents who know every landlord in town. With decades of big-city experience, we unlock the best deals you won’t find online.',
  },
];

const features = [
  {
    title: 'Mortgage Services',
    copy: 'Helping you secure your dream home with flexible mortgage options.',
    image: 'feature-mortgage.jpg',
  },
  {
    title: 'Property Management',
    copy: 'Let us handle the details so you can enjoy the rewards.',
    image: 'feature-management.jpg',
  },
  {
    title: 'Construction and Real Estate Development',
    copy: 'Guiding you through the intricacies of building and developing properties with expert insight and support.',
    image: 'feature-development.jpg',
  },
];

const posts = [
  {
    date: '2026-09-02',
    title: 'HAVEN Real Estate Featured in Redfin: What It Really Costs to Live in Harry Styles’ Neighborhood',
    copy: 'A look at the housing prices, everyday expenses, and lifestyle costs in Harry Styles’ neighborhood.',
    image: 'blog-redfin.png',
  },
  {
    date: '2026-04-13',
    title: 'Q1 2026 City Market Report',
    copy: 'Q1 2026 saw strong rental demand, active sales, and shifting pricing across the metro. Here’s what it means heading into the spring market.',
    image: 'blog-nyc.png',
  },
  {
    date: '2026-04-01',
    title: 'Philadelphia Real Estate: A Winter Chill or a Spring Opportunity?',
    copy: 'Record-low listings and steady price growth define a unique February for the Philadelphia Metro.',
    image: 'blog-philly.jpg',
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

function ActionLink({ children, className = '', dark = false }) {
  return (
    <a className={`section-action ${dark ? 'section-action-light' : ''} ${className}`} href="#footer">
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function WhyHaven() {
  return (
    <section id="why-haven" className="why-haven section-light">
      <div className="page-container">
        <div className="why-haven-intro section-grid">
          <h2 className="section-label">Why HAVEN</h2>
          <p className="why-haven-copy">
            Your life’s changing. Don’t just change address — change everything.{' '}
            <span data-tone>
              We help you move forward with clarity, confidence, and the right agent by your side.
            </span>
          </p>
        </div>
        <div className="why-haven-media" data-media-reveal>
          <video src={`${ASSET_ROOT}/why-us.mp4`} autoPlay playsInline loop muted preload="metadata" />
        </div>
      </div>
    </section>
  );
}

function IdentitySection() {
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

function RewiredSection() {
  const steps = [
    ['Talk to a Real Human.', 'We match you with an expert who actually listens.'],
    ['Get Clarity.', 'We define what you really need, not just what’s available.'],
    ['Move Forward.', 'We shortlist what fits — and make it happen.'],
  ];

  return (
    <section id="search" className="rewired-section section-light">
      <div className="page-container section-grid rewired-grid">
        <div className="rewired-lead">
          <h2>
            Real Estate,
            <br />
            <span data-tone>Rewired.</span>
          </h2>
          <ActionLink>Start Your Search</ActionLink>
        </div>
        <div className="rewired-process">
          <p className="rewired-label">Steps:</p>
          <ol>
            {steps.map(([title, copy], index) => (
              <li key={title}>
                <span className="step-number">0{index + 1}</span>
                <p>
                  <strong>{title}</strong> <span data-tone>{copy}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function AgentsSection() {
  return (
    <section id="agents" className="agents-section section-light">
      <div className="page-container agents-grid">
        <div className="agents-aside">
          <p className="section-label">For Agents</p>
          <img src={`${ASSET_ROOT}/agents-small.jpg`} alt="Agent standing outside a modern building" loading="lazy" />
        </div>
        <div className="agents-content">
          <h2>
            Don’t Rent Your Career. <span data-tone>Own It.</span>
          </h2>
          <img
            className="agents-main-image"
            src={`${ASSET_ROOT}/agents-main.jpg`}
            alt="Homes surrounded by mature trees"
            loading="lazy"
            data-media-reveal
          />
          <p className="agents-copy">
            At HAVEN, our agents don’t just work for the brand—they own a part of it.{' '}
            <span data-tone>
              We give top performers real equity, so they’re invested in more than just your transaction—they&apos;re
              invested in your outcome. Agents are certified, supported, and equipped to deliver five-star
              service—because their success is tied to yours. You’re not just here to close deals — you’re building a
              career, a life, a legacy. We help agents discover the company that gives them the support, tools, and
              leadership to thrive.
            </span>
          </p>
          <ActionLink>Join The Movement</ActionLink>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section className="testimonials-section">
      <div className="page-container">
        <h2>
          Don’t Take <span>Our Word for It.</span>
        </h2>
        <div className="testimonial-layout">
          <img
            className="testimonial-image"
            src={`${ASSET_ROOT}/testimonial.jpg`}
            alt="Two real estate clients talking over coffee"
            loading="lazy"
          />
          <div className="testimonial-panel" aria-live="polite">
            <div className="testimonial-controls">
              <div className="testimonial-pagination" aria-label="Choose testimonial">
                {testimonials.map((item, index) => (
                  <button
                    className={index === active ? 'is-active' : ''}
                    type="button"
                    aria-label={`Show testimonial ${index + 1} by ${item.author}`}
                    aria-pressed={index === active}
                    onClick={() => setActive(index)}
                    key={item.author}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <span className="quote-mark" aria-hidden="true">
                ”
              </span>
            </div>
            <blockquote key={testimonial.author}>{testimonial.quote}</blockquote>
            <p className="testimonial-author">
              {testimonial.author} <span>/</span> <span aria-label="Five stars">★★★★★</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
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
        {services.map((service) => (
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

function FeaturesSection() {
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
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <img src={`${ASSET_ROOT}/${feature.image}`} alt={feature.title} loading="lazy" />
              <div className="feature-card-content">
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
                <a href="#footer">
                  Learn More <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="resources" className="blog-section">
      <div className="page-container">
        <div className="blog-intro section-grid">
          <h2>
            Blog &amp;
            <br />
            <span>Resources</span>
          </h2>
          <div>
            <p>See how we’ve helped clients achieve their real estate dreams, one successful move at a time.</p>
            <ActionLink>Visit Our Blog</ActionLink>
          </div>
        </div>

        <div className="post-list">
          {posts.map((post) => (
            <article className="post-item" key={post.title}>
              <div className="post-copy">
                <time dateTime={post.date}>{post.date}</time>
                <h3>{post.title}</h3>
                <p>{post.copy}</p>
                <ActionLink className="section-action-outline">Read More</ActionLink>
              </div>
              <img src={`${ASSET_ROOT}/${post.image}`} alt={post.title} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const legalLinks = [
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
              {['Search', 'Agents', 'Join', 'About Us', 'Agent Portal'].map((label) => (
                <a href="#top" key={label}>
                  {label}
                </a>
              ))}
            </nav>
            <nav className="footer-socials" aria-label="Social media">
              {['Facebook', 'Instagram', 'Youtube', 'Linkedin'].map((label) => (
                <a href="#footer" key={label}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <img className="footer-logo" src="/assets/haven-wordmark.svg" alt="HAVEN" />

          <div className="footer-legal">
            {legalLinks.map((label) => (
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

export default function LandingSections() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.utils.toArray('[data-tone]').forEach((element) => {
        const dark = Boolean(element.closest('.dark-section'));
        gsap.to(element, {
          color: dark ? '#ffffff' : '#151717',
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top 15%',
            end: 'bottom -20%',
            scrub: 0.35,
          },
        });
      });

      gsap.utils.toArray('[data-media-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: 'inset(0 0 100% 0)' },
          {
            clipPath: 'inset(0 0 0% 0)',
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              end: 'top 58%',
              scrub: 0.4,
            },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="landing-sections">
      <WhyHaven />
      <IdentitySection />
      <RewiredSection />
      <AgentsSection />
      <TestimonialsSection />
      <ServicesSection />
      <FeaturesSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
