const { User } = require('../models');
const { generateToken } = require('../utils');

const loginAcess = async (email, password) => {
  const users = await User.findAll({
    where: {
      email,
      password,
    },
  });
 if (users.length === 0) {
  return { message: 'Invalid fields' };
 }
 const token = generateToken({ password, email });
 
  return token;
};

module.exports = {
  loginAcess,
};