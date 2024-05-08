import React, { useContext, useEffect, useState } from "react";
import DartGame from "./../DartGame";
import LeaderBoard from "../leaderboard/LeaderBoad";
import { ApiContext } from "../../js/api";
import giftIcon from "../../assets/Gift-icon.png";
import { baserUrl } from "../../js/baserUrl";
import axios from "axios";
import { overFlowHidden } from "../../js/helpers";
function AimTheDarts({ tab3 }) {
  const { userId } = useContext(ApiContext);

  const [history, sethistory] = useState(false);
  const [gameRecords, setgameRecords] = useState([]);
  const [loadMore, setLoadMore] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const openHistory = () => {
    gameRecord();
    sethistory(true);
    overFlowHidden();
  };
  const gameRecord = () => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getRecordInfo?eventDesc=20240509_star&rankIndex=21&pageNum=${loadMore}&pageSize=10&type=2&userId=${userId}`)
      .then((response) => {
        setgameRecords(response?.data);
        setIsLoading(false);
      });
  };
  const loadMoreHistory = () => {
    setLoadMore(loadMore + 1);
    gameRecord();
  };
  const { tickerTape } = useContext(ApiContext);
  const array = tickerTape?.list ? tickerTape?.list : [];

  useEffect(() => {
    gameRecord();
  }, [loadMore]);
  return (
    <>
      <DartGame
        tab3={tab3}
        giftIcon={giftIcon}
        openHistory={openHistory}
        history={history}
        sethistory={sethistory}
        loadMoreHistory={loadMoreHistory}
        isLoading={isLoading}
        gameRecords={gameRecords?.data}
        setLoadMore={setLoadMore}
      />
      <LeaderBoard tab3={tab3} array={array} />
    </>
  );
}

export default AimTheDarts;
