// ─────────────────────────────────────────────────────────
// TrustBar.jsx
// Horizontal strip of security/trust badge labels.
// Used at the bottom of Checkout and HowItWorks pages.
// ─────────────────────────────────────────────────────────

import { BG_WHITE, TEXT3, BORDER, SANS } from "../utils/tokens";

const BADGES = ["🔒 Secure SSL", "✓ Norton", "Authorize.Net", "Verified VISA", "AMEX"];

export default function TrustBar() {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: 22, flexWrap: "wrap",
      padding: "13px 20px",
      background: BG_WHITE, border: `1px solid ${BORDER}`, borderRadius: 5,
    }}>
      {BADGES.map(t => (
        <span key={t} style={{ fontSize:12, color:TEXT3, fontWeight:500, fontFamily:SANS }}>{t}</span>
      ))}
    </div>
  );
}
