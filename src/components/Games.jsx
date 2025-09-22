import React from "react";
import useReviewStore from "../globalStore/reviewStore";
import Title from "./Title";
import GameCover from "./GameCover";
function Games() {
  const games = useReviewStore((state) => state.games);
  console.log("rendered games list.");

  return (
    <>
      <Title>Games</Title>

      <div className="flex gap-4 my-2">
        {games.map((game, index) => {
          return <GameCover key={index} game={game} />;
        })}
      </div>
    </>
  );
}

export default Games;
