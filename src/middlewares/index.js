const { formValid } = require('./formValid');
const { loginValid } = require('./loginValid');
const { tokenValid } = require('./tokenValid');

module.exports = {
  loginValid,
  tokenValid,
  formValid,
};