import {
  getMatches,
  getPlayerId,
  getRanking,
  getUserDetail,
} from "../apiFunctions";

async function handler(req, res) {
  const { nickname } = req.query;

  try {
    let userData = { ...(await getPlayerId(nickname)) };
    userData = { ...userData, ...(await getUserDetail(userData.playerId)) };
    userData = { ...userData, ...(await getRanking(userData.playerId)) };
    const matches = [...(await getMatches(userData.playerId, "rating"))];

    const reduced = await matches.reduce((acc, cur) => {
      const {
        characterId,
        characterName,
        killCount,
        deathCount,
        assistCount,
        result,
      } = cur.playInfo;

      let idx;
      const checkDup = acc.filter((e, i) => {
        if (e.characterName === characterName) {
          idx = i;
          return true;
        } else {
          return false;
        }
      });

      if (!checkDup.length) {
        return [
          ...acc,
          {
            characterId,
            characterName,
            killCount,
            deathCount,
            assistCount,
            playCount: 1,
            winCount: result === "win" ? 1 : 0,
            loseCount: result === "lose" ? 1 : 0,
          },
        ];
      } else {
        checkDup[0].killCount = checkDup[0].killCount + killCount;
        checkDup[0].deathCount = checkDup[0].deathCount + deathCount;
        checkDup[0].assistCount = checkDup[0].assistCount + assistCount;
        checkDup[0].playCount = checkDup[0].playCount + 1;
        checkDup[0].winCount =
          result === "win" ? checkDup[0].winCount + 1 : checkDup[0].winCount;
        checkDup[0].loseCount =
          result === "lose" ? checkDup[0].loseCount + 1 : checkDup[0].loseCount;
      }

      acc.splice(idx, 1, checkDup[0]);
      // acc.push();

      return acc;
    }, []);

    // console.log("reduced", reduced);

    const sorted = await reduced.sort((a, b) => {
      return b.playCount - a.playCount;
    });

    res.status(200).json({ ...userData, recentCharacter: sorted.slice(0, 3) });
  } catch (err) {
    console.log("err", err);
    res.status(404).end();
  }
}

export default handler;
