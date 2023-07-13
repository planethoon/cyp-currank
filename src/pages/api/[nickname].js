require("dotenv").config();

export default async function handler(req, res) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";
  const { nickname } = req.query;
  let userData = {
    playerId: "",
    nickname: "",
    tierName: "",
    ratingPoint: 0,
    rank: 0,
  };

  console.log("API 호출 됐음!", key, nickname);

  await fetch(
    endpoint + `/players?nickname=${nickname}&wordType=match&apikey=${key}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      userData.playerId = data.rows[0].playerId;
    })
    .catch((err) => {
      console.error("닉네임 조회 에러", err);
      res.status(404).json({ message: "player not found" });
    });

  await fetch(endpoint + `/players/${userData.playerId}?apikey=${key}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      userData.nickname = data.nickname;
      userData.tierName = data.tierName;
      userData.ratingPoint = data.ratingPoint;
    })
    .catch((err) => {
      console.error("전적 조회 에러", err);
    });

  await fetch(
    endpoint +
      `/ranking/ratingpoint?playerId=${userData.playerId}&apikey=${key}`,
    { method: "GET" }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.rows[0]) {
        userData.rank = data.rows[0].rank;
      }
      res.status(200).json(userData);
    })
    .catch((err) => {
      console.error("랭킹 조회 에러", err);
    });
}
