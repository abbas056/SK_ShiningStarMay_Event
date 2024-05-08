import React, { useContext } from "react";
import tokenIcon from "../assets/Golden-Ticket-icon.png";
import { ApiContext } from "../js/api";

function MyPoints({ tab2 }) {
  const { userInfo } = useContext(ApiContext);
  const level = userInfo && userInfo?.level;

  return (
    <div className={tab2 ? "my-points-tab1 c-yellow" : "my-points"}>
      {tab2 ? (
        <>
          <div className="my-points-category d-flex al-center jc-center gap-1">
            My Category:{" "}
            <span className="c-yellow fw-bold">
              {" "}
              <span>
                {" "}
                {level == "S" ? (
                  <span className="c-yellow fw-bold">S</span>
                ) : level == "A" ? (
                  <span className="c-yellow fw-bold">A</span>
                ) : level == "B" ? (
                  <span className="c-yellow fw-bold">B</span>
                ) : level == "C" ? (
                  <span className="c-yellow fw-bold">C</span>
                ) : level == "D" ? (
                  <span className="c-yellow fw-bold">D</span>
                ) : (
                  <span className="c-yellow fw-bold">Not Categ..</span>
                )}
              </span>
            </span>
          </div>
          <div className="my-points-collected d-flex al-center jc-center">
            My Points Collected: {userInfo?.watchPoints ? userInfo?.watchPoints : "0"}
          </div>
        </>
      ) : (
        <>
          <div className="my-points-category d-flex fd-column al-center jc-center">
            Available Tokens <br />
            <div className="d-flex al-center gap-1">
              <span>Balance: {userInfo?.surplusTokens ? userInfo?.surplusTokens : "0"}</span> <img className="w-4vw" src={tokenIcon} alt="" />
            </div>
          </div>
          <div className="my-points-category d-flex fd-column al-center jc-center">
            Total Weekly Tokens <br />
            <div className="d-flex al-center gap-1">
              <span>Collected: {userInfo?.totalTokens ? userInfo?.totalTokens : "0"}</span> <img className="w-4vw" src={tokenIcon} alt="" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MyPoints;
