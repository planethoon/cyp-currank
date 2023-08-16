import WinrateChart from "./chart/WinrateChart";

function UserSummaryWinrate({ userInfo, gameType }) {
  const win =
    gameType === "rating"
      ? userInfo.records[0].winCount
      : userInfo.records[1].winCount;
  const lose =
    gameType === "rating"
      ? userInfo.records[0].loseCount
      : userInfo.records[1].loseCount;
  const stop =
    gameType === "rating"
      ? userInfo.records[0].stopCount
      : userInfo.records[1].stopCount;

  return (
    <div className="user--summary--winrateContainer">
      <WinrateChart wins={win} loses={lose} disconnected={stop} />
      <div className="user--summary--winrateText">
        <div className="rankText">{`${win}승 ${lose}패 ${stop}중단`}</div>
        <div className="rankText">
          {userInfo.records[0].winCount &&
          userInfo.records[0].winCount +
            userInfo.records[0].loseCount +
            userInfo.records[0].stopCount
            ? String(
                (userInfo.records[0].winCount /
                  (userInfo.records[0].winCount +
                    userInfo.records[0].loseCount +
                    userInfo.records[0].stopCount)) *
                  100
              ).slice(0, 4) + "%"
            : "0%"}
        </div>
      </div>
    </div>
  );
}

export default UserSummaryWinrate;
