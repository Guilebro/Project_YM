import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/MyContext";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/WarGames.css";

function WarGames() {
  const { fetchWarGames, getWarGames } = myContext();

  useEffect(() => {
    getWarGames();
  }, []);
  return (
    <div className="main_warGames">
      <FilterLeft />
      <div className="wargame_display">
        {fetchWarGames.map((element) => (
          <Link to={`/jeu/${element.id}`} key={element.id}>
            <Game
              name={element.name}
              price={element.price}
              genre={element.genre}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default WarGames;
