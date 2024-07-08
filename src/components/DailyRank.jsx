import React from "react";
import useRankingQuery from "../react-query/useRankingQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function DailyRank() {
  const { data } = useRankingQuery();

  return (
    <div className="dailyrank--container">
      <div className={`dailyrank--title`}>통합 랭킹 TOP 5</div>
      <div className={`dailyrank--listwrapper`}>
        {data.map((data, i) => {
          return <Ranklist key={i} data={data} />;
        })}
      </div>
    </div>
  );
}

function Ranklist({ data }) {
  return (
    <div className={"ranklist--container"}>
      <div className={`ranklist--place--wrapper`}>
        <div className={`ranklist--place--current`}>{data.rank}</div>
        <RankBefore current={data.rank} before={data.beforeRank} />
      </div>
      <div className={`ranklist--nickname`}>
        <Link href={`/user/${data.nickname}`}>
          <span>{data.nickname}</span>
        </Link>
      </div>
      <div className={`ranklist--ratingPoint`}>{data.ratingPoint}</div>
    </div>
  );
}

function RankBefore({ current, before }) {
  if (current === before) {
    return (
      <div className={`ranklist--place--before`}>
        <span>(</span>
        <FontAwesomeIcon icon={faMinus} />
        <span>)</span>
      </div>
    );
  } else if (current > before) {
    return (
      <div className={`ranklist--place--before blue`}>
        <span>(</span>
        <FontAwesomeIcon icon={faCaretDown} />
        {current - before}
        <span>)</span>
      </div>
    );
  } else {
    return (
      <div className={`ranklist--place--before red`}>
        <span>(</span>

        <FontAwesomeIcon icon={faCaretUp} />
        {before - current}
        <span>)</span>
      </div>
    );
  }
}

export default DailyRank;
