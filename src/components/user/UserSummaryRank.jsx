import { useState, useEffect } from "react";
import Image from "next/image";
import { imageSelecter } from "../../images";

function UserSummaryRank({ userInfo }) {
  return (
    <div className="user--summary--rankContainer">
      <div className="user--summary--rankImg">
        <Image
          src={imageSelecter(
            userInfo.tierName
              ? userInfo.tierName.split(" ")[0].toLowerCase()
              : "unranked"
          )}
          alt="rankimg"
          width={100}
          height={100}
        />
      </div>
      <div className="user--summary--rankText">
        <div className="rankText bronze">{userInfo.tierName}</div>
        <div className="rankText">{`현재: ${
          userInfo.ratingPoint ? userInfo.ratingPoint : 0
        }`}</div>
        <div className="rankText">{`최고: ${
          userInfo.maxRatingPoint ? userInfo.maxRatingPoint : 0
        }`}</div>
      </div>
    </div>
  );
}

export default UserSummaryRank;
