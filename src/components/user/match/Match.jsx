import Image from "next/image";
import React from "react";
import ImagesDir from "../../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Match() {
  return (
    <div className="match--container">
      <div className="match--status">
        <div className="match--status--upWrapper">
          <span>승리 · 솔로</span>
        </div>
        <div className="match--status--downWrapper">
          <div className="match--status--date">08-04 14:33</div>
          <div className="match--status--ingametime">12분 52초</div>
        </div>
      </div>
      <div className="match--character">
        <div className="match--character--wrapper">
          <div className="match--character--img">
            <Image
              src={`https://img-api.neople.co.kr/cy/characters/627db8b10d95ba73f0d2765130430454`}
              width="60"
              height="60"
              alt="position"
            />
          </div>
          <div className="match--character--position">
            <Image
              src={ImagesDir["melee"]}
              width="30"
              height="30"
              alt="position"
            />
          </div>
          <div className="match--character--level">
            <span>52</span>
          </div>
        </div>
      </div>
      <div className="match--result">
        <div className="match--kda">
          <div className="match--kda--text">5 / 3 / 12</div>
          <div className="match--kda--text">평점: 5.66</div>
        </div>
        <div className="match--attribute">
          <div className="match--attribute--img">
            <Image
              src={`https://img-api.neople.co.kr/cy/position-attributes/13ed96b8d10b40b488059271f940a37e
              `}
              width="35"
              height="35"
              alt="attribute"
            />
          </div>
          <div className="match--attribute--img">
            <Image
              src={`https://img-api.neople.co.kr/cy/position-attributes/ff6a4b6ab1d0fe84d63cace2e0c24a69
              `}
              width="35"
              height="35"
              alt="attribute"
            />
          </div>
          <div className="match--attribute--img">
            <Image
              src={`https://img-api.neople.co.kr/cy/position-attributes/d10f92492701526d64b18428ec8ce0d3
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
            <span>43.2k</span>
          </div>
          <div className="match--statsText">
            <span>피해량:</span>
            <span>0.9k</span>
          </div>
          <div className="match--statsText">
            <span>시야점수:</span>
            <span>231</span>
          </div>
          <div className="match--statsText">
            <span>전투점수:</span>
            <span>151</span>
          </div>
        </div>
      </div>
      <div className="match--member"></div>
      <div className="match--moreInfoBtn">
        <span>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </div>
    </div>
  );
}

export default Match;
