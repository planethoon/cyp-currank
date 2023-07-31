import React, { useState } from "react";
import UserSummaryRank from "./UserSummaryRank";
import UserSummaryRecent from "./UserSummaryRecent";

export default function UserSummary() {
  const userInfo = {
    playerId: "",
    nickname: "Solidity",
    tierName: "BRONZE 4TH",
    ratingPoint: 2400,
    maxRatingPoint: 2500,
    rank: 0,
    wins: 40,
    loses: 20,
    totalGames: 60,
  };

  return (
    <div className="user--summary">
      <UserSummaryRank userInfo={userInfo} />
      <UserSummaryRecent />
    </div>
  );
}
