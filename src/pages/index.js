import Widget from "../components/Widget";
import Header from "../components/Header.js";
import Form from "../components/Form.js";
import { useRouter } from "next/router";

import { useState } from "react";

// images

import { bronze, silver, gold, joker, ace, hero, legend } from "../images";

function App() {
  /*로컬 상태*/
  const [nickname, setNickname] = useState("Solidity");
  const [copy, setCopy] = useState("링크복사");
  const [isValid, setIsValid] = useState(true);
  const [didTest, setDidTest] = useState(true);

  const router = useRouter();

  const submit = async (nickname) => {
    await checkNickname(nickname);
    if (isValid) {
      setNickname(nickname);
    }
  };

  const checkNickname = (nickname) => {
    fetch(`/api/nicknameCheck/${nickname}`)
      .then((res) => {
        setDidTest(true);
        if (res.status !== 200) {
          console.log("무효");
          setIsValid(false);
        } else {
          console.log("유효");
          setIsValid(true);
        }
        return res.json();
      })
      .then((data) => {
        console.log("테스트 여부", data.tierTest);

        setDidTest(data.tierTest);
      });
  };

  return (
    <div className="App">
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
                    `${window.document.location.href}widget/${nickname}`
                  );
                  setTimeout(() => {
                    setCopy("링크복사");
                  }, 5000);
                }}
              >
                {copy}
              </div>
            </div>
            <Widget nickname={nickname} />
          </div>
          <Form
            submit={submit}
            checkNickname={checkNickname}
            isValid={isValid}
            didTest={didTest}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
