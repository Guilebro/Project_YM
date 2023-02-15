import React from "react";
import { Link } from "react-router-dom";
import filterCards from "../utils/filter_cards";
import "../css/FilterNav.css";

function FilterNav() {
  return (
    <div className="main_filterNav">
      <div className="filter_cards_div">
        {filterCards.map((element) => (
          <Link to={element.link}>
            <div className="filter_cards">{element.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FilterNav;
