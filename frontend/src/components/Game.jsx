import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Game.css";

function Game({
  id,
  name,
  price,
  picture,
  description,
  language,
  age,
  nbPlayers,
  duration,
}) {
  return (
    <div className="main_game">
      <img className="game_picture" src={picture} alt="jeu" />
      <div className="text_infos">
        <span>{name}</span>
        <span>{description}</span>
        <div className="game_infos">
          <span>{language}</span>
          <span>{`À partir de ${age} ans`}</span>
          <span>{nbPlayers}</span>
          <span>{duration}</span>
        </div>
      </div>
      <div className="price_basket_details">
        <span>{`${price} € `}</span>
        <Link to="/panier">
          <button className="basket_button" type="button">
            Ajouter au panier
          </button>
        </Link>
        <Link to={`/jeu/${id}`}>
          <button className="basket_button" type="button">
            Voir détails
          </button>
        </Link>
      </div>
    </div>
  );
}

Game.propTypes = {
  age: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nbPlayers: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Game;
