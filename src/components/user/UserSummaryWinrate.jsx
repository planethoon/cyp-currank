import WinrateChart from "./chart/WinrateChart";

function UserSummaryWinrate({ userInfo }) {
  let winrates =
    userInfo.wins && userInfo.totalGames
      ? String((userInfo.wins / userInfo.totalGames) * 100).slice(0, 4)
      : "0";

  return (
    <div className="user--summary--winrateContainer">
      <WinrateChart
        wins={userInfo.wins}
        loses={userInfo.loses}
        disconnected={userInfo.disconnected}
      />
      <div className="user--summary--winrateText">
        <div className="rankText">{`${userInfo.wins}승 ${userInfo.loses}패 ${userInfo.disconnected}중단`}</div>
        <div className="rankText">{`${winrates}%`}</div>
      </div>
    </div>
  );
}

export default UserSummaryWinrate;
