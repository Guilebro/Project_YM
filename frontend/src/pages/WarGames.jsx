import React from "react";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/WarGames.css";

function WarGames() {
  return (
    <div className="main_warGames">
      <FilterLeft />
      <Game />
    </div>
  );
}

export default WarGames;
