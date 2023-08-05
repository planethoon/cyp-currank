import React, { useState } from "react";
import UserSummaryRank from "./UserSummaryRank";
import UserSummaryPosition from "./UserSummaryPosition";
import UserSummaryCharacter from "./UserSummaryCharacter";
import UserSummaryWinrate from "./UserSummaryWinrate";

function UserSummary() {
  const userInfo = {
    playerId: "",
    nickname: "Solidity",
    tierName: "JOKER 4TH",
    ratingPoint: 2400,
    maxRatingPoint: 2500,
    rank: 0,
    wins: 40,
    loses: 20,
    disconnected: 4,
    totalGames: 64,
    recentCharacter: [
      {
        name: "케니스",
        pic: "627db8b10d95ba73f0d2765130430454",
        kill: 6.4,
        death: 3,
        assist: 12,
        winrate: 63,
        playCount: 9,
      },
      {
        name: "나이오비",
        pic: "f414d81d3be548d47d856bfcabd50bce",
        kill: 6.4,
        death: 3,
        assist: 12,
        winrate: 63,
        playCount: 9,
      },
      {
        name: "아이작",
        pic: "caa0168d0c68ec4dfe64d025df2673f0",
        kill: 6.4,
        death: 3,
        assist: 12,
        winrate: 63,
        playCount: 9,
      },
    ],
    recentPosition: {
      tanker: 52,
      melee: 26.2,
      range: 21,
      supporter: 0.8,
    },
    matchId: "8f44143270b145d58f26305b5692a2e4559414879e15355df9b4fe46919aa6f2",
  };

  return (
    <div className="user--summary">
      <div className="user--summary--rankWinrateWrapper">
        <UserSummaryRank userInfo={userInfo} />
        <UserSummaryWinrate userInfo={userInfo} />
      </div>
      <UserSummaryCharacter userInfo={userInfo} />
      <UserSummaryPosition userInfo={userInfo} />
    </div>
  );
}

export default UserSummary;
