const { validateToken } = require('../utils/auth');

const tokenValid = (request, response, next) => {
  try {
    const { authorization } = request.headers;
    const retornoToken = validateToken(authorization);
    if (authorization === undefined) {
      return response.status(401).json({ message: 'Token not found' });
    } if (!retornoToken) {
      return response.status(401).json({ message: 'Expired or invalid token' });
    }
    request.user = retornoToken;// pode ser pego em outros arquivos
    next();
  } catch (err) {
    console.error(err);
    return response.status(500).json({ message: 'Internal Error' });
  }
};

module.exports = {
  tokenValid,
};
