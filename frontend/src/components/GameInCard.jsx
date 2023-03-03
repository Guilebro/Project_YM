import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "../css/GameInCard.css";

function GameInCard({ id, name, price, picture }) {
  return (
    <div className="oneCard">
      <img className="game_picture_card" src={picture} alt="jeu" />
      <span>{name}</span>
      <span>{`${price} €`}</span>
      <div className="div_basket_details_buttons_card">
        <Link to="/panier">
          <button className="basket_details_button_card" type="button">
            Ajouter au panier
          </button>
        </Link>
        <Link to={`/jeu/${id}`}>
          <button className="basket_details_button_card" type="button">
            Voir détails
          </button>
        </Link>
      </div>
    </div>
  );
}

GameInCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default GameInCard;
