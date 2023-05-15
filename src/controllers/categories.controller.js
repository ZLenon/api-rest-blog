const services = require('../services');

const categoriesCreation = async (request, response) => {
  const { name } = request.body;
  const category = await services.categoriesCreation(name);
  return response.status(201).json(category);
};

module.exports = {
  categoriesCreation,
};