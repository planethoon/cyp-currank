import React from "react";

function Character({ data }) {
  const {
    playCount,
    characterId,
    killCount,
    deathCount,
    assistCount,
    winCount,
    loseCount,
  } = data;
  return (
    <div className="recentCharacter--container">
      <div className="recentCharacter--pic">
        <img
          src={`https://img-api.neople.co.kr/cy/characters/${characterId}`}
          width="45"
          height="45"
          alt="pic"
        />
      </div>
      <div className="recentCharacter--text">
        <span>
          {`플레이: ${playCount}회 승률: ` +
            String(((winCount / playCount) * 100).toFixed(1)) +
            "%"}
        </span>
        <span>
          {`평균: ` +
            `${(killCount / playCount).toFixed(1)}` +
            `킬 ` +
            `${(deathCount / playCount).toFixed(1)}` +
            `데스 ` +
            `${(assistCount / playCount).toFixed(1)}` +
            `도움`}
        </span>
      </div>
    </div>
  );
}

export default Character;
