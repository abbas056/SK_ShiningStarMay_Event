import React, { useState, useContext } from "react";
import tokenIcon from "../assets/Golden-Ticket-icon.png";
import { firstAccessories, rewardImages, secondAccessories, week1Accessories, week2Accessories } from "../js/data";
import { callingApi, overFlowAuto, overFlowHidden, successAlert, unsuccessAlert } from "../js/helpers";
import { baserUrl } from "../js/baserUrl";
import { ApiContext } from "../js/api";
import closeButton from "../assets/close-Button.png";
import oops from "../assets/popups/oops.png";
import yayy from "../assets/popups/Yay.png";
import RewardsHistory from "./popups/RewardsHistory";
import headTag from "../assets/Accessories-Galary-tag.png";
import handIcon from "../assets/hand-icon.png";
import mascot from "../assets/Mascot.png";
import yesBtn from "../assets/Yes-btn.png";
import noBtn from "../assets/No-btn.png";

function RedeemRewards({ giftIcon, openHistory, history, sethistory, loadMoreHistory, isLoading, gameRecords, setLoadMore }) {
  const { userId, userToken, userInfo, refreshApi } = useContext(ApiContext);
  const [selectedData, setSelectedData] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertpopup, setAlertpopup] = useState([]);
  const [success, setsuccess] = useState(false);
  const [overlay, setOverlay] = useState(true);
  const [confirm, setConfirm] = useState(false);

  let accessories;
  let weekAccessories;
  let weekIndex = userInfo?.weekIndex;
  if (weekIndex === 0 || weekIndex === 1) {
    accessories = firstAccessories;
    weekAccessories = week1Accessories;
  } else {
    accessories = secondAccessories;
    weekAccessories = week2Accessories;
  }
  const [daily] = weekAccessories?.filter((items) => items.level == selectedData);
  let totalTokens = userInfo?.totalTokens;
  let points = daily?.voucher;

  const handleClick = (boxIndex) => {
    setSelectedData(boxIndex);
  };
  const redeem = () => {
    if (selectedData) {
      setConfirm(true);
    } else {
      setAlert(true);
      setAlertpopup(
        unsuccessAlert(
          oops,
          <div>
            <span>Please select any one rewards box first!</span>
          </div>
        )
      );
      overFlowHidden();
    }
  };
  const close = () => {
    setAlert(false);
    overFlowAuto();
    setButtonDisabled(false);
    setsuccess(false);
    sethistory(false);
    setLoadMore(1);
    setConfirm(false);
  };

  const overlayFunc = () => {
    setOverlay(false);
  };
  const handleYes = () => {
    setButtonDisabled(true);
    if (totalTokens < points) {
      setAlert(true);
      setAlertpopup(
        unsuccessAlert(
          oops,
          <div>Seems like you have tried to utilize more Tokens than you actually have. Please collect more Tokens by completing daily tasks.</div>
        )
      );
      overFlowHidden();
      setSelectedData();
    } else {
      callingApi(`${baserUrl}api/activity/shiningStarMay/playGame?type=1&playCount=${selectedData}`, userId, userToken)
        .then((response) => {
          if (response.errorCode === 0) {
            setAlert(true);
            setAlertpopup(
              successAlert(
                yayy,
                <div>
                  You've successfully redeemed
                  <div className="rews-box d-flex al-start jc-center">
                    {response?.data?.rewardDTOList.map((item, index) => {
                      return (
                        <div className="d-flex al-center jc-center fd-column gap-2" key={index} style={{ width: "50vw" }}>
                          <img style={{ width: "18vw" }} src={rewardImages(item?.desc)} alt="" />
                          <div className="name c-yellow">
                            <div className="c-yellow">{item.desc}</div>x{" "}
                            {item?.desc == "Beans" ? (
                              item?.count
                            ) : (
                              <>
                                {item.count} {item.count === 1 ? "day" : "days"}
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  We've deducted <span className="c-yellow"> {daily.voucher} </span>Tokens. Continue doing daily tasks regularly to earn extra Tokens.
                </div>
              )
            );
            refreshApi();
            overFlowHidden();
            setSelectedData();
            setsuccess(true);
          } else if (response.msg === "POINT_NOT_ENOUGH") {
            setAlert(true);
            setAlertpopup(
              unsuccessAlert(
                oops,
                <div>
                  Seems like you have tried to utilize more Tokens than you actually have. Please collect more Tokens by completing daily tasks.
                </div>
              )
            );
          } else {
            setAlert(true);
            setAlertpopup(unsuccessAlert(oops, <div>{response?.msg}</div>));
            overFlowHidden();
            setSelectedData();
          }
        })
        .catch(() => {
          console.log("error");
        });
    }
  };

  const handleNo = () => {
    setConfirm(false);
  };
  return (
    <>
      <div className="accessories-store p-rel">
        <img className="headTag" src={headTag} alt="" />
        <img className="gift-icon p-abs" src={giftIcon} alt="" onClick={openHistory} />
        <div className="my-tokens d-flex al-center jc-center c-yellow m-auto">My Tokens: {totalTokens ? totalTokens : "0"}</div>
        <div className="redeem-overlay" style={{ visibility: overlay ? "visible" : "hidden" }} onClick={overlayFunc}>
          <button>
            <img src={handIcon} alt="" />
          </button>
          <span>
            TAP TO SELECT AND REDEEM THE ACCESSORIES <br />
            OF YOUR CHOICE
          </span>
        </div>
        <div className="confirm-overlay" style={{ visibility: confirm ? "visible" : "hidden" }}>
          <div className="confirm-box d-flex al-center jc-center fd-column">
            <div className="text">
              Are you sure you want to
              <br />
              redeem the selected <br />
              accessory?
            </div>
            <div className="btns d-flex al-center jc-sEven">
              <button onClick={handleYes} className={buttonDisabled ? "gray-1" : "gray-0"} disabled={buttonDisabled}>
                <img src={yesBtn} alt="" />
              </button>
              <button onClick={handleNo} disabled={buttonDisabled}>
                <img src={noBtn} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="accessories d-flex ">
          <div className={`box ${selectedData === 1 ? "selected" : ""}`} onClick={() => handleClick(1)}>
            <img className="giftImg" src={accessories.img1} alt="" />
            <span className="d-flex jc-center al-center gap-1" style={{ marginTop: "1vw" }}>
              <span>{accessories.val1} Tokens</span>
            </span>
          </div>
          <div className={`box ${selectedData === 2 ? "selected" : ""}`} onClick={() => handleClick(2)}>
            <img className="giftImg" src={accessories.img2} alt="" />
            <span className="d-flex jc-center al-center gap-1" style={{ marginTop: "1vw" }}>
              <span> {accessories.val2} Tokens</span>
            </span>
          </div>
          <div className={`box ${selectedData === 3 ? "selected" : ""}`} onClick={() => handleClick(3)}>
            <img className="giftImg" src={accessories.img3} alt="" />
            <span className="d-flex jc-center al-center gap-1" style={{ marginTop: "1vw" }}>
              <span> {accessories.val3} Tokens</span>
            </span>
          </div>
          <div className={`box ${selectedData === 4 ? "selected" : ""}`} onClick={() => handleClick(4)}>
            <img className="giftImg" src={accessories.img4} alt="" />
            <span className="d-flex jc-center al-center gap-1" style={{ marginTop: "1vw" }}>
              <span> {accessories.val4} Tokens</span>
            </span>
          </div>
          <div className="redeemBtn-cont d-flex jc-center al-center">
            <button className="redeemBtn" onClick={redeem} disabled={buttonDisabled}></button>
          </div>
          <div className={`box ${selectedData === 5 ? "selected" : ""}`} onClick={() => handleClick(5)}>
            <img className="giftImg" src={accessories.img5} alt="" />
            <span className="d-flex jc-center al-center gap-1" style={{ marginTop: "1vw" }}>
              <span> {accessories.val5} Tokens</span>
            </span>
          </div>
          <div className={`box ${selectedData === 6 ? "selected" : ""}`} onClick={() => handleClick(6)}>
            <img className="giftImg" src={accessories.img6} alt="" />
            <span className="d-flex jc-center al-center gap-1" style={{ marginTop: "1vw" }}>
              <span> {accessories.val6} Tokens</span>
            </span>
          </div>
          <div className={`box ${selectedData === 7 ? "selected" : ""}`} onClick={() => handleClick(7)}>
            <img className="giftImg" src={accessories.img7} alt="" />
            <span className="d-flex jc-center al-center gap-1" style={{ marginTop: "1vw" }}>
              <span> {accessories.val7} Tokens</span>
            </span>
          </div>
          <div className={`box ${selectedData === 8 ? "selected" : ""}`} onClick={() => handleClick(8)}>
            <img className="giftImg" src={accessories.img8} alt="" />
            <span className="d-flex jc-center al-center gap-1" style={{ marginTop: "1vw" }}>
              <span> {accessories.val8} Tokens</span>
            </span>
          </div>
        </div>
      </div>
      <RewardsHistory history={history} close={close} gameRecords={gameRecords} loadMoreHistory={loadMoreHistory} isLoading={isLoading} />
      {/* Popup Box */}
      <div className="overlay" style={{ visibility: alert ? "visible" : "hidden" }}>
        {alert ? (
          <div className="game-popup d-flex al-center jc-center">
            {alertpopup?.map((item, i) => {
              return (
                <div className={success ? "success p-rel d-flex al-center jc-center " : "unsuccess p-rel d-flex al-center jc-center "} key={i}>
                  {success ? <img className="mascot" src={mascot} /> : null}
                  <div className={success ? "success-head p-abs" : "oops-head p-abs"} style={success ? { top: "25vw" } : { top: "-6vw" }}>
                    <img src={item?.headtext} alt="" />
                  </div>
                  <div className="content m-auto p-abs d-flex al-center jc-center" style={success ? { top: "45vw" } : { top: "15vw" }}>
                    <div className="body-text">{item.data}</div>
                  </div>
                  <div className="modal-close p-abs" onClick={close}>
                    <img src={closeButton} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default RedeemRewards;
