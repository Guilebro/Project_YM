import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "../css/SearchBarResults.css";

function SearchBarResults({ id, name, picture, price, type }) {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <li className="gamesList" key={name}>
        <div
          className="name_results"
          onClick={refreshPage}
          onKeyDown={refreshPage}
          aria-hidden="true"
        >
          <Link className="results" to={`/jeu/${id}`}>
            <img className="game_picture_results" src={picture} alt="jeu" />
            <div className="div_name_price_genre">
              <div>
                <span>{name}</span>
                <span className="price_results">{`${price} €`}</span>
              </div>
              <span className="genre_results">{`dans: ${type}`}</span>
            </div>
          </Link>
        </div>
      </li>
    </div>
  );
}

SearchBarResults.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default SearchBarResults;
