// ─────────────────────────────────────────────────────────
// CheckoutPage.jsx  (Step 3)
// Payment form (card number, expiry, CVC, name) on the
// left; order summary sidebar with mini card on the right.
// ─────────────────────────────────────────────────────────

import { useState }  from "react";
import WishCard      from "../components/WishCard";
import GoldButton    from "../components/GoldButton";
import Field         from "../components/Field";
import Divider       from "../components/Divider";
import ItalicTag     from "../components/ItalicTag";
import TrustBar      from "../components/TrustBar";
import PageHeader    from "../components/PageHeader";
import { GOLD, BG, BG_WHITE, BG_WARM, TEXT, TEXT2, TEXT3, BORDER, SERIF, SANS } from "../utils/tokens";

function CardBadge({ label }) {
  return (
    <span style={{ fontSize:9, background:"#f0f0f0", border:"1px solid #ddd", borderRadius:3, padding:"2px 6px", color:"#555", fontWeight:600, fontFamily:SANS }}>
      {label}
    </span>
  );
}

export default function CheckoutPage({ go, wish }) {
  const [cn,  setCn]  = useState("");
  const [exp, setExp] = useState("");
  const [cvc, setCvc] = useState("");
  const [nm,  setNm]  = useState("");

  return (
    <div className="wm-page" style={{ background:BG, minHeight:"calc(100vh - 65px)", padding:"64px 48px 44px" }}>
      <div style={{ maxWidth:980, margin:"0 auto" }}>

        <PageHeader
          title="Secure Checkout"
          subtitle="Make this a WishMaker Forever Card. Your message will be preserved forever."
        />

        <div className="wm-checkout" style={{ display:"grid", gridTemplateColumns:"1fr 400px", gap:44, alignItems:"start" }}>

          {/* ── Left column ── */}
          <div>
            {/* Card visual */}
            <div style={{ border:`1px solid ${BORDER}`, borderRadius:12, overflow:"hidden", boxShadow:"0 6px 36px rgba(0,0,0,0.07)", marginBottom:22 }}>
              <div style={{ padding:28, display:"flex", justifyContent:"center", background:BG }}>
                <WishCard msg={wish.msg} from={wish.from} size="md" orderSummary/>
              </div>
            </div>

            {/* Payment form */}
            <div className="wm-fadeup1" style={{ background:BG_WHITE, border:`1.5px solid ${BORDER}`, borderRadius:12, padding:"26px 30px" }}>
              <p style={{ fontSize:17, fontWeight:500, marginBottom:6, fontFamily:SANS }}>Payment Information</p>

              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
                <span style={{ fontSize:14, color:TEXT2, fontFamily:SANS }}>Pay $10 with card</span>
                <div style={{ display:"flex", gap:5 }}>
                  {["VISA","MC","AMEX","DISC"].map(b => <CardBadge key={b} label={b}/>)}
                </div>
              </div>

              <div style={{ display:"flex", flexDirection:"column", gap:13, marginBottom:20 }}>
                {/* Card number with inline badges */}
                <div style={{ position:"relative" }}>
                  <Field placeholder="1234 1234 1234 1234" value={cn} onChange={e => setCn(e.target.value)} maxLength={19}/>
                  <div style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", display:"flex", gap:4, pointerEvents:"none" }}>
                    {["VISA","MC","AMEX"].map(b => <CardBadge key={b} label={b}/>)}
                  </div>
                </div>

                {/* Expiry + CVC */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:13 }}>
                  <div>
                    <p style={{ fontSize:12, color:TEXT3, marginBottom:5, fontFamily:SANS }}>Expiry Date</p>
                    <Field placeholder="MM/YY" value={exp} onChange={e => setExp(e.target.value)} maxLength={5}/>
                  </div>
                  <div>
                    <div style={{ display:"flex", justifyContent:"space-between" }}>
                      <p style={{ fontSize:12, color:TEXT3, marginBottom:5, fontFamily:SANS }}>Security Code</p>
                      <p style={{ fontSize:12, color:TEXT3, marginBottom:5, fontFamily:SANS }}>CVC</p>
                    </div>
                    <Field placeholder="•••" value={cvc} onChange={e => setCvc(e.target.value)} maxLength={4}/>
                  </div>
                </div>

                {/* Name + price */}
                <div>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:14, color:TEXT2, marginBottom:5, fontFamily:SANS }}>
                    <span>Name on Card</span>
                    <span style={{ color:GOLD, fontWeight:600 }}>$10</span>
                  </div>
                  <Field placeholder="Full name" value={nm} onChange={e => setNm(e.target.value)}/>
                </div>
              </div>

              <GoldButton full large onClick={() => go("confirmation")}>Pay &amp; Place Wish</GoldButton>

              <p style={{ textAlign:"center", fontSize:12, color:TEXT3, marginTop:13, display:"flex", alignItems:"center", justifyContent:"center", gap:5, fontFamily:SANS }}>
                🔒 Payments securely processed by <strong>stripe</strong>
              </p>
              <div style={{ display:"flex", gap:5, justifyContent:"center", flexWrap:"wrap", marginTop:14 }}>
                {["VISA","MasterCard","AMEX","Discover","Maestro","UnionPay"].map(b => <CardBadge key={b} label={b}/>)}
              </div>
            </div>
          </div>

          {/* ── Right: order summary ── */}
          <div className="wm-fadeup2" style={{ border:`1.5px solid ${BORDER}`, borderRadius:12, padding:26, background:BG_WARM }}>
            <p style={{ fontSize:11, textTransform:"uppercase", letterSpacing:"0.09em", color:TEXT3, marginBottom:16, fontFamily:SANS }}>ORDER SUMMARY</p>
            <p style={{ fontFamily:SERIF, fontSize:17, fontWeight:600, marginBottom:12 }}>WishMaker Forever Card</p>
            {["Permanent digital wish","Shareable wish link","Printed keepsake card mailed to recipient"].map(f => (
              <div key={f} style={{ display:"flex", alignItems:"center", gap:7, fontSize:13, color:TEXT2, marginBottom:8, fontFamily:SANS }}>
                <span style={{ color:GOLD, fontWeight:700, fontSize:12 }}>✓</span>{f}
              </div>
            ))}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:`1px solid ${BORDER}`, paddingTop:14, marginTop:8 }}>
              <span style={{ fontWeight:600, fontSize:15, fontFamily:SANS }}>Total:</span>
              <span style={{ fontFamily:SERIF, fontSize:24, color:GOLD, fontWeight:600 }}>$10</span>
            </div>
            {/* Mini card */}
            <div style={{ marginTop:22, paddingTop:22, borderTop:`1px dashed ${BORDER}`, display:"flex", justifyContent:"center", transform:"scale(0.82)", transformOrigin:"top center" }}>
              <WishCard msg={wish.msg} from={wish.from} size="sm"/>
            </div>
          </div>
        </div>

        <Divider/>
        <ItalicTag>A portion of every wish helps grant one for a child in need.</ItalicTag>
        <div style={{ maxWidth:620, margin:"0 auto 8px" }}><TrustBar/></div>
      </div>
    </div>
  );
}
