import React from "react";
import Character from "./recentCharacter/Character";

function UserSummaryCharacter() {
  return (
    <div className="user--summary--characterContainer">
      <span className="user--summary--chartTitle">
        최근 캐릭터 선호도(90일)
      </span>
      <div className="user--summary--characterList">
        <Character />
        <Character />
        <Character />
      </div>
    </div>
  );
}

export default UserSummaryCharacter;
