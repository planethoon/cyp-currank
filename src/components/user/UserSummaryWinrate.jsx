import WinrateChart from "./chart/WinrateChart";

function UserSummaryWinrate({ userInfo }) {
  return (
    <div className="user--summary--winrateContainer">
      <WinrateChart
        wins={userInfo.records[0].winCount}
        loses={userInfo.records[0].loseCount}
        disconnected={userInfo.records[0].stopCount}
      />
      <div className="user--summary--winrateText">
        <div className="rankText">{`${userInfo.records[0].winCount}승 ${userInfo.records[0].loseCount}패 ${userInfo.records[0].stopCount}중단`}</div>
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
