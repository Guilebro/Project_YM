import React from "react";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";

function BoardGames() {
  return (
    <div>
      <FilterLeft />
      <p>Jeux de plateaux</p>
      <Game />
    </div>
  );
}

export default BoardGames;
