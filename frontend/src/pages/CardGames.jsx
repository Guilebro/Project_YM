import React from "react";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";

function CardGames() {
  return (
    <div>
      <FilterLeft />
      <p>Jeux de cartes</p>
      <Game />
    </div>
  );
}

export default CardGames;
