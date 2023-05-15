const services = require('../services');

// Requisito 4
const addNewUser = async (request, response) => {
  const { email, password, image, displayName } = request.body;
  const token = await services.addNewUser(email, password, image, displayName);

  if (token.message) {
  return response.status(409).json(token);
  }
  return response.status(201).json({ token });
};

// Requisito 5
const findAllUsers = async (_request, response) => {
  const allUsers = await services.findAllUsers();
  return response.status(200).json(allUsers);
};

// Requisito 6
const findByUserID = async (request, response) => {
  const { id } = request.params;
  Number(id);
  const userID = await services.findByUserID(id);
  if (userID.message) {
    return response.status(200).json(userID);    
  }
    return response.status(200).json(userID);
};
module.exports = {
  addNewUser,
  findAllUsers,
  findByUserID,
};