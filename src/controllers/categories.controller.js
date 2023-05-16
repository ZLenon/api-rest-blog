const services = require('../services');

// Requisito 8
const categoriesCreation = async (request, response) => {
  const { name } = request.body;
  const category = await services.categoriesCreation(name);
  return response.status(201).json(category);
};

// Requisito 9
const findAllCategories = async (_request, response) => {
  const allCategories = await services.findAllCategories();
  return response.status(200).json(allCategories);
};

module.exports = {
  categoriesCreation,
  findAllCategories,
};