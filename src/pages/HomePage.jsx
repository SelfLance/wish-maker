// HomePage — matches mockup Image 5 exactly
// Left: headline + italic tagline + CTA | Right: open greeting card
// Bottom strip: Write Your Card · Send Your Wish · Lasts Forever
// Footer: italic tagline

import WishCard from "../components/WishCard";
import {
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

export default function HomePage({ go }) {
  return (
    <div className="wm-screen" style={{ background: BG }}>
      {/* ── Hero: 2-col, fills all space ── */}
      <div
        style={{
          flex: "1 1 0",
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          maxWidth: 1540,
          width: "100%",
          margin: "0 auto",
          padding: "0 48px",
          gap: 0,
        }}
      >
        {/* Left copy */}
        <div>
          <h1
            className="wm-fadeup"
            style={{
              fontFamily: SERIF,
              fontWeight: 300,
              lineHeight: 1.0,
              fontSize: "clamp(36px,4.4vw,62px)",
              letterSpacing: "-0.02em",
              color: TEXT,
              marginBottom: 14,
            }}
          >
            Make a wish
            <br />
            that lasts forever.
          </h1>
          <p
            className="wm-fadeup1"
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "clamp(16px,1.4vw,20px)",
              color: "#C9A227",
              fontWeight: 600,
              lineHeight: 1.4,
              maxWidth: 420,
              marginBottom: 14,
            }}
          >
            Send a wish that lasts forever — in under 30 seconds.
          </p>
          <p
            className="wm-fadeup1"
            style={{
              fontFamily: SANS,
              fontSize: 16,
              color: TEXT2,
              lineHeight: 1.72,
              maxWidth: 420,
              marginBottom: 26,
            }}
          >
            Create a loving message, written permanently into time, delivered
            digitally and as a beautifully printed card to your loved one’s
            home.
          </p>
          <div className="wm-fadeup2">
            <button
              className="wm-gold-btn"
              onClick={() => go("make")}
              style={{
                background: "linear-gradient(135deg,#C9A227 0%,#9A7400 100%)",
                border: "none",
                borderRadius: 6,
                color: "#FFF8E8",
                fontFamily: SANS,
                fontWeight: 500,
                fontSize: 18,
                padding: "16px 42px",
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(184,150,12,0.32)",
              }}
            >
              Make a Wish - Only $10
            </button>
          </div>
        </div>

        {/* Right: floating open card */}
        <div
          className="wm-fadeup1"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 320,
              height: 320,
              background: `radial-gradient(circle,${GOLD_GLOW},transparent 70%)`,
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <WishCard floating size="xl" glow />
        </div>
      </div>

      {/* ── Feature strip ── */}
      <div
        style={{
          flexShrink: 0,
          borderTop: `1px solid ${BORDER}`,
          background: BG_WHITE,
          // padding: "22px 56px",
        }}
      >
        <div
          style={{
            maxWidth: 1060,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "28px 56px",
          }}
        >
          {[
            {
              icon: <CardIcon />,
              title: "Write Your Card",
              desc: "Create your message.",
            },
            {
              icon: <HeartIcon />,
              title: "Send Your Wish",
              desc: "Share it with someone special.",
            },
            {
              icon: <InfinityIcon />,
              title: "Lasts Forever",
              desc: "Your wish is written into time.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{ display: "flex", alignItems: "center", gap: 20 }}
            >
              <div style={{ width: 68, height: 68, flexShrink: 0 }}>{icon}</div>
              <div>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 19,
                    fontWeight: 600,
                    color: TEXT,
                    marginBottom: 5,
                  }}
                >
                  {title}
                </p>
                <p style={{ fontFamily: SANS, fontSize: 16, color: TEXT2 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tagline footer ── */}
      <div
        style={{
          flexShrink: 0,
          textAlign: "center",
          padding: "16px 24px",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <p
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 22,
            color: "#C9A227",
          }}
        >
          For every wish you make, you help grant one to a child in need.
        </p>
      </div>
    </div>
  );
}

// ── Small feature icons ──────────────────────────────────
function CardIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" width="68" height="68">
      <rect
        x="6"
        y="11"
        width="40"
        height="30"
        rx="3"
        fill="#F5EDD8"
        stroke="#D4AF37"
        strokeWidth="1.2"
      />
      <line
        x1="26"
        y1="11"
        x2="26"
        y2="41"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeDasharray="2 2"
        opacity="0.5"
      />
      <circle
        cx="19"
        cy="26"
        r="3"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1.2"
      />
      <line
        x1="34"
        y1="22"
        x2="38"
        y2="22"
        stroke="#D4AF37"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="34"
        y1="26"
        x2="38"
        y2="26"
        stroke="#D4AF37"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="34"
        y1="30"
        x2="38"
        y2="30"
        stroke="#D4AF37"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" width="68" height="68">
      <path
        d="M26 38 C26 38 10 28 10 18 C10 13.5 13.5 10 18 10 C21 10 24 11.5 26 14 C28 11.5 31 10 34 10 C38.5 10 42 13.5 42 18 C42 28 26 38 26 38Z"
        fill="#F5D5C0"
        stroke="#D4AF37"
        strokeWidth="0"
        opacity="0.9"
      />
    </svg>
  );
}
function InfinityIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" width="68" height="68">
      <path
        d="M 12 26 C 12 20, 18 16, 24 20 L 28 26 C 34 32, 40 32, 40 26 C 40 20, 34 16, 28 20 L 24 26 C 18 32, 12 32, 12 26 Z"
        fill="none"
        stroke="#C8A84B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
