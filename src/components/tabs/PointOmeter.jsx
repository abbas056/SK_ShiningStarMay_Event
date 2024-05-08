import React, { useState, useContext } from "react";
import CategoryBar from "../CategoryBar";
import Rewards from "./../Rewards";
import MyPoints from "../MyPoints";
import { ApiContext } from "../../js/api";
import { slicePlease } from "./../../js/helpers";
import LeaderBoard from "../leaderboard/LeaderBoad";

function PointOmeter(tab2) {
  const { isLoading, categS, categA, categB, categC } = useContext(ApiContext);
  const [categ, setcateg] = useState({
    categS: true,
    categA: false,
    categB: false,
    categC: false,
  });
  const [categ2, setcateg2] = useState({
    categS: true,
    categA: false,
    categB: false,
    categC: false,
  });

  let array;

  if (categ2.categS) {
    array = categS?.list ? categS?.list : [];
  } else if (categ2.categA) {
    array = categA?.list ? categA?.list : [];
  } else if (categ2.categB) {
    array = categB?.list ? categB?.list : [];
  } else if (categ2.categC) {
    array = categC?.list ? categC?.list : [];
  }

  const topData = slicePlease(array, 0, 3);
  const restData = slicePlease(array, 3, array.length);

  return (
    <>
      <MyPoints tab2={tab2} />
      <CategoryBar categ={categ} setcateg={setcateg} />
      <Rewards tab2={tab2} categ={categ} />
      <CategoryBar categ={categ2} setcateg={setcateg2} />
      <LeaderBoard tab2={tab2} categ={categ2} topData={topData} restData={restData} array={array} />
    </>
  );
}

export default PointOmeter;
