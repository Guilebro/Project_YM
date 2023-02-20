import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../context/MyContext";

function GameDetails() {
  const { fetchOneGame, getOneGame } = myContext();
  const { id } = useParams();

  useEffect(() => {
    getOneGame(id);
  }, []);

  return (
    <div>
      <h1>Détails du jeu</h1>
      {fetchOneGame.map((element) => (
        <div>
          <span>{element.name}</span>
          <span>{element.price}</span>
          <span>{element.genre}</span>
        </div>
      ))}
    </div>
  );
}

export default GameDetails;
