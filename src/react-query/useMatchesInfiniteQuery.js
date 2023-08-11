import { useInfiniteQuery } from "react-query";

export default function useMatchesInfiniteQuery(nickname, gameType) {
  let query = `/api/getMatchesInfinite/${nickname}?gameType=${gameType}`;
  const config = {
    queryKey: ["matchesinfinite", nickname],
    queryFn: async ({ pageParam = "" }) => {
      console.log("페이지 파라미터", pageParam);
      if (pageParam) {
        query = query + `&next=${pageParam}`;
      }
      const res = await fetch(query);
      const json = await res.json();
      console.log(json);
      return json;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next;
    },
    cacheTime: Infinity,
    staleTime: Infinity,
  };
  return useInfiniteQuery(config);
}
