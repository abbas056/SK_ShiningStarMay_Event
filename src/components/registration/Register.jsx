import React, { useState, useContext } from "react";
import heading from "../../assets/register_page/Important-text.png";
import reg_btn from "../../assets/register_page/Register-btn.png";
import be_rady_text from "../../assets/register_page/Be-ready-text.png";
import { overFlowAuto, overFlowHidden } from "../../js/helpers";
import { ApiContext } from "../../js/api";
import Popup from "./Popup";

function Register({ whetherApply, level, isPoster }) {
  const [alert, setAlert] = useState(false);
  const [success, setsuccess] = useState(false);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [fileSuffix1, setFileSuffix1] = useState("");
  const [fileSuffix2, setFileSuffix2] = useState("");
  const [errorFailed, setErrorFailed] = useState("");
  const { refreshApi } = useContext(ApiContext);
  const [disbale, setdisbale] = useState(false);
  const [regLoader, setregLoader] = useState(false);

  const close = () => {
    refreshApi();
    setAlert(false);
    setsuccess(false);
    overFlowAuto();
    setImage1(null);
    setFileSuffix1("");
    setImage2(null);
    setFileSuffix2("");
    setErrorFailed();
    setdisbale(false);
    setregLoader(false);
  };
  const registerFunc = () => {
    setAlert(true);
    overFlowHidden();
  };
  return (
    <>
      <div className="register-page p-rel d-flex fd-column">
        <div className="register-page-envelope m-auto d-flex fd-column al-center">
          <div className="text-box ">
            <img className="heading" src={heading} alt="" />
            <div>
              <img style={{ width: "70%" }} src={be_rady_text} alt="" />
              <br />
              <div className="d-flex al-center jc-center m-auto w-60" style={{ fontSize: "2.8vw", color: "red", lineHeight: "3vw" }}>
                {whetherApply === 1 && level === 0 ? (
                  <>
                    Your application is under review. <br />
                    You will receive the application <br />
                    status update on system <br /> notice.
                  </>
                ) : whetherApply === 1 && level <= 5 ? (
                  <div className="d-flex fd-column jc-center al-center">
                    Congratulations! Your application <br /> has been selected in the{" "}
                    {level == 1 ? (
                      <span className="c-blue fw-bold">S</span>
                    ) : level == 2 ? (
                      <span className="c-blue fw-bold">A</span>
                    ) : level == 3 ? (
                      <span className="c-blue fw-bold">B</span>
                    ) : level == 4 ? (
                      <span className="c-blue fw-bold">C</span>
                    ) : level == 5 ? (
                      <span className="c-blue fw-bold">Rejected</span>
                    ) : (
                      <span className="c-blue fw-bold">Not Categorized</span>
                    )}
                    category. Don't forget to <br /> complete DAILY TASKS to <br /> earn extra rewards
                    <br /> during event time.
                  </div>
                ) : whetherApply === 1 && level === 5 ? (
                  <>
                    Your aplication has <br /> been rejected.
                  </>
                ) : (
                  <>
                    To participate, interested talents
                    <br /> will have to register <br />
                    their candidature.
                  </>
                )}
              </div>
            </div>
          </div>
          {whetherApply === 1 ? null : (
            <button className="reg-btn" onClick={registerFunc}>
              <img src={reg_btn} alt="" />
            </button>
          )}
        </div>
        <div className="register-page-bottom m-auto d-flex jc-center al-center">
          <div className="text">
            - SK employees will evaluate your profile based on various factors like Talent's streaming quality, Broadcast DP, interaction with users
            etc. <br />
            - After evaluation, the talents will be approved or rejected. <br /> - Approved talents will be categorized in XX different categories
            based on the quality and compliance with the required standards.
          </div>
        </div>
      </div>
      <Popup
        alert={alert}
        close={close}
        success={success}
        setsuccess={setsuccess}
        image1={image1}
        setImage1={setImage1}
        image2={image2}
        setImage2={setImage2}
        fileSuffix1={fileSuffix1}
        setFileSuffix1={setFileSuffix1}
        fileSuffix2={fileSuffix2}
        setFileSuffix2={setFileSuffix2}
        errorFailed={errorFailed}
        setErrorFailed={setErrorFailed}
        disbale={disbale}
        setdisbale={setdisbale}
        regLoader={regLoader}
        setregLoader={setregLoader}
        refreshApi={refreshApi}
        isPoster={isPoster}
      />
    </>
  );
}

export default Register;
