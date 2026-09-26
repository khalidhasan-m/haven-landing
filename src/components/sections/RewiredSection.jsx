import { ActionLink } from '../ui/ActionLink.jsx';

const STEPS = [
  ['Talk to a Real Human.', 'We match you with an expert who actually listens.'],
  ['Get Clarity.', 'We define what you really need, not just what’s available.'],
  ['Move Forward.', 'We shortlist what fits — and make it happen.'],
];

export default function RewiredSection() {
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
            {STEPS.map(([title, copy], index) => (
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
