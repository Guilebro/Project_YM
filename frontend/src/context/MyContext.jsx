import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const context = createContext({});

export function ContextProvider({ children }) {
  const { Provider } = context;

  const [getGames, setGetGames] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [typeSelected, setTypeSelected] = useState("");
  const [editor, setEditor] = useState("");
  const [language, setLanguage] = useState("");
  const [player, setPlayer] = useState("");
  const [age, setAge] = useState("");
  const [duration, setDuration] = useState("");
  const [fetchOneGame, setFetchOneGame] = useState([]);
  const [fetchGameByCategory, setFetchGameByCategory] = useState([]);
  const [fetchAllCategories, setFetchAllCategories] = useState([]);
  const [fetchAllGames, setFetchAllGames] = useState([]);
  const [fetchCategoryByGame, setFetchCategoryByGame] = useState([]);
  const [show, setShow] = useState(true);

  const getAllGames = () => {
    const url = "http://localhost:8000/api/game/";
    axios.get(url).then((response) => setFetchAllGames(response.data));
  };

  const getCategories = () => {
    const url = "http://localhost:8000/api/category";
    axios.get(url).then((response) => setFetchAllCategories(response.data));
  };

  const getGameByCategory = (id) => {
    const url = `http://localhost:8000/api/game/category/${id}`;
    axios.get(url).then((response) => setFetchGameByCategory(response.data));
  };

  const getOneGame = (id) => {
    const url = `http://localhost:8000/api/game/${id}`;
    axios.get(url).then((response) => setFetchOneGame(response.data));
  };

  const getCategoryByGame = (id) => {
    const url = `http://localhost:8000/api/category/game/${id}`;
    axios.get(url).then((response) => setFetchCategoryByGame(response.data));
  };

  return (
    <Provider
      value={{
        fetchOneGame,
        getOneGame,
        fetchGameByCategory,
        getGameByCategory,
        getCategories,
        fetchAllCategories,
        getAllGames,
        fetchAllGames,
        editor,
        setEditor,
        typeSelected,
        setTypeSelected,
        language,
        setLanguage,
        player,
        setPlayer,
        age,
        setAge,
        duration,
        setDuration,
        getCategoryByGame,
        fetchCategoryByGame,
        show,
        setShow,
        getGames,
        setGetGames,
        searchTerm,
        setSearchTerm,
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
