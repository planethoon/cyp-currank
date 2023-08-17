import { useRouter } from "next/router";
import React from "react";

function Logo() {
  const router = useRouter();
  return (
    <div
      className="logo--container"
      onClick={() => {
        router.push("/");
      }}
    >
      <span>C</span>
      <span>YP</span>
      <span>.</span>
      <span>GG</span>
    </div>
  );
}

export default Logo;
