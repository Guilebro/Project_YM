const connexion = require("../config");

const db = connexion.promise();

const findAllGames = () => {
  return db.query("SELECT * FROM game");
};

const findOneGame = (id) => {
  return db.query("SELECT * FROM game WHERE id = ? ", [id]);
};

const findGameByCategory = (id) => {
  return db.query(
    "SELECT * FROM game INNER JOIN category ON category.id = game.category_id WHERE category.id = ? ",
    [id]
  );
};

module.exports = { findAllGames, findOneGame, findGameByCategory };
