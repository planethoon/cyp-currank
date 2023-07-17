import { useState } from "react";

const Form = ({ submit, checkPlayer }) => {
  const [nickname, setNickname] = useState("");

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div className="main--form">
      <div
        className={
          checkPlayer.playerFound && checkPlayer.tierTest
            ? "form--title"
            : `form--title wrong`
        }
      >
        닉네임
      </div>
      <div className="form--input--wrapper">
        <input
          type="text"
          className={
            checkPlayer.playerFound && checkPlayer.tierTest
              ? "form--nickname"
              : "form--nickname wrong"
          }
          value={nickname}
          onChange={handleNickname}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submit(nickname);
            }
          }}
        />
      </div>
      <div className={"form--alert"}>
        <span
          className={
            checkPlayer.playerFound && checkPlayer.tierTest ? "" : "wrong"
          }
        >
          {checkPlayer.playerFound && !checkPlayer.tierTest
            ? "미배치 계정입니다."
            : "닉네임을 확인해주세요."}
        </span>
      </div>

      <div
        className="form--submit"
        onClick={() => {
          submit(nickname);
        }}
      >
        <span>적용</span>
      </div>
    </div>
  );
};

export default Form;
