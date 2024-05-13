import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { baserUrl } from "./baserUrl";
import { callDartApi } from "./helpers";

const ApiContext = createContext();
function EventProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [getWinner, setgetWinner] = useState([]);
  const [tickerTape, settickerTape] = useState([]);
  const [categS, setcategS] = useState([]);
  const [categA, setcategA] = useState([]);
  const [categB, setcategB] = useState([]);
  const [categC, setcategC] = useState([]);
  const [user, setUser] = useState({
    id: 0,
    uid: 0,
    token: undefined,
  });

  const isLive = false;
  const refreshApi = () => {
    setRefresh(!refresh);
  };

  const weekIndex = userInfo?.data?.weekIndex;
  let isFirstVisitPage = userInfo && userInfo?.data?.isFirstVisitPage;
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const nowDate = `${year}-${month}-${day}`;

  useEffect(() => {
    try {
      // window.phone.getUserInfo(function (userInfo) {
      //   setUser({
      //     uid: userInfo.userId > 0 ? userInfo.userId : 0,
      //     token: userInfo.token !== "" ? userInfo.token : null,
      //   });
      // });
      setUser({
        uid: 596492376,
        token: "A1B9B58C83423C470D8B4B0D75700B6596",
      });
    } catch (_error) {
      setUser({
        uid: 0,
        token: "",
      });
      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  useEffect(() => {
    if (userInfo && isFirstVisitPage === true) {
      callDartApi(`${baserUrl}api/activity/shiningStarMay/actorRegister`, user.uid, user.token)
        .then(function (response) {
          if (response.msg === "success") {
            axios
              .get(`${baserUrl}api/activity/shiningStarMay/getUserEventInfo?userId=${user.uid}`)
              .then((response) => {
                setUserInfo(response.data);
                setIsLoading(false);
              })
              .catch((err) => console.log(err));
          } else {
            console.log(response.msg);
          }
        })
        .catch(function (error) {
          console.log(error.message);
        });
    }
  }, [userInfo, isFirstVisitPage]);

  useEffect(() => {
    setIsLoading(true);
    if (user.uid > 0) {
      axios
        .get(`${baserUrl}api/activity/shiningStarMay/getUserEventInfo?userId=${user.uid}`)
        .then((response) => {
          setUserInfo(response.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user, refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20240509_star&pageNum=1&pageSize=20&rankIndex=2`)
      .then((response) => {
        setgetWinner(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user, refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240509_star&rankIndex=11&pageNum=1&pageSize=20&dayIndex=${weekIndex},S`)
      .then((response) => {
        setcategS(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh, userInfo]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240509_star&rankIndex=11&pageNum=1&pageSize=20&dayIndex=${weekIndex},A`)
      .then((response) => {
        setcategA(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh, userInfo]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240509_star&rankIndex=11&pageNum=1&pageSize=20&dayIndex=${weekIndex},B`)
      .then((response) => {
        setcategB(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh, userInfo]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240509_star&rankIndex=11&pageNum=1&pageSize=20&dayIndex=${weekIndex},C`)
      .then((response) => {
        setcategC(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh, userInfo]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20240509_star&pageNum=1&pageSize=20&rankIndex=1`)
      .then((response) => {
        settickerTape(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div>
      <ApiContext.Provider
        value={{
          isLoading,
          setIsLoading,
          refreshApi,
          userId: user.uid,
          userToken: user.token,
          userInfo: userInfo.data,
          getWinner: getWinner?.data,
          categS: categS?.data,
          categA: categA?.data,
          categB: categB?.data,
          categC: categC?.data,
          tickerTape: tickerTape?.data,
          isLive,
          nowDate,
        }}
      >
        {children}
      </ApiContext.Provider>
    </div>
  );
}

export { ApiContext, EventProvider };
