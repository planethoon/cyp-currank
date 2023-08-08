import { useQuery } from "react-query";

export function useUserInfoQuery(nickname) {
  return useQuery({
    queryKey: ["userinfo", nickname],
    queryFn: async () => {
      const res = await fetch(`/api/${nickname}`);
      const json = await res.json();

      return json;
    },
    // refetchInterval: 60000,
    placeholderData: {
      characterId: "",
      playerId: "",
      nickname: "",
      tierName: "BRONZE 4TH",
      ratingPoint: 0,
      rank: 0,
    },
  });
}
