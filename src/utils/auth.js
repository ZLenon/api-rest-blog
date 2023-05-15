const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'secretJWT';

const configJWT = {
  expiresIn: '100d',
  algorithm: 'HS256',
};
// payload = { password }
const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};
// token = super string que é a mistura do password com o jwt
const validateToken = (token) => jwt.verify(token, secretKey);

// decodifica a super string em um password
const decodeToken = (token) => {
  if (!token) return { message: 'Falta o token' };
  const decoded = jwt.decode(token, secretKey);
  return decoded;
};

module.exports = {
  generateToken,
  validateToken,
  decodeToken,
};