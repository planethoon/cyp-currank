require("dotenv").config();

export default async function handler(req, res) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";
  const { nickname } = req.query;
  let playerId, nicknameRes, nicknameJson, matchingRes, matchingJson, tierTest;

  try {
    nicknameRes = await fetch(
      endpoint + `/players?nickname=${nickname}&wordType=match&apikey=${key}`
    );
    nicknameJson = await nicknameRes.json();

    if (!nicknameJson.rows[0]) {
      res.status(404).json({ playerFound: false, tierTest: false });
    } else {
      playerId = await nicknameJson.rows[0].playerId;

      // res.status(200).json({ message: "player found" });
      matchingRes = await fetch(
        endpoint + `/players/${playerId}?apikey=${key}`
      );
      matchingJson = await matchingRes.json();
      tierTest = await matchingJson.tierTest;

      res.status(200).json({ playerFound: true, tierTest });
    }
  } catch (err) {
    console.error("닉네임 조회 에러", err);
    res.status(404).json({ playerFound: false, tierTest: false });
  }
}
