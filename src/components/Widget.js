import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImagesDir from "../images";
import Image from "next/image";

const Widget = ({ nickname }) => {
  const [userInfo, setUserInfo] = useState({
    playerId: "",
    nickname: "",
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

  /* 데이터 페칭 */
  useEffect(() => {
    if (nickname) {
      getUser(nickname);
    }
  }, [nickname]);

  /* 아래 두 이펙트 훅은 이미지 설정을 위한 이펙트 훅이다.
  동기적으로 이루어져야 하기에 따로 두어 사용 */
  useEffect(() => {
    if (userInfo.tierName) {
      setImg(userInfo.tierName.split(" ")[0].toLowerCase());
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo.tierName) {
      checkHighTier();
      setImg(userInfo.tierName.split(" ")[0].toLowerCase());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img]);

  const checkHighTier = () => {
    if (userInfo.rank && userInfo.rank <= 30) {
      userInfo.tierName = "LEGEND";
    } else if (userInfo.rank && userInfo.rank <= 130) {
      userInfo.tierName = "HERO";
    }
  };

  const adjustNicknameSize = (nickname) => {
    let leng = nickname.length;

    if (leng < 5) {
    } else if (leng === 5) {
      return `widget--info--nickname five`;
    } else if (leng === 6) {
      return `widget--info--nickname six`;
    } else if (leng === 7) {
      return `widget--info--nickname seven`;
    } else if (leng === 8) {
      return `widget--info--nickname eight`;
    } else {
      return `widget--info--nickname`;
    }
  };

  return (
    <div className="widget--wrapper">
      <div className="widget--img--wrapper">
        <Image src={ImagesDir[img]} alt="rankimg" />
      </div>
      <div className="widget--info--wrapper">
        <div className="widget--info--outer">
          <span className={adjustNicknameSize(userInfo.nickname)}>
            {userInfo.nickname}
          </span>
        </div>
        <div className="widget--info--outer">
          <span
            className={
              img === "bronze"
                ? "widget--info--rank bronze"
                : "widget--info--rank"
            }
          >
            {userInfo.tierName}
          </span>
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
