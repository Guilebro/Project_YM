const connexion = require("../config");

const db = connexion.promise();

const findCategoryById = (id) => {
  return db.query("SELECT * FROM category WHERE id = ? ", [id]);
};

const findAllCategories = () => {
  return db.query("SELECT * FROM category ");
};

const findCategoryByGame = (id) => {
  return db.query(
    "SELECT * FROM category INNER JOIN game ON category.id = game.category_id WHERE game.id = ? ",
    [id]
  );
};

module.exports = { findCategoryById, findAllCategories, findCategoryByGame };
