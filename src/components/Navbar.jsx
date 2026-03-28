// Navbar — two layouts:
// 1. WishingWell: logo left + all 4 links right (active in gold)
// 2. All other pages: logo centered + "How it works | Impact" right (TEXT color)
// Mobile: logo + hamburger, full-screen overlay menu

import { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import { GOLD, GOLD_PALE, TEXT, BORDER, SERIF, SANS, FLOW_STEP } from "../utils/tokens";

const ALL_LINKS = [
  ["home",         "Home"],
  ["how",          "How It Works"],
  ["impact",       "Impact"],
  ["wishing-well", "Wishing Well"],
];

export default function Navbar({ page, go }) {
  const step      = FLOW_STEP[page] ?? null;
  const isWell    = page === "wishing-well";
  const isMobile  = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  function navTo(p) {
    setMenuOpen(false);
    go(p);
  }

  const navHeight = isMobile ? 56 : 70;

  /* ── Mobile nav ── */
  if (isMobile) {
    return (
      <nav style={{
        position: "sticky", top: 0, zIndex: 300,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${BORDER}`,
        height: navHeight,
        display: "flex", alignItems: "center",
        padding: "0 20px", flexShrink: 0,
      }}>
        {/* Logo left */}
        <div
          onClick={() => navTo("home")}
          style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", userSelect: "none" }}
        >
          <span className="wm-pulse" style={{ color: GOLD, fontSize: 14 }}>✦</span>
          <span style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, color: TEXT, letterSpacing: "-0.01em" }}>
            WishMaker<span style={{ color: GOLD }}>.io</span>
          </span>
        </div>

        {/* Flow dots (mobile) */}
        {step != null && (
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginLeft: "auto", marginRight: 14 }}>
            {[1,2,3,4].map(i => (
              <div key={i} style={{
                width: 6, height: 6, borderRadius: "50%",
                background: i === step ? GOLD : i < step ? GOLD_PALE : BORDER,
                transform: i === step ? "scale(1.4)" : "scale(1)",
                transition: "all 0.2s",
              }}/>
            ))}
          </div>
        )}

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{
            marginLeft: step != null ? 0 : "auto",
            background: "none", border: "none",
            cursor: "pointer", padding: "6px 4px",
            fontSize: 22, color: TEXT, lineHeight: 1,
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "≡"}
        </button>

        {/* Full-screen overlay */}
        {menuOpen && (
          <div className="wm-mob-menu">
            {ALL_LINKS.map(([p, label]) => (
              <div
                key={p}
                className="wm-mob-menu-link"
                onClick={() => navTo(p)}
                style={{
                  fontFamily: SANS,
                  color: page === p ? GOLD : TEXT,
                  fontWeight: page === p ? 700 : 400,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        )}
      </nav>
    );
  }

  /* ── Desktop nav ── */
  return (
    <nav style={{
      position:"sticky", top:0, zIndex:300,
      background: "rgba(255,255,255,0.97)",
      backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)",
      borderBottom:`1px solid ${BORDER}`,
      height: navHeight,
      display:"flex", alignItems:"center",
      padding:"0 48px",
      flexShrink:0,
    }}>

      {isWell ? (
        <>
          <div
            onClick={() => go("home")}
            style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", userSelect:"none", marginRight:"auto" }}
          >
            <span className="wm-pulse" style={{ color:GOLD, fontSize:16 }}>✦</span>
            <span style={{ fontFamily:SERIF, fontSize:23, fontWeight:700, color:TEXT, letterSpacing:"-0.01em" }}>
              WishMaker<span style={{ color:GOLD }}>.io</span>
            </span>
          </div>
          <ul style={{ display:"flex", alignItems:"center", listStyle:"none", margin:0, padding:0 }}>
            {ALL_LINKS.map(([p, label], idx) => (
              <li key={p} style={{ display:"flex", alignItems:"center" }}>
                {idx > 0 && <span style={{ color:BORDER, fontSize:15, margin:"0 14px", userSelect:"none", lineHeight:1 }}>|</span>}
                <span
                  className={`wm-nav-link${page===p ? " active" : ""}${p !== "home" ? " wm-nav-gold" : ""}`}
                  onClick={() => go(p)}
                  style={{ fontFamily:SANS, fontSize:15, fontWeight:700, color:"#C9A227", opacity:1, cursor:"pointer", whiteSpace:"nowrap", paddingBottom:2, transition:"color 0.2s, opacity 0.2s" }}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div
            onClick={() => go("home")}
            style={{ position:"absolute", left:"50%", transform:"translateX(-50%)", display:"flex", alignItems:"center", gap:8, cursor:"pointer", userSelect:"none" }}
          >
            <span className="wm-pulse" style={{ color:GOLD, fontSize:16 }}>✦</span>
            <span style={{ fontFamily:SERIF, fontSize:23, fontWeight:700, color:TEXT, letterSpacing:"-0.01em" }}>
              WishMaker<span style={{ color:GOLD }}>.io</span>
            </span>
          </div>

          {step != null && (
            <div style={{ display:"flex", gap:7, alignItems:"center" }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{
                  width:7, height:7, borderRadius:"50%",
                  background: i===step ? GOLD : i<step ? GOLD_PALE : BORDER,
                  transform: i===step ? "scale(1.4)" : "scale(1)",
                  transition:"all 0.2s",
                }}/>
              ))}
            </div>
          )}

          <ul style={{ display:"flex", alignItems:"center", listStyle:"none", margin:0, padding:0, marginLeft:"auto" }}>
            {ALL_LINKS.map(([p, label], idx) => (
              <li key={p} style={{ display:"flex", alignItems:"center" }}>
                {idx > 0 && <span style={{ color:BORDER, fontSize:15, margin:"0 16px", userSelect:"none", lineHeight:1 }}>|</span>}
                <span
                  className={`wm-nav-link${page===p ? " active" : ""} wm-nav-gold`}
                  onClick={() => go(p)}
                  style={{ fontFamily:SANS, fontSize:15, fontWeight:700, color:"#C9A227", opacity:1, cursor:"pointer", whiteSpace:"nowrap", paddingBottom:2, transition:"color 0.2s" }}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}
