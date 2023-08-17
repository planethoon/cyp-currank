require("dotenv").config();
import { TRUE } from "sass";
import { getPlayerId, getUserDetail } from "../apiFunctions";

export default async function handler(req, res) {
  const { nickname } = req.query;
  let userData = {
    playerId: "",
  };

  try {
    userData = { ...(await getPlayerId(nickname)) };

    if (userData.status === "notfound") {
      res.status(404).json({ playerFound: false });
    } else {
      res.status(200).json({ playerFound: true });
    }
  } catch (err) {
    res.status(404).json({ playerFound: false, tierTest: false });
  }
}
