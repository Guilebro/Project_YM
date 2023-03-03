import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/MyContext";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/BoardGames.css";
import Select from "../components/Select";
import SwitchButton from "../components/SwitchButton";

function BoardGames() {
  const { fetchBoardGames, getBoardGames } = myContext();
  const [show, setShow] = useState(true);

  useEffect(() => {
    getBoardGames();
  }, []);

  return (
    <div className="main_boardGames">
      <FilterLeft />
      <div className="boardgame_display">
        <h1 className="genre_title">Jeux de plateaux</h1>
        <SwitchButton setShow={setShow} />
        <Select />
        <div className="wrap_component">
          {fetchBoardGames.map((element) => (
            <Link to={`/jeu/${element.id}`} key={element.id}>
              {show ? (
                <Game
                  id={element.id}
                  name={element.name}
                  price={element.price}
                  genre={element.genre}
                  picture={element.picture}
                  description={element.description}
                  language={element.language}
                  age={element.age}
                  nbPlayers={element.nb_players}
                  duration={element.duration}
                />
              ) : (
                <div>
                  <span>{element.name}</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoardGames;
