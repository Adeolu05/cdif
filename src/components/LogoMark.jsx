export default function LogoMark({ size = 36 }) {
  const iconSize = Math.round(size * 0.55);

  return (
    <span
      className="icon-container"
      aria-hidden="true"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: 'var(--cdif-primary)',
        border: `${size > 40 ? 2 : 1.5}px solid var(--cdif-accent-gold)`,
        boxShadow: '0 4px 12px rgba(106, 27, 110, 0.3)'
      }}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--cdif-accent-gold)" />
        <circle cx="12" cy="10" r="2.5" fill="#fff" />
      </svg>
    </span>
  );
}
