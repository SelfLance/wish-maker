// ─────────────────────────────────────────────────────────
// Field.jsx
// Text input or textarea with optional label.
//
// Props:
//   label       (string)  – uppercased label above the field
//   value       (string)  – controlled value
//   onChange    (fn)      – change handler
//   placeholder (string)  – placeholder text
//   multiline   (bool)    – renders a <textarea> instead
//   maxLength   (number)  – character cap
//   autoFocus   (bool)    – auto-focus on mount
//   type        (string)  – input type, default "text"
// ─────────────────────────────────────────────────────────

import { BG_WHITE, TEXT, TEXT3, BORDER, SERIF, SANS } from "../utils/tokens";

export default function Field({
  label,
  value,
  onChange,
  placeholder,
  multiline,
  maxLength,
  autoFocus,
  type = "text",
}) {
  const baseSt = {
    width: "100%",
    padding: multiline ? "13px 14px" : "10px 13px",
    background: BG_WHITE,
    border: `1.5px solid ${BORDER}`,
    borderRadius: 5,
    fontFamily: multiline ? SERIF : SANS,
    fontSize: multiline ? 15.5 : 14,
    fontStyle: multiline ? "italic" : "normal",
    color: TEXT,
    transition: "border-color 0.2s, box-shadow 0.2s",
    lineHeight: multiline ? 1.72 : undefined,
    resize: multiline ? "vertical" : undefined,
    minHeight: multiline ? 118 : undefined,
    boxSizing: "border-box",
  };

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
      {label && (
        <label style={{ fontSize:11, fontWeight:500, letterSpacing:"0.07em", textTransform:"uppercase", color:TEXT3, fontFamily:SANS }}>
          {label}
        </label>
      )}
      {multiline ? (
        <textarea
          className="wm-input"
          value={value} onChange={onChange}
          placeholder={placeholder} maxLength={maxLength} autoFocus={autoFocus}
          style={baseSt}
        />
      ) : (
        <input
          className="wm-input"
          type={type} value={value} onChange={onChange}
          placeholder={placeholder} maxLength={maxLength} autoFocus={autoFocus}
          style={baseSt}
        />
      )}
    </div>
  );
}
