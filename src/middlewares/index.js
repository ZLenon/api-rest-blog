const { formValid } = require('./formValid');
const { loginValid } = require('./loginValid');
const { nameValid } = require('./nameValid');
const { postValid } = require('./postValid');
const { tokenValid } = require('./tokenValid');

module.exports = {
  loginValid,
  tokenValid,
  formValid,
  nameValid,
  postValid,
};
