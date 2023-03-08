import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { myContext } from "../context/MyContext";
import Game from "./Game";
import "../css/GameDisplay.css";
import GameInCard from "./GameInCard";

function GameSearchedDisplay() {
  const { query } = useParams();
  const {
    editor,
    language,
    player,
    age,
    duration,
    searchList,
    searchResult,
    show,
  } = myContext();

  useEffect(() => {
    searchList();
  }, []);

  return (
    <div className={show ? "wrap_component" : "wrap_component_card"}>
      {searchResult
        .filter((game) => game.name.toLowerCase().includes(query.toLowerCase()))
        .filter((el) => editor === "" || el.editor === editor)
        .filter((el) => language === "" || el.language === language)
        .filter((el) => player === "" || el.nb_players === player)
        .filter((el) => age === "" || el.age === Number(age))
        .filter((el) => duration === "" || el.duration === duration)
        .map((element) => (
          <Link to={`/jeu/${element.id}`}>
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

export default GameSearchedDisplay;
