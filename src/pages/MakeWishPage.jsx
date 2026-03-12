// ─────────────────────────────────────────────────────────
// MakeWishPage.jsx  (Step 1)
// Full-screen above-the-fold layout.
// Left half: large message textarea + from field + CTA.
// Right half: live WishCard preview (sticky).
// ─────────────────────────────────────────────────────────

import { useState } from "react";
import WishCard from "../components/WishCard";
import GoldButton from "../components/GoldButton";
import {
  GOLD,
  GOLD_GLOW,
  BG,
  BG_WHITE,
  TEXT,
  TEXT2,
  TEXT3,
  BORDER,
  SERIF,
  SANS,
} from "../utils/tokens";

export default function MakeWishPage({ go, setWish }) {
  const [msg, setMsg] = useState("");
  const [from, setFrom] = useState("");
  const MAX = 280;

  function handleContinue() {
    setWish({ msg: msg.trim(), from: from.trim() });
    go("complete");
  }

  return (
    <div
      style={{
        background: BG,
        minHeight: "calc(100vh - 65px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 980, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(40px,6vw,56px)",
              fontWeight: 300,
              marginBottom: 14,
              color: TEXT,
            }}
          >
            Make a Wish
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 16,
              lineHeight: 1.6,
              color: TEXT2,
              maxWidth: 650,
              margin: "0 auto",
            }}
          >
            Write your wish in a timeless digital card. Your message will be
            immortalized forever into time, as a lasting treasure.
          </p>
        </div>

        {/* Main row: preview + inputs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 64,
            flexWrap: "wrap",
          }}
        >
          {/* Preview */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              width: 440,
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: "0.15em",
                color: TEXT3,
                textTransform: "uppercase",
                fontFamily: SANS,
              }}
            >
              Preview
            </span>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: -26,
                  borderRadius: 22,
                  background:
                    "radial-gradient(circle at top, rgba(184,150,12,0.15), transparent 65%)",
                  pointerEvents: "none",
                }}
              />
              <WishCard msg={msg} from={from} size="lg" />
            </div>
          </div>

          {/* Controls */}
          <div
            style={{
              width: 420,
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <label
              style={{
                fontFamily: SERIF,
                fontSize: 14,
                fontStyle: "italic",
                color: TEXT2,
              }}
            >
              Type your heartfelt wish...
            </label>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              maxLength={MAX}
              placeholder="Type your heartfelt wish..."
              style={{
                width: "100%",
                minHeight: 170,
                padding: "16px 18px",
                borderRadius: 12,
                border: `1px solid rgba(184,150,12,0.35)`,
                background: BG_WHITE,
                fontFamily: SERIF,
                fontSize: 15,
                lineHeight: 1.6,
                color: TEXT,
                resize: "vertical",
                boxSizing: "border-box",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: 12, color: TEXT3, fontFamily: SANS }}>
                {msg.length} / {MAX}
              </div>
            </div>
            <label
              style={{
                fontFamily: SANS,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: TEXT3,
              }}
            >
              From
            </label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Your name"
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 10,
                border: `1.5px solid ${BORDER}`,
                background: BG_WHITE,
                fontFamily: SANS,
                fontSize: 15,
                color: TEXT,
                boxSizing: "border-box",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            />
            <GoldButton
              full
              large
              disabled={!msg.trim()}
              onClick={handleContinue}
            >
              Continue →
            </GoldButton>
          </div>
        </div>

        <p
          style={{
            marginTop: 46,
            textAlign: "center",
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: 15,
            color: TEXT2,
            lineHeight: 1.7,
          }}
        >
          ✦ Every wish you make helps grant one for a child in need.
        </p>
      </div>
    </div>
  );
}
