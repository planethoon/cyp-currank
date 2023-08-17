import { useRouter } from "next/router";
import React from "react";

function Logo({ width, height }) {
  const router = useRouter();
  return (
    <div
      className="logo--container"
      onClick={() => {
        router.push("/");
      }}
    >
      <img
        src="https://i.ibb.co/2M3tNX8/logo4.png"
        alt="CYP.GG"
        width={width}
        height={height}
      />
    </div>
  );
}

export default Logo;
