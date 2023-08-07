require("dotenv").config();
import { getPlayerId, getUserDetail } from "../apiFunctions";

export default async function handler(req, res) {
  const { nickname } = req.query;
  let userData = {
    playerId: "",
  };

  try {
    userData = { ...(await getPlayerId(nickname)) };

    if (userData.status === "notfound") {
      console.error("getPlayerId 에러");
      res.status(404).json({ playerFound: false, tierTest: false });
    } else {
      userData = { ...userData, ...(await getUserDetail(userData.playerId)) };
      res.status(200).json({ playerFound: true, tierTest: userData.tierTest });
      console.log(userData);
    }
  } catch (err) {
    console.error("닉네임 조회 에러", err);
    res.status(404).json({ playerFound: false, tierTest: false });
  }
}
