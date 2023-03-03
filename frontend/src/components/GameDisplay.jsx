import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Game from "./Game";
import "../css/GameDisplay.css";
import GameInCard from "./GameInCard";

function GameDisplay({ show, fetchBoardGames }) {
  return (
    <div className={show ? "wrap_component" : "wrap_component_card"}>
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
              <GameInCard
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
          )}
        </Link>
      ))}
    </div>
  );
}

GameDisplay.propTypes = {
  // eslint-disable-next-line react/require-default-props
  fetchBoardGames: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }),
  show: PropTypes.func.isRequired,
};

export default GameDisplay;
