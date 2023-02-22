import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchBarResults from "./SearchBarResults";
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
      <div className="div_results">
        {myGames.query === ""
          ? ""
          : myGames.list.map((element) => (
              <SearchBarResults id={element.id} name={element.name} />
            ))}
      </div>
    </div>
  );
}

export default SearchBar;
