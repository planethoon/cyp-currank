import React from "react";
import Image from "next/image";

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
        <Image
          src={`https://img-api.neople.co.kr/cy/characters/${characterId}`}
          width="45"
          height="45"
          alt="pic"
        />
      </div>
      <div className="recentCharacter--text">
        <span>
          {`플레이: ${playCount}회 승률: ` +
            String((winCount / playCount) * 100).slice(0, 3) +
            "%"}
        </span>
        <span>
          {`평균: ` +
            `${killCount / playCount}`.slice(0, 3) +
            `킬 ` +
            `${deathCount / playCount}`.slice(0, 3) +
            `데스 ` +
            `${assistCount / playCount}`.slice(0, 3) +
            `도움`}
        </span>
      </div>
    </div>
  );
}

export default Character;
