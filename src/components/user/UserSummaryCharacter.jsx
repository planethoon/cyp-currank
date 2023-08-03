import React from "react";

function UserSummaryCharacter() {
  return (
    <div className="user--summary--characterContainer">
      <span className="user--summary--chartTitle">
        최근 캐릭터 선호도(90일)
      </span>
      <div>
        <div>이미지</div>
        <div>
          <span>{`플레이: 5회 승률: 53%`}</span>
          <span>{`5킬 2데스 4.2도움`}</span>
        </div>
      </div>
    </div>
  );
}

export default UserSummaryCharacter;
