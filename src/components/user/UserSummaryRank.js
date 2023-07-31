import { useState } from "react";
import Image from "next/image";

function UserSummaryRank({ userInfo }) {
  let winrates =
    userInfo.wins && userInfo.totalGames
      ? String((userInfo.wins / userInfo.totalGames) * 100).slice(0, 4)
      : "0";

  return (
    <div className="user--summary--rankContainer">
      <div className="user--summary--rankImg">
        <Image
          src="http://via.placeholder.com/150"
          alt="rankimg"
          width={120}
          height={120}
        />
      </div>
      <div className="user--summary--rankText">
        <div className="rankText">{userInfo.tierName}</div>
        <div className="rankText">{`${userInfo.ratingPoint} / ${userInfo.maxRatingPoint}`}</div>
        <div className="rankText">{`${userInfo.wins}W ${userInfo.loses}L (${winrates}%)`}</div>
      </div>
    </div>
  );
}

export default UserSummaryRank;
