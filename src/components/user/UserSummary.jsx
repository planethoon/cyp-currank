import React, { useState } from "react";
import UserSummaryRank from "./UserSummaryRank";
import UserSummaryPosition from "./UserSummaryPosition";
import UserSummaryCharacter from "./UserSummaryCharacter";
import UserSummaryWinrate from "./UserSummaryWinrate";
import useSummaryQuery from "../../react-query/useSummaryQuery";
import { useRouter } from "next/router";
import useNicknameRouter from "../../hooks/useNickname";

function UserSummary() {
  const { nickname } = useNicknameRouter();
  const userInfo = {
    playerId: "",
    nickname: "Solidity",
    tierName: "JOKER 4TH",
    ratingPoint: 2400,
    maxRatingPoint: 2500,
    rank: 0,
    records: [
      {
        gameTypeId: "rating",
        winCount: 67,
        loseCount: 47,
        stopCount: 0,
      },
      {
        gameTypeId: "normal",
        winCount: 86,
        loseCount: 60,
        stopCount: 0,
      },
    ],
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
  };

  const { data, isLoading } = useSummaryQuery(nickname);
  console.log(data);

  if (isLoading) {
    return (
      <div className="user--summary">
        <span>로딩중</span>
      </div>
    );
  }

  return (
    <div className="user--summary">
      <div className="user--summary--rankWinrateWrapper">
        <UserSummaryRank userInfo={data} />
        <UserSummaryWinrate userInfo={data} />
      </div>
      <UserSummaryCharacter userInfo={data} />
      <UserSummaryPosition
        userInfo={{
          recentPosition: {
            tanker: 52,
            melee: 26.2,
            range: 21,
            supporter: 0.8,
          },
        }}
      />
    </div>
  );
}

export default UserSummary;
