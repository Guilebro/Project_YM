const connexion = require("../config");

const db = connexion.promise();

const findAllGames = () => {
  return db.query("SELECT * FROM game");
};

const findOneGame = (id) => {
  return db.query("SELECT * FROM game WHERE id = ? ", [id]);
};

const findGameByGenre = (genre) => {
  return db.query("SELECT * FROM game WHERE genre = ? ", [genre]);
};

module.exports = { findAllGames, findOneGame, findGameByGenre };
