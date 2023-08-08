import { useQuery } from "react-query";

function useRatingMatchesQuery(nickname) {
  return useQuery({
    queryKey: ["ratingMatches", nickname],
    queryFn: async () => {
      let res = await fetch(`/api/getMatches/${nickname}?gameType=rating`);
      let json = res.json();
      return json;
    },
  });
}

export default useRatingMatchesQuery;
