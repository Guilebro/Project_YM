import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../context/MyContext";
import SearchBarResults from "./SearchBarResults";
import "../css/SearchBar.css";

function SearchBar() {
  const navigate = useNavigate();
  const { datas, searchTerm, setSearchTerm, fetchGameTyped } = myContext();

  useEffect(() => {
    fetchGameTyped();
  }, []);

  const handleSearchTerm = (e) => {
    const { value } = e.target;
    // eslint-disable-next-line no-unused-expressions
    value.length > 2 ? setSearchTerm(value) : setSearchTerm("");
  };

  const handleSearch = () => {
    navigate(`/recherche/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="input_search"
        type="search"
        onChange={handleSearchTerm}
        name="input_search"
        placeholder="Rechercher un jeu..."
      />
      <div className="div_results">
        {searchTerm &&
          datas
            .filter((element) =>
              element.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((element) => (
              <SearchBarResults
                id={element.id}
                name={element.name}
                picture={element.picture}
                price={element.price}
                type={element.type}
              />
            ))}
      </div>
    </form>
  );
}

export default SearchBar;
