// ─────────────────────────────────────────────────────────
// HomePage.jsx
// Above-the-fold landing page — hero + feature strip +
// tagline all fit within one viewport height, no scroll.
//
// Layout strategy:
//   • Outer wrapper: height calc(100vh - 65px), flex column
//   • Hero:          flex 1 — grows to fill remaining space
//   • Feature strip: flexShrink 0, compact 16px padding
//   • Tagline:       flexShrink 0, slim 12px padding
//
// On ≤860px the .wm-atf class (GlobalStyles) restores
// height:auto so small screens can still scroll freely.
// ─────────────────────────────────────────────────────────

import WishCard   from "../components/WishCard";
import GoldButton from "../components/GoldButton";
import { GOLD, GOLD_GLOW, GOLD_PALE, BG, BG_WHITE, TEXT, TEXT2, BORDER, SERIF, SANS } from "../utils/tokens";

export default function HomePage({ go }) {
  return (
    <div
      className="wm-atf"
      style={{
        background: BG,
        height: "calc(100vh - 65px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >

      {/* ── Hero — fills all remaining space ── */}
      <div
        className="wm-hero"
        style={{
          flex: "1 1 0", minHeight: 0,
          maxWidth: 1100, width: "100%", margin: "0 auto",
          padding: "0 48px",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 48, alignItems: "center",
        }}
      >
        {/* Left: copy */}
        <div>
          <div className="wm-fadeup" style={{ display:"flex", alignItems:"center", gap:8, fontSize:11, letterSpacing:"0.11em", textTransform:"uppercase", color:GOLD, fontWeight:500, marginBottom:8, fontFamily:SANS }}>
            ✦ Written into time, forever
          </div>
          <h1 className="wm-fadeup1 wm-hero-h1" style={{ fontFamily:SERIF, fontSize:"clamp(36px,4.6vw,64px)", fontWeight:300, lineHeight:1.08, letterSpacing:"-0.02em", marginBottom:10, color:TEXT }}>
            Make a wish<br/>that lasts<br/>forever.
          </h1>
          <p className="wm-fadeup2" style={{ fontFamily:SERIF, fontStyle:"italic", color:GOLD, fontSize:17, marginBottom:10 }}>
            For every wish you make, you help grant one.
          </p>
          <p className="wm-fadeup2" style={{ fontSize:14, color:TEXT2, lineHeight:1.7, maxWidth:400, marginBottom:22, fontFamily:SANS }}>
            Create a timeless digital card whose message is written permanently into time.
          </p>
          <div className="wm-fadeup3">
            <GoldButton large onClick={() => go("make")}>Make a Wish</GoldButton>
          </div>
        </div>

        {/* Right: card visual */}
        <div className="wm-hero-vis wm-fadeup1" style={{ display:"flex", justifyContent:"center", alignItems:"center", position:"relative" }}>
          <div style={{ position:"absolute", width:280, height:280, background:`radial-gradient(circle,${GOLD_GLOW},transparent 72%)`, borderRadius:"50%", pointerEvents:"none" }}/>
          <WishCard floating size="md"/>
        </div>
      </div>

      {/* ── Feature strip — compact, fixed height ── */}
      <div style={{ flexShrink:0, borderTop:`1px solid ${BORDER}`, background:BG_WHITE, padding:"16px 48px" }}>
        <div
          className="wm-feats"
          style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:32 }}
        >
          {[
            { icon:"✦", title:"Write Your Card", desc:"Create your message." },
            { icon:"♡", title:"Send Your Wish",  desc:"Share it with someone special." },
            { icon:"∞", title:"Lasts Forever",   desc:"Your wish is written into time." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ width:38, height:38, borderRadius:"50%", flexShrink:0, background:GOLD_GLOW, border:`1.5px solid ${GOLD_PALE}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, color:GOLD }}>
                {icon}
              </div>
              <div>
                <p style={{ fontWeight:600, fontSize:13, color:TEXT, fontFamily:SANS, lineHeight:1.2 }}>{title}</p>
                <p style={{ fontSize:12, color:TEXT2, fontFamily:SANS, lineHeight:1.4 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tagline — slim footer strip ── */}
      <div style={{ flexShrink:0, textAlign:"center", padding:"12px 24px", borderTop:`1px solid ${BORDER}` }}>
        <p style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:"clamp(13px,1.4vw,17px)", color:TEXT2, margin:0 }}>
          For every wish you make, you help grant one.
        </p>
      </div>

    </div>
  );
}
