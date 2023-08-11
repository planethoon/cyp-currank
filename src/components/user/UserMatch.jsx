import React from "react";
import Match from "./match/Match";
import useMatchesQuery from "../../react-query/useMatchesQuery";
import { useRouter } from "next/router";

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
  const { data, isLoading } = useMatchesQuery(nickname);

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
