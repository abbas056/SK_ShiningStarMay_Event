import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import closeButton from "../../assets/close-Button.png";
import uploadBtn from "../../assets/register_page/Upload-btn.png";
import pic from "../../assets/register_page/Pics.png";
import doneIcon from "../../assets/register_page/Done-icon.png";
import plusIcon from "../../assets/register_page/plus-icon.png";
import handIcon from "../../assets/register_page/Hand-icon.png";
import { baserUrl } from "../../js/baserUrl";
import { ApiContext } from "../../js/api";
import Loader from "../common/Loader";

function Popup({
  close,
  alert,
  success,
  setsuccess,
  image1,
  setImage1,
  image2,
  setImage2,
  fileSuffix1,
  setFileSuffix1,
  fileSuffix2,
  setFileSuffix2,
  errorFailed,
  setErrorFailed,
  disbale,
  setdisbale,
  regLoader,
  setregLoader,
  refreshApi,
  isPoster,
}) {
  const [paths, setPaths] = useState([]);
  const { userId, userToken } = useContext(ApiContext);
  const [invalid1, setinvalid1] = useState("");
  const [invalid2, setinvalid2] = useState("");

  const handleImage1Change = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setinvalid1("");
      setImage1(file);
      setFileSuffix1(file.name.split(".").pop());
    } else if (!file) {
      setImage1(null);
      setFileSuffix1("");
    } else {
      setinvalid1("invalid file");
      setImage1(null);
      setFileSuffix1("");
    }
  };
  const handleImage2Change = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setinvalid2("");
      setImage2(file);
      setFileSuffix2(file.name.split(".").pop());
    } else if (!file) {
      setImage2(null);
      setFileSuffix2("");
    } else {
      setinvalid2("invalid file");
      setImage2(null);
      setFileSuffix2("");
    }
  };
  let filename1 = `pic1-${userId}`;
  let filename2 = `pic2-${userId}`;

  useEffect(() => {
    if (paths.length) {
      axios
        .put(paths[0], image1, {
          headers: {
            userId: userId,
            token: userToken,
            picName: filename1,
            fileSuffix: fileSuffix1,
          },
        })
        .then((response) => {
          if (response.status == 200 && response.statusText == "OK") {
            setsuccess(true);
            setregLoader(false);
            refreshApi();
          } else {
            setErrorFailed(<div style={{ width: "85%", marginTop: "25vw", fontSize: "4vw" }}>failed to upload</div>);
          }
        })
        .catch((error) => {
          console.error(error);
        });

      axios
        .put(paths[1], image2, {
          headers: {
            userId: userId,
            token: userToken,
            picName: filename2,
            fileSuffix: fileSuffix2,
          },
        })
        .then((response) => {
          if (response.status == 200 && response.statusText == "OK") {
            setsuccess(true);
            setregLoader(false);
            refreshApi();
          } else {
            setErrorFailed(<div style={{ width: "85%", marginTop: "25vw", fontSize: "4vw" }}>failed to upload</div>);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [paths]);

  const handleUpload = () => {
    try {
      if (image1 && image2) {
        setdisbale(true);
        setregLoader(true);
        const formData = new FormData();
        formData.append("pic1", filename1);
        formData.append("fileSuffix1", fileSuffix1);
        formData.append("pic2", filename2);
        formData.append("fileSuffix2", fileSuffix2);
        axios
          .post(`${baserUrl}api/activity/shiningStarMay/actorRegister`, formData, {
            headers: {
              userId: userId,
              token: userToken,
            },
          })
          .then((response) => {
            if (response?.data?.errorCode === 0) {
              setPaths(response?.data?.data?.split(","));
            } else if (response?.data?.errorCode === 10000012) {
              setErrorFailed(
                <div style={{ width: "85%", marginTop: "25vw", fontSize: "4vw" }}>
                  Please upload a POSTER of yours by going in your profile. The application will not be submitted without an approved POSTER.
                </div>
              );
            } else {
              setErrorFailed(<div style={{ width: "85%", marginTop: "25vw", fontSize: "4vw" }}>{response?.data?.msg}</div>);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="overlay" style={{ visibility: alert ? "visible" : "hidden" }}>
      {alert ? (
        <>
          <div className="popup d-flex jc-center fd-column al-center w-100 p-rel">
            {success ? (
              <div className="popup-success d-flex al-center jc-center fd-column">
                <div style={{ marginTop: "7vw", width: "70%" }}>
                  Your application has been successfully <br /> submitted. <br />
                  <img style={{ width: "6vw" }} src={doneIcon} alt="" /> <br /> Once we complete the evaluation, you will <br />
                  receive a System Notice <br />
                  regarding the result.
                </div>
              </div>
            ) : (
              <>
                {errorFailed ? (
                  <div className="popup-error">{errorFailed}</div>
                ) : (
                  <>
                    <div className="popup-container p-rel">
                      {isPoster === 0 ? (
                        <div style={{ width: "80%", paddingBottom: "10vw", fontSize: "3.5vw" }}>
                          Please upload a POSTER of yours by going in your profile. The application will not be submitted without an approved POSTER.
                        </div>
                      ) : (
                        <>
                          <div className="popup-container-ins m-auto">
                            Please upload 2 latest pictures of yours in HD <br /> quality which are different from your current DP.
                          </div>
                          <div className="d-flex jc-center al-center w-80 p-rel">
                            <div className="d-flex jc-center al-center fd-column w-50" style={{ height: "30vw" }}>
                              <label htmlFor="image1Input" style={boxStyle}>
                                {image1 ? (
                                  <img src={URL.createObjectURL(image1)} alt="Image 1" style={imageStyle} />
                                ) : (
                                  <div className="p-rel d-flex jc-center al-end">
                                    <img style={{ width: "24vw" }} src={pic} />
                                    <img className="p-abs w-14vw" style={{ zIndex: "2", top: "8vw", right: "0vw" }} src={handIcon} alt="" />
                                    <img className="p-abs w-8vw" style={{ zIndex: "1" }} src={plusIcon} alt="" />
                                  </div>
                                )}
                              </label>
                              <input type="file" accept="image/*" id="image1Input" style={{ display: "none" }} onChange={handleImage1Change} />
                              {invalid1 ? <div style={invalid}>{invalid1}</div> : null}
                            </div>

                            <div className="d-flex jc-center al-center fd-column w-50" style={{ height: "30vw" }}>
                              <label htmlFor="image2Input" style={boxStyle}>
                                {image2 ? (
                                  <img src={URL.createObjectURL(image2)} alt="Image 2" style={imageStyle} />
                                ) : (
                                  <div className="p-rel d-flex jc-center al-end">
                                    <img style={{ width: "24vw" }} src={pic} />
                                    <img className="p-abs w-8vw" style={{ zIndex: "2" }} src={plusIcon} alt="" />
                                  </div>
                                )}
                              </label>
                              <input type="file" accept="image/*" id="image2Input" style={{ display: "none" }} onChange={handleImage2Change} />
                              {invalid2 ? <div style={invalid}>{invalid2}</div> : null}
                            </div>
                          </div>
                          {regLoader ? (
                            <div className="p-abs" style={{ top: "70vw" }}>
                              <Loader />
                            </div>
                          ) : (
                            <button className="popup-container-upload-btn p-abs" disabled={disbale}>
                              <img className={image1 && image2 ? "gray-0" : "gray-1"} src={uploadBtn} alt="" onClick={handleUpload} />
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
            <div className="modal-close p-abs" onClick={close} style={success ? { top: "70vw" } : { top: "0vw", right: "10vw" }}>
              <img src={closeButton} alt="" />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
const boxStyle = {
  width: "25vw",
  height: "25vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  margin: "10vw",
};
const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};
const invalid = {
  color: "yellow",
  fontSize: "2vw",
};
export default Popup;
