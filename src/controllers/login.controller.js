const services = require('../services');

// Requisito 3
const loginAcess = async (request, response) => {  
  const { email, password } = request.body;
  const token = await services.loginAcess(email, password);
  if (token.message) {
    return response.status(400).json(token);
  } 
  return response.status(200).json({ token });
};

module.exports = {
  loginAcess,
};