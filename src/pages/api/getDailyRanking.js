import { getDailyRanking } from "./apiFunctions";

export default async function handler(req, res) {
  try {
    let data = await getDailyRanking();
    res.status(200).json(data);
  } catch (err) {
    console.error("getDailyRanking Error", err);
    res.status(404).json("check update");
  }
}
