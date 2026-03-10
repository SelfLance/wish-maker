// ─────────────────────────────────────────────────────────
// StarArt.jsx
// Shooting-star SVG used as the card cover illustration.
// Props: size (number) — bounding width in px, default 110
// ─────────────────────────────────────────────────────────

export default function StarArt({ size = 110 }) {
  const h = Math.round(size * 0.73);
  return (
    <svg width={size} height={h} viewBox="0 0 110 80" fill="none" aria-hidden="true">
      {/* Tail lines */}
      <line x1="78" y1="8"  x2="6"  y2="72" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" opacity="0.48"/>
      <line x1="78" y1="8"  x2="16" y2="64" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" opacity="0.32"/>
      <line x1="78" y1="8"  x2="26" y2="73" stroke="#D4AF37" strokeWidth="1.0" strokeLinecap="round" opacity="0.20"/>
      {/* Star */}
      <polygon points="78,0 82,12 95,12 85,20 89,32 78,25 67,32 71,20 61,12 74,12" fill="#D4AF37" opacity="0.95"/>
      {/* Sparkle dots */}
      <circle cx="15"  cy="13" r="1.5" fill="#D4AF37" opacity="0.55"/>
      <circle cx="34"  cy="6"  r="1.3" fill="#D4AF37" opacity="0.45"/>
      <circle cx="50"  cy="19" r="1.2" fill="#D4AF37" opacity="0.40"/>
      <circle cx="64"  cy="11" r="1.4" fill="#D4AF37" opacity="0.50"/>
      <circle cx="90"  cy="46" r="1.1" fill="#D4AF37" opacity="0.35"/>
      <circle cx="100" cy="32" r="1.0" fill="#D4AF37" opacity="0.30"/>
      <circle cx="24"  cy="50" r="1.1" fill="#D4AF37" opacity="0.35"/>
      {/* Cross sparkle */}
      <line x1="97" y1="16" x2="97" y2="22" stroke="#D4AF37" strokeWidth="1.0" strokeLinecap="round" opacity="0.35"/>
      <line x1="94" y1="19" x2="100" y2="19" stroke="#D4AF37" strokeWidth="1.0" strokeLinecap="round" opacity="0.35"/>
    </svg>
  );
}
