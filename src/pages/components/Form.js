import { useState } from "react";

const Form = ({ submit }) => {
  const [nickname, setNickname] = useState("");
  const [point, setPoint] = useState("0");

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handlePoint = (e) => {
    console.log(e);
    setPoint(e.target.value);
  };

  return (
    <div className="main--form">
      <div className="form--title">닉네임</div>
      <div className="form--input--wrapper">
        <input
          type="text"
          className="form--nickname"
          value={nickname}
          onChange={handleNickname}
        />
      </div>

      <div className="form--title">점수</div>
      <div className="form--input--wrapper">
        <input
          type="text"
          className="form--rankpoint"
          value={point}
          onChange={handlePoint}
          maxLength="4"
        />
      </div>

      <div
        className="form--submit"
        onClick={() => {
          submit(nickname, point);
        }}
      >
        <span>적용</span>
      </div>
    </div>
  );
};

export default Form;
