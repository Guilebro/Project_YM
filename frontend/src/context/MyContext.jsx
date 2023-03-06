import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const context = createContext({});

export function ContextProvider({ children }) {
  const { Provider } = context;

  const [typeSelected, setTypeSelected] = useState("");
  const [fetchBoardGamesByCategoryId, setFetchBoardGamesByCategoryId] =
    useState([]);
  const [fetchOneGame, setFetchOneGame] = useState([]);
  const [fetchOneCategory, setFetchOneCategory] = useState([]);
  const [fetchAllCategories, setFetchAllCategories] = useState([]);
  const [fetchAllGames, setFetchAllGames] = useState([]);
  const [editor, setEditor] = useState("");

  const getAllGames = () => {
    const url = "http://localhost:8000/api/game/";
    axios.get(url).then((response) => setFetchAllGames(response.data));
  };

  const getBoardGamesByCategoryId = (id) => {
    const url = `http://localhost:8000/api/game/category/${id}`;
    axios
      .get(url)
      .then((response) => setFetchBoardGamesByCategoryId(response.data));
  };

  const getCategories = () => {
    const url = "http://localhost:8000/api/category";
    axios.get(url).then((response) => setFetchAllCategories(response.data));
  };

  const getOneCategory = (id) => {
    const url = `http://localhost:8000/api/category/${id}`;
    axios.get(url).then((response) => setFetchOneCategory(response.data));
  };

  const getOneGame = (id) => {
    const url = `http://localhost:8000/api/game/${id}`;
    axios.get(url).then((response) => setFetchOneGame(response.data));
  };

  return (
    <Provider
      value={{
        getBoardGamesByCategoryId,
        fetchBoardGamesByCategoryId,
        fetchOneGame,
        getOneGame,
        fetchOneCategory,
        getOneCategory,
        getCategories,
        fetchAllCategories,
        getAllGames,
        fetchAllGames,
        editor,
        setEditor,
        typeSelected,
        setTypeSelected,
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
