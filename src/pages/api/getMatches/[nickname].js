import { getMatches, getPlayerId } from "../apiFunctions";

export default async function handler(req, res) {
  const { nickname, gameType = "rating" } = req.query;
  let userData = {};
  let matches = [];

  try {
    userData = { ...(await getPlayerId(nickname)) };
  } catch {
    console.error("getPlayerId 에러", err);
    res.status(404).json({ matches: [] });
  }

  try {
    matches = [...matches, ...(await getMatches(userData.playerId, gameType))];
    await res.status(200).json({ matches });
  } catch (err) {
    console.error("getMatches 에러", err);
    res.status(404).json({ matches: [] });
  }
}
