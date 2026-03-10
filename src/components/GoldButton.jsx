// ─────────────────────────────────────────────────────────
// GoldButton.jsx
// Primary call-to-action button with gold gradient.
//
// Props:
//   children  – button label
//   onClick   – click handler
//   disabled  – disables and dims the button
//   full      – width: 100%
//   large     – larger font + padding
//   style     – extra inline styles
// ─────────────────────────────────────────────────────────

import { GOLD_GRAD, SANS } from "../utils/tokens";

export default function GoldButton({ children, onClick, disabled, full, large, style: extra = {} }) {
  return (
    <button
      className="wm-gold-btn"
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
        fontFamily: SANS, fontWeight: 500,
        fontSize: large ? 15.5 : 14.5,
        letterSpacing: "0.025em",
        border: "none", borderRadius: 5,
        padding: large ? "15px 52px" : full ? "14px 20px" : "13px 38px",
        width: full ? "100%" : undefined,
        background: GOLD_GRAD,
        color: "#FFF8E8",
        boxShadow: "0 3px 14px rgba(184,150,12,0.28)",
        cursor: "pointer",
        ...extra,
      }}
    >
      {children}
    </button>
  );
}
