import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/MyContext";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/WarGames.css";
import Select from "../components/Select";

function WarGames() {
  const { fetchWarGames, getWarGames } = myContext();

  useEffect(() => {
    getWarGames();
  }, []);
  return (
    <div className="main_warGames">
      <FilterLeft />
      <div className="wargame_display">
        <h1 className="genre_title">Jeux de figurines</h1>
        <Select />
        {fetchWarGames.map((element) => (
          <Link to={`/jeu/${element.id}`} key={element.id}>
            <Game
              id={element.id}
              name={element.name}
              price={element.price}
              genre={element.genre}
              picture={element.picture}
              description={element.description}
              language={element.language}
              age={element.age}
              nbPlayers={element.nb_players}
              duration={element.duration}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default WarGames;
