import React from "react";
import FilterLeft from "../components/FilterLeft";
import Select from "../components/Select";
import GameSearchedDisplay from "../components/GameSearchedDisplay";
import SwitchButton from "../components/SwitchButton";
import "../css/BoardGames.css";

function GameSearched() {
  return (
    <div className="main_boardGames">
      <FilterLeft />
      <div className="boardgame_display">
        <h1 className="genre_title">résultats de recherche</h1>
        <SwitchButton />
        <Select />
        <GameSearchedDisplay />
      </div>
    </div>
  );
}

export default GameSearched;
