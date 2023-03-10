import React from "react";
import { useParams } from "react-router-dom";
import FilterLeft from "../components/FilterLeft";
import Select from "../components/Select";
import GameSearchedDisplay from "../components/GameSearchedDisplay";
import SwitchButton from "../components/SwitchButton";
import "../css/BoardGames.css";

function GameSearched() {
  const { query } = useParams();
  return (
    <div className="main_boardGames">
      <FilterLeft />
      <div className="boardgame_display">
        <h1 className="genre_title">
          vos résultats pour:{" "}
          <span style={{ fontStyle: "italic" }}>{`"${query}"`}</span>
        </h1>
        <SwitchButton />
        <Select />
        <GameSearchedDisplay />
      </div>
    </div>
  );
}

export default GameSearched;
