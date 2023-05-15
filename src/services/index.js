const { loginAcess } = require('./login.services');
const { addNewUser, findAllUsers, findByUserID } = require('./user.service');

module.exports = {
  loginAcess,
  addNewUser,
  findAllUsers,
  findByUserID,
};