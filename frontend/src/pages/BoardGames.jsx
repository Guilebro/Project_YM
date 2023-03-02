import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/MyContext";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import GameCard from "../components/GameCard";
import "../css/BoardGames.css";
import Select from "../components/Select";

function BoardGames() {
  const { fetchBoardGames, getBoardGames } = myContext();
  const [show, setShow] = useState(true);

  useEffect(() => {
    getBoardGames();
  }, []);

  const handleClick = () => {
    setShow(null);
  };

  const handleClick2 = () => {
    setShow(true);
  };

  return (
    <div className="main_boardGames">
      <FilterLeft />
      <div className="boardgame_display">
        <h1 className="genre_title">Jeux de plateaux</h1>
        <button onClick={handleClick} type="button">
          X
        </button>
        <button onClick={handleClick2} type="button">
          Y
        </button>

        <Select />
        {fetchBoardGames.map((element) => (
          <Link to={`/jeu/${element.id}`} key={element.id}>
            {show ? (
              <div>
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
              </div>
            ) : (
              <div>
                <GameCard />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BoardGames;
