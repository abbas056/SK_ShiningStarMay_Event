import React, { useContext } from "react";
import headingBottom from "../assets/Heading-bottom.png";
import mascot from "../assets/Mascot.png";
import { ApiContext } from "../js/api";

function RulesText() {
  const { userInfo } = useContext(ApiContext);
  const level = userInfo && userInfo?.level;
  return (
    <>
      <div className="my-category d-flex al-center jc-center gap-1 m-auto c-yellow fw-bold">
        My Category:{" "}
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
      </div>
      <div className="rules-text d-flex al-center jc-center p-rel">
        <img className="mascot p-abs" src={mascot} alt="" />
        <div className="rules-text-inner">
          <div className="d-flex al-center fd-column jc-center">
            <h3 className="c-yellow m-auto">Guidelines to upgrade category:</h3>
            <img className="w-60" src={headingBottom} alt="" />
          </div>
          <ul>
            <li>Only the talents approved by SK employees will be participate. </li>
            <li>The rankings are based on points system. </li>
            <li>
              Points are calculated based on the viewtime of each user ID coming on your live broadcast. Please check the guide to know more about
              points calculations.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default RulesText;
