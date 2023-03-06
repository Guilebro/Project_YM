const categoryModel = require("../model/categoryModel");

const categoryController = {
  getCategoryById: (req, res) => {
    const { id } = req.params;
    categoryModel
      .findOneCategory(id)
      .then(([category]) => res.send(category))
      .catch((err) => res.send(err));
  },

  getAllCategories: (req, res) => {
    categoryModel
      .findAllCategories()
      .then(([category]) => res.send(category))
      .catch((err) => res.send(err));
  },
};

module.exports = categoryController;
