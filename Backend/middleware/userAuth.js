const jwt = require('jsonwebtoken');




const authenticateUser = async (req, res, next) => {
  const token = req.header.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Authentication failed: No token provided' });
  }

  try {
    const decodedToken = jwt.verify(token, 'secret_key');
    req.userId = decodedToken.userId; 
    next();
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed: Invalid token' });
  }
};

module.exports = {authenticateUser};