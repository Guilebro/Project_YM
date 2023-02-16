const gameModel = require("../model/gameModel");

const gameController = {
  getAllGames: (_, res) => {
    gameModel
      .findAllGames()
      .then(([games]) => res.send(games))
      .catch((err) => res.send(err));
  },
};

module.exports = gameController;
