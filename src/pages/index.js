import Widget from "../components/Widget";
import Header from "../components/Header.js";
import Form from "../components/Form.js";
import { useRouter } from "next/router";

import { useState } from "react";

// images

import { bronze, silver, gold, joker, ace, hero, legend } from "../images";

function App() {
  /*로컬 상태*/
  const [nickname, setNickname] = useState("527");
  const [rankPoint, setRankPoint] = useState(2259);
  const [rank, setRank] = useState("골드 II");
  const [rankImg, setRankImg] = useState(gold);
  const [copy, setCopy] = useState("링크복사");

  const router = useRouter();

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
      <div className="main--background">
        <Header />
        <div className="main--wrapper">
          <div className="main--preview">
            <div className="main--preview--header">
              <span>미리보기</span>
              <div
                className="main--copybtn"
                onClick={() => {
                  setCopy("복사완료!");
                  navigator.clipboard.writeText(
                    `${window.document.location.href}widget/${nickname}&${rankPoint}`
                  );
                  setTimeout(() => {
                    setCopy("링크복사");
                  }, 5000);
                }}
              >
                {copy}
              </div>
            </div>
            <Widget
              rankPoint={rankPoint}
              rank={rank}
              nickname={nickname}
              rankImg={rankImg}
            />
          </div>
          <Form submit={submit} />
        </div>
      </div>
    </div>
  );
}

export default App;
