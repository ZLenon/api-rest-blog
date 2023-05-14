const services = require('../services');

const addNewUser = async (request, response) => {
  const { email, password, image, displayName } = request.body;
  const token = await services.addNewUser(email, password, image, displayName);

  if (token.message) {
  return response.status(409).json(token);
  }
  return response.status(201).json({ token });
};

module.exports = {
  addNewUser,
};