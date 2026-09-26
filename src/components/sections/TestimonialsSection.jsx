import { useState } from 'react';
import { ASSET_ROOT, testimonials } from '../../data/landingData.js';

export default function TestimonialsSection({ items = testimonials }) {
  const [active, setActive] = useState(0);
  const testimonial = items[active];

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
                {items.map((item, index) => (
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
