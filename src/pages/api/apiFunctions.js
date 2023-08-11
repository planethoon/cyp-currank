require("dotenv").config();

// functions
const convertUnixTimeToString = (time) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const getQueryTimes = () => {
  const end = new Date();
  const endUnix = end.getTime();

  const start = new Date(endUnix - 3 * 30 * 24 * 60 * 60 * 1000);
  const startUnix = start.getTime();

  return [convertUnixTimeToString(startUnix), convertUnixTimeToString(endUnix)];
};

//api functions

export async function getPlayerId(nickname) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";
  // const { nickname } = req.query;

  let res = await fetch(
    endpoint + `/players?nickname=${nickname}&wordType=match&apikey=${key}`
  );
  let json = await res.json();

  if (!json.rows[0]) {
    return {
      status: "notfound",
    };
  }

  return {
    playerId: json.rows[0].playerId,
    nickname: json.rows[0].nickname,
    characterId: json.rows[0].represent.characterId,
    grade: json.rows[0].grade,
  };
}

export async function getUserDetail(playerId) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";

  let res = await fetch(endpoint + `/players/${playerId}?apikey=${key}`);
  let json = await res.json();

  return {
    clanName: json.clanName,
    tierName: json.tierName,
    ratingPoint: json.ratingPoint,
    maxRatingPoint: json.maxRatingPoint,
    tierTest: json.tierTest,
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

export async function getMatches(playerId, gameType) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";
  let matches = [];

  // const convertUnixTimeToString = (time) => {
  //   const date = new Date(time);
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");

  //   return `${year}-${month}-${day}T${hours}:${minutes}`;
  // };

  // const getQueryTimes = () => {
  //   const end = new Date();
  //   const endUnix = end.getTime();

  //   const start = new Date(endUnix - 3 * 30 * 24 * 60 * 60 * 1000);
  //   const startUnix = start.getTime();

  //   return [
  //     convertUnixTimeToString(startUnix),
  //     convertUnixTimeToString(endUnix),
  //   ];
  // };

  const [startDate, endDate] = getQueryTimes();

  const res = await fetch(
    endpoint +
      `/players/${playerId}/matches?gameTypeId=${gameType}&startDate=${startDate}&endDate=${endDate}&limit=100&apikey=${key}`
  );
  const json = await res.json();

  matches = [...matches, ...json.matches.rows];

  const getNextMatches = async (next) => {
    let matches = [];

    let res = await fetch(
      endpoint + `/players/${playerId}/matches?next=${next}&apikey=${key}`
    );
    let json = await res.json();
    matches = [...matches, ...json.matches.rows];
    if (json.next) {
      matches = [...matches, ...getNextMatches(json.next)];
    }
    return matches;
  };

  if (json.next) {
    matches = [...matches, ...getNextMatches(json.next)];
  }

  return matches;
}

export async function getMatchDetail(matchId) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";
  const query = `/matches/${matchId}?&apikey=${key}`;

  const res = await fetch(endpoint + query);
  const json = await res.json();
  return json;
}

export async function getMatchesInitial(playerId, gameType = "rating") {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";
  const [startDate, endDate] = getQueryTimes();
  const query = `/players/${playerId}/matches?gameTypeId=${gameType}&startDate=${startDate}&endDate=${endDate}&limit=5&apikey=${key}`;

  const res = await fetch(endpoint + query);
  const json = await res.json();
  return { nextkey: json.matches.next, matches: json.matches.rows };
}

export async function getMatchesNext(playerId, next) {
  const key = process.env.API_KEY;
  const endpoint = "https://api.neople.co.kr/cy";
  const query = `/players/${playerId}/matches?next=${next}&apikey=${key}`;

  const res = await fetch(endpoint + query);
  const json = await res.json();
  return { nextkey: json.matches.next, matches: json.matches.rows };
}
