const connexion = require("../config");

const db = connexion.promise();

const findCategoryById = (id) => {
  return db.query("SELECT * FROM category WHERE id = ? ", [id]);
};

const findAllCategories = () => {
  return db.query("SELECT * FROM category ");
};

module.exports = { findCategoryById, findAllCategories };
