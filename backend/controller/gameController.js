const gameModel = require("../model/gameModel");

const gameController = {
  getAllGames: (_, res) => {
    gameModel
      .findAllGames()
      .then(([games]) => res.send(games))
      .catch((err) => res.send(err));
  },

  getGameById: (req, res) => {
    const { id } = req.params;
    gameModel
      .findOneGame(id)
      .then(([game]) => res.send(game))
      .catch((err) => res.send(err));
  },

  getGameByCategory: (req, res) => {
    const { id } = req.params;
    gameModel
      .findGameByCategory(id)
      .then(([game]) => res.send(game))
      .catch((err) => res.send(err));
  },
};

module.exports = gameController;
