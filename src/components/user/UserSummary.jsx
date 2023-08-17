import UserSummaryRank from "./UserSummaryRank";
import UserSummaryPosition from "./UserSummaryPosition";
import UserSummaryCharacter from "./UserSummaryCharacter";
import UserSummaryWinrate from "./UserSummaryWinrate";
import useSummaryQuery from "../../react-query/useSummaryQuery";
import useNicknameRouter from "../../hooks/useNickname";
import { useEffect } from "react";

function UserSummary({ gameType }) {
  const { nickname } = useNicknameRouter();
  const { data, isLoading, refetch } = useSummaryQuery(nickname, gameType);

  useEffect(() => {
    refetch();
  }, [gameType]);

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
        <UserSummaryWinrate userInfo={data} gameType={gameType} />
      </div>
      <UserSummaryCharacter userInfo={data} />
      <UserSummaryPosition gameType={gameType} />
    </div>
  );
}

export default UserSummary;
