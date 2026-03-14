// MakeWishPage — larger card preview left (60%) + compact form right (40%)

import { useState } from "react";
import WishCard from "../components/WishCard";
import { GOLD, BG, BG_WHITE, TEXT, TEXT2, TEXT3, BORDER, SERIF, SANS } from "../utils/tokens";

export default function MakeWishPage({ go, setWish }) {
  const [msg,  setMsg]  = useState("");
  const [from, setFrom] = useState("");
  const MAX = 280;

  function handleContinue() {
    setWish({ msg: msg.trim(), from: from.trim() });
    go("complete");
  }

  return (
    <div className="wm-screen" style={{ background: BG }}>

      {/* ── Header ── */}
      <div className="wm-fadeup" style={{
        textAlign: "center", padding: "24px 24px 14px", flexShrink: 0,
      }}>
        <h1 style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: "clamp(30px,3.8vw,50px)",
          color: TEXT, marginBottom: 8, letterSpacing: "-0.01em",
        }}>
          Make a Wish
        </h1>
        <p style={{
          fontFamily: SANS, fontSize: 14.5, color: TEXT2,
          lineHeight: 1.65, maxWidth: 520, margin: "0 auto",
        }}>
          Write your wish in a timeless digital card. Your message will be
          immortalized forever into time, as a lasting treasure.
        </p>
      </div>

      {/* ── Main: 60% left card / 40% right form ── */}
      <div style={{
        flex: "1 1 0", minHeight: 0,
        display: "grid", gridTemplateColumns: "3fr 2fr",
        borderTop: `1px solid ${BORDER}`,
        overflow: "hidden",
      }}>

        {/* ══ LEFT: large card preview ══ */}
        <div className="wm-fadeup1" style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "28px 48px",
          borderRight: `1px solid ${BORDER}`,
          background: `linear-gradient(160deg, #FDFAF5 0%, #F5F0E8 100%)`,
          gap: 16, overflow: "hidden", position: "relative",
        }}>
          {/* Subtle gold glow behind card */}
          <div style={{
            position: "absolute", width: 420, height: 260,
            background: "radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}/>

          {/* PREVIEW badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8, zIndex: 1,
          }}>
            <div style={{ width: 28, height: "0.8px", background: `rgba(184,150,12,0.30)` }}/>
            <p style={{
              fontFamily: SANS, fontSize: 10, fontWeight: 700,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: TEXT3,
            }}>Preview</p>
            <div style={{ width: 28, height: "0.8px", background: `rgba(184,150,12,0.30)` }}/>
          </div>

          {/* Large card — scaled up to fill the wider column */}
          <div style={{
            transform: "scale(1.28)",
            transformOrigin: "center center",
            zIndex: 1,
          }}>
            <WishCard msg={msg} from={from} size="lg"/>
          </div>
        </div>

        {/* ══ RIGHT: compact form ══ */}
        <div className="wm-fadeup2" style={{
          display: "flex", flexDirection: "column",
          justifyContent: "center",
          padding: "24px 36px",
          background: BG,
          overflow: "hidden",
          gap: 0,
        }}>

          {/* Section heading */}
          <p style={{
            fontFamily: SERIF, fontStyle: "italic",
            fontSize: 17, color: TEXT2, marginBottom: 12,
          }}>
            Type your heartfelt wish...
          </p>

          {/* Textarea */}
          <textarea
            className="wm-input"
            autoFocus
            value={msg}
            onChange={e => setMsg(e.target.value)}
            maxLength={MAX}
            placeholder="Happy Birthday Mom. Thank you for always believing in me."
            style={{
              width: "100%", height: 120,
              padding: "12px 14px",
              background: BG_WHITE,
              border: `1.5px solid ${BORDER}`,
              borderRadius: 8,
              fontFamily: SERIF, fontStyle: "italic",
              fontSize: 14.5, color: TEXT, lineHeight: 1.75,
              resize: "none", boxSizing: "border-box",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
          />

          {/* Counter */}
          <div style={{
            textAlign: "right", fontSize: 11.5,
            color: msg.length > MAX * 0.88 ? "#c0392b" : TEXT3,
            fontFamily: SANS, marginTop: 4, marginBottom: 16,
          }}>
            {msg.length} / {MAX}
          </div>

          {/* FROM label + input */}
          <p style={{
            fontFamily: SANS, fontSize: 10.5, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: TEXT3, marginBottom: 7,
          }}>
            From
          </p>
          <input
            className="wm-input"
            type="text"
            value={from}
            onChange={e => setFrom(e.target.value)}
            placeholder="Your name"
            style={{
              width: "100%", padding: "11px 14px",
              background: BG_WHITE,
              border: `1.5px solid ${BORDER}`,
              borderRadius: 8,
              fontFamily: SANS, fontSize: 14.5, color: TEXT,
              boxSizing: "border-box", marginBottom: 18,
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
          />

          {/* Continue button */}
          <button
            className="wm-gold-btn"
            disabled={!msg.trim()}
            onClick={handleContinue}
            style={{
              width: "100%", padding: "13px 0",
              background: msg.trim()
                ? "linear-gradient(135deg,#C9A227 0%,#9A7400 100%)"
                : "rgba(201,162,39,0.32)",
              border: "none", borderRadius: 8,
              color: "#FFF8E8",
              fontFamily: SANS, fontWeight: 500, fontSize: 15.5,
              cursor: msg.trim() ? "pointer" : "not-allowed",
              boxShadow: msg.trim() ? "0 4px 20px rgba(184,150,12,0.28)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            Continue →
          </button>

          {/* Hint */}
          <p style={{
            fontFamily: SERIF, fontStyle: "italic",
            fontSize: 12, color: TEXT3,
            textAlign: "center", marginTop: 14, lineHeight: 1.6,
          }}>
            Your wish will be preserved<br/>forever on the blockchain.
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{ flexShrink: 0, textAlign: "center", padding: "10px 24px 13px" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 7 }}>
          <div style={{ flex: 1, height: "0.8px", background: "rgba(184,150,12,0.18)" }}/>
          <span style={{ color: GOLD, fontSize: 11, padding: "0 14px" }}>✦</span>
          <div style={{ flex: 1, height: "0.8px", background: "rgba(184,150,12,0.18)" }}/>
        </div>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15.5, color: TEXT2 }}>
          Every wish you make helps grant one for a child in need.
        </p>
      </div>

    </div>
  );
}
