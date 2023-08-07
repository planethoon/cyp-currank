import { useQuery } from "react-query";

function useMatchDetailQuery(matchId) {
  return useQuery({
    queryKey: ["matchdetail", matchId],
    queryFn: async () => {
      const res = await fetch(`/api/getMatchDetail/${matchId}`);
      const json = await res.json();

      return json;
    },
  });
}

export default useMatchDetailQuery;
