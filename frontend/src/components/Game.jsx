import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Game.css";

function Game({ id, name, price, picture, description }) {
  return (
    <div className="global_game">
      <div className="main_game">
        <img className="game_picture" src={picture} alt="jeu" />
        <div className="text_infos">
          <span className="game_name">{name}</span>
          <span className="game_price">{`${price} € `}</span>
          <span>{description}</span>
          <div className="price_basket_details">
            <Link to="/panier">
              <button className="basket_details_button" type="button">
                Ajouter au panier
              </button>
            </Link>
            <Link to={`/jeu/${id}`}>
              <button className="basket_details_button" type="button">
                Voir détails
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Game.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Game;
