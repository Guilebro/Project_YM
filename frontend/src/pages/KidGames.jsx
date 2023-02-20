import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/MyContext";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/KidGames.css";

function KidGames() {
  const { fetchKidGames, getKidGames } = myContext();

  useEffect(() => {
    getKidGames();
  }, []);
  return (
    <div className="main_kidGames">
      <FilterLeft />
      <div className="kidgame_display">
        {fetchKidGames.map((element) => (
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

export default KidGames;
