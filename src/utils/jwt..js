const jwt = require('jsonwebtoken');
const JWT_SECRET = 'jwt_secret'; 

exports.generateToken = (user) => {
  return jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
