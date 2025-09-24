import React from "react";

function GameCard({ game }) {
  return (
    <div className="text-left my-1 flex gap-1 flex-col">
      <p>Title: {game.title}</p>
      <p>Developer: {game.developer}</p>
      <p>Release Date: {game.release_date.toLocaleDateString()}</p>
      <p>Country: {game.developer_country}</p>
      <p>Score: {game.average_score ? game.average_score : "no rating yet."}</p>
    </div>
  );
}

export default GameCard;
