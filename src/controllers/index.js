const { insertBlogPost } = require('./blogPost.controller');
const { categoriesCreation, findAllCategories } = require('./categories.controller');
const { loginAcess } = require('./login.controller');
const { addNewUser, findAllUsers, findByUserID } = require('./user.controller');

module.exports = {
  loginAcess,
  addNewUser,
  findAllUsers,
  findByUserID,
  categoriesCreation,
  findAllCategories,
  insertBlogPost,
};
