const { categories } = require('../models');

const categoriesCreation = async (name) => {
  const newCategorie = await categories.create({
    name,
  });

  return newCategorie;
}; 

module.exports = {
  categoriesCreation,
};