import React from "react";
import Character from "./recentCharacter/Character";

function UserSummaryCharacter({ userInfo }) {
  return (
    <div className="user--summary--characterContainer">
      <span className="user--summary--chartTitle">
        최근 캐릭터 선호도(90일)
      </span>
      <div className="user--summary--characterList">
        {userInfo.recentCharacter.length ? (
          userInfo.recentCharacter.map((e, i) => {
            return <Character key={i} data={e} />;
          })
        ) : (
          <span>최근 기록이 없습니다.</span>
        )}
      </div>
    </div>
  );
}

export default UserSummaryCharacter;
