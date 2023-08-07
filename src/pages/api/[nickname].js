import { getPlayerId, getRanking, getUserDetail } from "./apiFunctions";

require("dotenv").config();

export default async function handler(req, res) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";
  const { nickname } = req.query;

  let userData = {
    playerId: "",
    nickname: "",
    characterId: "",
    tierName: "",
    ratingPoint: 0,
    rank: 0,
  };

  try {
    userData = { ...userData, ...(await getPlayerId(nickname)) };
  } catch (err) {
    console.error("getPlayerId 에러", err);
    res.status(404).json({ message: "player not found" });
    return;
  }

  try {
    userData = { ...userData, ...(await getUserDetail(userData.playerId)) };
  } catch (err) {
    console.error("getUserDetail 에러", err);
    return;
  }

  try {
    userData = { ...userData, ...(await getRanking(userData.playerId)) };

    await res.status(200).json(userData);
  } catch (err) {
    console.error("getRanking 에러", err);
    return;
  }
}
