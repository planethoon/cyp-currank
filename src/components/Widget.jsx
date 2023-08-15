import React, { useState, useEffect } from "react";
import { imageSelecter } from "../images";
import Image from "next/image";
import { useUserInfoQuery } from "../react-query/useUserInfoQuery";

const Widget = ({ nickname = "nextjs" }) => {
  const { data: userInfo } = useUserInfoQuery(nickname, 600000);

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
        <Image
          src={imageSelecter(userInfo.tierName.split(" ")[0].toLowerCase())}
          alt="rankimg"
        />
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
              userInfo.tierName.split(" ")[0].toLowerCase() === "bronze"
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
