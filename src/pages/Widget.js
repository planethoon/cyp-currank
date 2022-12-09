import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { bronze, silver, gold, joker, ace, hero, legend } from "../images";

const Widget = ({ nickname, rankPoint, rank, rankImg }) => {
  let { userinfo } = useParams();
  const [name, setName] = useState("");
  const [point, setPoint] = useState(0);
  const [rankname, setRankname] = useState("");
  const [img, setImg] = useState(bronze);

  useEffect(() => {
    setWidget();
  }, []);

  const setWidget = () => {
    if (!userinfo) {
      return;
    }
    let mark = userinfo.indexOf("&");
    setName(userinfo.slice(0, mark));
    setPoint(Number(userinfo.slice(mark + 1)));
    if (Number(userinfo.slice(mark + 1)) >= 2800) {
      setRankname("에이스");
      setImg(ace);
    } else if (Number(userinfo.slice(mark + 1)) >= 2700) {
      setRankname("조커 I");
      setImg(joker);
    } else if (Number(userinfo.slice(mark + 1)) >= 2600) {
      setRankname("조커 II");
      setImg(joker);
    } else if (Number(userinfo.slice(mark + 1)) >= 2500) {
      setRankname("조커 III");
      setImg(joker);
    } else if (Number(userinfo.slice(mark + 1)) >= 2400) {
      setRankname("조커 IV");
      setImg(joker);
    } else if (Number(userinfo.slice(mark + 1)) >= 2300) {
      setRankname("골드 I");
      setImg(gold);
    } else if (Number(userinfo.slice(mark + 1)) >= 2200) {
      setRankname("골드 II");
      setImg(gold);
    } else if (Number(userinfo.slice(mark + 1)) >= 2100) {
      setRankname("골드 III");
      setImg(gold);
    } else if (Number(userinfo.slice(mark + 1)) >= 2000) {
      setRankname("골드 IV");
      setImg(gold);
    } else if (Number(userinfo.slice(mark + 1)) >= 1900) {
      setRankname("실버 I");
      setImg(silver);
    } else if (Number(userinfo.slice(mark + 1)) >= 1800) {
      setRankname("실버 II");
      setImg(silver);
    } else if (Number(userinfo.slice(mark + 1)) >= 1700) {
      setRankname("실버 III");
      setImg(silver);
    } else if (Number(userinfo.slice(mark + 1)) >= 1600) {
      setRankname("실버 IV");
      setImg(silver);
    } else if (Number(userinfo.slice(mark + 1)) >= 1500) {
      setRankname("브론즈 I");
      setImg(bronze);
    } else if (Number(userinfo.slice(mark + 1)) >= 1400) {
      setRankname("브론즈 II");
      setImg(bronze);
    } else if (Number(userinfo.slice(mark + 1)) >= 1300) {
      setRankname("브론즈 III");
      setImg(bronze);
    } else {
      setRankname("브론즈 IV");
      setImg(bronze);
    }
  };

  return (
    <div className="widget--wrapper">
      <div className="widget--img--wrapper">
        <img src={point ? img : rankImg} alt="rankimg" />
      </div>
      <div className="widget--info--wrapper">
        <div className="widget--info--outer">
          <span className="widget--info--nickname">
            {name ? name : nickname}
          </span>
        </div>
        <div className="widget--info--outer">
          <span className="widget--info--rank">
            {rankname ? rankname : rank}
          </span>
        </div>
        <div className="widget--info--outer">
          <span className="widget--info--rankPoint">
            {point ? point : rankPoint}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Widget;
