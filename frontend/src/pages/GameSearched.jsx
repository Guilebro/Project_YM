import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Game from "../components/Game";

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
    <div>
      {searchResult
        .filter((game) => game.name.toLowerCase().includes(query.toLowerCase()))
        .map((element) => (
          <Link to={`/jeu/${element.id}`}>
            <Game
              name={element.name}
              genre={element.genre}
              picture={element.picture}
            />
          </Link>
        ))}
    </div>
  );
}

export default GameSearched;
