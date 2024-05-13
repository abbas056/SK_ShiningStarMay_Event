import React, { useContext } from "react";
import unknown from "../../../assets/unknown.png";
import frame1 from "../../../assets/frame1.png";
import frame2 from "../../../assets/frame2.png";
import frame3 from "../../../assets/frame3.png";
import { actorURL, captureImageError, currencySlang, estimatedBeans, goTo } from "../../../js/helpers";
import beanIcon from "../../../assets/bean.png";
import { ApiContext } from "../../../js/api";
import startIcon from "../../../assets/Star.png";

function TopWinners({ userName, userScore, userAvatar, userId, index, actorLevel, categ, tab1, tab2 }) {
  const { userInfo, isLive } = useContext(ApiContext);
  let beansPot;
  let weekIndex = userInfo && userInfo?.weekIndex;
  let rank = index + 1;

  if (weekIndex == 0 || weekIndex == 1) {
    beansPot = userInfo?.beansPotMap?.week_1 ? userInfo?.beansPotMap?.week_1 : 0;
  } else {
    beansPot = userInfo?.beansPotMap?.week_2 ? userInfo?.beansPotMap?.week_2 : 0;
  }

  return (
    <div className="innerData f-Heinemann">
      <div className={rank == 1 ? "first-user p-rel" : "runner-user p-rel"}>
        <img onError={captureImageError} className="rank-user-image" src={userAvatar ? userAvatar : unknown} alt="" />
        <div
          onClick={() => {
            goTo(isLive, userId, userId);
          }}
        >
          <img className="rank-border-image p-rel" src={rank == 1 ? frame1 : rank == 2 ? frame2 : frame3} alt="" />
        </div>
      </div>
      <div className={rank == 1 ? "bottom-data1" : rank == 2 ? "bottom-data2" : "bottom-data3"}>
        <div className="bottom-info">
          <div className="username">{userName && userName.slice(0, 12)}</div>
          <img style={tab1 || tab2 ? { width: "7vw" } : { width: "12vw" }} src={actorURL + actorLevel + ".png"} alt="" />
        </div>
        <div className="score-box d-flex fd-column al-center">
          <div className="score d-flex al-center">
            <span>Est. beans</span>
            <div className="d-flex al-center jc-center">
              <img style={{ width: "3vw" }} src={beanIcon} alt="" />
              <span>{estimatedBeans(rank, beansPot, categ, tab2)}</span>
            </div>
          </div>
          <div className="points d-flex al-center jc-center p-rel">
            <img className="p-abs" style={{ width: "7vw", left: "-2vw" }} src={startIcon} alt="" />
            <span>{userScore} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopWinners;
