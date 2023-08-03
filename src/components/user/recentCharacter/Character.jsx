import React from "react";
import Image from "next/image";

function Character() {
  return (
    <div className="recentCharacter--container">
      <div className="recentCharacter--pic">
        <Image
          src={"http://via.placeholder.com/150"}
          width="45"
          height="45"
          alt="pic"
        />
      </div>
      <div className="recentCharacter--text">
        <span>{`플레이: 5회 승률: 53%`}</span>
        <span>{`평균: 5킬 2데스 4.2도움`}</span>
      </div>
    </div>
  );
}

export default Character;
