import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useLocalStorage from "../hooks/useLocalStorage";

function Recent() {
  const router = useRouter();

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const local = localStorage.getItem("cypgg");
    if (local) {
      setHistory(JSON.parse(local));
    }
  }, []);

  return (
    <div className="recent--container">
      <div className="recent--title">최근 검색</div>
      <div className="recent--listWrapper">
        {history.map((nickname) => {
          return (
            <div
              key={`${nickname}list`}
              className="recent--list"
              onClick={() => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useLocalStorage(nickname);
                router.push(`/user/${nickname}`);
              }}
            >
              {nickname}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recent;
