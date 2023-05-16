const { Category } = require('../models');

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

module.exports = {
  categoriesCreation,
};