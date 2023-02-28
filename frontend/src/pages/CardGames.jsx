import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/MyContext";
import FilterLeft from "../components/FilterLeft";
import Game from "../components/Game";
import "../css/CardGames.css";

function CardGames() {
  const { fetchCardGames, getCardGames } = myContext();

  useEffect(() => {
    getCardGames();
  }, []);
  return (
    <div className="main_cardGames">
      <FilterLeft />
      <div className="cardgame_display">
        {fetchCardGames.map((element) => (
          <Link to={`/jeu/${element.id}`} key={element.id}>
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardGames;
