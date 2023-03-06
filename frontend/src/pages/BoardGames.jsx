import PropTypes from "prop-types";
import React, { useState } from "react";
import FilterLeft from "../components/FilterLeft";
import "../css/BoardGames.css";
import Select from "../components/Select";
import SwitchButton from "../components/SwitchButton";
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import GameDisplay from "../components/GameDisplay";

function BoardGames({ typeSelected }) {
  const [show, setShow] = useState(true);

  return (
    <div className="main_boardGames">
      <FilterLeft />
      <div className="boardgame_display">
        <h1 className="genre_title">Jeux de plateaux</h1>
        <SwitchButton setShow={setShow} />
        <Select />
        <GameDisplay show={show} typeSelected={typeSelected} />
      </div>
    </div>
  );
}

BoardGames.propTypes = {
  typeSelected: PropTypes.func.isRequired,
};

export default BoardGames;
