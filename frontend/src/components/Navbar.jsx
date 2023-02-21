import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/bulleform3.png";
import facebook from "../assets/logos/facebook.png";
import instagram from "../assets/logos/instagram.png";
import twitter from "../assets/logos/twitter.png";
import french from "../assets/logos/french.png";
import uk from "../assets/logos/uk.png";
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
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
          <span className="flag_logo">
            <img className="flag" src={french} alt="french" />
            <img className="flag" src={uk} alt="uk" />
          </span>
        </div>
        <SearchBar />
      </div>
      <div className="basket_account">
        <Link to="/mon-compte">
          <span className="account">Mon compte</span>
        </Link>
        <Link to="/panier">
          <button className="basket_button" type="button">
            🛒 Mon panier
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
