import React, { useState } from "react";
import { imageSelecter } from "../../../images";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import useMatchDetailQuery from "../../../react-query/useMatchDetailQuery";

export default function Match({ matchInfo }) {
  const [toggle, setToggle] = useState(false);
  const { data, status } = useMatchDetailQuery(matchInfo.matchId);
  let winPlayer = [],
    losePlayer = [];

  if (status === "success") {
    let temp = data.teams;
    let sorted = temp.sort((a, b) => {
      if (b.result === "win") {
        return 1;
      }
      return -1;
    });

    winPlayer = data.players.filter((e) => {
      for (let i = 0; i < 10; i++) {
        if (e.playerId === sorted[0].players[i]) {
          return true;
        }
      }
      return false;
    });

    losePlayer = data.players.filter((e) => {
      for (let i = 0; i < 10; i++) {
        if (e.playerId === sorted[1].players[i]) {
          return true;
        }
      }
      return false;
    });
  }

  return (
    <div>
      <div
        className={`match--container ${
          !(matchInfo.playInfo.result === "win") && "lose"
        }${toggle ? " on" : ""}`}
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
              <img
                src={`https://img-api.neople.co.kr/cy/characters/${matchInfo.playInfo.characterId}`}
                width="60"
                height="60"
                alt="position"
              />
            </div>
            <div className="match--character--position">
              <img
                src={imageSelecter(matchInfo.position.name)}
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
              <img
                src={`https://img-api.neople.co.kr/cy/position-attributes/${matchInfo.position.attribute[0].id}
              `}
                width="35"
                height="35"
                alt="attribute"
              />
            </div>
            <div className="match--attribute--img">
              <img
                src={`https://img-api.neople.co.kr/cy/position-attributes/${matchInfo.position.attribute[1].id}
              `}
                width="35"
                height="35"
                alt="attribute"
              />
            </div>
            <div className="match--attribute--img">
              <img
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
          }${toggle ? " on" : ""}`}
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          <span>
            {toggle ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} />
            )}
          </span>
        </div>
      </div>
      {toggle && <MatchDetail winPlayer={winPlayer} losePlayer={losePlayer} />}
    </div>
  );
}

export const ListPlayer = ({ nickname, position, character }) => {
  return (
    <div className="listPlayer--wrapper">
      <div className="listPlayer--position">
        <img
          src={imageSelecter(position)}
          alt="position"
          width="18"
          height="18"
        />
      </div>
      <div className="listPlayer--character">
        <img
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

export const MatchDetail = ({ winPlayer, losePlayer }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={`matchDetail--container${toggle ? " win" : " lose"}`}>
      <div className="matchDetail--toggleWrapper">
        <div
          className="matchDetail--toggleBtn"
          onClick={() => {
            setToggle(true);
          }}
        >
          승리
        </div>
        <div
          className="matchDetail--toggleBtn"
          onClick={() => {
            setToggle(false);
          }}
        >
          패배
        </div>
      </div>
      {(toggle ? winPlayer : losePlayer).map((e) => {
        return <DetailUser key={e.playerId} data={e} />;
      })}
    </div>
  );
};

export const DetailUser = ({ data }) => {
  const [toggle, setToggle] = useState(true);
  const itemSlot = [
    "101",
    "102",
    "103",
    "104",
    "105",
    "106",
    "202",
    "203",
    "301",
    "302",
    "303",
    "304",
    "305",
    "107",
    "204",
    "205",
  ];
  return (
    <div className={`detailUser--container`}>
      <div className="detailUser--position">
        <img
          src={imageSelecter(data.position.name)}
          alt="position"
          width="30"
          height="30"
        />
      </div>
      <div className="detailUser--pic">
        <img
          src={`https://img-api.neople.co.kr/cy/characters/${data.playInfo.characterId}`}
          alt="character"
          width="40"
          height="40"
        />
      </div>
      <div className="detailUser--level">Lv.{data.playInfo.level}</div>
      <div className="detailUser--nickname">
        <Link href={`/user/${data.nickname}`}>
          <span>{data.nickname}</span>
        </Link>
      </div>
      <div className="detailUser--result">
        <div className="detailUser--resultWrapper">
          <span>{`가해량: `}</span>
          <span>{`${(data.playInfo.attackPoint / 1000).toFixed(1)}k`}</span>
          <span>{" 시야점수: "}</span>
          <span>{`${data.playInfo.sightPoint}`}</span>
        </div>
        <div className="detailUser--resultWrapper">
          <span>{"피해량: "}</span>
          <span>{`${(data.playInfo.damagePoint / 1000).toFixed(1)}k`}</span>
          <span>{" 전투점수: "}</span>
          <span>{`${data.playInfo.battlePoint}`}</span>
        </div>
      </div>
      <div className="detailUser--items">
        {itemSlot.map((e, idx) => {
          if (toggle ? idx < 8 : idx >= 8) {
            const found = data.items.find((element) => {
              if (element.equipSlotCode === e) {
                return true;
              }
            });
            if (found?.itemId) {
              return (
                <div key={found.itemId} className="detailUser--itemWrapper">
                  <img
                    src={`https://img-api.neople.co.kr/cy/items/${found.itemId}`}
                    alt={found.itemName}
                    width="40"
                    height="40"
                  />
                  <div className="detailUser--itemSummary">
                    {found.itemName}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={e.idx} className="detailUser--itemWrapper">
                  <img
                    src={`https://i.ibb.co/BjpXzdP/noitem.png`}
                    alt={"미장착"}
                    width="40"
                    height="40"
                  />
                  <div className="detailUser--itemSummary">{"미장착"}</div>
                </div>
              );
            }
          }
        })}
      </div>
      <div
        className="detailUser--toggleBtn"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        <div className={`toggleBtn${toggle ? " on" : ""}`} />
        <div className={`toggleBtn${toggle ? "" : " on"}`} />
      </div>
    </div>
  );
};
