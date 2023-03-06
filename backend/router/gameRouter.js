const router = require("express").Router();
const gameController = require("../controller/gameController");

router.get("/", gameController.getAllGames);
router.get("/:id", gameController.getGameById);
router.get("/category/:id", gameController.getGameByCategory);

module.exports = router;
