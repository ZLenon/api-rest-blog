const formValid = (request, response, next) => {
  const { displayName, email, password } = request.body;
  const EmailREGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (displayName.length < 8) {
    return response.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  } if (!EmailREGEX.test(email)) {
    return response.status(400).json({ message: '"email" must be a valid email' });
  } if (password.length < 6) {
    return response.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  return next();
};

module.exports = {
  formValid,
};