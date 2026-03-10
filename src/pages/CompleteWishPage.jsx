// ─────────────────────────────────────────────────────────
// CompleteWishPage.jsx  (Step 2)
// Review the card, enter digital + physical delivery info.
// ─────────────────────────────────────────────────────────

import { useState }  from "react";
import WishCard      from "../components/WishCard";
import GoldButton    from "../components/GoldButton";
import Field         from "../components/Field";
import Divider       from "../components/Divider";
import ItalicTag     from "../components/ItalicTag";
import PageHeader    from "../components/PageHeader";
import { GOLD, BG, BG_WHITE, TEXT, TEXT2, TEXT3, BORDER, SERIF, SANS } from "../utils/tokens";

export default function CompleteWishPage({ go, wish }) {
  const [email, setEmail] = useState("");
  const [addr,  setAddr]  = useState("");

  return (
    <div className="wm-page" style={{ background:BG, minHeight:"calc(100vh - 65px)", padding:"64px 48px 44px" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>

        <PageHeader
          title="Complete Your Wish"
          subtitle="Review your wish and complete your order. Your message will be preserved forever."
        />

        <div className="wm-2col" style={{ display:"grid", gridTemplateColumns:"auto 1fr", gap:56, alignItems:"start" }}>

          <div className="wm-fadeup">
            <WishCard msg={wish.msg} from={wish.from} size="lg"/>
          </div>

          <div className="wm-fadeup1" style={{ background:BG_WHITE, border:`1.5px solid ${BORDER}`, borderRadius:12, padding:32 }}>

            <p style={{ fontSize:15, marginBottom:24, fontFamily:SANS }}>
              <span style={{ fontWeight:500 }}>From: </span>{wish.from || "—"}
            </p>

            {/* Digital delivery */}
            <div style={{ marginBottom:20 }}>
              <p style={{ fontSize:14.5, fontWeight:500, marginBottom:5, fontFamily:SANS }}>Send To (Digital Delivery)</p>
              <p style={{ fontSize:12, color:TEXT3, marginBottom:10, fontFamily:SANS }}>Recipient Email:</p>
              <Field placeholder="recipient@email.com" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            {/* Physical delivery */}
            <div style={{ marginBottom:22 }}>
              <p style={{ fontSize:14.5, fontWeight:500, marginBottom:10, fontFamily:SANS }}>Send To (Physical Card)</p>
              <Field placeholder="Mailing address" value={addr} onChange={e => setAddr(e.target.value)}/>
            </div>

            {/* Product summary */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", padding:"18px 0", borderTop:`1px solid ${BORDER}`, marginBottom:22 }}>
              <div>
                <p style={{ fontSize:15, fontWeight:500, marginBottom:7, fontFamily:SANS }}>WishMaker Forever Card</p>
                <p style={{ fontSize:12, color:TEXT3, marginBottom:7, fontFamily:SANS }}>Includes:</p>
                {["Permanent digital wish","Shareable wish link","Printed keepsake card mailed to recipient"].map(f => (
                  <div key={f} style={{ display:"flex", alignItems:"center", gap:7, fontSize:13, color:TEXT2, marginBottom:6, fontFamily:SANS }}>
                    <span style={{ color:GOLD, fontWeight:700, fontSize:12, flexShrink:0 }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <span style={{ color:GOLD, fontWeight:600, fontSize:17, fontFamily:SANS, flexShrink:0, marginLeft:20 }}>$10</span>
            </div>

            <GoldButton full onClick={() => go("checkout")}>Place Your Wish</GoldButton>
          </div>
        </div>

        <Divider/>
        <ItalicTag>Every wish you make helps grant one for a child in need.</ItalicTag>
      </div>
    </div>
  );
}
