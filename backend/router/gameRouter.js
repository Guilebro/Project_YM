const router = require("express").Router();
const gameController = require("../controller/gameController");

router.get("/", gameController.getAllGames);
router.get("/:id", gameController.getGameById);
router.get("/genre/:genre", gameController.getGameByByGenre);

module.exports = router;
