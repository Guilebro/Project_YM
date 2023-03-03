import React, { useEffect, useState } from "react";
import { myContext } from "../context/MyContext";
import FilterLeft from "../components/FilterLeft";
import "../css/BoardGames.css";
import Select from "../components/Select";
import SwitchButton from "../components/SwitchButton";
import GameDisplay from "../components/GameDisplay";

function BoardGames() {
  const { fetchBoardGames, getBoardGames } = myContext();
  const [show, setShow] = useState(true);

  useEffect(() => {
    getBoardGames();
  }, []);

  return (
    <div className="main_boardGames">
      <FilterLeft />
      <div className="boardgame_display">
        <h1 className="genre_title">Jeux de plateaux</h1>
        <SwitchButton setShow={setShow} />
        <Select />
        <GameDisplay show={show} fetchBoardGames={fetchBoardGames} />
      </div>
    </div>
  );
}

export default BoardGames;
