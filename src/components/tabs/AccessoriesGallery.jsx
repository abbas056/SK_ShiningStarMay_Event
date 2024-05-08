import React, { useContext, useEffect, useState } from "react";
import DailyTasks from "../DailyTasks";
import MyPoints from "./../MyPoints";
import DailyProgress from "../DailyProgress";
import RedeemRewards from "../RedeemRewards";
import LeaderBoard from "./../leaderboard/LeaderBoad";
import { overFlowHidden, slicePlease } from "../../js/helpers";
import { ApiContext } from "../../js/api";
import giftIcon from "../../assets/Gift-icon.png";
import { baserUrl } from "../../js/baserUrl";
import axios from "axios";

function AccessoriesGallery({ tab1 }) {
  const { userId, getWinner } = useContext(ApiContext);
  const [history, sethistory] = useState(false);
  const [gameRecords, setgameRecords] = useState([]);
  const [loadMore, setLoadMore] = useState(1);
  const [loading, setLoading] = useState(false);

  const array = getWinner?.list ? getWinner?.list : [];
  // const topData = slicePlease(array, 0, 3);
  // const restData = slicePlease(array, 3, array.length);

  const openHistory = () => {
    gameRecord();
    sethistory(true);
    overFlowHidden();
  };
  const gameRecord = () => {
    setLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getRecordInfo?eventDesc=20240509_star&rankIndex=21&pageNum=${loadMore}&pageSize=10&type=1&userId=${userId}`)
      .then((response) => {
        setgameRecords(response?.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const loadMoreHistory = () => {
    setLoadMore(loadMore + 1);
  };
  useEffect(() => {
    gameRecord();
  }, [loadMore]);
  return (
    <>
      <DailyTasks />
      <DailyProgress />
      <RedeemRewards
        giftIcon={giftIcon}
        openHistory={openHistory}
        history={history}
        sethistory={sethistory}
        loadMoreHistory={loadMoreHistory}
        setLoadMore={setLoadMore}
        isLoading={loading}
        gameRecords={gameRecords?.data}
      />
      <LeaderBoard tab1={tab1} array={array} />
    </>
  );
}

export default AccessoriesGallery;
