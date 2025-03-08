const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; 

  if (!token) return res.status(403).json('Access denied.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);  
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json('Invalid token.');
  }
};

module.exports = verifyToken;
