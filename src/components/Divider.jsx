// ─────────────────────────────────────────────────────────
// Divider.jsx
// Full-width horizontal rule with a centred gold ✦.
// ─────────────────────────────────────────────────────────

import { GOLD, BORDER } from "../utils/tokens";

export default function Divider() {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:16, padding:"34px 0" }}>
      <div style={{ flex:1, height:1, background:BORDER }}/>
      <span style={{ fontSize:14, color:GOLD }}>✦</span>
      <div style={{ flex:1, height:1, background:BORDER }}/>
    </div>
  );
}
