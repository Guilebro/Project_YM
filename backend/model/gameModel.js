const connexion = require("../config");

const db = connexion.promise();

const findAllGames = () => {
  return db.query("SELECT * FROM game");
};

module.exports = { findAllGames };
