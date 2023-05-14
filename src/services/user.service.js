const { User } = require('../models');
const { generateToken } = require('../utils');

const addNewUser = async (email, password, image, displayName) => {
  const userFind = await User.findOne({
     where: { email },
  });
  
  if (userFind) {
    return { message: 'User already registered' };
  }
  await User.create({
    email, password, image, displayName,
  });
  const token = generateToken({ email, image, displayName });
  return token;
};

module.exports = {
  addNewUser,
};