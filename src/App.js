import React, { useState, useEffect, useContext } from "react";
import Register from "./components/registration/Register";
import header from "./assets/register_page/Header.jpg";
import upBtn from "./assets/up-btn.png";
import Footer from "./components/common/Footer";
import TabButtons from "./components/tab-buttons/TabButtons";
import Guide from "./components/popups/Guide";
import LanguageBar from "./components/LanguageBar";
import { ApiContext } from "./js/api";
import "./App.scss";
import RulesText from "./components/RulesText";

function App() {
  let [language, setLanguage] = useState("English");
  const [tab1, settab1] = useState(true);
  const [tab2, settab2] = useState(false);
  const [tab3, settab3] = useState(false);
  const { userInfo } = useContext(ApiContext);
  const [showBtnUp, setShowBtnUp] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setShowBtnUp(true);
      } else {
        setShowBtnUp(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <span id="extraContent"></span>
      <img className="header" src={header} alt="" />

      {tab1 ? <RulesText /> : null}
      <TabButtons tab1={tab1} settab1={settab1} tab2={tab2} settab2={settab2} tab3={tab3} settab3={settab3} />

      {showBtnUp && (
        <button className="btn-up" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={upBtn} alt="" />
        </button>
      )}
      <Footer />
      <LanguageBar setLanguage={setLanguage} language={language} />
      <Guide language={language} />
    </div>
  );
}

export default App;
