import React from "react";
import {
  getMatchesInitial,
  getMatchesNext,
  getPlayerId,
} from "../apiFunctions";

async function handler(req, res) {
  let userInfo = {};
  const { nickname, gameType, next } = req.query;

  userInfo = { ...(await getPlayerId(nickname)) };

  try {
    if (!next) {
      const { nextkey, matches } = await getMatchesInitial(
        userInfo.playerId,
        gameType
      );

      res.status(200).json({ next: nextkey, matches });
    } else {
      const { nextkey, matches } = await getMatchesNext(
        userInfo.playerId,
        next
      );
      res.status(200).json({ next: nextkey, matches });
    }
  } catch (err) {
    console.error("getMatchesInfinite 에러", err);
    res.status(404).json({});
  }
}

export default handler;
