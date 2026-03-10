// ─────────────────────────────────────────────────────────
// ItalicTag.jsx
// Centred serif italic tagline, used as a section footer.
// ─────────────────────────────────────────────────────────

import { TEXT2, SERIF } from "../utils/tokens";

export default function ItalicTag({ children }) {
  return (
    <p style={{
      textAlign: "center",
      fontFamily: SERIF, fontStyle: "italic",
      fontSize: 18, color: TEXT2,
      padding: "6px 0 26px",
    }}>
      {children}
    </p>
  );
}
