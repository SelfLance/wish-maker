// ─────────────────────────────────────────────────────────
// PageHeader.jsx
// Centred page heading with optional subtitle paragraph.
//
// Props:
//   title    (string) – main heading
//   subtitle (string) – optional lead text below the heading
// ─────────────────────────────────────────────────────────

import { TEXT, TEXT2, SERIF, SANS } from "../utils/tokens";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="wm-fadeup" style={{ textAlign:"center", marginBottom:52 }}>
      <h1 style={{
        fontFamily: SERIF,
        fontSize: "clamp(34px, 4.5vw, 52px)",
        fontWeight: 400, lineHeight: 1.15, marginBottom: 13, color: TEXT,
      }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ fontSize:15, color:TEXT2, lineHeight:1.78, maxWidth:520, margin:"0 auto", fontFamily:SANS }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
