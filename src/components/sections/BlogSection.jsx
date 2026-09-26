import { ASSET_ROOT, posts as defaultPosts } from '../../data/landingData.js';
import { ActionLink } from '../ui/ActionLink.jsx';

export function PostCard({ date, title, copy, image }) {
  return (
    <article className="post-item">
      <div className="post-copy">
        <time dateTime={date}>{date}</time>
        <h3>{title}</h3>
        <p>{copy}</p>
        <ActionLink className="section-action-outline">Read More</ActionLink>
      </div>
      <img src={`${ASSET_ROOT}/${image}`} alt={title} loading="lazy" />
    </article>
  );
}

export default function BlogSection({ items = defaultPosts }) {
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
          {items.map((post) => (
            <PostCard
              key={post.title}
              date={post.date}
              title={post.title}
              copy={post.copy}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
