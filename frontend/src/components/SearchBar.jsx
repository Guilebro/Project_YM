import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/SearchBar.css";

function SearchBar() {
  const [getGames, setGetGames] = useState("");
  const [myGames, setMyGames] = useState({
    query: "",
    list: [],
  });
  const fetchGameTyped = () => {
    const url = "http://localhost:8000/api/game";
    axios.get(url).then((response) => setGetGames(response.data));
  };

  useEffect(() => {
    fetchGameTyped();
  }, []);

  const handleChange = (e) => {
    const results = getGames.filter((games) => {
      if (e.target.value === "") return games;
      return games.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setMyGames({
      query: e.target.value,
      list: results,
    });
  };

  return (
    <div>
      <input
        className="input_search"
        type="search"
        value={myGames.query}
        onChange={handleChange}
        name="input_search"
        placeholder="Rechercher un jeu..."
      />
      <ul>
        {myGames.query === ""
          ? ""
          : myGames.list.map((element) => (
              <li key={element.name}>
                <Link to={`/jeu/${element.id}`}>{element.name}</Link>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default SearchBar;
