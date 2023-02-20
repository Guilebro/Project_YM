import React, { useEffect } from "react";
import { myContext } from "../context/MyContext";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/BoardGames.css";

function BoardGames() {
  const { getAllGames, getGames } = myContext();

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="main_boardGames">
      <FilterLeft />
      <div className="game_display">
        {getAllGames.map((element) => (
          <Game name={element.name} price={element.price} />
        ))}
      </div>
    </div>
  );
}

export default BoardGames;
