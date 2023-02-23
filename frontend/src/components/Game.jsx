import PropTypes from "prop-types";
import React from "react";
import "../css/Game.css";

function Game({ name, price, genre, picture }) {
  return (
    <div className="main_game">
      <img className="game_picture" src={picture} alt="jeu" />
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
  picture: PropTypes.string.isRequired,
};

export default Game;
