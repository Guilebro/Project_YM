import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Game from "../components/Game";
import FilterLeft from "../components/FilterLeft";
import "../css/GameSearched.css";

function GameSearched() {
  const { query } = useParams();
  const [searchResult, setSearchResult] = useState([]);

  const searchList = () => {
    const url = "http://localhost:8000/api/game";
    axios.get(url).then((response) => setSearchResult(response.data));
  };

  useEffect(() => {
    searchList();
  }, []);

  return (
    <div className="main_gameSearched">
      <FilterLeft />
      <div className="gameSearched_display">
        <h1>résultats de recherche</h1>
        {searchResult
          .filter((game) =>
            game.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((element) => (
            <Link to={`/jeu/${element.id}`}>
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

export default GameSearched;
