// CheckoutPage — matches mockup Image 7 exactly
// Left: open card (order summary cover) | Right: payment form panel
// Bottom: tagline + trust badges

import { useState } from "react";
import WishCard from "../components/WishCard";
import { GOLD, BG, BG_WHITE, TEXT, TEXT2, TEXT3, BORDER, SERIF, SANS } from "../utils/tokens";

function InputField({ placeholder, value, onChange, maxLength, type="text" }) {
  return (
    <input
      className="wm-input"
      type={type} value={value} onChange={onChange}
      placeholder={placeholder} maxLength={maxLength}
      style={{
        width:"100%", padding:"11px 13px",
        background:BG_WHITE, border:`1.5px solid ${BORDER}`,
        borderRadius:5, fontFamily:SANS, fontSize:14, color:TEXT,
        boxSizing:"border-box",
      }}
    />
  );
}

function Badge({ label }) {
  return (
    <span style={{
      fontSize:9, background:"#f0ece4", border:"1px solid #ddd6c8",
      borderRadius:3, padding:"2px 6px", color:"#6B6560",
      fontWeight:600, fontFamily:SANS,
    }}>{label}</span>
  );
}

export default function CheckoutPage({ go, wish }) {
  const [cn,  setCn]  = useState("");
  const [exp, setExp] = useState("");
  const [cvc, setCvc] = useState("");
  const [nm,  setNm]  = useState("");

  return (
    <div className="wm-screen" style={{ background:BG }}>

      {/* Header */}
      <div className="wm-fadeup" style={{ textAlign:"center", padding:"22px 24px 0", flexShrink:0 }}>
        <h1 style={{ fontFamily:SERIF, fontWeight:300, fontSize:"clamp(28px,4vw,44px)", color:TEXT, marginBottom:7 }}>
          Secure Checkout
        </h1>
        <p style={{ fontFamily:SANS, fontSize:14.5, color:TEXT2 }}>
          Make this a WishMaker Forever Card. Your message will be preserved forever.
        </p>
      </div>

      {/* Main 2-col */}
      <div style={{
        flex:"1 1 0", minHeight:0,
        display:"flex", alignItems:"center", justifyContent:"center",
        gap:40, padding:"10px 56px",
      }}>

        {/* Left: card with order summary cover */}
        <div className="wm-fadeup1" style={{ flexShrink:0 }}>
          <WishCard msg={wish.msg} from={wish.from} size="lg" orderSummary/>
        </div>

        {/* Right: payment panel */}
        <div className="wm-fadeup2" style={{
          background:BG_WHITE, border:`1.5px solid ${BORDER}`,
          borderRadius:10, padding:"22px 26px", width:380, flexShrink:0,
        }}>
          <p style={{ fontFamily:SANS, fontSize:16, fontWeight:500, color:TEXT, marginBottom:14 }}>
            Payment Information
          </p>

          {/* Pay row */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
            <span style={{ fontFamily:SANS, fontSize:13.5, color:TEXT2 }}>Pay $10 with card</span>
            <div style={{ display:"flex", gap:4 }}>
              {["VISA","MC","AMEX","DISC"].map(b => <Badge key={b} label={b}/>)}
            </div>
          </div>

          {/* Card number */}
          <div style={{ marginBottom:10 }}>
            <InputField placeholder="1234 1234 1234 1234" value={cn} onChange={e=>setCn(e.target.value)} maxLength={19}/>
          </div>

          {/* Expiry + CVC */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:10 }}>
            <div>
              <p style={{ fontFamily:SANS, fontSize:12, color:TEXT3, marginBottom:5 }}>Expiry Date</p>
              <InputField placeholder="MM/YY" value={exp} onChange={e=>setExp(e.target.value)} maxLength={5}/>
            </div>
            <div>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <p style={{ fontFamily:SANS, fontSize:12, color:TEXT3, marginBottom:5 }}>Security Code</p>
                <p style={{ fontFamily:SANS, fontSize:12, color:TEXT3, marginBottom:5 }}>CVC</p>
              </div>
              <InputField placeholder="•••" value={cvc} onChange={e=>setCvc(e.target.value)} maxLength={4}/>
            </div>
          </div>

          {/* Name + $10 */}
          <div style={{ marginBottom:16 }}>
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:13, color:TEXT2, fontFamily:SANS, marginBottom:5 }}>
              <span>Name on Card</span>
              <span style={{ color:GOLD, fontWeight:600 }}>$10</span>
            </div>
            <InputField placeholder="Full name" value={nm} onChange={e=>setNm(e.target.value)}/>
          </div>

          {/* Pay button */}
          <button
            className="wm-gold-btn"
            onClick={() => go("confirmation")}
            style={{
              width:"100%",
              background:"linear-gradient(135deg,#C9A227 0%,#9A7400 100%)",
              border:"none", borderRadius:6,
              color:"#FFF8E8", fontFamily:SANS, fontWeight:500,
              fontSize:16, padding:"14px 0", cursor:"pointer",
              boxShadow:"0 4px 18px rgba(184,150,12,0.30)",
              marginBottom:10,
            }}
          >
            Pay &amp; Place Wish
          </button>

          <p style={{ textAlign:"center", fontSize:12, color:TEXT3, fontFamily:SANS, marginBottom:10, display:"flex", justifyContent:"center", alignItems:"center", gap:5 }}>
            🔒 Payments securely processed by <strong style={{ color:TEXT2 }}>stripe</strong>
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:5, justifyContent:"center" }}>
            {["VISA","MasterCard","AMEX","Discover","Maestro","UnionPay"].map(b => <Badge key={b} label={b}/>)}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ flexShrink:0, textAlign:"center", padding:"0 24px 8px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, maxWidth:320, margin:"0 auto 8px" }}>
          <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
          <span style={{ color:GOLD, fontSize:12 }}>✦</span>
          <div style={{ flex:1, height:"0.8px", background:`rgba(184,150,12,0.22)` }}/>
        </div>
        <p style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:15, color:TEXT2, marginBottom:10 }}>
          A portion of every wish helps grant one for a child in need.
        </p>
        {/* Trust badges row */}
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:18, flexWrap:"wrap" }}>
          {[
            "🔒 Secure SSL Encryption",
            "⊙ Powered by Dgst Gton",
            "✓ Norton",
            "Authorize.Net",
            "VERIFIED",
            "VISA  AMEX",
          ].map(t => (
            <span key={t} style={{ fontFamily:SANS, fontSize:11, color:TEXT3, padding:"4px 10px", border:`1px solid ${BORDER}`, borderRadius:4 }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
