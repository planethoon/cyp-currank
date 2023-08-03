import PositionChart from "./chart/PositionChart";

function UserSummaryPosition() {
  return (
    <div className="user--summary--positionContainer">
      <span className="user--summary--chartTitle">
        최근 포지션 선호도(90일)
      </span>
      <div className="user--summary--chart">
        <PositionChart value={"5"} classType={"tanker"} />
        <PositionChart value={"0"} classType={"melee"} />
        <PositionChart value={"5"} classType={"range"} />
        <PositionChart value={"90"} classType={"supporter"} />
      </div>
    </div>
  );
}

export default UserSummaryPosition;
