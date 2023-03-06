const express = require("express");
const gameRouter = require("./gameRouter");
const categoryRouter = require("./categoryRouter");

const router = express.Router();

router.use("/game", gameRouter);
router.use("/category", categoryRouter);

module.exports = router;
