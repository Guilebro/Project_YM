import axios from "axios";
import React, { useState, useEffect } from "react";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/BoardGames.css";

function BoardGames() {
  const [getAllGames, setGetAllGames] = useState([]);

  const getGames = () => {
    const url = "http://localhost:8000/api/game";
    axios.get(url).then((response) => setGetAllGames(response.data));
  };

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
