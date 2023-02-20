import PropTypes from "prop-types";
import React from "react";
import "../css/Game.css";

function Game({ name, price, genre }) {
  return (
    <div className="main_game">
      <span>{name}</span>
      <span>{genre}</span>
      <span>{price}</span>
    </div>
  );
}

Game.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Game;
