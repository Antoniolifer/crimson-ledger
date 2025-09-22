import { useParams } from "react-router-dom";
import GameInformation from "../components/GameInformation";

function GamePage() {
  const params = useParams();
  return <GameInformation gameTitle={decodeURIComponent(params.title)} />;
}

export default GamePage;
