import React from "react";
import { rewardImages } from "../../js/data";

const SliderItem = ({ item }) => {
  return (
    <div className="slider-item d-flex fd-column">
      <img src={rewardImages(item.desc)} />
      {/* <span className="desc">
        x{" "}
        {item.desc === "Beans" ? (
          <>{item.count}</>
        ) : (
          <>
            {item.count} {item.count === 1 ? "day" : "days"}
          </>
        )}
      </span> */}
    </div>
  );
};

export default SliderItem;
