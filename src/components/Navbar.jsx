// Navbar — two layouts:
// 1. WishingWell: logo left + all 4 links right (active in gold)
// 2. All other pages: logo centered + "How it works | Impact" right (TEXT color)

import { GOLD, GOLD_PALE, TEXT, BORDER, SERIF, SANS, FLOW_STEP } from "../utils/tokens";

const WELL_LINKS = [
  ["home",         "Home"],
  ["how",          "How It Works"],
  ["impact",       "Impact"],
  ["wishing-well", "Wishing Well"],
];

const MAIN_LINKS = [
  ["home",         "Home"],
  ["how",          "How it works"],
  ["impact",       "Impact"],
  ["wishing-well", "Wishing Well"],
];

export default function Navbar({ page, go }) {
  const step   = FLOW_STEP[page] ?? null;
  const isWell = page === "wishing-well";

  return (
    <nav style={{
      position:"sticky", top:0, zIndex:300,
      background: isWell ? "rgba(237,232,244,0.97)" : "rgba(255,255,255,0.97)",
      backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)",
      borderBottom:`1px solid ${BORDER}`,
      height:65,
      display:"flex", alignItems:"center",
      padding:"0 48px",
      flexShrink:0,
    }}>

      {isWell ? (
        <>
          {/* Logo — left */}
          <div
            onClick={() => go("home")}
            style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", userSelect:"none", marginRight:"auto" }}
          >
            <span className="wm-pulse" style={{ color:GOLD, fontSize:16 }}>✦</span>
            <span style={{ fontFamily:SERIF, fontSize:21, fontWeight:700, color:TEXT, letterSpacing:"-0.01em" }}>
              WishMaker<span style={{ color:GOLD }}>.io</span>
            </span>
          </div>

          {/* All 4 nav links with pipe separators */}
          <ul style={{ display:"flex", alignItems:"center", listStyle:"none", margin:0, padding:0 }}>
            {WELL_LINKS.map(([p, label], idx) => (
              <li key={p} style={{ display:"flex", alignItems:"center" }}>
                {idx > 0 && (
                  <span style={{ color:BORDER, fontSize:15, margin:"0 14px", userSelect:"none", lineHeight:1 }}>|</span>
                )}
                <span
                  className={`wm-nav-link${page===p ? " active" : ""}${p !== "home" ? " wm-nav-gold" : ""}`}
                  onClick={() => go(p)}
                  style={{
                    fontFamily:SANS, fontSize:13.5,
                    fontWeight: 700,
                    color: "#C9A227",
                    opacity: 1,
                    cursor:"pointer", whiteSpace:"nowrap",
                    paddingBottom:2, transition:"color 0.2s, opacity 0.2s",
                  }}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          {/* Logo — centered (absolute) */}
          <div
            onClick={() => go("home")}
            style={{
              position:"absolute", left:"50%", transform:"translateX(-50%)",
              display:"flex", alignItems:"center", gap:8,
              cursor:"pointer", userSelect:"none",
            }}
          >
            <span className="wm-pulse" style={{ color:GOLD, fontSize:16 }}>✦</span>
            <span style={{ fontFamily:SERIF, fontSize:21, fontWeight:700, color:TEXT, letterSpacing:"-0.01em" }}>
              WishMaker<span style={{ color:GOLD }}>.io</span>
            </span>
          </div>

          {/* Flow progress dots — only during purchase steps */}
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

          {/* "How it works | Impact" — right */}
          <ul style={{ display:"flex", alignItems:"center", listStyle:"none", margin:0, padding:0, marginLeft:"auto" }}>
            {MAIN_LINKS.map(([p, label], idx) => (
              <li key={p} style={{ display:"flex", alignItems:"center" }}>
                {idx > 0 && (
                  <span style={{ color:BORDER, fontSize:15, margin:"0 16px", userSelect:"none", lineHeight:1 }}>|</span>
                )}
                <span
                  className={`wm-nav-link${page===p ? " active" : ""} wm-nav-gold`}
                  onClick={() => go(p)}
                  style={{
                    fontFamily:SANS, fontSize:14, fontWeight:700,
                    color:"#C9A227",
                    opacity:1,
                    cursor:"pointer", whiteSpace:"nowrap",
                    paddingBottom:2, transition:"color 0.2s",
                  }}
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