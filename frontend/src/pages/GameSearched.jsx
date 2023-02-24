import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
          <li>{element.name}</li>
        ))}
    </div>
  );
}

export default GameSearched;
