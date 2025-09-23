import React, { useEffect, useMemo, useState } from "react";
import useReviewStore from "../globalStore/reviewStore";
import GameCover from "./GameCover";
import GameCard from "./GameCard";
import ReviewList from "./ReviewList";
function GameInformation({ gameTitle }) {
  const [game, setGame] = useState(null);
  const games = useReviewStore((state) => state.games);

  const reviews = useReviewStore((state) => {
    return state.reviews;
  });
  const relevantReviews = useMemo(() => {
    return reviews.filter((r) => r.game === gameTitle);
  }, [gameTitle, reviews]);

  useEffect(() => {
    //this will be a fetch
    const foundGame = games.filter((game) => {
      return game.title === gameTitle;
    });
    console.log(foundGame);
    if (foundGame[0]) {
      setGame(foundGame[0]);
    }
  }, [gameTitle, games]);

  return (
    <div className="grid grid-cols-4 w-5/6 mx-auto">
      <div className="col-span-1 flex flex-col items-center">
        {game && <GameCover game={game} />}
        {game && <GameCard game={game} />}
      </div>

      <div className="col-span-3">
        <ReviewList reviews={relevantReviews} />
      </div>
    </div>
  );
}

export default GameInformation;
