import PositionChart from "./chart/PositionChart";

function UserSummaryPosition({
  userInfo = {
    recentPosition: { tanker: 0, melee: 0, range: 0, supporter: 0 },
  },
}) {
  const { tanker, melee, range, supporter } = userInfo.recentPosition;
  return (
    <div className="user--summary--positionContainer">
      <span className="user--summary--chartTitle">
        최근 포지션 선호도(90일)
      </span>
      <div className="user--summary--chart">
        <PositionChart value={tanker} classType={"tanker"} />
        <PositionChart value={melee} classType={"melee"} />
        <PositionChart value={range} classType={"range"} />
        <PositionChart value={supporter} classType={"supporter"} />
      </div>
    </div>
  );
}

export default UserSummaryPosition;
