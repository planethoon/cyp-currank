import { useEffect, useRef } from "react";
import Match from "./match/Match";
import useMatchesQuery from "../../react-query/useMatchesQuery";
import { useRouter } from "next/router";
import useMatchesInfiniteQuery from "../../react-query/useMatchesInfiniteQuery";

// export default function UserMatch() {
//   const router = useRouter();
//   const { nickname } = router.query;
//   const { data, isLoading } = useMatchesQuery(nickname);

//   if (isLoading) {
//     return <div>로딩중</div>;
//   }

//   return (
//     <div className="user--match--container">
//       {data.matches.map((e) => {
//         return <Match key={e.matchId} matchInfo={e} />;
//       })}
//     </div>
//   );
// }

export default function UserMatch() {
  const router = useRouter();
  const { nickname } = router.query;
  // const { data, isLoading } = useMatchesQuery(nickname);
  const { data, fetchNextPage } = useMatchesInfiniteQuery(nickname, "rating");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("타임아웃 작동");
  //     fetchNextPage();
  //   }, 10000);
  //   return interval;
  // }, []);

  // if (isLoading) {
  //   return <div>로딩중</div>;
  // }
  const targetRef = useRef(null);
  const observer = new IntersectionObserver(callback, {
    root: targetRef,
    rootMargin: "300px",
  });
  observer.observe(targetRef);

  return (
    <div className="user--match--container">
      {/* {data.matches.map((e) => {
        return <Match key={e.matchId} matchInfo={e} />;
      })} */}
      <div className="user--match--loadingIndicator" />
    </div>
  );
}
