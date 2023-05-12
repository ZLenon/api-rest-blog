const loginValid = (request, response, next) => {
  const { email, password } = request.body;
  if (email.length === 0 || password.length === 0) {
    return response.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};
module.exports = { 
  loginValid,
 };