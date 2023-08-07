import React from "react";
import Match from "./match/Match";
import { useQuery } from "react-query";
import useRatingMatchesQuery from "../../react-query/useMatchesQuery";
import { useRouter } from "next/router";

export default function UserMatch() {
  const router = useRouter();
  const { nickname } = router.query;
  const { data, isLoading } = useRatingMatchesQuery(nickname);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div className="user--match--container">
      {data.matches.map((e) => {
        return <Match key={e.matchId} matchInfo={e} />;
      })}
    </div>
  );
}
