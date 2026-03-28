// HowItWorksPage — matches mockup Image 1 exactly
// Clean warm-white bg, 3 large circles, step titles, descriptions
// Footer: divider + italic tagline + trust bar

import useIsMobile from "../hooks/useIsMobile";
import { GOLD, BG, TEXT, TEXT2, TEXT3, BORDER, SERIF, SANS } from "../utils/tokens";

// ── SVG icons matching the 3 circles in mockup ──────────
function PenCircle() {
  return (
    <svg viewBox="0 0 160 160" fill="none" width="100%" height="100%">
      <circle cx="80" cy="80" r="80" fill="#F5EDD8"/>
      {[[38,46,7],[110,40,5],[45,118,5],[118,112,6]].map(([x,y,s],i)=>(
        <g key={i} transform={`translate(${x},${y})`} opacity="0.7">
          <line x1="0" y1={-s} x2="0" y2={s} stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1={-s} y1="0" x2={s} y2="0" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      ))}
      <g transform="translate(80,80) rotate(-35)">
        <rect x="-5" y="-38" width="10" height="52" rx="2" fill="url(#penBody)"/>
        <polygon points="0,-54 -6,-38 6,-38" fill="#C9A227"/>
        <ellipse cx="0" cy="-54" rx="3" ry="2" fill="#D4AF37"/>
        <rect x="-5" y="10" width="10" height="8" rx="1" fill="#9A7410"/>
        <polygon points="0,25 -4,14 4,14" fill="#D4AF37"/>
        <line x1="0" y1="16" x2="0" y2="25" stroke="#B8920A" strokeWidth="0.8"/>
      </g>
      <path d="M 72 108 Q 80 114 90 110 Q 96 108 88 115" stroke="#C9A227" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6"/>
      <defs>
        <linearGradient id="penBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C86A"/>
          <stop offset="100%" stopColor="#B8920A"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function ChainCircle() {
  return (
    <svg viewBox="0 0 160 160" fill="none" width="100%" height="100%">
      <circle cx="80" cy="80" r="80" fill="#F5EDD8"/>
      {[[42,36,6],[116,44,5],[36,116,5],[118,108,6]].map(([x,y,s],i)=>(
        <g key={i} transform={`translate(${x},${y})`} opacity="0.7">
          <line x1="0" y1={-s} x2="0" y2={s} stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1={-s} y1="0" x2={s} y2="0" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      ))}
      <g transform="translate(80,80) rotate(-30)">
        <rect x="-22" y="-18" width="44" height="28" rx="14" fill="none" stroke="url(#chainGold)" strokeWidth="9"/>
        <rect x="-22" y="2" width="44" height="28" rx="14" fill="none" stroke="url(#chainGold)" strokeWidth="9"/>
        <rect x="-13" y="0" width="26" height="12" fill="#F5EDD8"/>
        <line x1="-14" y1="2" x2="-14" y2="10" stroke="#F5EDD8" strokeWidth="10"/>
        <line x1="14" y1="2" x2="14" y2="10" stroke="#F5EDD8" strokeWidth="10"/>
      </g>
      <defs>
        <linearGradient id="chainGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8C86A"/>
          <stop offset="50%" stopColor="#C9A227"/>
          <stop offset="100%" stopColor="#9A7418"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function EnvelopeCircle() {
  return (
    <svg viewBox="0 0 160 160" fill="none" width="100%" height="100%">
      <circle cx="80" cy="80" r="80" fill="#F0EDE6"/>
      <rect x="30" y="64" width="100" height="66" rx="4" fill="#EDE8D8" stroke="#C8BC98" strokeWidth="1.2"/>
      <path d="M 30 64 L 80 98 L 130 64" stroke="#C8BC98" strokeWidth="1.2" fill="none"/>
      <rect x="50" y="36" width="60" height="52" rx="3" fill="white" stroke="#E0D8C0" strokeWidth="1"/>
      <rect x="54" y="40" width="52" height="44" rx="2" fill="#FDFAF2" stroke="#D4C898" strokeWidth="0.7"/>
      <text x="80" y="57" textAnchor="middle" fontFamily="Georgia,serif" fontSize="7" fill="#8B7340">#wishforMom</text>
      <rect x="62" y="62" width="36" height="18" rx="1" fill="#2C2218" opacity="0.82"/>
      <rect x="64" y="63" width="6" height="6" rx="0.5" fill="white"/>
      <rect x="71" y="63" width="2" height="2" fill="white"/>
      <rect x="75" y="63" width="4" height="2" fill="white"/>
      <rect x="80" y="63" width="6" height="6" rx="0.5" fill="white"/>
      <rect x="64" y="70" width="4" height="2" fill="white"/>
      <rect x="70" y="70" width="6" height="2" fill="white"/>
      <rect x="78" y="70" width="8" height="2" fill="white"/>
      <rect x="64" y="72" width="6" height="6" rx="0.5" fill="white"/>
      <rect x="72" y="72" width="2" height="6" fill="white"/>
      <rect x="76" y="74" width="4" height="2" fill="white"/>
      <rect x="80" y="72" width="6" height="6" rx="0.5" fill="white"/>
      <line x1="30" y1="130" x2="80" y2="96" stroke="#C8BC98" strokeWidth="0.8"/>
      <line x1="130" y1="130" x2="80" y2="96" stroke="#C8BC98" strokeWidth="0.8"/>
    </svg>
  );
}

const STEPS = [
  { Circle: PenCircle,      num:"1", title:"Make a Wish",
    desc:"Write your message inside a timeless digital card — a moment captured in words." },
  { Circle: ChainCircle,    num:"2", title:"Written Into Time",
    desc:"Your wish is permanently recorded on the blockchain, creating a lasting digital memory that can never be altered or lost." },
  { Circle: EnvelopeCircle, num:"3", title:"Send & Cherish",
    desc:"Your recipient receives a printed keepsake card with a unique hashtag and QR code that opens the wish instantly online." },
];

export default function HowItWorksPage() {
  const isMobile = useIsMobile();

  return (
    <div className="wm-screen" style={{ background:BG }}>

      {/* Header */}
      <div className="wm-fadeup" style={{ textAlign:"center", padding: isMobile ? "24px 20px 0" : "28px 24px 0", flexShrink:0 }}>
        <h1 style={{ fontFamily:SERIF, fontWeight:300, fontSize: isMobile ? "clamp(28px,8vw,40px)" : "clamp(32px,4.5vw,52px)", color:TEXT }}>
          How It Works
        </h1>
      </div>

      {/* Steps */}
      <div style={{
        flex: isMobile ? "none" : "1 1 0",
        minHeight: 0,
        display: "flex",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "center",
        padding: isMobile ? "20px 24px 0" : "0 48px",
        overflowY: isMobile ? "visible" : undefined,
      }}>
        <div className="wm-fadeup1" style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
          gap: isMobile ? 32 : 44,
          maxWidth: 900,
          width: "100%",
        }}>
          {STEPS.map(({ Circle, num, title, desc }) => (
            <div key={title} style={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              alignItems: isMobile ? "flex-start" : "center",
              textAlign: isMobile ? "left" : "center",
              gap: isMobile ? 16 : 0,
            }}>
              <div className="wm-how-circle" style={{
                width: isMobile ? 80 : 175,
                height: isMobile ? 80 : 175,
                borderRadius: "50%",
                background: "linear-gradient(145deg,#F5EDD8 0%,#EDE3C4 100%)",
                overflow: "hidden",
                marginBottom: isMobile ? 0 : 20,
                flexShrink: 0,
                boxShadow: "0 4px 22px rgba(184,150,12,0.13)",
              }}>
                <Circle/>
              </div>
              <div>
                <p style={{ fontFamily:SANS, fontSize: isMobile ? 15 : 15.5, fontWeight:500, color:TEXT, marginBottom: isMobile ? 5 : 9 }}>
                  {num}. {title}
                </p>
                <p style={{ fontFamily:SANS, fontSize: isMobile ? 13.5 : 14, color:TEXT2, lineHeight:1.72 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ flexShrink:0, padding: isMobile ? "20px 20px 20px" : "0 24px 14px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, maxWidth:320, margin:"0 auto 12px" }}>
          <div style={{ flex:1, height:"0.8px", background:"rgba(184,150,12,0.22)" }}/>
          <span style={{ color:GOLD, fontSize:12 }}>✦</span>
          <div style={{ flex:1, height:"0.8px", background:"rgba(184,150,12,0.22)" }}/>
        </div>
        <p style={{ fontFamily:SERIF, fontStyle:"italic", fontSize: isMobile ? 14 : 16, color:TEXT2, textAlign:"center", marginBottom:14 }}>
          Every wish you make helps grant one for a child in need.
        </p>
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap: isMobile ? 6 : 16, flexWrap:"wrap" }}>
          {["🔒 Secure SSL Encryption","⊙ Bgct Gton","✓ Norton","VERITED","VISA","AMEX"].map(t => (
            <span key={t} style={{ fontFamily:SANS, fontSize: isMobile ? 10 : 11.5, color:TEXT3, padding:"3px 8px", border:`1px solid ${BORDER}`, borderRadius:4 }}>
              {t}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
