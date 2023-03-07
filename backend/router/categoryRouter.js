const router = require("express").Router();
const categoryController = require("../controller/categoryController");

router.get("/:id", categoryController.getCategoryById);
router.get("/", categoryController.getAllCategories);
router.get("/game/:id", categoryController.getCategoryByGame);

module.exports = router;
