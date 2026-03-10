// ─────────────────────────────────────────────────────────
// HowItWorksPage.jsx
// Three-step explainer, each with a large circular icon badge.
// Steps: Make a Wish → Written Into Time → Send & Cherish
// ─────────────────────────────────────────────────────────

import { PenSVG, ChainSVG, EnvSVG } from "../components/HowItWorksIcons";
import Divider    from "../components/Divider";
import ItalicTag  from "../components/ItalicTag";
import TrustBar   from "../components/TrustBar";
import PageHeader from "../components/PageHeader";
import { BG, TEXT, TEXT2, SANS } from "../utils/tokens";

const STEPS = [
  { Icon: PenSVG,   title: "Make a Wish",       desc: "Write your message inside a timeless digital card — a moment captured in words." },
  { Icon: ChainSVG, title: "Written Into Time",  desc: "Your wish is permanently recorded on the blockchain, creating a lasting digital memory that can never be altered or lost." },
  { Icon: EnvSVG,   title: "Send & Cherish",    desc: "Your recipient receives a printed keepsake card with a unique hashtag and QR code that opens the wish instantly online." },
];

export default function HowItWorksPage() {
  return (
    <div className="wm-page" style={{ background:BG, minHeight:"calc(100vh - 65px)", padding:"72px 48px 44px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>

        <PageHeader title="How It Works"/>

        {/* Three-column grid */}
        <div
          className="wm-how-grid wm-fadeup1"
          style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:44, maxWidth:900, margin:"0 auto 60px" }}
        >
          {STEPS.map(({ Icon, title, desc }, i) => (
            <div key={title} style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
              {/* Circular icon badge */}
              <div
                className="wm-how-circle"
                style={{
                  width:200, height:200, borderRadius:"50%",
                  background:"linear-gradient(145deg, #F5EDD8 0%, #EDE3C4 100%)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  marginBottom:24, padding:42, flexShrink:0,
                  boxShadow:"0 4px 20px rgba(184,150,12,0.14)",
                }}
              >
                <Icon/>
              </div>
              <p style={{ fontSize:15, fontWeight:500, color:TEXT, marginBottom:9, fontFamily:SANS }}>
                {i + 1}. {title}
              </p>
              <p style={{ fontSize:14, color:TEXT2, lineHeight:1.76, maxWidth:260, fontFamily:SANS }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        <Divider/>
        <ItalicTag>Every wish you make helps grant one for a child in need.</ItalicTag>
        <div style={{ maxWidth:580, margin:"0 auto 16px" }}><TrustBar/></div>
      </div>
    </div>
  );
}
