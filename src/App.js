import Main from "./pages/Main";
import Widget from "./pages/Widget";
import "../src/styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// images

import { bronze, silver, gold, joker, ace, hero, legend } from "./images";

function App() {
  const [nickname, setNickname] = useState("527");
  const [rankPoint, setRankPoint] = useState(2259);
  const [rank, setRank] = useState("골드 II");
  const [rankImg, setRankImg] = useState(gold);

  const submit = (nickname, point) => {
    setNickname(nickname);
    let temp = Number(point);
    setRankPoint(temp);
    if (point >= 2800) {
      setRank("에이스");
      setRankImg(ace);
    } else if (point >= 2700) {
      setRank("조커 I");
      setRankImg(joker);
    } else if (point >= 2600) {
      setRank("조커 II");
      setRankImg(joker);
    } else if (point >= 2500) {
      setRank("조커 III");
      setRankImg(joker);
    } else if (point >= 2400) {
      setRank("조커 IV");
      setRankImg(joker);
    } else if (point >= 2300) {
      setRank("골드 I");
      setRankImg(gold);
    } else if (point >= 2200) {
      setRank("골드 II");
      setRankImg(gold);
    } else if (point >= 2100) {
      setRank("골드 III");
      setRankImg(gold);
    } else if (point >= 2000) {
      setRank("골드 IV");
      setRankImg(gold);
    } else if (point >= 1900) {
      setRank("실버 I");
      setRankImg(silver);
    } else if (point >= 1800) {
      setRank("실버 II");
      setRankImg(silver);
    } else if (point >= 1700) {
      setRank("실버 III");
      setRankImg(silver);
    } else if (point >= 1600) {
      setRank("실버 IV");
      setRankImg(silver);
    } else if (point >= 1500) {
      setRank("브론즈 I");
      setRankImg(bronze);
    } else if (point >= 1400) {
      setRank("브론즈 II");
      setRankImg(bronze);
    } else if (point >= 1300) {
      setRank("브론즈 III");
      setRankImg(bronze);
    } else {
      setRank("브론즈 IV");
      setRankImg(bronze);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              rankPoint={rankPoint}
              rank={rank}
              nickname={nickname}
              rankImg={rankImg}
              submit={submit}
            />
          }
        />
        <Route
          path="widget/:userinfo"
          element={
            <Widget
              rankPoint={rankPoint}
              rank={rank}
              nickname={nickname}
              rankImg={rankImg}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
