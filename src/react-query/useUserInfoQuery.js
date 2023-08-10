import { useQuery } from "react-query";

export function useUserInfoQuery(nickname, interval) {
  const config = {
    queryKey: ["userinfo", nickname],
    queryFn: async () => {
      const res = await fetch(`/api/${nickname}`);
      const json = await res.json();

      return json;
    },
    placeholderData: {
      characterId: "",
      playerId: "",
      nickname: "",
      tierName: "BRONZE 4TH",
      ratingPoint: 0,
      rank: 0,
    },
  };
  if (interval) {
    config.refetchInterval = interval;
  }
  return useQuery(config);
}
