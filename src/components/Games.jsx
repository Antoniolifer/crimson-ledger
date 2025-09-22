import React from "react";
import useReviewStore from "../globalStore/reviewStore";
import Title from "./Title";
function Games() {
  const games = useReviewStore((state) => state.games);
  console.log("rendered games list.");

  return (
    <>
      <Title>Games</Title>
      <div className="flex gap-4 my-2">
        {games.map((game, index) => {
          return <GameCard key={index} game={game} />;
        })}
      </div>
    </>
  );
}

function GameCard({ game }) {
  // img dims = 200 x 400
  console.log("rendered gamecard for ", game.title);

  return (
    <div className="border-4 shadow-md shadow-gray-100/50 border-white rounded-xl w-30 h-45 overflow-hidden">
      <img
        className="w-full h-full "
        src={game.picture}
        alt={`cover for ${game.title}`}
      />
    </div>
  );
}

export default Games;
