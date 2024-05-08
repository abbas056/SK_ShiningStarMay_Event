import React from "react";
import PointOmeter from "./../tabs/PointOmeter";
import AccessoriesGallery from "./../tabs/AccessoriesGallery";
import AimTheDarts from "./../tabs/AimTheDarts";
import tab1Btn from "../../assets/dailyDelight-btn.png";
import tab2Btn from "../../assets/PointOmeter-btn.png";
import tab3Btn from "../../assets/Aimthedarts-btn.png";

function TabButtons({ tab1, settab1, tab2, settab2, tab3, settab3 }) {
  const tabOne = () => {
    settab1(true);
    settab2(false);
    settab3(false);
  };
  const tabTwo = () => {
    settab1(false);
    settab2(true);
    settab3(false);
  };
  const tabThree = () => {
    settab1(false);
    settab2(false);
    settab3(true);
  };

  const renderingTabs = () => {
    switch (true) {
      case tab1:
        return <AccessoriesGallery tab1={tab1} />;
      case tab2:
        return <PointOmeter tab2={tab2} />;
      case tab3:
        return <AimTheDarts tab3={tab3} />;
    }
  };

  return (
    <>
      {/* <Marque /> */}
      <div className="tab-buttons p-rel z-index-1 d-flex jc-sEven">
        <button onClick={tabOne}>
          <img style={{ width: "30vw" }} className={tab1 ? "gray-0" : "gray-1"} src={tab1Btn} alt="" />
        </button>
        <button onClick={tabTwo}>
          <img style={{ width: "30vw" }} className={tab2 ? "gray-0" : "gray-1"} src={tab2Btn} alt="" />
        </button>
        <button onClick={tabThree}>
          <img style={{ width: "30vw" }} className={tab3 ? "gray-0" : "gray-1"} src={tab3Btn} alt="" />
        </button>
      </div>
      <div>{renderingTabs()}</div>
    </>
  );
}

export default TabButtons;
