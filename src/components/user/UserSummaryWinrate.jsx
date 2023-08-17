import WinrateChart from "./chart/WinrateChart";

function UserSummaryWinrate({ userInfo, gameType }) {
  const wins =
    gameType === "rating"
      ? userInfo.records[0].winCount
      : userInfo.records[1].winCount;
  const loses =
    gameType === "rating"
      ? userInfo.records[0].loseCount
      : userInfo.records[1].loseCount;
  const stops =
    gameType === "rating"
      ? userInfo.records[0].stopCount
      : userInfo.records[1].stopCount;

  return (
    <div className="user--summary--winrateContainer">
      <WinrateChart wins={wins} loses={loses} disconnected={stops} />
      {/* {gameType === "rating" ? (
        <WinrateChart
          wins={userInfo.records[0].winCount}
          loses={userInfo.records[0].loseCount}
          disconnected={userInfo.records[0].stopCount}
        />
      ) : (
        <WinrateChart
          wins={userInfo.records[1].winCount}
          loses={userInfo.records[1].loseCount}
          disconnected={userInfo.records[1].stopCount}
        />
      )} */}
      <div className="user--summary--winrateText">
        <div className="rankText">{`${wins}승 ${loses}패 ${stops}중단`}</div>
        <div className="rankText">
          {wins && wins + loses + stops
            ? String((wins / (wins + loses + stops)) * 100).slice(0, 4) + "%"
            : "0%"}
        </div>
      </div>
    </div>
  );
}

export default UserSummaryWinrate;
