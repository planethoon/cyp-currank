export default async function handler(req, res) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";

  let userData = {
    playerId: "",
    nickname: "",
    tierName: "",
    characterId: "",
    ratingPoint: 0,
    rank: 0,
    matches: {},
  };

  let nicknameRes, nicknameJson, matchingRes, matchingJson, rankRes, rankJson;

  try {
    nicknameRes = await fetch(
      endpoint + `/players?nickname=${nickname}&wordType=match&apikey=${key}`
    );
    nicknameJson = await nicknameRes.json();
    userData.playerId = nicknameJson.rows[0].playerId;
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
    userData.tierName = await matchingJson.tierName;
    userData.ratingPoint = await matchingJson.ratingPoint;
  } catch (err) {
    console.error("전적 조회 에러", err);
    return;
  }

  //
}
