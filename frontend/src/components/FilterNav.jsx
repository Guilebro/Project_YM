import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/MyContext";
import "../css/FilterNav.css";

function FilterNav({ setTypeSelected }) {
  const { fetchAllCategories, getCategories } = myContext();

  useEffect(() => {
    getCategories();
  }, []);

  const handleClick = (e) => {
    setTypeSelected(e.target.value);
  };

  return (
    <div className="main_filterNav">
      <div className="filter_cards_div">
        {fetchAllCategories.map((element) => (
          <Link to="/categorie">
            <button
              className="filter_cards"
              type="button"
              onClick={handleClick}
              value={element.id}
            >
              {element.type}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

FilterNav.propTypes = {
  setTypeSelected: PropTypes.func.isRequired,
};

export default FilterNav;
