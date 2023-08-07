require("dotenv").config();

export async function getPlayerId(nickname) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";
  // const { nickname } = req.query;

  let res = await fetch(
    endpoint + `/players?nickname=${nickname}&wordType=match&apikey=${key}`
  );
  let json = await res.json();

  return {
    playerId: json.rows[0].playerId,
    nickname: json.rows[0].nickname,
    characterId: json.rows[0].represent.characterId,
  };
}

export async function getRating(playerId) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";

  let res = await fetch(endpoint + `/players/${playerId}?apikey=${key}`);
  let json = await res.json();

  return {
    tierName: json.tierName,
    ratingPoint: json.ratingPoint,
    maxRatingPoint: json.maxRatingPoint,
    records: json.records,
  };
}

export async function getRanking(playerId) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";

  let res = await fetch(
    endpoint + `/ranking/ratingpoint?playerId=${playerId}&apikey=${key}`
  );
  let json = await res.json();

  if (json.rows[0]) {
    return { rank: json.rows[0].rank };
  } else {
    return { rank: 0 };
  }
}
