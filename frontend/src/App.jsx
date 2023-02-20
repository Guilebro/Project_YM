import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FilterNav from "./components/FilterNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Basket from "./pages/Basket";
import Informations from "./pages/Informations";
import BoardGames from "./pages/BoardGames";
import WarGames from "./pages/WarGames";
import CardGames from "./pages/CardGames";
import KidGames from "./pages/KidGames";
import Account from "./pages/Account";
import GameDetails from "./components/Game";
import "./css/App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <FilterNav />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/jeux-de-plateaux" element={<BoardGames />} />
        <Route path="/jeux-de-figurines" element={<WarGames />} />
        <Route path="/jeux-de-cartes" element={<CardGames />} />
        <Route path="/jeux-pour-enfants" element={<KidGames />} />
        <Route path="/jeu/:id" element={<GameDetails />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/panier" element={<Basket />} />
        <Route path="/mon-compte" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
