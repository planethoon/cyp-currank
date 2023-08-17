import { useState } from "react";

function useGameTypeHandle() {
  const [gameType, setGameType] = useState("rating");

  const changeToRating = () => {
    setGameType("rating");
  };

  const changeToNormal = () => {
    setGameType("normal");
  };
  return [gameType, changeToRating, changeToNormal];
}

export default useGameTypeHandle;
