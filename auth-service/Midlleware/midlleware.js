const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorisation');
  if (!token) return res.status(403).json('Access denied.');
  
  try {
    const decoded = jwt.verify(token, 'hidaya02'); 
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json('Invalid token.');
  }};

module.exports = verifyToken;
