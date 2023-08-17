import React from "react";

function UserGameType({ gameType, changeToRating, changeToNormal }) {
  return (
    <div className="user--gametype">
      <div
        className={gameType === "rating" ? "selected" : ""}
        onClick={changeToRating}
      >
        <span>공식전</span>
      </div>
      <div
        className={gameType === "normal" ? "selected" : ""}
        onClick={changeToNormal}
      >
        <span>일반전</span>
      </div>
    </div>
  );
}

export default UserGameType;
