import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { myContext } from "../context/MyContext";
import Game from "./Game";
import "../css/GameDisplay.css";

function GameSearchedDisplay() {
  const { query } = useParams();
  const { editor, language, player, age, duration, searchList, searchResult } =
    myContext();

  useEffect(() => {
    searchList();
  }, []);

  return (
    <div className="wrap_component">
      <div className="gameSearched_display">
        {searchResult
          .filter((game) =>
            game.name.toLowerCase().includes(query.toLowerCase())
          )
          .filter((el) => editor === "" || el.editor === editor)
          .filter((el) => language === "" || el.language === language)
          .filter((el) => player === "" || el.nb_players === player)
          .filter((el) => age === "" || el.age === Number(age))
          .filter((el) => duration === "" || el.duration === duration)
          .map((element) => (
            <Link to={`/jeu/${element.id}`}>
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

export default GameSearchedDisplay;
