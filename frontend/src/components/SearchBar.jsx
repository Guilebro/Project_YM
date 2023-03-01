import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBarResults from "./SearchBarResults";
import "../css/SearchBar.css";

function SearchBar() {
  const navigate = useNavigate();
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
    const searchWord = e.target.value;
    const results = getGames.filter((games) => {
      if (searchWord === "") return games;
      return games.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setMyGames({
      query: searchWord,
      list: results,
    });
  };

  const handleSearch = () => {
    navigate(`/recherche/${myGames.query}`);
  };

  return (
    <form onSubmit={handleSearch}>
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
              <SearchBarResults
                id={element.id}
                name={element.name}
                picture={element.picture}
                price={element.price}
                genre={element.genre}
              />
            ))}
      </div>
    </form>
  );
}

export default SearchBar;
