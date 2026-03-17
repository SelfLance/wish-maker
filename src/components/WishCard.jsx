// ─────────────────────────────────────────────────────────
// WishCard.jsx
// Folded greeting-card visual. Appears on every page.
//
// Props:
//   msg          (string)  – message text; empty → sample
//   from         (string)  – sender name
//   size         (string)  – "lg" | "md" | "sm"
//   floating     (bool)    – slow float animation (hero)
//   orderSummary (bool)    – shows order panel on cover
//                            instead of shooting star art
// ─────────────────────────────────────────────────────────

import StarArt from "./StarArt";
import { GOLD, TEXT, TEXT2, TEXT3, BORDER, SERIF, SANS } from "../utils/tokens";

const DIMS  = { lg: [286, 370], md: [198, 258], sm: [152, 198] };
const PADS  = { lg: "34px 24px 19px", md: "22px 17px 14px", sm: "16px 13px 11px" };
const STARS = { lg: 132, md: 88, sm: 66 };

export default function WishCard({
  msg          = "",
  from         = "",
  size         = "lg",
  floating     = false,
  orderSummary = false,
}) {
  const [W, H]  = DIMS[size]  || DIMS.md;
  const starSz  = STARS[size] || 88;
  const isEmpty = !msg && !orderSummary;
  // Responsive className lets media queries shrink card on mobile
  const resCls  = size === "lg" ? "wm-card-lg-w" : size === "md" ? "wm-card-md-w" : "";

  const coverSt = {
    width: W, height: H, flexShrink: 0,
    background: "linear-gradient(155deg, #F5EDD8 0%, #E8DEB8 100%)",
    border: "1px solid rgba(184,150,12,0.20)", borderRight: "none",
    borderRadius: "6px 0 0 6px",
    display: "flex", alignItems: "center", justifyContent: "center",
    position: "relative", overflow: "hidden",
  };

  const innerSt = {
    width: W, height: H, flexShrink: 0,
    background: "linear-gradient(165deg, #FDFAF2 0%, #F6F0E2 100%)",
    border: "1px solid rgba(184,150,12,0.18)",
    borderRadius: "0 6px 6px 0",
    display: "flex", flexDirection: "column",
    padding: PADS[size] || PADS.md,
    position: "relative", overflow: "hidden",
  };

  return (
    <div
      className={floating ? "wm-float" : ""}
      style={{ display: "flex", filter: "drop-shadow(0 16px 44px rgba(0,0,0,0.14))" }}
    >
      {/* ── Cover panel ── */}
      <div className={resCls} style={coverSt}>
        {/* Sheen */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(130deg,rgba(255,255,255,0.30) 0%,transparent 60%)", pointerEvents:"none" }}/>

        {orderSummary ? (
          <div style={{ display:"flex", flexDirection:"column", width:"100%", height:"100%", padding:"17px 15px", position:"relative", zIndex:1 }}>
            <div style={{ fontSize:8.5, textTransform:"uppercase", letterSpacing:"0.1em", color:TEXT3, marginBottom:7, fontWeight:500, fontFamily:SANS }}>Order Summary</div>
            <div style={{ fontSize:12, fontWeight:600, marginBottom:9, color:TEXT, fontFamily:SERIF }}>WishMaker Forever Card</div>
            <div style={{ flex:1, fontSize:10.5, color:TEXT2, lineHeight:2.0, fontFamily:SANS }}>
              {["Permanent digital wish","Shareable wish link","Printed keepsake card"].map(f => (
                <div key={f}><span style={{ color:GOLD, marginRight:4, fontWeight:700 }}>✓</span>{f}</div>
              ))}
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", borderTop:`1px solid ${BORDER}`, paddingTop:9, fontWeight:600, fontSize:12, fontFamily:SANS }}>
              <span style={{ color:TEXT }}>Total:</span>
              <span style={{ color:GOLD }}>$10</span>
            </div>
          </div>
        ) : (
          <div style={{ position:"relative", zIndex:1 }}>
            <StarArt size={starSz}/>
          </div>
        )}
      </div>

      {/* ── Inner panel ── */}
      <div className={resCls} style={innerSt}>
        <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", gap:10 }}>
          {msg ? (
            <>
              <p style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:14, lineHeight:1.82, color:"#3A3020" }}>{msg}</p>
              {from && <p style={{ fontFamily:SERIF, fontWeight:600, fontSize:15, color:"#3A3020", marginTop:4 }}>— {from}</p>}
            </>
          ) : isEmpty ? (
            <>
              <p style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:13.5, lineHeight:1.82, color:"#3A3020" }}>
                May your life be filled with<br/>peace, love, and joy,<br/>now and always.
              </p>
              <div style={{ marginTop:6 }}>
                <p style={{ fontFamily:SERIF, fontSize:13.5, color:"#3A3020" }}>Forever in my heart,</p>
                <p style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:16, color:"#3A3020", marginTop:3 }}>— Michael</p>
              </div>
            </>
          ) : (
            <p style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:13, color:"#C8BEAC" }}>Type your heartfelt wish...</p>
          )}
        </div>
        {/* Footer stamp */}
        <div style={{ paddingTop:9, borderTop:"1px dashed rgba(184,150,12,0.24)", textAlign:"center" }}>
          <span style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:9.5, color:TEXT3, letterSpacing:"0.02em" }}>
            ✦ This wish is written permanently into time.
          </span>
        </div>
      </div>
    </div>
  );
}
