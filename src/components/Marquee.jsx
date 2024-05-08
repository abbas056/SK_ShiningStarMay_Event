import React, { useContext } from "react";
import unknown from "../assets/unknown.png";
import FastMarquee from "react-fast-marquee";
import { ApiContext } from "../js/api";
import { goTo } from "../js/helpers";

function Marque() {
  const { getWinner, isLive } = useContext(ApiContext);
  let marqData = getWinner?.list && getWinner?.list;
  let marqueeData = marqData;

  return (
    <>
      {marqueeData?.length == 0 ? null : (
        <div className="marque-container">
          <FastMarquee direction="left" gradient={false} gradientColor={[0, 0, 0]} speed={120}>
            {marqueeData?.map((item, index) => {
              const name = item.nickname;
              const nickName = name.slice(0, 6);
              const userId = item.userId;
              return (
                <div className="marquee-alternative" key={index}>
                  <div className="taxts d-flex al-center">
                    <div className="uu-image d-flex al-center jc-center">
                      <div
                        className="d-flex jc-center al-center"
                        onClick={() => {
                          goTo(isLive, userId, userId);
                        }}
                      >
                        <img src={item.portrait ? item.portrait : unknown} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <div className="content d-flex al-center fd-row">
                        <span>Top</span> <span> {index + 1}</span>
                        <span className="nick-name">{nickName}</span>
                        <p>has Opened </p>
                        <span>{item?.userScore}</span>
                        <span className="c-white">Mystery {item.userScore == 1 ? "Bag" : "Bags"}.</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </FastMarquee>
        </div>
      )}
    </>
  );
}

export default Marque;
