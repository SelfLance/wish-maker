// CompleteWishPage — matches mockup Image 6 exactly
// Centre: open card preview | Right: form panel with delivery + price + CTA

import { useState } from "react";
import WishCard from "../components/WishCard";
import { GOLD, BG, BG_WHITE, TEXT, TEXT2, TEXT3, BORDER, SERIF, SANS } from "../utils/tokens";

function Field({ label, sublabel, placeholder, type="text", value, onChange }) {
  return (
    <div style={{ marginBottom:14 }}>
      {label && <p style={{ fontFamily:SANS, fontSize:14, fontWeight:500, color:TEXT, marginBottom:sublabel?2:6 }}>{label}</p>}
      {sublabel && <p style={{ fontFamily:SANS, fontSize:12, color:TEXT3, marginBottom:6 }}>{sublabel}</p>}
      <input
        className="wm-input"
        type={type} value={value} onChange={onChange} placeholder={placeholder}
        style={{
          width:"100%", padding:"11px 13px",
          background:BG_WHITE, border:`1.5px solid ${BORDER}`,
          borderRadius:5, fontFamily:SANS, fontSize:14, color:TEXT,
          boxSizing:"border-box",
        }}
      />
    </div>
  );
}

export default function CompleteWishPage({ go, wish }) {
  const [email, setEmail] = useState("");
  const [addr,  setAddr]  = useState("");

  return (
    <div className="wm-screen" style={{ background:BG }}>

      {/* Header */}
      <div className="wm-fadeup" style={{ textAlign:"center", padding:"24px 24px 0", flexShrink:0 }}>
        <h1 style={{ fontFamily:SERIF, fontWeight:300, fontSize:"clamp(28px,4vw,44px)", color:TEXT, marginBottom:8 }}>
          Complete Your Wish
        </h1>
        <p style={{ fontFamily:SANS, fontSize:14.5, color:TEXT2 }}>
          Review your wish and complete your order. Your message will be preserved forever.
        </p>
      </div>

      {/* Main 2-col */}
      <div style={{
        flex:"1 1 0", minHeight:0,
        display:"flex", alignItems:"center", justifyContent:"center",
        gap:44, padding:"14px 56px",
      }}>

        {/* Card visual */}
        <div className="wm-fadeup1" style={{ flexShrink:0 }}>
          <WishCard msg={wish.msg} from={wish.from} size="lg"/>
        </div>

        {/* Form panel */}
        <div className="wm-fadeup2" style={{
          background:BG_WHITE, border:`1.5px solid ${BORDER}`,
          borderRadius:10, padding:"24px 26px", width:360, flexShrink:0,
        }}>
          <p style={{ fontFamily:SANS, fontSize:15, color:TEXT, marginBottom:16 }}>
            <strong style={{ fontWeight:500 }}>From:</strong>{"  "}{wish.from || "—"}
          </p>

          <Field label="Send To (Digital Delivery)" sublabel="Recipient Email:" placeholder="" type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
          <Field label="Send To (Physical Card)" placeholder="" value={addr} onChange={e=>setAddr(e.target.value)}/>

          {/* Product line */}
          <div style={{ display:"flex", justifyContent:"space-between", padding:"14px 0 8px", borderTop:`1px solid ${BORDER}`, marginTop:4 }}>
            <p style={{ fontFamily:SANS, fontSize:14.5, fontWeight:500, color:TEXT }}>WishMaker Forever Card</p>
            <p style={{ fontFamily:SANS, fontSize:15, fontWeight:600, color:GOLD }}>$10</p>
          </div>

          <p style={{ fontFamily:SANS, fontSize:12.5, color:TEXT3, marginBottom:7 }}>Includes:</p>
          {["Permanent digital wish","Shareable wish link","Printed keepsake card mailed to recipient"].map(f => (
            <div key={f} style={{ display:"flex", alignItems:"center", gap:7, fontSize:13, color:TEXT2, marginBottom:6, fontFamily:SANS }}>
              <span style={{ color:GOLD, fontWeight:700, fontSize:12 }}>✓</span>{f}
            </div>
          ))}

          <button
            className="wm-gold-btn"
            onClick={() => go("checkout")}
            style={{
              width:"100%", marginTop:16,
              background:"linear-gradient(135deg,#C9A227 0%,#9A7400 100%)",
              border:"none", borderRadius:6,
              color:"#FFF8E8", fontFamily:SANS, fontWeight:500,
              fontSize:16, padding:"14px 0", cursor:"pointer",
              boxShadow:"0 4px 18px rgba(184,150,12,0.30)",
            }}
          >
            Place Your Wish
          </button>
        </div>
      </div>

      {/* Footer tagline */}
      <div style={{ flexShrink:0, textAlign:"center", padding:"0 24px 14px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, maxWidth:320, margin:"0 auto 10px" }}>
          <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
          <span style={{ color:GOLD, fontSize:12 }}>✦</span>
          <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
        </div>
        <p style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:15.5, color:TEXT2 }}>
          Every wish you make helps grant one for a child in need.
        </p>
      </div>
    </div>
  );
}
