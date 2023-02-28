import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import facebook from "../assets/logos/facebook.png";
import instagram from "../assets/logos/instagram.png";
import twitter from "../assets/logos/twitter.png";
import panier from "../assets/logos/panier.png";
import SearchBar from "./SearchBar";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="main_navbar">
      <Link to="/">
        <img className="logo_navbar" src={logo} alt="Logo du site" />
      </Link>
      <div className="searchBar_contact">
        <div className="contact">
          <a href="mailto:yanngrard@gmail.com" target="_blank" rel="noreferrer">
            <span className="contact_link"> ✉️ Contactez-nous</span>
          </a>
          <span className="contact_logo">
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
        </div>
        <SearchBar />
      </div>
      <Link to="/panier">
        <button className="basket_button" type="button">
          <img className="basket_logo" src={panier} alt="panier" />
          Mon panier
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
