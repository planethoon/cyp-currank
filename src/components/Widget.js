import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImagesDir, {
  bronze,
  silver,
  gold,
  joker,
  ace,
  hero,
  legend,
} from "../images";
import Image from "next/image";

const Widget = ({ nickname }) => {
  const [userInfo, setUserInfo] = useState({
    playerId: "",
    nickname,
    tierName: "BRONZE 4TH",
    ratingPoint: 0,
    rank: 0,
  });

  const [img, setImg] = useState();

  const getUser = (name) => {
    fetch(`/api/${name}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) setUserInfo(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (nickname) {
      getUser(nickname);
    }
  }, [nickname]);

  useEffect(() => {
    console.log(userInfo);
    setImg(userInfo.tierName.split(" ")[0].toLowerCase());
  }, [userInfo]);

  const checkHighTier = () => {
    if (userInfo.rank >= 30) {
      userInfo.tierName = "LEGEND";
    } else if (userInfo.rank >= 130) {
      userInfo.tierName = "HERO";
    }
  };

  const setWidget = () => {
    if (!userInfo.ratingPoint) {
      return;
    }
    userInfo.rankName;
  };

  return (
    <div className="widget--wrapper">
      <div className="widget--img--wrapper">
        <Image src={ImagesDir[img]} alt="rankimg" />
      </div>
      <div className="widget--info--wrapper">
        <div className="widget--info--outer">
          <span className="widget--info--nickname">{userInfo.nickname}</span>
        </div>
        <div className="widget--info--outer">
          <span className="widget--info--rank">{userInfo.tierName}</span>
        </div>
        <div className="widget--info--outer">
          <span className="widget--info--rankPoint">
            {userInfo.ratingPoint}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Widget;
