// ─────────────────────────────────────────────────────────
// WishingWellPage.jsx
// The Wishing Well — a free, donation-based page.
// Send a wish into the well and help grant one for a child.
// 100% donated to Make-A-Wish.
//
// Layout matches mockup:
//   • Soft lavender-cream radial background
//   • Centred title + subtitle + divider sparkle
//   • Two-column: well illustration left, interaction right
//   • Wish-type tags + optional textarea + donation amounts
//   • "Cast Wish Into the Well" gold CTA
//   • Wishes counter footer
// ─────────────────────────────────────────────────────────

import { useState } from "react";
import GoldButton   from "../components/GoldButton";
import { GOLD, GOLD_GRAD, GOLD_GLOW, GOLD_PALE, BG_WHITE, TEXT, TEXT2, TEXT3, BORDER, SERIF, SANS } from "../utils/tokens";

// ── Wishing Well SVG illustration ───────────────────────
function WishingWellIllustration() {
  return (
    <svg viewBox="0 0 320 360" fill="none" style={{ width:"100%", maxWidth:320 }} aria-hidden="true">
      {/* Glow behind well */}
      <ellipse cx="160" cy="220" rx="120" ry="90" fill="rgba(212,175,55,0.18)"/>
      <ellipse cx="160" cy="240" rx="80" ry="50" fill="rgba(212,175,55,0.22)"/>

      {/* Well base — stone cylinder */}
      <ellipse cx="160" cy="230" rx="78" ry="22" fill="#C8A84B" opacity="0.55"/>
      <rect x="82" y="185" width="156" height="48" rx="4" fill="#D4A94A"/>
      <rect x="82" y="185" width="156" height="48" rx="4" fill="url(#stone)" opacity="0.85"/>
      <ellipse cx="160" cy="185" rx="78" ry="22" fill="#E8C56A"/>

      {/* Stone texture lines */}
      {[0,1,2,3].map(row => (
        [0,1,2,3,4].map(col => (
          <rect key={`${row}${col}`}
            x={86 + col * 30 + (row % 2) * 15} y={190 + row * 11}
            width="27" height="9" rx="2"
            fill="rgba(0,0,0,0.08)"
          />
        ))
      ))}

      {/* Well rim */}
      <ellipse cx="160" cy="185" rx="78" ry="22" fill="none" stroke="#C9A227" strokeWidth="2" opacity="0.6"/>

      {/* Well posts */}
      <rect x="108" y="100" width="14" height="90" rx="3" fill="#C8A84B"/>
      <rect x="198" y="100" width="14" height="90" rx="3" fill="#C8A84B"/>

      {/* Roof */}
      <polygon points="90,110 160,60 230,110" fill="#D4A94A"/>
      <polygon points="90,110 160,60 230,110" fill="none" stroke="#B8860B" strokeWidth="1.5"/>
      {/* Roof planks */}
      {[0,1,2,3,4,5,6].map(i => (
        <line key={i} x1={90 + i*20} y1={110} x2={125 + i*10} y2={65}
          stroke="rgba(0,0,0,0.1)" strokeWidth="1.5"/>
      ))}
      {/* Roof ridge cap */}
      <rect x="148" y="56" width="24" height="8" rx="2" fill="#B8860B" opacity="0.7"/>

      {/* Bucket rope */}
      <line x1="155" y1="120" x2="148" y2="182" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>

      {/* Bucket */}
      <rect x="132" y="152" width="32" height="28" rx="3" fill="#D4A94A"/>
      <ellipse cx="148" cy="152" rx="16" ry="5" fill="#E8C56A"/>
      <ellipse cx="148" cy="180" rx="16" ry="5" fill="#C8A84B"/>

      {/* Crank handle */}
      <circle cx="210" cy="148" r="6" fill="#B8860B"/>
      <line x1="210" y1="120" x2="210" y2="148" stroke="#B8860B" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="198" y1="120" x2="210" y2="120" stroke="#B8860B" strokeWidth="3.5" strokeLinecap="round"/>

      {/* Sparkles */}
      {[
        [60,  160, 0.9, 14], [280, 155, 0.8, 11],
        [95,  130, 0.7, 9],  [245, 175, 0.6, 8],
        [70,  200, 0.5, 7],  [265, 210, 0.5, 6],
        [130, 100, 0.6, 8],  [195, 95,  0.5, 7],
      ].map(([x, y, op, s], i) => (
        <g key={i} transform={`translate(${x},${y})`} opacity={op}>
          <line x1="0" y1={-s} x2="0" y2={s}    stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1={-s} y1="0" x2={s} y2="0"    stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1={-s*.6} y1={-s*.6} x2={s*.6} y2={s*.6} stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
          <line x1={s*.6}  y1={-s*.6} x2={-s*.6} y2={s*.6} stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        </g>
      ))}

      {/* Bottom glow pool */}
      <ellipse cx="160" cy="285" rx="70" ry="18" fill="rgba(212,175,55,0.15)"/>

      <defs>
        <linearGradient id="stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="black" stopOpacity="0.1"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// ── Wish type tag button ─────────────────────────────────
function WishTag({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "9px 20px",
        borderRadius: 6,
        border: `1.5px solid ${selected ? GOLD : BORDER}`,
        background: selected ? GOLD_GLOW : BG_WHITE,
        color: selected ? GOLD : TEXT2,
        fontFamily: SANS, fontSize: 13.5, fontWeight: selected ? 600 : 400,
        cursor: "pointer",
        transition: "all 0.18s ease",
      }}
    >
      {label}
    </button>
  );
}

// ── Donation amount button ───────────────────────────────
function AmountBtn({ amount, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: "11px 8px",
        borderRadius: 6,
        border: `1.5px solid ${selected ? GOLD : BORDER}`,
        background: selected ? GOLD_GLOW : BG_WHITE,
        color: selected ? GOLD : TEXT2,
        fontFamily: SANS, fontSize: 14, fontWeight: selected ? 700 : 500,
        cursor: "pointer",
        transition: "all 0.18s ease",
      }}
    >
      ${amount}
    </button>
  );
}

const WISH_TAGS   = ["Strength", "Healing", "Hope", "Gratitude", "Love", "Courage"];
const AMOUNTS     = [5, 10, 25, 50];
const WISH_COUNT  = 3421;

export default function WishingWellPage() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [wishText,    setWishText]    = useState("");
  const [amount,      setAmount]      = useState(10);
  const [cast,        setCast]        = useState(false);

  function handleCast() {
    if (!selectedTag && !wishText.trim()) return;
    setCast(true);
    setTimeout(() => setCast(false), 3000);
  }

  return (
    <div style={{
      minHeight: "calc(100vh - 65px)",
      background: "linear-gradient(160deg, #F0EBF8 0%, #F7F3FB 40%, #FBF6F0 100%)",
      padding: "0 0 60px",
    }}>

      {/* ── Page header ── */}
      <div style={{ textAlign:"center", padding:"44px 24px 20px" }}>
        {/* Sparkle divider top */}
        <div style={{ marginBottom:20 }}>
          <svg width="120" height="28" viewBox="0 0 120 28" fill="none" style={{ opacity:0.7 }}>
            <line x1="0" y1="14" x2="48" y2="14" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4"/>
            <g transform="translate(60,14)">
              <line x1="0" y1="-9" x2="0" y2="9"   stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="-9" y1="0" x2="9" y2="0"   stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="-5.5" y1="-5.5" x2="5.5" y2="5.5" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
              <line x1="5.5"  y1="-5.5" x2="-5.5" y2="5.5" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
            </g>
            <line x1="72" y1="14" x2="120" y2="14" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4"/>
          </svg>
        </div>

        <h1 className="wm-fadeup" style={{
          fontFamily: SERIF,
          fontSize: "clamp(28px, 4vw, 46px)",
          fontWeight: 400, color: TEXT,
          lineHeight: 1.15, marginBottom: 12,
        }}>
          <span style={{ color: GOLD }}>✦</span>
          {" "}The WishMaker Wishing Well{" "}
          <span style={{ color: GOLD }}>✦</span>
        </h1>
        <p className="wm-fadeup1" style={{ fontSize:16, color:TEXT2, lineHeight:1.7, fontFamily:SANS, marginBottom:4 }}>
          Send a wish into the well and help grant one for a child in need.
        </p>
        <p className="wm-fadeup1" style={{ fontSize:15, color:TEXT2, fontFamily:SANS }}>
          100% donated to Make-A-Wish.
        </p>

        {/* Gold divider */}
        <div className="wm-fadeup2" style={{ display:"flex", alignItems:"center", gap:16, maxWidth:400, margin:"24px auto 0" }}>
          <div style={{ flex:1, height:1, background:"rgba(184,150,12,0.25)" }}/>
          <span style={{ color:GOLD, fontSize:13 }}>✦</span>
          <div style={{ flex:1, height:1, background:"rgba(184,150,12,0.25)" }}/>
        </div>
      </div>

      {/* ── Main two-column area ── */}
      <div style={{
        maxWidth: 860, margin: "0 auto",
        padding: "10px 32px 0",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center",
      }}>

        {/* Left: illustration */}
        <div className="wm-fadeup1" style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
          <WishingWellIllustration/>
        </div>

        {/* Right: interaction panel */}
        <div className="wm-fadeup2" style={{
          background: "rgba(255,255,255,0.72)",
          border: `1px solid rgba(184,150,12,0.18)`,
          borderRadius: 14,
          padding: "28px 26px",
          backdropFilter: "blur(8px)",
        }}>

          {/* Wish tags */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:20 }}>
            {WISH_TAGS.map(tag => (
              <WishTag
                key={tag}
                label={tag}
                selected={selectedTag === tag}
                onClick={() => setSelectedTag(prev => prev === tag ? null : tag)}
              />
            ))}
          </div>

          {/* Optional text */}
          <p style={{ fontSize:13, color:TEXT3, fontFamily:SANS, textAlign:"center", marginBottom:8 }}>
            Write your wish (optional)
          </p>
          <textarea
            className="wm-input"
            value={wishText}
            onChange={e => setWishText(e.target.value)}
            maxLength={160}
            placeholder="May hope and strength find those who need it most."
            style={{
              width: "100%",
              height: 76,
              padding: "11px 13px",
              background: BG_WHITE,
              border: `1.5px solid ${BORDER}`,
              borderRadius: 6,
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 13.5,
              color: TEXT,
              lineHeight: 1.65,
              resize: "none",
              boxSizing: "border-box",
              marginBottom: 16,
              display: "block",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
          />

          {/* Amount buttons */}
          <div style={{ display:"flex", gap:10, marginBottom:20 }}>
            {AMOUNTS.map(a => (
              <AmountBtn key={a} amount={a} selected={amount === a} onClick={() => setAmount(a)}/>
            ))}
          </div>

          {/* Cast CTA */}
          <button
            onClick={handleCast}
            disabled={!selectedTag && !wishText.trim()}
            style={{
              width: "100%",
              padding: "15px 20px",
              background: (!selectedTag && !wishText.trim()) ? "rgba(184,150,12,0.35)" : GOLD_GRAD,
              border: "none",
              borderRadius: 8,
              color: "#FFF8E8",
              fontFamily: SANS,
              fontSize: 15.5,
              fontWeight: 600,
              letterSpacing: "0.02em",
              cursor: (!selectedTag && !wishText.trim()) ? "not-allowed" : "pointer",
              boxShadow: "0 4px 20px rgba(184,150,12,0.32)",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {cast ? "✦ Your wish is in the well ✦" : "✦ Cast Wish Into the Well"}
          </button>
        </div>
      </div>

      {/* ── Sparkle divider ── */}
      <div style={{ textAlign:"center", margin:"44px auto 20px" }}>
        <svg width="120" height="28" viewBox="0 0 120 28" fill="none" style={{ opacity:0.65 }}>
          <line x1="0" y1="14" x2="48" y2="14" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4"/>
          <g transform="translate(60,14)">
            <line x1="0" y1="-9" x2="0" y2="9"   stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="-9" y1="0" x2="9" y2="0"   stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="-5.5" y1="-5.5" x2="5.5" y2="5.5" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
            <line x1="5.5"  y1="-5.5" x2="-5.5" y2="5.5" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
          </g>
          <line x1="72" y1="14" x2="120" y2="14" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4"/>
        </svg>
      </div>

      {/* ── Wish counter ── */}
      <div style={{ textAlign:"center" }}>
        <p style={{ fontFamily:SERIF, fontSize:16, color:TEXT2 }}>
          <span style={{ color:GOLD, marginRight:8 }}>✦</span>
          Wishes Cast Into the Well:{" "}
          <strong style={{ color:TEXT }}>{(WISH_COUNT + (cast ? 1 : 0)).toLocaleString()} wishes today</strong>
        </p>
      </div>

    </div>
  );
}
