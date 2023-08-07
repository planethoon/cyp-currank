import Image from "next/image";
import React, { useState } from "react";
import ImagesDir from "../../../images";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { matchDetail } from "../../../dummy";
import useMatchDetailQuery from "../../../react-query/useMatchDetailQuery";

function Match({ matchInfo }) {
  const { data, status } = useMatchDetailQuery(matchInfo.matchId);
  let winPlayer = [],
    losePlayer = [];

  if (status === "success") {
    winPlayer = data.players.filter((e) => {
      for (let i = 0; i < 10; i++) {
        if (e.playerId === data.teams[0].players[i]) {
          return true;
        }
      }
      return false;
    });

    losePlayer = data.players.filter((e) => {
      for (let i = 0; i < 10; i++) {
        if (e.playerId === data.teams[1].players[i]) {
          return true;
        }
      }
      return false;
    });
  }

  const setPositionImage = (position) => {
    if (position === "탱커") {
      return ImagesDir["tanker"];
    } else if (position === "근거리딜러") {
      return ImagesDir["melee"];
    } else if (position === "원거리딜러") {
      return ImagesDir["range"];
    } else {
      return ImagesDir["supporter"];
    }
  };

  return (
    <div
      className={`match--container ${
        !(matchInfo.playInfo.result === "win") && "lose"
      }`}
    >
      <div className="match--status">
        <div className="match--status--upWrapper">
          <span>
            {`${matchInfo.playInfo.result === "win" ? "승리" : "패배"} · ` +
              (matchInfo.playInfo.partyUserCount !== 0
                ? `${matchInfo.playInfo.partyUserCount}인 파티`
                : `솔로`)}
          </span>
          <span>{matchInfo.map.name}</span>
        </div>
        <div className="match--status--downWrapper">
          <div className="match--status--date">{matchInfo.date.slice(5)}</div>
          <div className="match--status--ingametime">{`${Math.floor(
            matchInfo.playInfo.playTime / 60
          )}분 ${matchInfo.playInfo.playTime % 60}초`}</div>
        </div>
      </div>
      <div className="match--character">
        <div className="match--character--wrapper">
          <div className="match--character--img">
            <Image
              src={`https://img-api.neople.co.kr/cy/characters/${matchInfo.playInfo.characterId}`}
              width="60"
              height="60"
              alt="position"
            />
          </div>
          <div className="match--character--position">
            <Image
              src={setPositionImage(matchInfo.position.name)}
              width="30"
              height="30"
              alt="position"
            />
          </div>
          <div className="match--character--level">
            <span>{matchInfo.playInfo.level}</span>
          </div>
        </div>
      </div>
      <div className="match--result">
        <div className="match--kda">
          <div className="match--kda--text">{`${matchInfo.playInfo.killCount} / ${matchInfo.playInfo.deathCount} / ${matchInfo.playInfo.assistCount}`}</div>
          <div className="match--kda--text">
            {`평점: ` +
              (matchInfo.playInfo.deathCount
                ? `${
                    (matchInfo.playInfo.killCount +
                      matchInfo.playInfo.assistCount) /
                    matchInfo.playInfo.deathCount
                  }`.slice(0, 4)
                : `Perfect!`)}
          </div>
        </div>
        <div className="match--attribute">
          <div className="match--attribute--img">
            <Image
              src={`https://img-api.neople.co.kr/cy/position-attributes/${matchInfo.position.attribute[0].id}
              `}
              width="35"
              height="35"
              alt="attribute"
            />
          </div>
          <div className="match--attribute--img">
            <Image
              src={`https://img-api.neople.co.kr/cy/position-attributes/${matchInfo.position.attribute[1].id}
              `}
              width="35"
              height="35"
              alt="attribute"
            />
          </div>
          <div className="match--attribute--img">
            <Image
              src={`https://img-api.neople.co.kr/cy/position-attributes/${matchInfo.position.attribute[2].id}
              `}
              width="35"
              height="35"
              alt="attribute"
            />
          </div>
        </div>
      </div>
      <div className="match--stats">
        <div className="match--textWrapper">
          <div className="match--statsText">
            <span>가해량:</span>
            <span>{`${(matchInfo.playInfo.attackPoint / 1000).toFixed(
              1
            )}k`}</span>
          </div>

          <div className="match--statsText">
            <span>피해량:</span>
            <span>{`${(matchInfo.playInfo.damagePoint / 1000).toFixed(
              1
            )}k`}</span>
          </div>
          <div className="match--statsText">
            <span>시야점수:</span>
            <span>{matchInfo.playInfo.sightPoint}</span>
          </div>
          <div className="match--statsText">
            <span>전투점수:</span>
            <span>{matchInfo.playInfo.battlePoint}</span>
          </div>
        </div>
      </div>
      <div className="match--playerlist">
        <div className="match--playerlist--wrapper">
          {winPlayer.map((e) => {
            return (
              <ListPlayer
                key={e.playerId}
                nickname={e.nickname}
                position={e.position.name}
                character={e.playInfo.characterId}
              />
            );
          })}
        </div>
        <div className="match--playerlist--wrapper">
          {losePlayer.map((e) => {
            return (
              <ListPlayer
                key={e.playerId}
                nickname={e.nickname}
                position={e.position.name}
                character={e.playInfo.characterId}
              />
            );
          })}
        </div>
      </div>
      <div
        className={`match--moreInfoBtn ${
          !(matchInfo.playInfo.result === "win") && `lose`
        }`}
      >
        <span>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </div>
    </div>
  );
}

export default Match;

export const ListPlayer = ({ nickname, position, character }) => {
  const renamePositionKoreanToEnglish = (position) => {
    if (position === "탱커") {
      return "tanker";
    } else if (position === "근거리딜러") {
      return "melee";
    } else if (position === "원거리딜러") {
      return "range";
    } else {
      return "supporter";
    }
  };
  return (
    <div className="listPlayer--wrapper">
      <div className="listPlayer--position">
        <Image
          src={ImagesDir[renamePositionKoreanToEnglish(position)]}
          alt="position"
          width="18"
          height="18"
        />
      </div>
      <div className="listPlayer--character">
        <Image
          src={`https://img-api.neople.co.kr/cy/characters/${character}`}
          alt="character"
          width="20"
          height="20"
        />
      </div>
      <div className="listPlayer--nickname">
        <Link href={`/user/${nickname}`}>
          <span>{nickname}</span>
        </Link>
      </div>
    </div>
  );
};
