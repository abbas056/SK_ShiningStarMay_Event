import React, { useState } from "react";
import guideBtn from "../../assets/register_page/Rules-btn.png";
import { overFlowAuto, overFlowHidden } from "../../js/helpers";
import GuideContent from "./GuideContent";

function Guide({ language }) {
  const [guide, setGuide] = useState(false);
  const guideFunc = () => {
    setGuide(true);
    overFlowHidden();
  };
  const close = () => {
    setGuide(false);
    overFlowAuto();
  };

  return (
    <>
      <div className="guide-popup p-fix">
        <img src={guideBtn} alt="" onClick={guideFunc} />
      </div>
      <GuideContent guide={guide} close={close} language={language} />
    </>
  );
}

export default Guide;
