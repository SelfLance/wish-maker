// ─────────────────────────────────────────────────────────
// GlobalStyles.jsx
// Injects @keyframes + pseudo-class rules + media queries
// via a single <style> tag. All component-level styling
// uses inline style={} objects.
// ─────────────────────────────────────────────────────────

import { GOLD, GOLD_GLOW, TEXT } from "../utils/tokens";

const css = `
  /* ── Resets ── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { -webkit-font-smoothing: antialiased; }

  /* ── Keyframes ── */
  @keyframes wm-float   { 0%,100%{transform:translateY(0px)}  50%{transform:translateY(-11px)} }
  @keyframes wm-fadeup  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes wm-pulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.7;transform:scale(0.93)} }
  @keyframes wm-shimmer { 0%,100%{opacity:0.6} 50%{opacity:1} }

  /* ── Animation classes ── */
  .wm-float    { animation: wm-float   5.5s ease-in-out infinite }
  .wm-fadeup   { animation: wm-fadeup  0.55s cubic-bezier(0.22,1,0.36,1) both }
  .wm-fadeup1  { animation: wm-fadeup  0.55s cubic-bezier(0.22,1,0.36,1) 0.10s both }
  .wm-fadeup2  { animation: wm-fadeup  0.55s cubic-bezier(0.22,1,0.36,1) 0.22s both }
  .wm-fadeup3  { animation: wm-fadeup  0.55s cubic-bezier(0.22,1,0.36,1) 0.36s both }
  .wm-pulse    { animation: wm-pulse   3s   ease-in-out infinite }
  .wm-shimmer  { animation: wm-shimmer 2.2s ease-in-out infinite }

  /* ── Nav link underline ── */
  .wm-nav-link { position: relative; }
  .wm-nav-link::after {
    content: ''; position: absolute; bottom: -3px; left: 0;
    width: 0; height: 1px; background: ${GOLD}; transition: width 0.2s ease;
  }
  .wm-nav-link:hover::after, .wm-nav-link.active::after { width: 100%; }
  .wm-nav-link:hover { color: ${TEXT} !important; }

  /* ── Input focus ring ── */
  .wm-input:focus {
    border-color: ${GOLD} !important;
    box-shadow: 0 0 0 3px ${GOLD_GLOW} !important;
    outline: none !important;
  }

  /* ── Button hover states ── */
  .wm-gold-btn { transition: all 0.2s ease; }
  .wm-gold-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 26px rgba(184,150,12,0.42) !important;
  }
  .wm-gold-btn:disabled { opacity: 0.42; cursor: not-allowed; }

  .wm-outline-btn { transition: all 0.2s ease; }
  .wm-outline-btn:hover {
    border-color: ${GOLD} !important;
    color: ${GOLD} !important;
    background: ${GOLD_GLOW} !important;
  }

  /* ── How-it-works circle ── */
  .wm-how-circle { transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .wm-how-circle:hover { transform: scale(1.05); box-shadow: 0 8px 32px rgba(184,150,12,0.22) !important; }

  /* ── Responsive breakpoints ── */
  @media (max-width: 860px) {
    .wm-hero     { grid-template-columns: 1fr !important; }
    .wm-feats    { grid-template-columns: 1fr !important; gap: 24px !important; }
    .wm-2col     { grid-template-columns: 1fr !important; gap: 28px !important; }
    .wm-checkout { grid-template-columns: 1fr !important; }
    .wm-how-grid { grid-template-columns: 1fr !important; max-width: 380px !important; margin-left: auto !important; margin-right: auto !important; }
    .wm-hero-vis { order: -1; }
    .wm-page     { padding: 48px 20px 40px !important; }
    .wm-nav      { padding: 0 18px !important; }
  }
  @media (max-width: 560px) {
    .wm-hero-h1   { font-size: 42px !important; }
    .wm-social    { flex-direction: column !important; }
    .wm-card-lg-w { width: 168px !important; height: 218px !important; }
    .wm-card-md-w { width: 150px !important; height: 196px !important; }
  }
`;

export default function GlobalStyles() {
  return <style>{css}</style>;
}
