import { imageSelecter } from "../images";
import { useUserInfoQuery } from "../react-query/useUserInfoQuery";
import { useEffect, useState } from "react";

const Widget = ({ nickname = "nextjs" }) => {
  const { data: userInfo } = useUserInfoQuery(nickname, 600000);
  const [host, setHost] = useState("");

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  if (host === "cyptools.xyz") {
    return (
      <div className="widget--alert">
        <span>주소를 cyp.gg 로 변경해주세요.</span>
        <span>자세한 내용은 공지사항을 참고 부탁드립니다.</span>
        <span>https://url.kr/uEAYx7</span>
      </div>
    );
  }

  const adjustNicknameSize = (nickname) => {
    let leng = nickname.length;

    if (leng < 5) {
    } else if (leng === 5) {
      return `widget--info--nickname five`;
    } else if (leng === 6) {
      return `widget--info--nickname six`;
    } else if (leng === 7) {
      return `widget--info--nickname seven`;
    } else if (leng === 8) {
      return `widget--info--nickname eight`;
    } else {
      return `widget--info--nickname`;
    }
  };

  return (
    <div className="widget--wrapper">
      <div className="widget--img--wrapper">
        <img
          src={imageSelecter(
            userInfo.tierName
              ? userInfo.tierName.split(" ")[0].toLowerCase()
              : "unranked"
          )}
          alt="rankimg"
        />
      </div>
      <div className="widget--info--wrapper">
        <div className="widget--info--outer">
          <span className={adjustNicknameSize(userInfo.nickname)}>
            {userInfo.nickname}
          </span>
        </div>
        <div className="widget--info--outer">
          <span
            className={
              userInfo.tierName.split(" ")[0].toLowerCase() === "bronze"
                ? "widget--info--rank bronze"
                : "widget--info--rank"
            }
          >
            {userInfo.tierName}
          </span>
        </div>
        <div className="widget--info--outer">
          <span className="widget--info--rankPoint">
            {userInfo.ratingPoint}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Widget;
