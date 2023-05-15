const { User } = require('../models');
const { generateToken } = require('../utils');

// Requisito 4
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

// Requisito 5
const findAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });  
  return allUsers;
};

// Requisito 6
const findByUserID = async (id) => {
  const userID = await User.findOne({
    where: {
      id,
    },
    attributes: { exclude: ['password'] }, // exclui o campo password do resultado
  });
  if (!userID) {
    return { message: 'User does not exist' };
  }
  return userID;
};
module.exports = {
  addNewUser,
  findAllUsers,
  findByUserID,
};