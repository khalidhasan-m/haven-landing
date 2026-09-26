export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ActionLink({ children, className = '', dark = false, href = '#footer' }) {
  return (
    <a className={`section-action ${dark ? 'section-action-light' : ''} ${className}`} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}
