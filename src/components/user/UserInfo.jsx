import { useState } from "react";
import { useUserInfoQuery } from "../../react-query/useUserInfoQuery";

export default function UserInfo({ host, nickname, switchModal }) {
  const { data } = useUserInfoQuery(nickname);
  const [copy, setCopy] = useState("링크복사");

  return (
    <div className="user--info">
      <div className="user--info--container">
        <div className="user--info--character">
          <img
            src={`https://img-api.neople.co.kr/cy/characters/${data.characterId}`}
            alt={"character"}
            height="80"
            width="80"
          />
        </div>
        <div className="user--info--textWrapper">
          <div className="user--info--clanname">{data.clanName}</div>
          <div className="user--info--nickname">{data.nickname}</div>
          <div className="user--info--grade">{data.grade}급</div>
        </div>
      </div>
      <div className="user--info--widget">
        <div className="user--info--wTitle">스트리머 위젯</div>
        <div className="user--info--wBtnWrapper">
          <div className="user--info--wBtn" onClick={switchModal}>
            미리보기
          </div>
          <div
            className="user--info--wBtn"
            onClick={() => {
              setCopy("복사완료!");
              navigator.clipboard.writeText(`${host}/widget/${nickname}`);
              setTimeout(() => {
                setCopy("링크복사");
              }, 5000);
            }}
          >
            {copy}
          </div>
        </div>
      </div>
    </div>
  );
}
