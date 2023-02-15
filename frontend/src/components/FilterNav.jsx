import React from "react";
import filterCards from "../utils/filter_cards";
import "../css/FilterNav.css";

function FilterNav() {
  return (
    <div className="main_filterNav">
      <div className="filter_cards_div">
        {filterCards.map((element) => (
          <div className="filter_cards">{element.name}</div>
        ))}
      </div>
    </div>
  );
}

export default FilterNav;
