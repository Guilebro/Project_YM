import React, { useEffect, useState } from "react";
import FilterLeft from "../components/FilterLeft";
import { myContext } from "../context/MyContext";
import "../css/BoardGames.css";
import Select from "../components/Select";
import SwitchButton from "../components/SwitchButton";
import GameDisplay from "../components/GameDisplay";

function BoardGames() {
  const [show, setShow] = useState(true);
  const { getCategories, fetchAllCategories, typeSelected } = myContext();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="main_boardGames">
      <FilterLeft />
      <div className="boardgame_display">
        {fetchAllCategories
          .filter((el) => el.id === "" || el.id === Number(typeSelected))
          .map((element) => (
            <h1 className="genre_title">{element.type}</h1>
          ))}
        <SwitchButton setShow={setShow} />
        <Select />
        <GameDisplay show={show} />
      </div>
    </div>
  );
}
export default BoardGames;
