import React from "react";
import { useQuery, useQueryClient } from "react-query";

export function useQueryUserInfo(nickname) {
  const userInfo = useQuery({
    queryKey: ["userinfo"],
    queryFn: () => {
      fetch(`/api/${nickname}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    },
    refetchInterval: 60000,
    placeholderData: {
      characterId: "",
      playerId: "",
      nickname: "",
      tierName: "BRONZE 4TH",
      ratingPoint: 0,
      rank: 0,
    },
  });

  return userInfo;
}
