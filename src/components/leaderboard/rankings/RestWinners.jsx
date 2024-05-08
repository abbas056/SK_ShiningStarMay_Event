import React, { useContext } from "react";
import unknown from "../../../assets/unknown.png";
import { actorURL, captureImageError, currencySlang, formatData, goTo, userURL } from "../../../js/helpers";
import { ApiContext } from "../../../js/api";
import LeaderBoardSlider from "../../leaderboard-slider/LeaderBoardSlider";

function RestWinners({ userName, userScore, userAvatar, index, userId, listNumber, userLevel, actorLevel, tab1, tab2, tab3, desc }) {
  const { isLive } = useContext(ApiContext);
  let levelUrl;
  let level;
  let arrayDesc = desc && JSON.parse(desc);

  if (tab1) {
    levelUrl = actorURL;
    level = actorLevel;
  } else if (tab2) {
    levelUrl = actorURL;
    level = actorLevel;
  } else {
    levelUrl = userURL;
    level = userLevel;
  }

  return (
    <div className="users-details-onward" key={index}>
      <div className="d-flex gap-2 al-center p-rel jc-center">
        <div className="rank-id d-flex al-center jc-center">{listNumber}.</div>
        <div className="d-flex al-center gap-2">
          <div className={tab3 || tab1 ? "frame d-flex al-center jc-center" : ""}>
            <div
              className="d-flex jc-center al-center"
              onClick={() => {
                goTo(isLive, userId, userId);
              }}
            >
              <img onError={captureImageError} className="user-image" src={userAvatar ? userAvatar : unknown} alt="" />
            </div>
          </div>
          <div className="user-info d-flex fd-column">
            <span className="username">{userName && userName.slice(0, 8)}</span>
            <img style={tab1 || tab2 ? { width: "7vw" } : { width: "12vw" }} src={levelUrl + level + ".png"} alt="" />
          </div>
        </div>
      </div>
      {tab2 ? (
        <div className="points d-flex al-center jc-start">
          <span>
            {currencySlang(userScore)} {userScore === 1 ? "Point Received" : "Points Received"}
          </span>
        </div>
      ) : (
        <div className="est-rew d-flex al-center jc-start gap-1" style={{ width: "35vw" }}>
          <LeaderBoardSlider description={formatData(arrayDesc)} />
        </div>
      )}
    </div>
  );
}

export default RestWinners;
