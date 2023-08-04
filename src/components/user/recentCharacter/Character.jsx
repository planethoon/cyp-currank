import React from "react";
import Image from "next/image";

function Character({ data }) {
  const { playCount, pic, winrate, kill, death, assist } = data;
  return (
    <div className="recentCharacter--container">
      <div className="recentCharacter--pic">
        <Image
          src={`https://img-api.neople.co.kr/cy/characters/${pic}`}
          width="45"
          height="45"
          alt="pic"
        />
      </div>
      <div className="recentCharacter--text">
        <span>{`플레이: ${playCount}회 승률: ${winrate}%`}</span>
        <span>{`평균: ${kill}킬 ${death}데스 ${assist}도움`}</span>
      </div>
    </div>
  );
}

export default Character;
