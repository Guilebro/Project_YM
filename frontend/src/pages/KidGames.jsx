import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/MyContext";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/KidGames.css";
import Select from "../components/Select";

function KidGames() {
  const { fetchKidGames, getKidGames } = myContext();

  useEffect(() => {
    getKidGames();
  }, []);
  return (
    <div className="main_kidGames">
      <FilterLeft />
      <div className="kidgame_display">
        <h1 className="genre_title">Jeux pour enfants</h1>
        <Select />
        {fetchKidGames.map((element) => (
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

export default KidGames;
