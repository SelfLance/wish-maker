// ─────────────────────────────────────────────────────────
// HomePage.jsx
// Landing page: hero section, 3-feature strip, tagline.
// ─────────────────────────────────────────────────────────

import WishCard    from "../components/WishCard";
import GoldButton  from "../components/GoldButton";
import { GOLD, GOLD_GLOW, GOLD_PALE, BG, BG_WHITE, TEXT, TEXT2, BORDER, SERIF, SANS } from "../utils/tokens";

export default function HomePage({ go }) {
  return (
    <div style={{ background:BG }}>

      {/* ── Hero ── */}
      <div className="wm-hero" style={{
        maxWidth:1100, margin:"0 auto", padding:"76px 48px 60px",
        display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center",
      }}>
        {/* Copy */}
        <div>
          <div className="wm-fadeup" style={{ display:"flex", alignItems:"center", gap:8, fontSize:12, letterSpacing:"0.1em", textTransform:"uppercase", color:GOLD, fontWeight:500, marginBottom:10, fontFamily:SANS }}>
            ✦ Written into time, forever
          </div>
          <h1 className="wm-fadeup1 wm-hero-h1" style={{ fontFamily:SERIF, fontSize:"clamp(46px,5.5vw,70px)", fontWeight:300, lineHeight:1.08, letterSpacing:"-0.02em", marginBottom:14, color:TEXT }}>
            Make a wish<br/>that lasts<br/>forever.
          </h1>
          <p className="wm-fadeup2" style={{ fontFamily:SERIF, fontStyle:"italic", color:GOLD, fontSize:18, marginBottom:14 }}>
            For every wish you make, you help grant one.
          </p>
          <p className="wm-fadeup2" style={{ fontSize:15, color:TEXT2, lineHeight:1.78, maxWidth:420, marginBottom:34, fontFamily:SANS }}>
            Create a timeless digital card whose message is written permanently into time.
          </p>
          <div className="wm-fadeup3" style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}>
            <GoldButton large onClick={() => go("make")}>Make a Wish</GoldButton>
            <button onClick={() => go("how")} style={{ background:"transparent", border:"none", fontFamily:SANS, fontSize:13.5, color:TEXT2, cursor:"pointer", padding:"10px 4px" }}>
              How it works →
            </button>
          </div>
        </div>

        {/* Card visual */}
        <div className="wm-hero-vis wm-fadeup1" style={{ display:"flex", justifyContent:"center", alignItems:"center", position:"relative" }}>
          <div style={{ position:"absolute", width:320, height:320, background:`radial-gradient(circle,${GOLD_GLOW},transparent 72%)`, borderRadius:"50%", pointerEvents:"none" }}/>
          <WishCard floating/>
        </div>
      </div>

      {/* ── Feature strip ── */}
      <div style={{ borderTop:`1px solid ${BORDER}`, borderBottom:`1px solid ${BORDER}`, background:BG_WHITE, padding:"44px 48px" }}>
        <div className="wm-feats" style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:48 }}>
          {[
            { icon:"✦", title:"Write Your Card", desc:"Create your message." },
            { icon:"♡", title:"Send Your Wish",  desc:"Share it with someone special." },
            { icon:"∞", title:"Lasts Forever",   desc:"Your wish is written into time." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", gap:13 }}>
              <div style={{ width:52, height:52, borderRadius:"50%", background:GOLD_GLOW, border:`1.5px solid ${GOLD_PALE}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:21, color:GOLD }}>
                {icon}
              </div>
              <p style={{ fontWeight:500, fontSize:15, color:TEXT, fontFamily:SANS }}>{title}</p>
              <p style={{ fontSize:13, color:TEXT2, lineHeight:1.65, fontFamily:SANS }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tagline ── */}
      <div style={{ textAlign:"center", padding:"52px 24px" }}>
        <p style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:"clamp(18px,2.4vw,23px)", color:TEXT2 }}>
          For every wish you make, you help grant one.
        </p>
      </div>
    </div>
  );
}
