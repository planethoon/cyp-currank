import Chart from "./chart/Chart";

function UserSummaryRecent() {
  return (
    <div className="user--summary--container">
      <span className="user--summary--chartTitle">
        최근 포지션 선호도(90일)
      </span>
      <div className="user--summary--chart">
        <Chart value={"5"} classType={"tanker"} />
        <Chart value={"0"} classType={"melee"} />
        <Chart value={"5"} classType={"range"} />
        <Chart value={"90"} classType={"supporter"} />
      </div>
    </div>
  );
}

export default UserSummaryRecent;
