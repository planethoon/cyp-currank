import { getMatchDetail } from "../apiFunctions";

async function handler(req, res) {
  const { matchId } = req.query;

  try {
    const data = await getMatchDetail(matchId);

    res.status(200).json(data);
  } catch (err) {
    console.error("getMatchDetail 에러", err);
    res.status(404).json({});
  }
}

export default handler;
