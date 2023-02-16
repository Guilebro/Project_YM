import React from "react";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/KidGames.css";

function KidGames() {
  return (
    <div className="main_kidGames">
      <FilterLeft />
      <Game />
    </div>
  );
}

export default KidGames;
