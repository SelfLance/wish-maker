import { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import { GOLD, SERIF, SANS, TEXT, TEXT2 } from "../utils/tokens";

const PAGE_BG = `
  repeating-linear-gradient(0deg,rgba(184,150,12,0.028) 0px,rgba(184,150,12,0.028) 1px,transparent 1px,transparent 20px),
  linear-gradient(150deg,#F5F0E8 0%,#F9F5F2 40%,#F9F5F2 70%,#F5F0E8 100%)
`;

// ── Well image ────────────────────────────────────────────
function WishingWell({ isMobile }) {
  return (
    <img
      src="/images/well.svg"
      alt="Magical wishing well"
      style={{
        width: "100%",
        maxWidth: isMobile ? 300 : 540,
        height: "auto",
        display: "block",
      }}
    />
  );
}

function WishTag({ label, selected, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        padding: "11px 10px",
        borderRadius: 10,
        border: `1.5px solid ${selected ? "#C9A227" : "rgba(175,155,130,0.36)"}`,
        background: selected
          ? "rgba(201,162,39,0.13)"
          : "rgba(255,255,255,0.75)",
        color: selected ? "#7A5C00" : "#5A5650",
        fontFamily: SANS,
        fontSize: 14.5,
        fontWeight: selected ? 600 : 400,
        cursor: "pointer",
        transition: "all 0.14s ease",
        boxShadow: selected ? "0 2px 8px rgba(184,150,12,0.18)" : "none",
      }}
    >
      {label}
    </button>
  );
}

function AmountPill({ val, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: "13px 6px",
        borderRadius: 10,
        border: `1.5px solid ${selected ? "#C9A227" : "rgba(175,155,130,0.36)"}`,
        background: selected
          ? "rgba(201,162,39,0.13)"
          : "rgba(255,255,255,0.75)",
        color: selected ? "#7A5C00" : "#5A5650",
        fontFamily: SANS,
        fontSize: 16,
        fontWeight: selected ? 700 : 400,
        cursor: "pointer",
        transition: "all 0.14s ease",
        boxShadow: selected ? "0 2px 8px rgba(184,150,12,0.18)" : "none",
      }}
    >
      ${val}
    </button>
  );
}

const TAGS = ["Strength", "Healing", "Hope", "Gratitude", "Love", "Courage"];
const AMOUNTS = [5, 10, 25, 50];

export default function WishingWellPage() {
  const [tag, setTag] = useState(null);
  const [msg, setMsg] = useState("");
  const [amount, setAmount] = useState(10);
  const [custom, setCustom] = useState("");
  const [showCustom, setShowCustom] = useState(false);
  const [cast, setCast] = useState(false);
  const isMobile = useIsMobile();

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
    <div className="wm-screen" style={{ background: PAGE_BG }}>
      {/* Header */}
      <div
        className="wm-fadeup"
        style={{
          textAlign: "center",
          padding: isMobile ? "16px 20px 0" : "18px 24px 0",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            marginBottom: 5,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 160,
              height: 34,
              background:
                "radial-gradient(ellipse,rgba(220,185,60,0.30) 0%,transparent 70%)",
              pointerEvents: "none",
            }}
          />
          {[7, 14, 7].map((s, i) => (
            <svg
              key={i}
              width={s * 2.5}
              height={s * 2.5}
              viewBox={`0 0 ${s * 2.5} ${s * 2.5}`}
              fill="none"
              opacity={0.55 + i * 0.15}
            >
              <g transform={`translate(${s * 1.25},${s * 1.25})`}>
                <line
                  x1="0"
                  y1={-s}
                  x2="0"
                  y2={s}
                  stroke="#D4AF37"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1={-s}
                  y1="0"
                  x2={s}
                  y2="0"
                  stroke="#D4AF37"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1={-s * 0.58}
                  y1={-s * 0.58}
                  x2={s * 0.58}
                  y2={s * 0.58}
                  stroke="#D4AF37"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  opacity="0.52"
                />
                <line
                  x1={s * 0.58}
                  y1={-s * 0.58}
                  x2={-s * 0.58}
                  y2={s * 0.58}
                  stroke="#D4AF37"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  opacity="0.52"
                />
              </g>
            </svg>
          ))}
        </div>
        <h1
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: isMobile
              ? "clamp(20px,6vw,30px)"
              : "clamp(26px,3vw,42px)",
            color: TEXT,
            lineHeight: 1.2,
            marginBottom: 6,
          }}
        >
          <span style={{ color: "#B8960C" }}>✦</span> The WishMaker Wishing Well{" "}
          <span style={{ color: "#B8960C" }}>✦</span>
        </h1>
        <p
          style={{
            fontFamily: SANS,
            fontSize: isMobile ? 14 : 16,
            color: TEXT2,
            lineHeight: 1.6,
            marginBottom: 2,
          }}
        >
          Send a wish into the well and help grant one for a child in need.
        </p>
        <p
          style={{
            fontFamily: SANS,
            fontSize: isMobile ? 13.5 : 15,
            color: "#B8960C",
            fontWeight: 500,
            marginBottom: 8,
          }}
        >
          100% donated to Make-A-Wish.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            maxWidth: 300,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "0.8px",
              background:
                "linear-gradient(90deg,transparent,rgba(184,150,12,0.38))",
            }}
          />
          <span style={{ color: GOLD, fontSize: 12 }}>✦</span>
          <div
            style={{
              flex: 1,
              height: "0.8px",
              background:
                "linear-gradient(90deg,rgba(184,150,12,0.38),transparent)",
            }}
          />
        </div>
      </div>

      {/* Main 2-col layout — fills remaining height */}
      <div
        style={{
          flex: "1 1 0",
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          alignItems: "center",
          width: "100%",
          maxWidth: 1300,
          margin: "0 auto",
          padding: isMobile ? "12px 20px 0" : "8px 56px 0",
          gap: isMobile ? 16 : 48,
          boxSizing: "border-box",
        }}
      >
        {/* Well illustration */}
        <div
          className="wm-fadeup1"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isMobile ? 200 : "100%",
            overflow: "hidden",
          }}
        >
          <WishingWell isMobile={isMobile} />
        </div>

        {/* Interaction panel */}
        <div
          className="wm-fadeup2"
          style={{
            background: "rgba(255,255,255,0.62)",
            border: "1.5px solid rgba(184,150,12,0.18)",
            borderRadius: 16,
            padding: isMobile ? "20px 16px" : "28px 32px",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 40px rgba(140,100,10,0.08)",
          }}
        >
          {/* Tag label */}
          <p
            style={{
              fontFamily: SANS,
              fontSize: isMobile ? 12 : 13,
              color: "#9A9490",
              textAlign: "center",
              marginBottom: 10,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Choose a theme for your wish
          </p>

          {/* Tags */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: isMobile ? 7 : 10,
              marginBottom: isMobile ? 16 : 20,
            }}
          >
            {TAGS.map((t) => (
              <WishTag
                key={t}
                label={t}
                selected={tag === t}
                onToggle={() => setTag((p) => (p === t ? null : t))}
              />
            ))}
          </div>

          <p
            style={{
              fontFamily: SANS,
              fontSize: isMobile ? 13 : 14,
              color: "#9A9490",
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            Write your wish
          </p>
          <textarea
            className="wm-input"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            maxLength={180}
            placeholder="May hope and strength find those who need it most."
            style={{
              width: "100%",
              height: isMobile ? 72 : 96,
              padding: "12px 14px",
              background: "rgba(255,255,255,0.90)",
              border: "1.5px solid rgba(175,155,130,0.36)",
              borderRadius: 10,
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: isMobile ? 14 : 15,
              color: "#3A3020",
              lineHeight: 1.7,
              resize: "none",
              boxSizing: "border-box",
              display: "block",
              marginBottom: isMobile ? 14 : 18,
            }}
          />

          {/* Amount label */}
          <p
            style={{
              fontFamily: SANS,
              fontSize: isMobile ? 12 : 13,
              color: "#9A9490",
              textAlign: "center",
              marginBottom: 8,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Select donation amount
          </p>

          <div
            style={{
              display: "flex",
              gap: isMobile ? 7 : 10,
              marginBottom: showCustom ? 10 : isMobile ? 14 : 18,
            }}
          >
            {AMOUNTS.map((a) => (
              <AmountPill
                key={a}
                val={a}
                selected={!showCustom && amount === a}
                onClick={() => handleSelectPreset(a)}
              />
            ))}
            <button
              onClick={handleSelectCustom}
              style={{
                flex: 1,
                padding: "13px 6px",
                borderRadius: 10,
                border: `1.5px solid ${showCustom ? "#C9A227" : "rgba(175,155,130,0.36)"}`,
                background: showCustom
                  ? "rgba(201,162,39,0.13)"
                  : "rgba(255,255,255,0.75)",
                color: showCustom ? "#7A5C00" : "#5A5650",
                fontFamily: SANS,
                fontSize: isMobile ? 14 : 15,
                fontWeight: showCustom ? 700 : 400,
                cursor: "pointer",
                transition: "all 0.14s ease",
                whiteSpace: "nowrap",
                boxShadow: showCustom
                  ? "0 2px 8px rgba(184,150,12,0.18)"
                  : "none",
              }}
            >
              Custom
            </button>
          </div>

          {showCustom && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: isMobile ? 14 : 18,
              }}
            >
              <span
                style={{
                  fontFamily: SANS,
                  fontSize: 17,
                  color: "#7A5C00",
                  fontWeight: 600,
                }}
              >
                $
              </span>
              <input
                className="wm-input"
                type="number"
                min="1"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="Enter amount"
                autoFocus
                style={{
                  flex: 1,
                  padding: "11px 14px",
                  background: "rgba(255,255,255,0.90)",
                  border: "1.5px solid rgba(201,162,39,0.45)",
                  borderRadius: 10,
                  fontFamily: SANS,
                  fontSize: 16,
                  color: "#3A3020",
                  boxSizing: "border-box",
                }}
              />
            </div>
          )}

          <button
            onClick={handleCast}
            disabled={!canCast}
            className="wm-gold-btn"
            style={{
              width: "100%",
              padding: isMobile ? "14px 16px" : "17px 20px",
              background: canCast
                ? "linear-gradient(135deg,#C9A227 0%,#9A7400 100%)"
                : "rgba(184,150,12,0.28)",
              border: "none",
              borderRadius: 10,
              color: canCast ? "#FFF8E8" : "rgba(255,248,232,0.50)",
              fontFamily: SANS,
              fontSize: isMobile ? 15.5 : 17,
              fontWeight: 600,
              cursor: canCast ? "pointer" : "not-allowed",
              boxShadow: canCast ? "0 6px 24px rgba(184,150,12,0.42)" : "none",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              letterSpacing: "0.01em",
            }}
          >
            {cast ? (
              "✦ Your wish is in the well ✦"
            ) : (
              <>
                <span style={{ fontSize: 16 }}>✦</span> Cast Wish Into the Well{" "}
                {canCast && `· $${effectiveAmount}`}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Footer counter */}
      <div
        style={{
          flexShrink: 0,
          textAlign: "center",
          padding: isMobile ? "12px 20px 16px" : "12px 24px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            marginBottom: 6,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 130,
              height: 28,
              background:
                "radial-gradient(ellipse,rgba(220,185,60,0.22) 0%,transparent 70%)",
              pointerEvents: "none",
            }}
          />
          {[6, 11, 6].map((s, i) => (
            <svg
              key={i}
              width={s * 2.5}
              height={s * 2.5}
              viewBox={`0 0 ${s * 2.5} ${s * 2.5}`}
              fill="none"
              opacity={0.45 + i * 0.12}
            >
              <g transform={`translate(${s * 1.25},${s * 1.25})`}>
                <line
                  x1="0"
                  y1={-s}
                  x2="0"
                  y2={s}
                  stroke="#D4AF37"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1={-s}
                  y1="0"
                  x2={s}
                  y2="0"
                  stroke="#D4AF37"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          ))}
        </div>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: isMobile ? 14 : 15.5,
            color: "#5A5650",
          }}
        >
          <span style={{ color: "#B8960C", marginRight: 5, fontSize: 12 }}>
            ✦
          </span>
          Wishes Cast Into the Well:{" "}
          <strong style={{ color: "#26200E", fontWeight: 500 }}>
            {(3421 + (cast ? 1 : 0)).toLocaleString()} wishes today
          </strong>
        </p>
      </div>
    </div>
  );
}
