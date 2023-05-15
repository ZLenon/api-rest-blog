const { categoriesCreation } = require('./categories.controller');
const { loginAcess } = require('./login.controller');
const { addNewUser, findAllUsers, findByUserID } = require('./user.controller');

module.exports = {
  loginAcess,
  addNewUser,
  findAllUsers,
  findByUserID,
  categoriesCreation,
};