const router = require("express").Router();
const gameController = require("../controller/gameController");

router.get("/", gameController.getAllGames);

module.exports = router;
