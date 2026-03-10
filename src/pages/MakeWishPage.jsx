// ─────────────────────────────────────────────────────────
// MakeWishPage.jsx  (Step 1)
// User writes their message + sender name.
// Live WishCard preview updates as they type.
// ─────────────────────────────────────────────────────────

import { useState }   from "react";
import WishCard       from "../components/WishCard";
import GoldButton     from "../components/GoldButton";
import Field          from "../components/Field";
import Divider        from "../components/Divider";
import ItalicTag      from "../components/ItalicTag";
import PageHeader     from "../components/PageHeader";
import { BG, TEXT2, TEXT3, SERIF, SANS } from "../utils/tokens";

export default function MakeWishPage({ go, setWish }) {
  const [msg,  setMsg]  = useState("");
  const [from, setFrom] = useState("");
  const MAX = 280;

  function handleContinue() {
    setWish({ msg: msg.trim(), from: from.trim() });
    go("complete");
  }

  return (
    <div className="wm-page" style={{ background:BG, minHeight:"calc(100vh - 65px)", padding:"64px 48px 44px" }}>
      <div style={{ maxWidth:880, margin:"0 auto" }}>

        <PageHeader
          title="Make a Wish"
          subtitle="Write your wish in a timeless digital card. Your message will be immortalized forever into time, as a lasting treasure."
        />

        <div className="wm-2col" style={{ display:"grid", gridTemplateColumns:"auto 1fr", gap:56, alignItems:"start" }}>

          {/* Sticky card preview */}
          <div style={{ position:"sticky", top:88, display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
            <span style={{ fontSize:11, letterSpacing:"0.07em", textTransform:"uppercase", color:TEXT3, fontFamily:SANS }}>Preview</span>
            <WishCard msg={msg} from={from} size="md"/>
          </div>

          {/* Form */}
          <div className="wm-fadeup1" style={{ display:"flex", flexDirection:"column", gap:22 }}>
            <p style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:15, color:TEXT2 }}>
              Type your heartfelt wish...
            </p>

            <div>
              <Field
                multiline
                placeholder="Happy Birthday Mom. Thank you for always believing in me."
                value={msg}
                onChange={e => setMsg(e.target.value)}
                maxLength={MAX}
                autoFocus
              />
              <div style={{ fontSize:11, color: msg.length > MAX * 0.9 ? "#c0392b" : TEXT3, textAlign:"right", marginTop:4, fontFamily:SANS }}>
                {msg.length}/{MAX}
              </div>
            </div>

            <Field
              label="From"
              placeholder="Your name"
              value={from}
              onChange={e => setFrom(e.target.value)}
            />

            <GoldButton full disabled={!msg.trim()} onClick={handleContinue}>
              Continue
            </GoldButton>
          </div>
        </div>

        <Divider/>
        <ItalicTag>Every wish you make helps grant one for a child in need.</ItalicTag>
      </div>
    </div>
  );
}
