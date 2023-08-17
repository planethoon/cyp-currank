import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
  const [timer, setTimer] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          router.push("/");
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notfound--background">
      <div className="notfound--container">
        <div className="notfound--textBox">
          <span>유저를 찾지 못했습니다.</span>
          <span>{`${timer}초 후 메인화면으로 돌아갑니다.`}</span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
