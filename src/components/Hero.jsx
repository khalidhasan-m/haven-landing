import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const IMAGE_URLS = [
  '/assets/hero-sky.webp',
  '/assets/hero-house.webp',
  '/assets/hero-cloud.webp',
  '/assets/hero-smoke.webp',
];

function preloadImages() {
  return Promise.all(
    IMAGE_URLS.map(
      (src) =>
        new Promise((resolve) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = resolve;
          image.src = src;
        }),
    ),
  );
}

export default function Hero() {
  const root = useRef(null);
  const stage = useRef(null);
  const sky = useRef(null);
  const house = useRef(null);
  const compositeHouse = useRef(null);
  const composite = useRef(null);
  const leftCloud = useRef(null);
  const rightCloud = useRef(null);
  const smoke = useRef(null);
  const content = useRef(null);
  const title = useRef(null);
  const supporting = useRef(null);
  const action = useRef(null);
  const outlineLogo = useRef(null);
  const [assetsReady, setAssetsReady] = useState(false);
  const [logoMarkup, setLogoMarkup] = useState('');

  useEffect(() => {
    let active = true;

    Promise.all([
      preloadImages(),
      document.fonts?.ready ?? Promise.resolve(),
      fetch('/assets/haven-logo.svg').then((response) => response.text()),
    ]).then(([, , svg]) => {
      if (!active) return;
      setLogoMarkup(svg);
      setAssetsReady(true);
    });

    return () => {
      active = false;
    };
  }, []);

  useGSAP(
    () => {
      if (!assetsReady || !logoMarkup) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const paths = outlineLogo.current.querySelectorAll('path');

      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.set(smoke.current, { yPercent: 70 });

      if (reducedMotion) {
        gsap.set(stage.current, { autoAlpha: 1 });
        return;
      }

      const entrance = gsap.timeline({ defaults: { overwrite: 'auto' } });
      entrance
        .fromTo(stage.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 0)
        .from(
          title.current.querySelectorAll('.hero-word'),
          { yPercent: 115, duration: 1.25, stagger: 0.07, ease: 'expo.out' },
          0.12,
        )
        .from(
          [supporting.current, action.current],
          { y: 28, autoAlpha: 0, duration: 0.9, stagger: 0.1, ease: 'expo.out' },
          0.35,
        )
        .from(sky.current, { scale: 1.1, duration: 5, ease: 'expo.out' }, 0)
        .from(leftCloud.current, { yPercent: 50, duration: 3, ease: 'expo.out' }, 0)
        .from(rightCloud.current, { yPercent: 100, duration: 4, ease: 'expo.out' }, 0.1)
        .from(
          [house.current, compositeHouse.current],
          { yPercent: 10, autoAlpha: 0, duration: 3, ease: 'expo.out' },
          0.2,
        );

      const scroll = gsap.timeline({ defaults: { ease: 'none' } });
      scroll
        .to([house.current, compositeHouse.current], { yPercent: -40, scale: 1.3, duration: 1 }, 0)
        .to(smoke.current, { yPercent: 0, duration: 1 }, 0)
        .to(leftCloud.current, { xPercent: -15, duration: 1 }, 0)
        .to(rightCloud.current, { xPercent: 15, duration: 1 }, 0)
        .to(content.current, { yPercent: 20, scale: 0.9, duration: 1 }, 0)
        .to(content.current, { autoAlpha: 0, duration: 0.2 }, 0)
        .to(outlineLogo.current, { autoAlpha: 1, duration: 0.01 }, 0.1)
        .to(paths, { strokeDashoffset: 0, duration: 0.3 }, 0.1)
        .to(outlineLogo.current, { autoAlpha: 0, duration: 0.2 }, 0.28)
        .to(composite.current, { autoAlpha: 1, duration: 0.1 }, 0.3)
        .to(house.current, { autoAlpha: 0, duration: 0.1 }, 0.3);

      ScrollTrigger.create({
        trigger: root.current,
        animation: scroll,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.1,
        invalidateOnRefresh: true,
      });
    },
    { scope: root, dependencies: [assetsReady, logoMarkup], revertOnUpdate: true },
  );

  return (
    <section ref={root} className="hero-shell" aria-labelledby="hero-title">
      <div ref={stage} className="hero-sticky">
        <div className="hero-background" aria-hidden="true">
          <div ref={sky} className="hero-sky">
            <img src="/assets/hero-sky.webp" alt="" />
          </div>

          <div ref={house} className="hero-house hero-house-primary">
            <img src="/assets/hero-house.webp" alt="" />
          </div>

          <div ref={composite} className="hero-composite">
            <div ref={compositeHouse} className="hero-house">
              <img src="/assets/hero-house.webp" alt="" />
            </div>
          </div>

          <div className="hero-clouds">
            <div ref={leftCloud} className="hero-cloud hero-cloud-left">
              <img src="/assets/hero-cloud.webp" alt="" />
            </div>
            <div ref={rightCloud} className="hero-cloud hero-cloud-right">
              <img src="/assets/hero-cloud.webp" alt="" />
            </div>
          </div>

          <div
            ref={outlineLogo}
            className="hero-outline-logo"
            dangerouslySetInnerHTML={{ __html: logoMarkup }}
          />

          <div ref={smoke} className="hero-smoke">
            <img src="/assets/hero-smoke.webp" alt="" />
          </div>
          <div className="hero-bottom-fade" />
        </div>

        <div ref={content} className="hero-content">
          <div className="hero-content-inner">
            <h1 ref={title} id="hero-title" className="hero-title" aria-label="Come Home to Haven">
              {['Come', 'Home', 'To', 'Haven'].map((word) => (
                <span className="hero-word-clip" key={word}>
                  <span className="hero-word">{word}</span>
                </span>
              ))}
            </h1>
            <p ref={supporting} className="hero-copy">
              Expert homes. <strong>Real guidance.</strong>{' '}
              <span>A clear path to what comes next.</span>
            </p>
            <div ref={action} className="hero-actions">
              <a href="#next" className="hero-cta">
                <span>Explore Homes</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-overlap" aria-hidden="true">
        <div className="hero-smoke hero-smoke-overlap">
          <img src="/assets/hero-smoke.webp" alt="" />
        </div>
        <div className="hero-overlap-fade" />
      </div>
    </section>
  );
}
