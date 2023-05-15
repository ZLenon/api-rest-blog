const { validateToken } = require('../utils/auth');

const tokenValid = (request, response, next) => {
  const token = request.headers.authorization;
  
    if (!token) {
      return response.status(401).json({ message: 'Token not found' });
    } 
    try {
      const retornoToken = validateToken(token);
      request.user = retornoToken;// pode ser pego em outros arquivos
      next();
    } catch (error) {
      return response.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
  tokenValid,
};
