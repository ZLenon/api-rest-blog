const { Category } = require('../models');

// Requisito 8
const categoriesCreation = async (name) => {
  await Category.create({
    name,
  });
  const newCategorie = await Category.findOne({
    where: {
      name,
    },
  });
  return newCategorie;
}; 

// Requisito 9
const findAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = {
  categoriesCreation,
  findAllCategories,
};