import React from "react";
import rewwardsTag from "../assets/Rewards-tag.png";
import SliderItems from "./reward-slider/SliderItems";
import gemIcon from "../assets/gems.png";

function Rewards({ tab1, tab2, categ, delight }) {
  return (
    <div className="rewards p-rel">
      <img className="rewards-tag m-auto p-abs" src={rewwardsTag} alt="" />
      {delight ? (
        <div className="rewards-text p-abs d-flex fd-column al-center jc-center">
          <span>
            *Rank 1 talent on Daily Leaderboard will win <br />
            <img style={{ width: "3vw", verticalAlign: "bottom" }} src={gemIcon} alt="" /> 5000 Gems, in addition to following accessories
          </span>
        </div>
      ) : null}
      <div className="rewards-box m-auto">
        <SliderItems
          tab1={tab1}
          tab2={tab2}
          categS={categ?.categS}
          categA={categ?.categA}
          categB={categ?.categB}
          categC={categ?.categC}
          delight={delight}
        />
      </div>
    </div>
  );
}

export default Rewards;
