import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const context = createContext({});

export function ContextProvider({ children }) {
  const { Provider } = context;

  const [fetchBoardGames, setFetchBoardGames] = useState([]);
  const [fetchWarGames, setFetchWarGames] = useState([]);
  const [fetchCardGames, setFetchCardGames] = useState([]);
  const [fetchKidGames, setFetchKidGames] = useState([]);
  const [fetchOneGame, setFetchOneGame] = useState([]);

  const getBoardGames = () => {
    const url = "http://localhost:8000/api/game/genre/Jeux de plateaux";
    axios.get(url).then((response) => setFetchBoardGames(response.data));
  };

  const getWarGames = () => {
    const url = "http://localhost:8000/api/game/genre/Jeux de figurines";
    axios.get(url).then((response) => setFetchWarGames(response.data));
  };

  const getCardGames = () => {
    const url = "http://localhost:8000/api/game/genre/Jeux de cartes";
    axios.get(url).then((response) => setFetchCardGames(response.data));
  };

  const getKidGames = () => {
    const url = "http://localhost:8000/api/game/genre/Jeux pour enfants";
    axios.get(url).then((response) => setFetchKidGames(response.data));
  };

  const getOneGame = (id) => {
    const url = `http://localhost:8000/api/game/${id}`;
    axios.get(url).then((response) => setFetchOneGame(response.data));
  };

  return (
    <Provider
      value={{
        getBoardGames,
        fetchBoardGames,
        getCardGames,
        fetchCardGames,
        getWarGames,
        fetchWarGames,
        getKidGames,
        fetchKidGames,
        fetchOneGame,
        getOneGame,
      }}
    >
      {children}
    </Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const myContext = () => useContext(context);
