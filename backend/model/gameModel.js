const connexion = require("../config");

const db = connexion.promise();

const findAllGames = () => {
  return db.query("SELECT * FROM games");
};

module.exports = { findAllGames };
