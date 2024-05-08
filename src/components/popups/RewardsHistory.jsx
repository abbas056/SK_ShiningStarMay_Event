import React from "react";
import closeButton from "../../assets/close-Button.png";
import head from "../../assets/popups/Rewards-history-tag.png";
import Loader from "../common/Loader";
import { rewardImages } from "../../js/data";

function RewardsHistory({ history, close, gameRecords, loadMoreHistory, isLoading }) {
  let rewardsList = gameRecords?.list ? gameRecords?.list : [];
  return (
    <div className="overlay" style={{ visibility: history ? "visible" : "hidden" }}>
      {history ? (
        <div className="rewards-history p-rel">
          <img className="head p-abs" src={head} alt="" />
          <div className="inner-content ">
            <div className="table m-auto d-flex jc-center al-start f-acme mb-5 fd-column">
              <div className="heading d-flex c-yellow f-bold">
                <div className="d-flex al-center jc-center w-40vw pt-2 pb-2">TIME</div>
                <div className="d-flex al-center jc-center w-60vw pt-2 pb-2">REWARDS</div>
              </div>
              {isLoading ? (
                <Loader />
              ) : (
                <div className="d-flex al-center jc-center" style={{ width: "100%" }}>
                  {gameRecords?.count == 0 ? (
                    <p className="no-data f-acme w-100">No Records Found</p>
                  ) : (
                    <div className="table-data d-flex fd-column gap-2">
                      {rewardsList?.map((array, index) => {
                        const apiDate = array.time;
                        const rewardDTOList = array?.rewardDTOList;
                        const formattedDate = new Date(apiDate).toLocaleString();
                        return (
                          <div key={index} className="d-flex w-100" style={{ backgroundColor: "#fbefdf", borderRadius: "2vw" }}>
                            <div className=" w-40vw d-flex al-center jc-center ">{formattedDate}</div>
                            <div className=" w-60vw d-flex flex-wrap jc-center al-start  gap-1 pt-2 pb-2">
                              {rewardDTOList.length === 0 ? (
                                <div className="d-flex al-center fd-column jc-center">
                                  <img src={rewardImages("no")} style={{ width: "8vw" }} />
                                  <span>No reward</span>
                                </div>
                              ) : (
                                rewardDTOList?.map((obj, index) => {
                                  return (
                                    <div key={index} className="rews d-flex al-center jc-center w-100  fd-column" style={{ width: "20vw" }}>
                                      <div className="rew-img d-flex al-center jc-center">
                                        <img src={rewardImages(obj.desc)} alt="" />
                                      </div>
                                      <div className="desc">
                                        {obj.desc == "Beans" ? (
                                          <>
                                            {obj.desc} {obj.count}
                                          </>
                                        ) : (
                                          <>
                                            {obj.desc} x {obj.count}
                                          </>
                                        )}
                                        {obj.desc == "Beans" ? null : <>{obj.count == 1 ? " day" : " days"}</>}
                                      </div>
                                    </div>
                                  );
                                })
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
            {isLoading ? null : (
              <>
                {rewardsList?.length >= 10 && gameRecords?.count > 10 ? (
                  <div className="see-btn" onClick={loadMoreHistory}>
                    <button className="see-more f-acme">See More</button>
                  </div>
                ) : null}
              </>
            )}
          </div>
          <div className="modal-close p-abs" onClick={close}>
            <img src={closeButton} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default RewardsHistory;
