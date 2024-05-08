import React, { useState, useContext } from "react";
import infoIcon from "../assets/Info-icon.png";
import days from "../assets/Days.png";
import pointer from "../assets/Progress-pointer.png";
import { friendshipDays } from "../js/data";
import InfoPopup from "./popups/InfoPopup";
import { ApiContext } from "../js/api";

function DailyProgress() {
  const { userInfo } = useContext(ApiContext);
  // const [info, setInfo] = useState(false);
  let gearValue = userInfo?.taskCompleteDayCount;

  const isPrev = (gear) => {
    return gearValue >= gear;
  };
  const isComplete = (gear) => {
    return gearValue === gear;
  };

  // const InfoFunc = () => {
  //   setInfo(true);
  //   overFlowHidden();
  // };
  // const close = () => {
  //   setInfo(false);
  //   overFlowAuto();
  // };
  return (
    <>
      <div className="daily-progress m-auto d-flex fd-column jc-center gap-2 p-rel">
        {/* <button onClick={InfoFunc}>
          <img className="info-icon p-abs" src={infoIcon} alt="" />
        </button> */}
        <div className="progress d-flex al-center p-abs">
          <div className="inner">
            {friendshipDays.map((itm, index) => {
              const isActive = isPrev(itm.id);
              const isDOne = isComplete(itm.id);
              return (
                <div className="d-flex fd-column" key={index}>
                  <img className={`pointer_${index + 1} p-abs`} src={isDOne && pointer} alt="" />
                  <img className={!isActive ? `unfiltered_${index + 1}` : `filtered_${index + 1}`} key={index} src={itm.img} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <img className="days m-auto p-abs" src={days} alt="" />
      </div>
      {/* <InfoPopup info={info} close={close} /> */}
    </>
  );
}

export default DailyProgress;
