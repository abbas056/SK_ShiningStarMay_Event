import React, { useContext } from "react";
import { dailyTasksA, dailyTasksB, dailyTasksC, dailyTasksD, dailyTasksS } from "../js/data";
import rightIcon from "../assets/Right-icon.png";
import wrongIcon from "../assets/Wrong-icon.png";
import { ApiContext } from "../js/api";
import headingIcon from "../assets/Table-heading-design.png";

function DailyTasks() {
  const { userInfo } = useContext(ApiContext);
  let dailyTasks = userInfo?.taskInfoList;
  let level = userInfo?.level;
  let dailyCategTasks;

  if (level === "S") {
    dailyCategTasks = dailyTasksS;
  } else if (level === "A") {
    dailyCategTasks = dailyTasksA;
  } else if (level === "B") {
    dailyCategTasks = dailyTasksB;
  } else if (level === "C") {
    dailyCategTasks = dailyTasksC;
  } else {
    dailyCategTasks = dailyTasksD;
  }

  return (
    <>
      <div className="text-box m-auto">
        Do the following tasks daily & gather Tokens to <br /> purchase the accessories of your choice.
      </div>
      <div className="daily-activity m-auto d-flex jc-center al-center fd-column">
        {dailyTasks?.length === 0 ? (
          <div className="task-text d-flex al-center jc-center">
            Please Wait till your are <br />
            categorized
          </div>
        ) : (
          <>
            <div className="heading d-flex font-bold">
              <span className="w-20 d-flex al-center jc-center">
                Sr No. <img src={headingIcon} alt="" style={{ width: "5vw" }} />
              </span>
              <span className="w-50 d-flex al-center jc-sEven">
                Tasks <img src={headingIcon} alt="" style={{ width: "5vw" }} />
              </span>
              <span className="w-15 d-flex al-center jc-center">
                Tokens <img src={headingIcon} alt="" style={{ width: "5vw" }} />
              </span>
              <span className="w-15">Status</span>
            </div>

            <div className="task-details d-flex al-center jc-center fd-column">
              {dailyTasks?.map((data, index) => {
                let statusValue = data?.isComplete;
                const [tokens] = dailyCategTasks?.filter((item) => item.id === data?.taskId);
                return (
                  <div className="d-flex m-auto w-100 p-rel" key={index}>
                    <div className="desc m-auto d-flex w-100">
                      <span className="w-20">{data?.taskId}.</span>
                      <span className="w-50">{data?.desc}</span>
                      <span className="w-15">{tokens?.tokens}</span>
                      <span className="w-15">
                        <img className="icon" src={statusValue == 1 ? rightIcon : wrongIcon} alt="" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default DailyTasks;
