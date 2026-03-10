// ─────────────────────────────────────────────────────────
// ConfirmationPage.jsx  (Step 4)
// Purchase success. Shows: sparkle header, wish ID + link,
// share buttons, wish counter, testimonials, make-another CTA.
// ─────────────────────────────────────────────────────────

import { useState }    from "react";
import WishCard        from "../components/WishCard";
import OutlineButton   from "../components/OutlineButton";
import ConfCard        from "../components/ConfCard";
import { GOLD, GOLD_PALE, BG, BG_WHITE, BG_WARM, TEXT2, BORDER, SERIF, SANS } from "../utils/tokens";

const WISH_ID = "wish-7A3F21";

export default function ConfirmationPage({ go, wish }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="wm-page" style={{ background:BG, minHeight:"calc(100vh - 65px)", padding:"56px 48px 44px" }}>
      <div style={{ maxWidth:960, margin:"0 auto" }}>

        {/* ── Sparkle header ── */}
        <div className="wm-fadeup" style={{ textAlign:"center", marginBottom:44 }}>
          <div className="wm-shimmer" style={{ fontSize:26, letterSpacing:12, marginBottom:18, color:GOLD }}>✦ ✦ ✦</div>
          <h1 style={{ fontFamily:SERIF, fontSize:"clamp(28px,4vw,50px)", fontWeight:300, lineHeight:1.18, marginBottom:13 }}>
            Your Wish Is Now Written Into Time
          </h1>
          <p style={{ fontSize:15, color:TEXT2, fontFamily:SANS }}>
            <span style={{ color:GOLD }}>✦</span> Your message has been permanently recorded on the blockchain.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="wm-2col wm-fadeup1" style={{ display:"grid", gridTemplateColumns:"auto 1fr", gap:52, alignItems:"start" }}>

          <WishCard msg={wish.msg} from={wish.from} size="md" orderSummary/>

          <div style={{ display:"flex", flexDirection:"column", gap:18 }}>

            {/* Permanent link */}
            <ConfCard title="Permanent Wish Link" sub="Your wish can now be opened forever using the link below.">
              <p style={{ fontSize:13, color:TEXT2, marginBottom:7, fontFamily:SANS }}>Wish ID:</p>
              <div style={{ background:BG_WARM, border:`1.5px solid ${BORDER}`, borderRadius:5, padding:"12px 15px", fontFamily:SERIF, fontSize:18, fontWeight:600, letterSpacing:"0.04em", marginBottom:10 }}>
                #{WISH_ID}
              </div>
              <div style={{ display:"flex", alignItems:"center", border:`1.5px solid ${BORDER}`, borderRadius:5, overflow:"hidden" }}>
                <span style={{ flex:1, padding:"10px 14px", fontSize:12, color:TEXT2, fontFamily:"'Courier New',monospace", borderRight:`1px solid ${BORDER}`, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                  wishmaker.io/{WISH_ID}
                </span>
                <button
                  onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2200); }}
                  style={{ padding:"10px 16px", background:"transparent", border:"none", color:GOLD, fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:SANS, flexShrink:0 }}
                >
                  {copied ? "✓ Copied" : "Copy Link"}
                </button>
              </div>
            </ConfCard>

            {/* Share */}
            <ConfCard title="Share Your Wish" sub="Your printed keepsake card will arrive soon with a QR code and your unique Wish ID.">
              <div className="wm-social" style={{ display:"flex", gap:10, marginBottom:10 }}>
                <button style={{ flex:1, background:"linear-gradient(135deg,#833ab4,#e1306c,#fcb045)", color:"#fff", padding:"11px 16px", fontSize:13, border:"none", borderRadius:5, cursor:"pointer", fontFamily:SANS, fontWeight:500 }}>
                  📸 Share on Instagram
                </button>
                <button style={{ flex:1, background:"#1877F2", color:"#fff", padding:"11px 16px", fontSize:13, border:"none", borderRadius:5, cursor:"pointer", fontFamily:SANS, fontWeight:500 }}>
                  f  Share on Facebook
                </button>
              </div>
              <button style={{ width:"100%", background:BG_WHITE, color:TEXT2, padding:"11px", fontSize:13, border:`1.5px solid ${BORDER}`, borderRadius:5, cursor:"pointer", fontFamily:SANS }}>
                🔗 Copy Link
              </button>
            </ConfCard>

            {/* Counter */}
            <ConfCard>
              <p style={{ fontSize:13, color:TEXT2, marginBottom:12, textAlign:"center", fontFamily:SANS }}>Wishes Written Into Time</p>
              <div style={{ background:BG_WARM, borderRadius:5, padding:"18px 12px", textAlign:"center" }}>
                <strong style={{ fontFamily:SERIF, fontSize:38, fontWeight:600, display:"block", lineHeight:1.2 }}>12,418</strong>
                <small style={{ fontSize:13, color:TEXT2, fontFamily:SANS }}>wishes created</small>
              </div>
            </ConfCard>

            {/* Make another + testimonials */}
            <ConfCard title="Make Another Wish">
              <p style={{ fontFamily:SERIF, fontStyle:"italic", color:GOLD, fontSize:14, marginBottom:14 }}>
                ✦ A portion of your wish will help grant a wish for a child in need.
              </p>
              {[
                ["Grandpa, your stories will live forever.", "Chicago"],
                ["Happy Wedding Day Sarah.",                 "Texas"],
                ["For my son's graduation.",                 "Boston"],
              ].map(([text, city]) => (
                <div key={city} style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:13.5, color:TEXT2, padding:"9px 13px", background:BG_WARM, borderRadius:5, borderLeft:`2px solid ${GOLD_PALE}`, marginBottom:9 }}>
                  "{text}" — <em>{city}</em>
                </div>
              ))}
              <div style={{ marginTop:14, display:"flex", justifyContent:"flex-end" }}>
                <OutlineButton onClick={() => go("make")}>Make Another Wish</OutlineButton>
              </div>
            </ConfCard>
          </div>
        </div>
      </div>
    </div>
  );
}
