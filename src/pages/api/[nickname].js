require("dotenv").config();

export default async function handler(req, res) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";
  const { nickname } = req.query;

  let nicknameRes, nicknameJson, matchingRes, matchingJson, rankRes, rankJson;
  let userData = {
    playerId: "",
    nickname: "",
    tierName: "",
    ratingPoint: 0,
    rank: 0,
  };

  try {
    nicknameRes = await fetch(
      endpoint + `/players?nickname=${nickname}&wordType=match&apikey=${key}`
    );
    nicknameJson = await nicknameRes.json();
    userData.playerId = nicknameJson.rows[0].playerId;
    userData.nickname = nicknameJson.rows[0].nickname;
  } catch (err) {
    console.error("닉네임 조회 에러", err);
    res.status(404).json({ message: "player not found" });
    return;
  }

  try {
    matchingRes = await fetch(
      endpoint + `/players/${userData.playerId}?apikey=${key}`
    );
    matchingJson = await matchingRes.json();
    userData.nickname = await matchingJson.nickname;
    userData.tierName = await matchingJson.tierName;
    userData.ratingPoint = await matchingJson.ratingPoint;
  } catch (err) {
    console.error("전적 조회 에러", err);
    return;
  }

  try {
    rankRes = await fetch(
      endpoint +
        `/ranking/ratingpoint?playerId=${userData.playerId}&apikey=${key}`
    );
    rankJson = await rankRes.json();
    if (rankJson.rows[0]) {
      userData.rank = await rankJson.rows[0].rank;
    }
    res.status(200).json(userData);
  } catch (err) {
    console.error("랭킹 조회 에러", err);
    return;
  }
}
