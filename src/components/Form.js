import { useState } from "react";

const Form = ({ submit, isValid, didTest }) => {
  const [nickname, setNickname] = useState("");

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div className="main--form">
      <div className={isValid ? "form--title" : `form--title wrong`}>
        닉네임
      </div>
      <div className="form--input--wrapper">
        <input
          type="text"
          className={isValid ? "form--nickname" : "form--nickname wrong"}
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
        <span className={isValid && didTest ? "" : "wrong"}>
          {didTest ? "닉네임을 확인해주세요." : "미배치 계정입니다."}
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
