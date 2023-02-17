import PropTypes from "prop-types";
import React from "react";
import "../css/Game.css";

function Game({ name, price }) {
  return (
    <div className="main_game">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
}

Game.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Game;
