import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "../css/SearchBarResults.css";

function SearchBarResults({ id, name }) {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="main_searchBarResults">
      <div className="div_gamesList">
        <li
          className="gamesList"
          onClick={refreshPage}
          onKeyDown={refreshPage}
          aria-hidden="true"
          key={name}
        >
          <div className="name_results">
            <Link className="results" to={`/jeu/${id}`}>
              {name}
            </Link>
          </div>
        </li>
      </div>
    </div>
  );
}

SearchBarResults.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default SearchBarResults;
