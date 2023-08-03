import { useState, useEffect } from "react";
import Image from "next/image";
import ImagesDir from "../../images";

function UserSummaryRank({ userInfo }) {
  const [img, setImg] = useState("");

  /* 아래 두 이펙트 훅은 이미지 설정을 위한 이펙트 훅이다.
  동기적으로 이루어져야 하기에 따로 두어 사용 */
  useEffect(() => {
    if (userInfo.tierName) {
      setImg(userInfo.tierName.split(" ")[0].toLowerCase());
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo.tierName) {
      checkHighTier();
      setImg(userInfo.tierName.split(" ")[0].toLowerCase());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img]);

  const checkHighTier = () => {
    if (userInfo.rank && userInfo.rank <= 30) {
      userInfo.tierName = "LEGEND";
    } else if (userInfo.rank && userInfo.rank <= 130) {
      userInfo.tierName = "HERO";
    }
  };

  return (
    <div className="user--summary--rankContainer">
      <div className="user--summary--rankImg">
        <Image src={ImagesDir[img]} alt="rankimg" width={100} height={100} />
      </div>
      <div className="user--summary--rankText">
        <div className="rankText bronze">{userInfo.tierName}</div>
        <div className="rankText">{`현재: ${userInfo.ratingPoint}`}</div>
        <div className="rankText">{`최고: ${userInfo.maxRatingPoint}`}</div>
      </div>
    </div>
  );
}

export default UserSummaryRank;
