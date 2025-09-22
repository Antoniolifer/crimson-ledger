import React from "react";

import useReviewStore from "../globalStore/reviewStore";
import GameCover from "../components/GameCover";
import SearchBox from "../components/SearchBox";

function GamesPage() {
  const games = useReviewStore((state) => state.games);

  return (
    <div className="w-9/10 mx-auto">
      <div className="relative w-30 left-20 my-2">
        <SearchBox />
      </div>
      <div className="flex flex-wrap flex-row w-3/4 gap-3 mx-auto justify-center">
        {games.map((game) => {
          return <GameCover key={game.id} game={game} />;
        })}
      </div>
    </div>
  );
}

export default GamesPage;
