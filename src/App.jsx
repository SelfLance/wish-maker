// ─────────────────────────────────────────────────────────
// App.jsx — WishMaker.io Root
//
// Holds global state and wires all pages together.
// Navigation: go("pageName") from any child component.
//
// State:
//   page (string)  – active page key
//   wish (object)  – { msg, from } captured on MakeWishPage
// ─────────────────────────────────────────────────────────

import { useState } from "react";

import GlobalStyles     from "./components/GlobalStyles";
import Navbar           from "./components/Navbar";
import HomePage         from "./pages/HomePage";
import MakeWishPage     from "./pages/MakeWishPage";
import CompleteWishPage from "./pages/CompleteWishPage";
import CheckoutPage     from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import HowItWorksPage   from "./pages/HowItWorksPage";
import ImpactPage       from "./pages/ImpactPage";

import { BG, TEXT, SANS } from "./utils/tokens";

export default function App() {
  const [page, setPage] = useState("home");
  const [wish, setWish] = useState({ msg: "", from: "" });

  function go(p) {
    setPage(p);
    try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch (_) {}
  }

  const screens = {
    home:         <HomePage          go={go} />,
    make:         <MakeWishPage      go={go} setWish={setWish} />,
    complete:     <CompleteWishPage  go={go} wish={wish} />,
    checkout:     <CheckoutPage      go={go} wish={wish} />,
    confirmation: <ConfirmationPage  go={go} wish={wish} />,
    how:          <HowItWorksPage />,
    impact:       <ImpactPage        go={go} />,
  };

  return (
    <div style={{ fontFamily: SANS, background: BG, color: TEXT, minHeight: "100vh" }}>
      <GlobalStyles />
      <Navbar page={page} go={go} />
      {/* key forces fresh mount so entry animations replay on every navigation */}
      <main key={page}>
        {screens[page] ?? screens.home}
      </main>
    </div>
  );
}
