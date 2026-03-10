// ─────────────────────────────────────────────────────────
// OutlineButton.jsx
// Secondary / ghost button with bordered outline style.
//
// Props:
//   children  – button label
//   onClick   – click handler
//   style     – extra inline styles
// ─────────────────────────────────────────────────────────

import { BORDER, TEXT, SANS } from "../utils/tokens";

export default function OutlineButton({ children, onClick, style: extra = {} }) {
  return (
    <button
      className="wm-outline-btn"
      onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        fontFamily: SANS, fontWeight: 500, fontSize: 14, letterSpacing: "0.02em",
        border: `1.5px solid ${BORDER}`, borderRadius: 5,
        padding: "12px 26px", background: "transparent", color: TEXT,
        cursor: "pointer",
        ...extra,
      }}
    >
      {children}
    </button>
  );
}
