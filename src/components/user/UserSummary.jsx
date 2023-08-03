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
  };

  return (
    <div className="user--summary">
      <div className="user--summary--rankWinrateWrapper">
        <UserSummaryRank userInfo={userInfo} />
        <UserSummaryWinrate userInfo={userInfo} />
      </div>
      <UserSummaryCharacter />
      <UserSummaryPosition />
    </div>
  );
}

export default UserSummary;
