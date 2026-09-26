import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import {
  WhyHaven,
  IdentitySection,
  RewiredSection,
  AgentsSection,
  TestimonialsSection,
  ServicesSection,
  FeaturesSection,
  BlogSection,
  Footer,
} from './sections/index.js';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export {
  WhyHaven,
  IdentitySection,
  RewiredSection,
  AgentsSection,
  TestimonialsSection,
  ServicesSection,
  FeaturesSection,
  BlogSection,
  Footer,
};

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

