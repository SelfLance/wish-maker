// ─────────────────────────────────────────────────────────
// Navbar.jsx
// Sticky top navigation bar.
// Shows purchase-flow progress dots on steps 1–4.
//
// Props:
//   page (string) – current page key
//   go   (fn)     – navigate: go("home")
// ─────────────────────────────────────────────────────────

import { GOLD, GOLD_PALE, TEXT, TEXT2, BORDER, SERIF, SANS, FLOW_STEP } from "../utils/tokens";

export default function Navbar({ page, go }) {
  const step = FLOW_STEP[page] ?? null;

  return (
    <nav
      className="wm-nav"
      style={{
        position: "sticky", top: 0, zIndex: 300,
        background: "rgba(250,248,245,0.96)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${BORDER}`,
        height: 65,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px",
      }}
    >
      {/* Logo */}
      <div
        onClick={() => go("home")}
        style={{ display:"flex", alignItems:"center", gap:9, cursor:"pointer", userSelect:"none" }}
      >
        <span className="wm-pulse" style={{ color:GOLD, fontSize:17, display:"inline-block" }}>✦</span>
        <span style={{ fontFamily:SERIF, fontSize:21, fontWeight:700, color:TEXT, letterSpacing:"-0.01em" }}>
          WishMaker<span style={{ color:GOLD }}>.io</span>
        </span>
      </div>

      {/* Flow progress dots (only during checkout steps) */}
      {step != null && (
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{
              width:7, height:7, borderRadius:"50%",
              background: i === step ? GOLD : i < step ? GOLD_PALE : BORDER,
              transform: i === step ? "scale(1.4)" : "scale(1)",
              transition: "all 0.2s",
            }}/>
          ))}
        </div>
      )}

      {/* Nav links */}
      <ul style={{ display:"flex", gap:32, listStyle:"none", margin:0, padding:0 }}>
        {[["how","How it works"],["impact","Impact"]].map(([p, label]) => (
          <li key={p}>
            <span
              className={`wm-nav-link${page === p ? " active" : ""}`}
              onClick={() => go(p)}
              style={{ fontFamily:SANS, fontSize:13.5, color:TEXT2, cursor:"pointer", paddingBottom:3, transition:"color 0.2s" }}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
