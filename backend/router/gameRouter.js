const router = require("express").Router();
const gameController = require("../controller/gameController");

router.get("/", gameController.getAllGames);
router.get("/:id", gameController.getGameById);

module.exports = router;
