import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import facebook from "../assets/logos/facebook.png";
import instagram from "../assets/logos/instagram.png";
import twitter from "../assets/logos/twitter.png";
import panier from "../assets/logos/panier.png";
import avatar from "../assets/logos/avatar.png";
import SearchBar from "./SearchBar";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="main_navbar">
      <Link to="/">
        <img className="logo_navbar" src={logo} alt="Logo du site" />
      </Link>
      <div className="logos_searchbar_basket">
        <div className="logos_searchbar">
          <span className="logos">
            <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
              <img className="logo_sn" src={facebook} alt="facebook" />
            </a>
            <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
              <img className="logo_sn" src={instagram} alt="instagram" />
            </a>
            <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
              <img className="logo_sn" src={twitter} alt="twitter" />
            </a>
          </span>
          <SearchBar />
        </div>
        <div className="div_buttons">
          <Link to="/panier">
            <button className="basket_button" type="button">
              <img className="basket_logo" src={panier} alt="panier" />
              <span className="button_text">Mon panier</span>
            </button>
          </Link>
          <Link to="/mon-compte">
            <button className="account_button" type="button">
              <img className="account_logo" src={avatar} alt="panier" />
              <span className="button_text">Mon compte</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
