import React from "react";
import { getPlayerId, getMatches } from "../apiFunctions";

async function handler(req, res) {
  const { nickname } = req.query;

  try {
    const userInfo = { ...(await getPlayerId(nickname)) };
    const matches = [...(await getMatches(userInfo.playerId, "rating"))];

    const result = await matches.reduce(
      (acc, cur) => {
        const { name } = cur.position;
        if (name === "탱커") {
          acc.tanker = acc.tanker + 1;
        } else if (name === "근거리딜러") {
          acc.melee = acc.melee + 1;
        } else if (name === "원거리딜러") {
          acc.range = acc.range + 1;
        } else {
          acc.supporter = acc.supporter + 1;
        }

        return acc;
      },
      { tanker: 0, melee: 0, range: 0, supporter: 0 }
    );
    res.status(200).json(result);
  } catch (err) {
    console.error("usePositionChartQuery 에러", err);
    res.status(404).json({});
  }
}

export default handler;
