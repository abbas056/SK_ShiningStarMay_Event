import React, { useState, useRef, useContext } from "react";
import TopWinners from "./rankings/TopWinners";
import RestWinners from "./rankings/RestWinners";
import SeeButton from "./../SeeButton";
import accessoriesTag from "../../assets/Accessories-Winners-tag.png";
import lbHeading2 from "../../assets/Leaderboard-tag.png";
import rewardsTag from "../../assets/Rewards-leaderboard-tag.png";
import Loader from "./../common/Loader";
import { ApiContext } from "../../js/api";

function LeaderBoard({ topData, restData, array, categ, tab1, tab2, tab3 }) {
  const { isLoading } = useContext(ApiContext);
  const restBoard = useRef(null);
  const [active, setActive] = useState(true);
  const handleChangeActive = () => {
    setActive((previous) => {
      return !previous;
    });
    if (!active) {
      restBoard.current.scrollTop = 0;
    }
  };
  return (
    <div className="leaderboard p-rel" style={tab2 || tab1 ? { paddingTop: "10vw", paddingBottom: "7vw" } : { paddingBottom: "7vw" }}>
      <img
        className="lb-heading p-abs m-auto"
        src={tab1 ? accessoriesTag : tab2 ? lbHeading2 : rewardsTag}
        alt=""
        style={tab2 ? { width: "45vw", top: "-4vw" } : { width: "60%", height: "22vw", top: "-8vw" }}
      />
      {tab2 ? (
        <div className="lb-text d-flex al-start jc-center fd-column">
          <span>- This is a weekly Leaderboard and arranged on the basis of points.</span>
          <span>- Please click on Guide button to know the points collection.</span>
        </div>
      ) : null}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="rank-section">
          {tab2 ? (
            <>
              {array?.length == 0 ? (
                <p className="no-data f-acme">No Data Found</p>
              ) : (
                <div className="rank-section-inner">
                  <div className="top-position-holders jc-center al-center">
                    {topData?.map(({ nickname, userScore, userLevel, actorLevel, portrait, userId, expectBeans }, index) => {
                      return (
                        <div className="user-container" key={index}>
                          <TopWinners
                            userName={nickname}
                            userScore={userScore}
                            userAvatar={portrait}
                            userId={userId}
                            index={index}
                            userLevel={userLevel}
                            actorLevel={actorLevel}
                            categ={categ}
                            tab1={tab1}
                            tab2={tab2}
                            expectBeans={expectBeans}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div
                    ref={restBoard}
                    className={active ? "rest-position-holders " : "rest-position-holders rest-position-holders-max"}
                    style={{ height: "79vw" }}
                  >
                    {restData &&
                      restData?.map(({ nickname, userScore, userLevel, actorLevel, portrait, userId, expectBeans }, index) => (
                        <div key={index}>
                          <RestWinners
                            userName={nickname}
                            userScore={userScore}
                            userAvatar={portrait}
                            index={index}
                            userId={userId}
                            listNumber={index + 4}
                            userLevel={userLevel}
                            actorLevel={actorLevel}
                            categ={categ}
                            tab1={tab1}
                            tab2={tab2}
                            tab3={tab3}
                            expectBeans={expectBeans}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div
              className="rank-section-inner"
              style={tab1 ? { paddingTop: "10vw", paddingBottom: "5vw" } : { paddingTop: "20vw", paddingBottom: "5vw" }}
            >
              <div
                ref={restBoard}
                className={active ? "rest-position-holders " : "rest-position-holders rest-position-holders-max"}
                style={{ height: "139vw" }}
              >
                <>
                  {array?.length == 0 ? (
                    <p className="no-data f-acme">No Data Found</p>
                  ) : (
                    <>
                      {array &&
                        array?.map(({ nickname, userScore, userLevel, actorLevel, portrait, userId, desc }, index) => (
                          <div key={index}>
                            <RestWinners
                              userName={nickname}
                              userScore={userScore}
                              userAvatar={portrait}
                              index={index}
                              userId={userId}
                              listNumber={index + 1}
                              userLevel={userLevel}
                              actorLevel={actorLevel}
                              categ={categ}
                              tab1={tab1}
                              tab2={tab2}
                              tab3={tab3}
                              desc={desc}
                            />
                          </div>
                        ))}
                    </>
                  )}
                </>
              </div>
            </div>
          )}

          {array?.length > 10 || restData?.length > 10 ? <SeeButton active={active} handleChangeActive={handleChangeActive} /> : null}
        </div>
      )}
    </div>
  );
}

export default LeaderBoard;
