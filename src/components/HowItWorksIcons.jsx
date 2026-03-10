// ─────────────────────────────────────────────────────────
// HowItWorksIcons.jsx
// Three SVG illustrations rendered inside the circular
// icon badges on the How It Works page.
//
// Exports: PenSVG  – fountain pen (Make a Wish)
//          ChainSVG – chain links (Written Into Time)
//          EnvSVG  – envelope + card + QR (Send & Cherish)
//
// Each fills its container 100% × 100%.
// ─────────────────────────────────────────────────────────

export function PenSVG() {
  return (
    <svg viewBox="0 0 90 90" fill="none" style={{ width:"100%", height:"100%" }}>
      {/* Cap */}
      <path d="M57 18 L72 8 L82 18 L70 30 Z" fill="#D4AF37" opacity="0.88"/>
      {/* Barrel */}
      <rect x="40" y="28" width="13" height="34" rx="2" transform="rotate(-45 40 28)" fill="#D4AF37" opacity="0.72"/>
      {/* Nib */}
      <path d="M29 61 L33 71 L39 65 Z" fill="#D4AF37" opacity="0.92"/>
      {/* Ink drop */}
      <path d="M31 67 Q36 77 29 81 Q27 73 31 67Z" fill="#C9A227" opacity="0.72"/>
      {/* Sparkles */}
      <circle cx="20" cy="17" r="1.5" fill="#D4AF37" opacity="0.50"/>
      <circle cx="14" cy="31" r="1.2" fill="#D4AF37" opacity="0.45"/>
      <circle cx="68" cy="61" r="1.4" fill="#D4AF37" opacity="0.50"/>
      <line x1="13" y1="25" x2="13" y2="31" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.50"/>
      <line x1="10" y1="28" x2="16" y2="28" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.50"/>
    </svg>
  );
}

export function ChainSVG() {
  return (
    <svg viewBox="0 0 90 90" fill="none" style={{ width:"100%", height:"100%" }}>
      {/* Left link */}
      <rect x="12" y="34" width="30" height="18" rx="9" stroke="#D4AF37" strokeWidth="4.5" fill="none" opacity="0.92"/>
      {/* Right link */}
      <rect x="48" y="38" width="30" height="18" rx="9" stroke="#D4AF37" strokeWidth="4.5" fill="none" opacity="0.92"/>
      {/* Overlap connector */}
      <rect x="27" y="34" width="18" height="18" fill="#D4AF37" opacity="0.18"/>
      {/* Sparkles */}
      <circle cx="20" cy="19" r="1.5" fill="#D4AF37" opacity="0.50"/>
      <circle cx="68" cy="21" r="1.3" fill="#D4AF37" opacity="0.45"/>
      <circle cx="72" cy="67" r="1.4" fill="#D4AF37" opacity="0.50"/>
      <line x1="68" y1="14" x2="68" y2="20" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.50"/>
      <line x1="65" y1="17" x2="71" y2="17" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.50"/>
    </svg>
  );
}

export function EnvSVG() {
  return (
    <svg viewBox="0 0 90 90" fill="none" style={{ width:"100%", height:"100%" }}>
      {/* Envelope body */}
      <rect x="9" y="34" width="54" height="40" rx="3" fill="#EDE3C4" stroke="#D4AF37" strokeWidth="1.5" opacity="0.92"/>
      {/* Flap crease */}
      <path d="M9 37 L36 57 L63 37" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.62"/>
      {/* Card sticking out */}
      <rect x="21" y="15" width="34" height="28" rx="2" fill="#FDFAF2" stroke="#D4AF37" strokeWidth="1.5" opacity="0.96"/>
      {/* Hashtag text */}
      <text x="24" y="27" fontSize="5" fill="#B8960C" fontFamily="Georgia,serif" fontWeight="700">#wishforMom</text>
      {/* QR code outline */}
      <rect x="24" y="32" width="22" height="9" rx="1" fill="none" stroke="#B8960C" strokeWidth="0.9"/>
      {/* QR squares */}
      {[0,1,2,3].map(i => [0,1].map(j => (
        <rect
          key={`${i}${j}`}
          x={26 + i * 5} y={33.5 + j * 3}
          width="3.2" height="2.2" rx="0.4"
          fill="#B8960C"
          opacity={0.52 + (i + j) * 0.08}
        />
      )))}
    </svg>
  );
}
