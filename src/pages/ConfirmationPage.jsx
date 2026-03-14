// ConfirmationPage — matches mockup Image 4 exactly
// Top: sparkle cluster + "Your Wish Is Now Written Into Time"
// 2-col: card (order summary) | Permanent Wish Link panel
// Share section + counter + testimonials + Make Another Wish

import { useState } from "react";
import WishCard from "../components/WishCard";
import { GOLD, GOLD_PALE, BG, BG_WHITE, BG_WARM, TEXT, TEXT2, TEXT3, BORDER, SERIF, SANS } from "../utils/tokens";

const WISH_ID = "7A3F21";

export default function ConfirmationPage({ go, wish }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="wm-screen" style={{ background:BG, overflowY:"auto" }}>
      <div style={{ maxWidth:780, margin:"0 auto", padding:"32px 28px 28px" }}>

        {/* Sparkle header */}
        <div className="wm-fadeup" style={{ textAlign:"center", marginBottom:24 }}>
          <div className="wm-shimmer" style={{ color:GOLD, fontSize:22, letterSpacing:8, marginBottom:12 }}>✦ ✦ ✦</div>
          <h1 style={{ fontFamily:SERIF, fontWeight:300, fontSize:"clamp(22px,3.5vw,38px)", color:TEXT, lineHeight:1.2, marginBottom:9 }}>
            Your Wish Is Now Written Into Time
          </h1>
          <p style={{ fontFamily:SANS, fontSize:14, color:TEXT2 }}>
            <span style={{ color:GOLD }}>✦</span> Your message has been permanently recorded on the blockchain.
          </p>
        </div>

        {/* 2-col */}
        <div className="wm-fadeup1" style={{ display:"grid", gridTemplateColumns:"auto 1fr", gap:32, alignItems:"start", marginBottom:22 }}>

          <WishCard msg={wish.msg} from={wish.from} size="md" orderSummary/>

          {/* Right panel */}
          <div style={{ background:BG_WHITE, border:`1.5px solid ${BORDER}`, borderRadius:10, padding:"20px 22px" }}>
            <p style={{ fontFamily:SANS, fontSize:15.5, fontWeight:500, color:TEXT, marginBottom:5 }}>Permanent Wish Link</p>
            <p style={{ fontFamily:SANS, fontSize:13, color:TEXT2, marginBottom:14 }}>
              Your wish can now be opened forever using the link below.
            </p>

            <p style={{ fontFamily:SANS, fontSize:13, color:TEXT2, marginBottom:6 }}>Wish ID:</p>
            <div style={{ background:BG_WARM, border:`1.5px solid ${BORDER}`, borderRadius:5, padding:"11px 14px", fontFamily:SERIF, fontSize:17, letterSpacing:"0.04em", color:TEXT, marginBottom:10 }}>
              #wish-{WISH_ID}
            </div>
            <div style={{ display:"flex", border:`1.5px solid ${BORDER}`, borderRadius:5, overflow:"hidden" }}>
              <span style={{ flex:1, padding:"10px 12px", fontSize:12, fontFamily:"'Courier New',monospace", color:TEXT2, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", borderRight:`1px solid ${BORDER}` }}>
                wishmaker.io/wish/{WISH_ID}
              </span>
              <button
                onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2200); }}
                style={{ padding:"10px 14px", background:"transparent", border:"none", color:GOLD, fontSize:12.5, fontWeight:500, cursor:"pointer", fontFamily:SANS, flexShrink:0 }}
              >
                {copied ? "✓ Copied" : "Copy Link"}
              </button>
            </div>
          </div>
        </div>

        {/* Share section */}
        <div className="wm-fadeup2" style={{ textAlign:"center", marginBottom:20 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, maxWidth:280, margin:"0 auto 14px" }}>
            <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
            <span style={{ color:GOLD, fontSize:11 }}>✦</span>
            <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
          </div>
          <h2 style={{ fontFamily:SERIF, fontWeight:400, fontSize:22, color:TEXT, marginBottom:7 }}>Share Your Wish</h2>
          <p style={{ fontFamily:SANS, fontSize:13.5, color:TEXT2, marginBottom:14 }}>
            Your printed keepsake card will arrive soon with a QR code<br/>and your unique Wish ID.
          </p>
          <div style={{ display:"flex", gap:10, justifyContent:"center", marginBottom:10 }}>
            <button style={{ flex:"0 0 auto", width:210, background:"linear-gradient(135deg,#833ab4,#e1306c,#fcb045)", color:"#fff", padding:"11px 16px", fontSize:13, border:"none", borderRadius:5, cursor:"pointer", fontFamily:SANS, fontWeight:500 }}>
              📸 Share on Instagram
            </button>
            <button style={{ flex:"0 0 auto", width:210, background:"#1877F2", color:"#fff", padding:"11px 16px", fontSize:13, border:"none", borderRadius:5, cursor:"pointer", fontFamily:SANS, fontWeight:500 }}>
              f  Share on Facebook
            </button>
          </div>
          <button style={{ width:220, background:BG_WHITE, color:TEXT2, padding:"11px", fontSize:13, border:`1.5px solid ${BORDER}`, borderRadius:5, cursor:"pointer", fontFamily:SANS }}>
            🔗 Copy Link
          </button>
        </div>

        {/* Counter */}
        <div style={{ textAlign:"center", marginBottom:18 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, maxWidth:280, margin:"0 auto 10px" }}>
            <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
            <span style={{ color:GOLD, fontSize:11 }}>✦</span>
            <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
          </div>
          <p style={{ fontFamily:SERIF, fontSize:16, color:TEXT2, marginBottom:4 }}>Wishes Written Into Time</p>
          <p style={{ fontFamily:SERIF, fontSize:30, fontWeight:600, color:TEXT, marginBottom:2 }}>12,418 wishes created</p>
        </div>

        {/* Make another + testimonials */}
        <div style={{ display:"flex", alignItems:"flex-start", gap:20, marginBottom:10 }}>
          <div style={{ flex:1 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
              <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
              <span style={{ color:GOLD, fontSize:11 }}>✦</span>
              <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
            </div>
            <h2 style={{ fontFamily:SERIF, fontWeight:400, fontSize:20, color:TEXT, marginBottom:7 }}>Make Another Wish</h2>
            <p style={{ fontFamily:SERIF, fontStyle:"italic", color:GOLD, fontSize:13.5, marginBottom:12 }}>
              ✦ A portion of your wish will help grant a wish for a child in need.
            </p>
            {[
              ["Grandpa, your stories will live forever.","Chicago"],
              ["Happy Wedding Day Sarah.","Texas"],
              ["For my son's graduation.","Boston"],
            ].map(([text, city]) => (
              <p key={city} style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:13.5, color:TEXT2, marginBottom:6 }}>
                "{text}" — <em>{city}</em>
              </p>
            ))}
          </div>
          <button
            className="wm-outline-btn"
            onClick={() => go("make")}
            style={{
              flexShrink:0, marginTop:36,
              background:BG_WHITE, border:`1.5px solid ${BORDER}`,
              borderRadius:6, padding:"12px 22px",
              fontFamily:SANS, fontSize:14, color:TEXT2, cursor:"pointer",
            }}
          >
            Make Another Wish
          </button>
        </div>

      </div>
    </div>
  );
}
