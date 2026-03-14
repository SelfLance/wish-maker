import { GOLD, GOLD_GLOW } from "../utils/tokens";

const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; overflow: hidden; -webkit-font-smoothing: antialiased; }

  @keyframes wm-float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes wm-fadeup  { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  @keyframes wm-pulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.65;transform:scale(0.9)} }
  @keyframes wm-shimmer { 0%,100%{opacity:0.55} 50%{opacity:1} }

  .wm-float   { animation: wm-float   5.5s ease-in-out infinite }
  .wm-fadeup  { animation: wm-fadeup  0.5s cubic-bezier(0.22,1,0.36,1) both }
  .wm-fadeup1 { animation: wm-fadeup  0.5s cubic-bezier(0.22,1,0.36,1) 0.10s both }
  .wm-fadeup2 { animation: wm-fadeup  0.5s cubic-bezier(0.22,1,0.36,1) 0.22s both }
  .wm-fadeup3 { animation: wm-fadeup  0.5s cubic-bezier(0.22,1,0.36,1) 0.36s both }
  .wm-pulse   { animation: wm-pulse   3s   ease-in-out infinite }
  .wm-shimmer { animation: wm-shimmer 2.2s ease-in-out infinite }

  .wm-nav-link { position:relative; }
  .wm-nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:${GOLD}; transition:width 0.2s; }
  .wm-nav-link:hover::after, .wm-nav-link.active::after { width:100%; }
  .wm-nav-link:hover { opacity:0.75 !important; }

  .wm-input:focus { border-color:${GOLD} !important; box-shadow:0 0 0 3px ${GOLD_GLOW} !important; outline:none !important; }

  .wm-gold-btn { transition:all 0.2s ease; }
  .wm-gold-btn:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 6px 22px rgba(184,150,12,0.42) !important; }
  .wm-gold-btn:disabled { opacity:0.38; cursor:not-allowed; }

  .wm-outline-btn { transition:all 0.2s ease; }
  .wm-outline-btn:hover { border-color:${GOLD} !important; color:${GOLD} !important; background:${GOLD_GLOW} !important; }

  .wm-how-circle { transition:transform 0.22s ease; }
  .wm-how-circle:hover { transform:scale(1.04); }

  /* single-page: each page exactly fills the viewport below the nav */
  .wm-screen {
    height: calc(100vh - 65px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`;

export default function GlobalStyles() {
  return <style>{css}</style>;
}
