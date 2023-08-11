import { useQuery } from "react-query";

function useMatchesQuery(nickname, gameType = "rating") {
  const config = {
    queryKey: ["ratingMatches", nickname],
    queryFn: async () => {
      let res = await fetch(`/api/getMatches/${nickname}?gameType=${gameType}`);
      let json = res.json();
      return json;
    },
  };
  return useQuery(config);
}

export default useMatchesQuery;
