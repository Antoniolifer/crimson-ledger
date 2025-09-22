import { NavLink } from "react-router-dom";

function GameCover({ game }) {
  // img dims = 200 x 400
  console.log("rendered gamecard for ", game.title);

  return (
    <NavLink
      className="border-4 shadow-md shadow-gray-100/50 border-white rounded-xl w-[200px] h-[300px] overflow-hidden hover:scale-105 cursor-pointer hover:shadow-lg transition-all duration-300"
      to={`/game/${game.title}`}
    >
      <img
        className="w-full h-full object-cover"
        src={game.cover_image}
        alt={`cover for ${game.title}`}
      />
    </NavLink>
  );
}

export default GameCover;
