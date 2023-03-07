import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/MyContext";
import Game from "./Game";
import "../css/GameDisplay.css";
import GameInCard from "./GameInCard";

function GameDisplay({ show }) {
  const {
    typeSelected,
    fetchAllGames,
    getAllGames,
    editor,
    language,
    player,
    age,
    duration,
  } = myContext();

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <div className={show ? "wrap_component" : "wrap_component_card"}>
      {fetchAllGames &&
        fetchAllGames
          .filter(
            (el) =>
              typeSelected === "" || el.category_id === Number(typeSelected)
          )
          .filter((el) => editor === "" || el.editor === editor)
          .filter((el) => language === "" || el.language === language)
          .filter((el) => player === "" || el.nb_players === player)
          .filter((el) => age === "" || el.age === Number(age))
          .filter((el) => duration === "" || el.duration === duration)

          .map((element) => (
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
  fetchBoardGamesByCategoryId: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }),
  show: PropTypes.func.isRequired,
};

export default GameDisplay;
