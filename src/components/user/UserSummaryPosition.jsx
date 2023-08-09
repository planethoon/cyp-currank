import useNicknameRouter from "../../hooks/useNickname";
import usePositionChartQuery from "../../react-query/usePositionChartQuery";
import PositionChart from "./chart/PositionChart";

function UserSummaryPosition() {
  const { nickname } = useNicknameRouter();
  const { data, isLoading } = usePositionChartQuery(nickname);

  const { tanker, melee, range, supporter } = data;

  if (isLoading) {
    return (
      <div className="user--summary--positionContainer">
        <span className="user--summary--chartTitle">
          최근 포지션 선호도(90일)
        </span>
        <div className="user--summary--chart">
          <PositionChart value={0} classType={"tanker"} />
          <PositionChart value={0} classType={"melee"} />
          <PositionChart value={0} classType={"range"} />
          <PositionChart value={0} classType={"supporter"} />
        </div>
      </div>
    );
  }

  return (
    <div className="user--summary--positionContainer">
      <span className="user--summary--chartTitle">
        최근 포지션 선호도(90일)
      </span>
      <div className="user--summary--chart">
        <PositionChart
          value={(tanker / (tanker + melee + range + supporter)) * 100}
          classType={"tanker"}
        />
        <PositionChart
          value={(melee / (tanker + melee + range + supporter)) * 100}
          classType={"melee"}
        />
        <PositionChart
          value={(range / (tanker + melee + range + supporter)) * 100}
          classType={"range"}
        />
        <PositionChart
          value={(supporter / (tanker + melee + range + supporter)) * 100}
          classType={"supporter"}
        />
      </div>
    </div>
  );
}

export default UserSummaryPosition;
