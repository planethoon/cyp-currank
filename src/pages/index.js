import Widget from "../components/Widget";
import Header from "../components/Header.js";
import Form from "../components/Form.js";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function App() {
  /*로컬 상태*/
  const [nickname, setNickname] = useState("Solidity");
  const [copy, setCopy] = useState("링크복사");
  const [checkPlayer, setCheckPlayer] = useState({
    playerFound: true,
    tierTest: true,
  });

  const router = useRouter();

  const submit = async (nickname) => {
    await checkNickname(nickname);
    if (checkPlayer.playerFound) {
      setNickname(nickname);
    }
  };

  const checkNickname = (nickname) => {
    fetch(`/api/nicknameCheck/${nickname}`)
      .then((res) => res.json())
      .then((data) => {
        setCheckPlayer(data);
      });
  };

  return (
    <div className="App">
      <div className="main--background">
        <div className="main--title">
          <span>사이퍼즈 스트리머 랭크 위젯</span>
        </div>
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
            checkPlayer={checkPlayer}
          />
        </div>
      </div>
    </div>
  );
}

App.addFooter = function addFooter(page) {
  return (
    <Layout>
      <Footer>{page}</Footer>
    </Layout>
  );
};
