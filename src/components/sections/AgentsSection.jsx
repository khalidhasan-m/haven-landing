import { ASSET_ROOT } from '../../data/landingData.js';
import { ActionLink } from '../ui/ActionLink.jsx';

export default function AgentsSection() {
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
