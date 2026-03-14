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
import WishingWellPage  from "./pages/WishingWellPage";
import { BG, TEXT, SANS } from "./utils/tokens";

export default function App() {
  const [page, setPage] = useState("home");
  const [wish, setWish] = useState({ msg:"", from:"" });

  function go(p) {
    setPage(p);
    try { window.scrollTo({ top:0, behavior:"smooth" }); } catch(_) {}
  }

  const screens = {
    home:          <HomePage          go={go}/>,
    make:          <MakeWishPage      go={go} setWish={setWish}/>,
    complete:      <CompleteWishPage  go={go} wish={wish}/>,
    checkout:      <CheckoutPage      go={go} wish={wish}/>,
    confirmation:  <ConfirmationPage  go={go} wish={wish}/>,
    how:           <HowItWorksPage/>,
    impact:        <ImpactPage        go={go}/>,
    "wishing-well":<WishingWellPage/>,
  };

  return (
    <div style={{ fontFamily:SANS, background:BG, color:TEXT, height:"100vh", overflow:"hidden", display:"flex", flexDirection:"column" }}>
      <GlobalStyles/>
      <Navbar page={page} go={go}/>
      <main key={page} style={{ flex:1, minHeight:0, overflow:"hidden" }}>
        {screens[page] ?? screens.home}
      </main>
    </div>
  );
}
