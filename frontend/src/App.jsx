import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FilterNav from "./components/FilterNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Basket from "./pages/Basket";
import Informations from "./pages/Informations";
import GameList from "./pages/GameList";
import "./css/App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <FilterNav />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/jeux-de-plateaux" element={<GameList />} />
        <Route path="/jeux-de-figurines" element={<GameList />} />
        <Route path="/jeux-de-cartes" element={<GameList />} />
        <Route path="/jeux-pour-enfants" element={<GameList />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/panier" element={<Basket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
