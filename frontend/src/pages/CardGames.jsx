import React from "react";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/CardGames.css";

function CardGames() {
  return (
    <div className="main_cardGames">
      <FilterLeft />
      <Game />
    </div>
  );
}

export default CardGames;
