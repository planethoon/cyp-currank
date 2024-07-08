import { useQuery } from "react-query";

export default function useRankingQuery() {
  const config = {
    queryKey: ["dailyRanking"],
    queryFn: async () => {
      let res = await fetch("/api/getDailyRanking");
      let json = res.json();
      return json;
    },
    placeholderData: [],
  };

  return useQuery(config);
}
