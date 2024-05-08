import React from "react";
// import tag from "../assets/Information-tag.png";
import closeButton from "../../assets/close-Button.png";

function InfoPopup({ info, close }) {
  return (
    <div className="overlay" style={{ visibility: info ? "visible" : "hidden" }}>
      {info ? (
        <div className="info-popup p-rel d-flex al-center jc-center">
          {/* <img className="head p-abs" src={tag} alt="" /> */}
          <div className="content-box m-auto d-flex jc-center al-center">
            <div>
              <li>Increase Friendship Strength by 10x, everytime you complete all the tasks.</li>
              <li>On not doing these tasks for 2 consecutive days, your Friendship Strength will be reset to 1x.</li>
            </div>
          </div>

          <button className="modal-close p-abs" onClick={close}>
            <img src={closeButton} alt="" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default InfoPopup;
