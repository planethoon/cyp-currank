import { useEffect, useRef } from "react";
import Match from "./match/Match";
import useMatchesQuery from "../../react-query/useMatchesQuery";
import { useRouter } from "next/router";
import useMatchesInfiniteQuery from "../../react-query/useMatchesInfiniteQuery";
import { useInView } from "react-intersection-observer";

export default function UserMatch({ gameType }) {
  const [targetRef, inView] = useInView({ rootMargin: "300px" });
  const router = useRouter();
  const { nickname } = router.query;

  const { data, fetchNextPage, isLoading, hasNextPage, refetch, remove } =
    useMatchesInfiniteQuery(nickname, gameType);

  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  useEffect(() => {
    remove();
    refetch();
  }, [gameType]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div className="user--match--container">
      {data.pages
        .reduce((acc, cur) => {
          return [...acc, ...cur.matches];
        }, [])
        .map((e) => (
          <Match key={e.matchId} matchInfo={e} />
        ))}
      <div className="user--match--loadingIndicator" ref={targetRef} />
    </div>
  );
}
