// ─────────────────────────────────────────────────────────
// ConfCard.jsx
// Rounded white panel used to group content on the
// Confirmation page (wish link, share, counter, etc.).
//
// Props:
//   title    (string)   – panel heading
//   sub      (string)   – optional subheading below title
//   children (ReactNode)
// ─────────────────────────────────────────────────────────

import { BG_WHITE, TEXT2, BORDER, SANS } from "../utils/tokens";

export default function ConfCard({ title, sub, children }) {
  return (
    <div style={{ background:BG_WHITE, border:`1.5px solid ${BORDER}`, borderRadius:12, padding:24 }}>
      {title && (
        <p style={{ fontSize:16, fontWeight:500, marginBottom: sub ? 7 : 14, fontFamily:SANS }}>
          {title}
        </p>
      )}
      {sub && (
        <p style={{ fontSize:13.5, color:TEXT2, lineHeight:1.65, marginBottom:16, fontFamily:SANS }}>
          {sub}
        </p>
      )}
      {children}
    </div>
  );
}
