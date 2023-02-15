import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/bulleform3.png";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="main_navbar">
      <Link to="/">
        <img className="logo_navbar" src={logo} alt="Logo du site" />
      </Link>
      <div className="searchBar_contact">
        <div className="contact">
          <span>Contacte-moi</span>
          <span>Logo Reseaux</span>
          <span>Switch langues</span>
        </div>
        <input
          type="search"
          className="input_search"
          placeholder="Rechercher un jeu ..."
          name="input_search"
        />
      </div>
      <div className="basket_account">
        <span>Mon compte</span>
        <Link to="/panier">
          <button className="basket_button" type="button">
            Mon panier
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
