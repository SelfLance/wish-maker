// WishingWellPage — matches mockup Image 8 exactly
// Single viewport: lavender linen bg, sparkle cluster, title, 2-col
// Left: wishing well SVG | Right: tags + textarea + amounts + CTA
// Footer: sparkle + counter

import { useState } from "react";
import { GOLD, SERIF, SANS } from "../utils/tokens";

const PAGE_BG = `
  repeating-linear-gradient(0deg,rgba(170,150,200,0.042) 0px,rgba(170,150,200,0.042) 1px,transparent 1px,transparent 20px),
  linear-gradient(150deg,#EAE4F4 0%,#F2EDF8 35%,#F7F2F8 65%,#F9F4EE 100%)
`;
const GOLD_LINE = "rgba(184,150,12,0.22)";

// ── Well SVG ─────────────────────────────────────────────
function WishingWell() {
  return (
    <svg viewBox="0 0 340 380" fill="none" style={{ width:"100%", maxWidth:300 }}>
      <defs>
        <radialGradient id="wg1" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#FFE566" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="wg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF5B0" stopOpacity="0.42"/>
          <stop offset="100%" stopColor="#F0C040" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="wrim" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFEE88" stopOpacity="0.92"/>
          <stop offset="60%" stopColor="#F5C842" stopOpacity="0.58"/>
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="wstone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8B450"/>
          <stop offset="100%" stopColor="#A88020"/>
        </linearGradient>
        <linearGradient id="wpost" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C09828"/>
          <stop offset="50%" stopColor="#E8C86A"/>
          <stop offset="100%" stopColor="#A87820"/>
        </linearGradient>
        <linearGradient id="wroof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C86A"/>
          <stop offset="100%" stopColor="#B8920A"/>
        </linearGradient>
        <linearGradient id="wbuck" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4AF4A"/>
          <stop offset="100%" stopColor="#9A7418"/>
        </linearGradient>
      </defs>

      {/* Glow halos */}
      <ellipse cx="170" cy="238" rx="140" ry="105" fill="url(#wg1)"/>
      <ellipse cx="170" cy="228" rx="100" ry="74"  fill="url(#wg2)"/>

      {/* Sparkles */}
      {[[42,168,10,0.70],[296,162,8,0.62],[60,132,6,0.50],[278,198,7,0.55],
        [36,208,5,0.40],[306,142,5,0.44],[126,98,6,0.44],[220,94,5,0.38]].map(([x,y,s,op],i)=>(
        <g key={i} transform={`translate(${x},${y})`} opacity={op}>
          <line x1="0" y1={-s} x2="0" y2={s} stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1={-s} y1="0" x2={s} y2="0" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1={-s*.58} y1={-s*.58} x2={s*.58} y2={s*.58} stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.52"/>
          <line x1={s*.58} y1={-s*.58} x2={-s*.58} y2={s*.58} stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.52"/>
        </g>
      ))}

      {/* Well body */}
      <rect x="88" y="203" width="164" height="88" rx="3" fill="#A88020"/>
      <rect x="88" y="203" width="164" height="88" rx="3" fill="url(#wstone)"/>
      {[0,1,2,3,4].map(row=>[0,1,2,3,4].map(col=>{
        const x0=91+col*28+(row%2)*14, y0=207+row*17;
        if(x0+24>250) return null;
        return <rect key={`${row}-${col}`} x={x0} y={y0} width="24" height="13" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(0,0,0,0.09)" strokeWidth="0.5"/>;
      }))}

      {/* Inner glow at rim */}
      <ellipse cx="170" cy="203" rx="82" ry="23" fill="url(#wrim)"/>
      <ellipse cx="170" cy="201" rx="82" ry="23" fill="#D4B050"/>
      <ellipse cx="170" cy="199" rx="82" ry="23" fill="#E8C86A"/>
      <ellipse cx="170" cy="199" rx="82" ry="23" fill="none" stroke="#C9A227" strokeWidth="1.4" opacity="0.65"/>
      <ellipse cx="170" cy="291" rx="82" ry="16" fill="#C8A030"/>

      {/* Posts */}
      <rect x="116" y="108" width="15" height="97" rx="4" fill="url(#wpost)"/>
      <rect x="209" y="108" width="15" height="97" rx="4" fill="url(#wpost)"/>

      {/* Roof */}
      <polygon points="98,116 170,61 242,116" fill="#A07818" opacity="0.55"/>
      <polygon points="96,114 170,58 244,114" fill="url(#wroof)"/>
      {[0,1,2,3,4,5,6,7].map(i=>{
        const x1=96+i*18.5, x2=133+i*9.25;
        return <line key={i} x1={x1} y1="114" x2={x2} y2="62" stroke="rgba(0,0,0,0.09)" strokeWidth="1.2"/>;
      })}
      <rect x="160" y="54" width="20" height="9" rx="2" fill="#9A7010"/>
      <rect x="161" y="55" width="18" height="7" rx="2" fill="#C8A030" opacity="0.7"/>

      {/* Axle */}
      <rect x="114" y="141" width="112" height="6" rx="3" fill="#E0BC50"/>

      {/* Crank */}
      <line x1="226" y1="112" x2="226" y2="139" stroke="#B08010" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="215" y1="112" x2="226" y2="112" stroke="#B08010" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="214" cy="112" r="6" fill="#C8A020"/>
      <circle cx="214" cy="112" r="4" fill="#EACC44"/>

      {/* Rope + bucket */}
      <path d="M 170 146 C 168 157, 163 166, 159 185" stroke="#7A5C0C" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.88"/>
      <rect x="143" y="184" width="32" height="26" rx="3" fill="url(#wbuck)"/>
      <ellipse cx="159" cy="184" rx="16" ry="5" fill="#D4AF4A"/>
      <ellipse cx="159" cy="210" rx="16" ry="5" fill="#9A7418"/>
      <rect x="143" y="192" width="32" height="2.5" rx="1" fill="rgba(0,0,0,0.10)"/>
      <rect x="143" y="200" width="32" height="2.5" rx="1" fill="rgba(0,0,0,0.10)"/>

      {/* Ground */}
      <ellipse cx="170" cy="302" rx="78" ry="8" fill="rgba(140,100,10,0.12)"/>
    </svg>
  );
}

function WishTag({ label, selected, onToggle }) {
  return (
    <button onClick={onToggle} style={{
      padding:"9px 16px", borderRadius:8,
      border:`1.5px solid ${selected?"#C9A227":"rgba(175,155,130,0.36)"}`,
      background:selected?"rgba(201,162,39,0.11)":"rgba(255,255,255,0.70)",
      color:selected?"#7A5C00":"#5A5650",
      fontFamily:SANS, fontSize:14, fontWeight:selected?500:400,
      cursor:"pointer", transition:"all 0.14s ease",
    }}>{label}</button>
  );
}

function AmountPill({ val, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      flex:1, padding:"10px 6px", borderRadius:8,
      border:`1.5px solid ${selected?"#C9A227":"rgba(175,155,130,0.36)"}`,
      background:selected?"rgba(201,162,39,0.11)":"rgba(255,255,255,0.70)",
      color:selected?"#7A5C00":"#5A5650",
      fontFamily:SANS, fontSize:14.5, fontWeight:selected?600:400,
      cursor:"pointer", transition:"all 0.14s ease",
    }}>${val}</button>
  );
}

const TAGS    = ["Strength","Healing","Hope","Gratitude","Love","Courage"];
const AMOUNTS = [1, 2, 5, 10];

export default function WishingWellPage() {
  const [tag,      setTag]      = useState(null);
  const [msg,      setMsg]      = useState("");
  const [amount,   setAmount]   = useState(2);
  const [custom,   setCustom]   = useState("");
  const [showCustom, setShowCustom] = useState(false);
  const [cast,     setCast]     = useState(false);

  const effectiveAmount = showCustom ? parseFloat(custom) || 0 : amount;
  const canCast = effectiveAmount > 0;

  function handleSelectPreset(a) {
    setAmount(a);
    setShowCustom(false);
    setCustom("");
  }

  function handleSelectCustom() {
    setShowCustom(true);
    setAmount(null);
  }

  function handleCast() {
    if (!canCast) return;
    setCast(true);
    setTimeout(() => setCast(false), 3200);
  }

  return (
    <div className="wm-screen" style={{ background:PAGE_BG }}>

      {/* Header sparkle + title */}
      <div className="wm-fadeup" style={{ textAlign:"center", padding:"22px 24px 0", flexShrink:0 }}>
        {/* Three sparkle crosses */}
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:8, marginBottom:6, position:"relative" }}>
          <div style={{ position:"absolute", width:150, height:32, background:"radial-gradient(ellipse,rgba(220,185,60,0.30) 0%,transparent 70%)", pointerEvents:"none" }}/>
          {[7,13,7].map((s,i)=>(
            <svg key={i} width={s*2.5} height={s*2.5} viewBox={`0 0 ${s*2.5} ${s*2.5}`} fill="none" opacity={0.55+i*0.15}>
              <g transform={`translate(${s*1.25},${s*1.25})`}>
                <line x1="0" y1={-s} x2="0" y2={s} stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1={-s} y1="0" x2={s} y2="0" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1={-s*.58} y1={-s*.58} x2={s*.58} y2={s*.58} stroke="#D4AF37" strokeWidth="1.1" strokeLinecap="round" opacity="0.52"/>
                <line x1={s*.58} y1={-s*.58} x2={-s*.58} y2={s*.58} stroke="#D4AF37" strokeWidth="1.1" strokeLinecap="round" opacity="0.52"/>
              </g>
            </svg>
          ))}
        </div>
        <h1 style={{ fontFamily:SERIF, fontWeight:400, fontSize:"clamp(22px,3.5vw,38px)", color:"#26200E", lineHeight:1.2, marginBottom:9 }}>
          <span style={{ color:"#B8960C" }}>✦</span> The WishMaker Wishing Well <span style={{ color:"#B8960C" }}>✦</span>
        </h1>
        <p style={{ fontFamily:SANS, fontSize:15, color:"#5A5650", lineHeight:1.6, marginBottom:2 }}>
          Send a wish into the well and help grant one for a child in need.
        </p>
        <p style={{ fontFamily:SANS, fontSize:14.5, color:"#5A5650", marginBottom:12 }}>
          100% donated to Make-A-Wish.
        </p>
        <div style={{ display:"flex", alignItems:"center", gap:12, maxWidth:260, margin:"0 auto" }}>
          <div style={{ flex:1, height:"0.8px", background:"linear-gradient(90deg,transparent,rgba(184,150,12,0.38))" }}/>
          <span style={{ color:GOLD, fontSize:11 }}>✦</span>
          <div style={{ flex:1, height:"0.8px", background:"linear-gradient(90deg,rgba(184,150,12,0.38),transparent)" }}/>
        </div>
      </div>

      {/* Main 2-col */}
      <div style={{
        flex:"1 1 0", minHeight:0,
        display:"grid", gridTemplateColumns:"1fr 1fr",
        alignItems:"center", maxWidth:780, width:"100%",
        margin:"0 auto", padding:"6px 24px 0", gap:28,
      }}>

        {/* Well illustration */}
        <div className="wm-fadeup1" style={{ display:"flex", justifyContent:"center" }}>
          <WishingWell/>
        </div>

        {/* Interaction panel */}
        <div className="wm-fadeup2" style={{
          background:"rgba(255,255,255,0.58)",
          border:"1px solid rgba(184,150,12,0.16)",
          borderRadius:12, padding:"20px 18px",
          backdropFilter:"blur(6px)",
        }}>
          {/* Tags 3×2 */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:14 }}>
            {TAGS.map(t => (
              <WishTag key={t} label={t} selected={tag===t} onToggle={()=>setTag(p=>p===t?null:t)}/>
            ))}
          </div>
          <p style={{ fontFamily:SANS, fontSize:13, color:"#9A9490", textAlign:"center", marginBottom:7 }}>
            Write your wish (optional)
          </p>
          <textarea
            className="wm-input"
            value={msg}
            onChange={e=>setMsg(e.target.value)}
            maxLength={180}
            placeholder="May hope and strength find those who need it most."
            style={{
              width:"100%", height:66,
              padding:"9px 12px",
              background:"rgba(255,255,255,0.88)",
              border:"1.5px solid rgba(175,155,130,0.36)",
              borderRadius:8, fontFamily:SERIF, fontStyle:"italic",
              fontSize:13.5, color:"#3A3020", lineHeight:1.65,
              resize:"none", boxSizing:"border-box", display:"block", marginBottom:13,
            }}
          />
          <div style={{ display:"flex", gap:6, marginBottom: showCustom ? 8 : 13, flexWrap:"wrap" }}>
            {AMOUNTS.map(a=>(
              <AmountPill key={a} val={a} selected={!showCustom && amount===a} onClick={()=>handleSelectPreset(a)}/>
            ))}
            <button
              onClick={handleSelectCustom}
              style={{
                flex:1, padding:"10px 6px", borderRadius:8,
                border:`1.5px solid ${showCustom?"#C9A227":"rgba(175,155,130,0.36)"}`,
                background:showCustom?"rgba(201,162,39,0.11)":"rgba(255,255,255,0.70)",
                color:showCustom?"#7A5C00":"#5A5650",
                fontFamily:SANS, fontSize:13.5, fontWeight:showCustom?600:400,
                cursor:"pointer", transition:"all 0.14s ease", whiteSpace:"nowrap",
              }}
            >
              Custom
            </button>
          </div>
          {showCustom && (
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:13 }}>
              <span style={{ fontFamily:SANS, fontSize:15, color:"#7A5C00", fontWeight:600 }}>$</span>
              <input
                className="wm-input"
                type="number"
                min="1"
                value={custom}
                onChange={e=>setCustom(e.target.value)}
                placeholder="Enter amount"
                autoFocus
                style={{
                  flex:1, padding:"9px 12px",
                  background:"rgba(255,255,255,0.88)",
                  border:"1.5px solid rgba(201,162,39,0.45)",
                  borderRadius:8, fontFamily:SANS,
                  fontSize:14.5, color:"#3A3020",
                  boxSizing:"border-box",
                  transition:"border-color 0.2s, box-shadow 0.2s",
                }}
              />
            </div>
          )}
          <button
            onClick={handleCast}
            disabled={!canCast}
            style={{
              width:"100%", padding:"14px 16px",
              background:canCast?"linear-gradient(135deg,#C9A227 0%,#9A7400 100%)":"rgba(184,150,12,0.28)",
              border:"none", borderRadius:8,
              color:canCast?"#FFF8E8":"rgba(255,248,232,0.50)",
              fontFamily:SANS, fontSize:15.5, fontWeight:600,
              cursor:canCast?"pointer":"not-allowed",
              boxShadow:canCast?"0 4px 18px rgba(184,150,12,0.40)":"none",
              transition:"all 0.2s ease",
              display:"flex", alignItems:"center", justifyContent:"center", gap:8,
            }}
          >
            {cast
              ? "✦ Your wish is in the well ✦"
              : <><span>✦</span> Cast Wish Into the Well {canCast && `· $${effectiveAmount}`}</>
            }
          </button>
        </div>
      </div>

      {/* Footer sparkle + counter */}
      <div style={{ flexShrink:0, textAlign:"center", padding:"10px 24px 14px" }}>
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:8, marginBottom:8, position:"relative" }}>
          <div style={{ position:"absolute", width:120, height:28, background:"radial-gradient(ellipse,rgba(220,185,60,0.24) 0%,transparent 70%)", pointerEvents:"none" }}/>
          {[6,11,6].map((s,i)=>(
            <svg key={i} width={s*2.5} height={s*2.5} viewBox={`0 0 ${s*2.5} ${s*2.5}`} fill="none" opacity={0.45+i*0.12}>
              <g transform={`translate(${s*1.25},${s*1.25})`}>
                <line x1="0" y1={-s} x2="0" y2={s} stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1={-s} y1="0" x2={s} y2="0" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
              </g>
            </svg>
          ))}
        </div>
        <p style={{ fontFamily:SERIF, fontSize:15, color:"#5A5650" }}>
          <span style={{ color:"#B8960C", marginRight:5, fontSize:12 }}>✦</span>
          Wishes Cast Into the Well:{" "}
          <strong style={{ color:"#26200E", fontWeight:500 }}>
            {(3421+(cast?1:0)).toLocaleString()} wishes today
          </strong>
        </p>
      </div>

    </div>
  );
}
