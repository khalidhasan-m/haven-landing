import Hero from './components/Hero.jsx';
import LandingSections from './components/LandingSections.jsx';
import SmoothScroll from './components/SmoothScroll.jsx';

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="nav-logo" href="#top" aria-label="HAVEN home">
        <img src="/assets/haven-logo.svg" alt="" />
      </a>

      <nav className="desktop-nav" aria-label="Main menu">
        <a href="#search">Search</a>
        <a href="#agents">Agents</a>
        <a href="#agents" className="nav-with-chevron">
          Join <span aria-hidden="true">⌄</span>
        </a>
        <a href="#services" className="nav-with-chevron">
          Paperwork <span aria-hidden="true">⌄</span>
        </a>
        <a href="#resources" className="nav-with-chevron">
          Resources <span aria-hidden="true">⌄</span>
        </a>
        <a href="#why-haven" className="nav-with-chevron">
          About <span aria-hidden="true">⌄</span>
        </a>
      </nav>

      <a className="sign-in" href="#footer">
        Sign In
      </a>
      <button className="mobile-menu-toggle" type="button" aria-label="Open navigation menu">
        <span />
        <span />
      </button>
    </header>
  );
}

export default function App() {
  return (
    <main id="top">
      <SmoothScroll />
      <Header />
      <Hero />
      <LandingSections />
    </main>
  );
}
