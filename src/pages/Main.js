import { useState } from "react";

import Widget from "./Widget.js";
import Header from "./components/Header.js";
import Form from "./components/Form.js";

function Main({ rankPoint, rank, nickname, rankImg, submit }) {
  const [copy, setCopy] = useState("링크복사");
  return (
    <div>
      <div className="main--background">
        <Header />
        <div className="main--wrapper">
          <div className="main--preview">
            <div className="main--preview--header">
              <span>미리보기</span>
              <div
                className="main--copybtn"
                onClick={() => {
                  setCopy("복사완료!");
                  navigator.clipboard.writeText(
                    `http://localhost:3000/widget/${nickname}&${rankPoint}`
                  );
                  setTimeout(() => {
                    setCopy("링크복사");
                  }, 5000);
                }}
              >
                {copy}
              </div>
            </div>
            <Widget
              rankPoint={rankPoint}
              rank={rank}
              nickname={nickname}
              rankImg={rankImg}
            />
          </div>
          <Form submit={submit} />
        </div>
      </div>
    </div>
  );
}

export default Main;
