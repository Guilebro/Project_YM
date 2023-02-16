import React from "react";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/BoardGames.css";

function BoardGames() {
  return (
    <div className="main_boardGames">
      <FilterLeft />
      <Game />
    </div>
  );
}

export default BoardGames;
