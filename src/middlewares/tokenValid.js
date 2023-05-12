const { validateToken } = require('../utils/auth');

const authToken = (request, response, next) => {
  try {
    const { authorization } = request.headers;
    const retornoToken = validateToken(authorization);
    request.user = retornoToken;// pode ser pego em outras pastas
    next();
  } catch (err) {
    console.error(err);
    return response.status(401).json({ message: 'not authorized' });
  }
};

module.exports = {
  authToken,
};