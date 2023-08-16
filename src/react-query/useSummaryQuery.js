import React from "react";
import { useQuery } from "react-query";

function useSummaryQuery(nickname, gameType) {
  return useQuery({
    queryKey: ["summary", nickname],
    queryFn: async () => {
      const res = await fetch(
        `/api/getSummaryInfo/${nickname}?gameType=${gameType}`
      );
      const json = await res.json();
      return json;
    },
  });
}

export default useSummaryQuery;
