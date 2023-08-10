import UserSummaryRank from "./UserSummaryRank";
import UserSummaryPosition from "./UserSummaryPosition";
import UserSummaryCharacter from "./UserSummaryCharacter";
import UserSummaryWinrate from "./UserSummaryWinrate";
import useSummaryQuery from "../../react-query/useSummaryQuery";
import useNicknameRouter from "../../hooks/useNickname";

function UserSummary() {
  const { nickname } = useNicknameRouter();
  const { data, isLoading } = useSummaryQuery(nickname);

  if (isLoading) {
    return (
      <div className="user--summary">
        <span>로딩중</span>
      </div>
    );
  }

  return (
    <div className="user--summary">
      <div className="user--summary--rankWinrateWrapper">
        <UserSummaryRank userInfo={data} />
        <UserSummaryWinrate userInfo={data} />
      </div>
      <UserSummaryCharacter userInfo={data} />
      <UserSummaryPosition />
    </div>
  );
}

export default UserSummary;
