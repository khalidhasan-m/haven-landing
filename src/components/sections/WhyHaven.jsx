import { ASSET_ROOT } from '../../data/landingData.js';

export default function WhyHaven() {
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
