// ImpactPage — matches mockup Image 2 exactly
// Single scrollable column: title → subtitle → image placeholder →
// 50% stat text → Why It Matters → A Lasting Ripple + checklist + closing italic

import { GOLD, BG, TEXT, TEXT2, TEXT3, SERIF, SANS } from "../utils/tokens";

export default function ImpactPage({ go }) {
  return (
    <div className="wm-screen" style={{ background:BG, overflowY:"auto" }}>
      <div style={{ maxWidth:640, margin:"0 auto", padding:"36px 28px 36px" }}>

        {/* Header */}
        <div className="wm-fadeup" style={{ textAlign:"center", marginBottom:22 }}>
          <h1 style={{ fontFamily:SERIF, fontWeight:300, fontSize:"clamp(32px,5vw,50px)", color:TEXT, marginBottom:9 }}>
            Our Impact
          </h1>
          <h2 style={{ fontFamily:SERIF, fontStyle:"italic", color:GOLD, fontSize:22, fontWeight:400, marginBottom:13 }}>
            A Wish That Gives Back
          </h2>
          <p style={{ fontFamily:SANS, fontSize:15, color:TEXT2, lineHeight:1.75, marginBottom:3 }}>
            Every message written on WishMaker becomes more than a memory.
          </p>
          <p style={{ fontFamily:SANS, fontSize:15, color:TEXT2 }}>
            It becomes a moment of hope.
          </p>
        </div>

        {/* Hero image — warm fade placeholder styled like mockup */}
        <div className="wm-fadeup1" style={{
          width:"100%", borderRadius:8, marginBottom:28,
          height:220, overflow:"hidden", position:"relative",
          background:"linear-gradient(135deg,#FFF4EC 0%,#FDEBD0 50%,#F7E4D0 100%)",
          display:"flex", alignItems:"center", justifyContent:"center",
        }}>
          {/* Fade overlay to match mockup's soft vignette */}
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center, rgba(255,255,255,0) 40%, rgba(249,245,242,0.80) 100%)", pointerEvents:"none" }}/>
          {/* Mickey silhouette area — text label */}
          <div style={{ textAlign:"center", zIndex:1 }}>
            <div style={{ fontSize:52, marginBottom:4 }}>🌟</div>
            <p style={{ fontFamily:SANS, fontSize:12, color:TEXT3 }}>Make-A-Wish Foundation</p>
          </div>
        </div>

        {/* 50% stat */}
        <div className="wm-fadeup2" style={{ marginBottom:28, textAlign:"center" }}>
          <p style={{ fontFamily:SANS, fontSize:16, lineHeight:1.85, color:TEXT }}>
            <span style={{ fontFamily:SERIF, fontSize:22, fontWeight:600, color:GOLD }}>50% of every </span>
            WishMaker purchase is donated to the <strong>Make-A-Wish Foundation</strong>,
            helping grant life-changing wishes for children facing critical illnesses.
          </p>
          <p style={{ fontFamily:SANS, fontSize:15, color:TEXT2, lineHeight:1.85, marginTop:16 }}>
            When you create a wish for someone you love, you are also helping grant a wish for a child who needs hope the most.
          </p>
        </div>

        {/* Divider */}
        <div style={{ display:"flex", alignItems:"center", gap:14, maxWidth:320, margin:"0 auto 24px" }}>
          <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
          <span style={{ color:GOLD, fontSize:12 }}>✦</span>
          <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
        </div>

        {/* Why It Matters */}
        <div style={{ marginBottom:28 }}>
          <h2 style={{ fontFamily:SERIF, fontWeight:400, fontSize:28, color:TEXT, marginBottom:13 }}>Why It Matters</h2>
          <p style={{ fontFamily:SANS, fontSize:15, color:TEXT2, lineHeight:1.82, marginBottom:10 }}>
            For children battling serious illness, a wish can mean more than a dream fulfilled.
          </p>
          <p style={{ fontFamily:SANS, fontSize:15, lineHeight:1.82, color:TEXT }}>
            It can restore joy, <strong>inspire strength</strong>, and bring families moments of light during the darkest times.
          </p>
        </div>

        {/* A Lasting Ripple */}
        <div style={{ marginBottom:28 }}>
          <h2 style={{ fontFamily:SERIF, fontWeight:400, fontSize:28, color:TEXT, marginBottom:13 }}>A Lasting Ripple</h2>
          <p style={{ fontFamily:SANS, fontSize:15, color:TEXT, marginBottom:14 }}>
            A <strong>single</strong> WishMaker card creates <strong>three</strong> lasting impacts:
          </p>
          {[
            "A message preserved forever on the blockchain",
            "A keepsake card shared with someone you love",
            "A real wish granted for a child in need",
          ].map(item => (
            <div key={item} style={{ display:"flex", alignItems:"flex-start", gap:10, fontSize:15, color:TEXT2, lineHeight:1.68, marginBottom:10, fontFamily:SANS }}>
              <span style={{ color:GOLD, fontWeight:700, marginTop:2, flexShrink:0 }}>✓</span>{item}
            </div>
          ))}
          <p style={{ fontFamily:SANS, fontSize:15, color:TEXT, marginTop:10 }}>One message. Three lives touched.</p>
        </div>

        {/* Closing italic */}
        <div style={{ textAlign:"center", paddingTop:8 }}>
          <p style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:18, color:TEXT, lineHeight:1.65 }}>
            ✦ <em>Make a wish that lasts forever — and help grant one that truly matters.</em>
          </p>
        </div>

      </div>
    </div>
  );
}
