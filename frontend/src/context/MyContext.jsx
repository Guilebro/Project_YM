import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const context = createContext({});

export function ContextProvider({ children }) {
  const { Provider } = context;

  const [getAllGames, setGetAllGames] = useState([]);

  const getGames = () => {
    const url = "http://localhost:8000/api/game";
    axios.get(url).then((response) => setGetAllGames(response.data));
  };

  return <Provider value={{ getAllGames, getGames }}>{children}</Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const myContext = () => useContext(context);
