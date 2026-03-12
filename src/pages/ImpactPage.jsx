// ─────────────────────────────────────────────────────────
// ImpactPage.jsx
// Make-A-Wish donation story: 50% stat, why it matters,
// three-point ripple effect, final CTA.
// ─────────────────────────────────────────────────────────

import GoldButton from "../components/GoldButton";
import Divider from "../components/Divider";
import { GOLD, BG, TEXT, TEXT2, TEXT3, SERIF, SANS } from "../utils/tokens";

export default function ImpactPage({ go }) {
  const heroImage = new URL("/images/1.jpg", import.meta.url).href;

  return (
    <div style={{ background: BG }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "64px 24px" }}>
        {/* Header */}
        <div
          className="wm-fadeup"
          style={{ textAlign: "center", marginBottom: 32 }}
        >
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: GOLD,
              fontWeight: 500,
              marginBottom: 11,
              fontFamily: SANS,
            }}
          >
            ✦ WishMaker.io
          </p>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(36px,5vw,52px)",
              fontWeight: 300,
              marginBottom: 13,
            }}
          >
            Our Impact
          </h1>
          <h2
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              color: GOLD,
              fontSize: 23,
              fontWeight: 400,
              marginBottom: 18,
            }}
          >
            A Wish That Gives Back
          </h2>
          <p
            style={{
              fontSize: 15,
              color: TEXT2,
              lineHeight: 1.8,
              fontFamily: SANS,
            }}
          >
            Every message written on WishMaker becomes more than a memory.
          </p>
          <p style={{ fontSize: 15, color: TEXT2, fontFamily: SANS }}>
            It becomes a moment of hope.
          </p>
        </div>

        {/* Hero image */}
        <div
          className="wm-fadeup1"
          style={{
            width: "100%",
            borderRadius: 14,
            marginBottom: 36,
            height: 240,
            background: `url(${heroImage}) center/cover no-repeat`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            boxShadow: "0 10px 36px rgba(0,0,0,0.07)",
          }}
        ></div>

        {/* 50% stat */}
        <div
          className="wm-fadeup2"
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <p style={{ fontSize: 16, lineHeight: 1.92, fontFamily: SANS }}>
            <span
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(20px,3vw,26px)",
                fontWeight: 600,
                color: GOLD,
              }}
            >
              50% of every{" "}
            </span>
            WishMaker purchase is donated to the{" "}
            <strong>Make-A-Wish Foundation</strong>, helping grant life-changing
            wishes for children facing critical illnesses.
          </p>
          <p
            style={{
              marginTop: 18,
              fontSize: 15,
              color: TEXT2,
              lineHeight: 1.8,
              fontFamily: SANS,
            }}
          >
            When you create a wish for someone you love, you are also helping
            grant a wish for a child who needs hope the most.
          </p>
        </div>

        <Divider />

        {/* Why it matters */}
        <div className="wm-fadeup" style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(22px,3vw,34px)",
              fontWeight: 400,
              marginBottom: 16,
            }}
          >
            Why It Matters
          </h2>
          <p
            style={{
              fontSize: 15,
              color: TEXT2,
              lineHeight: 1.86,
              marginBottom: 11,
              fontFamily: SANS,
            }}
          >
            For children battling serious illness, a wish can mean more than a
            dream fulfilled.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.86, fontFamily: SANS }}>
            It can restore joy, <strong>inspire strength</strong>, and bring
            families moments of light during the darkest times.
          </p>
        </div>

        <Divider />

        {/* Lasting ripple */}
        <div
          className="wm-fadeup"
          style={{ marginBottom: 52, textAlign: "center" }}
        >
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(22px,3vw,34px)",
              fontWeight: 400,
              marginBottom: 20,
            }}
          >
            A Lasting Ripple
          </h2>
          <p style={{ fontSize: 15, marginBottom: 24, fontFamily: SANS }}>
            A <strong>single</strong> WishMaker card creates{" "}
            <strong>three</strong> lasting impacts:
          </p>
          <div
            style={{ maxWidth: 400, margin: "0 auto 28px", textAlign: "left" }}
          >
            {[
              "A message preserved forever on the blockchain",
              "A keepsake card shared with someone you love",
              "A real wish granted for a child in need",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontSize: 15,
                  color: TEXT2,
                  lineHeight: 1.68,
                  marginBottom: 13,
                  fontFamily: SANS,
                }}
              >
                <span
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    marginTop: 2,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
          <p
            style={{
              fontWeight: 500,
              marginBottom: 40,
              fontSize: 15,
              fontFamily: SANS,
            }}
          >
            One message. Three lives touched.
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 19,
              color: TEXT,
              marginBottom: 42,
              lineHeight: 1.6,
            }}
          >
            ✦{" "}
            <em>
              Make a wish that lasts forever — and help grant one that truly
              matters.
            </em>
          </p>
          <GoldButton large onClick={() => go("make")}>
            Make a Wish
          </GoldButton>
        </div>
      </div>
    </div>
  );
}
