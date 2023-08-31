// const jwt = require('jsonwebtoken');


// const trainerAuthen = async (req, res, next) => {
//   try {
//     const token = req.header.authorization;
//     if(!token){
//         return res.status(401).json({ error: 'Please authenticate' });
//     }
//     const decoded = jwt.verify(token, 'secret_key');
 
//     req.trainerId = decoded.trainerId;

//     next();
//   } catch (error) {
//     res.status(401).json({ error: 'Please authenticate' });
//   }
// };;
// module.exports={
//     trainerAuthen
// }


const jwt = require('jsonwebtoken');

const authenticateTrainer = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Authentication failed: No token provided' });
  }

  try {
    const decodedToken = jwt.verify(token, 'secret_key');
    req.trainerId = decodedToken.trainerId; // Attach the trainer's ID to the request
    next();
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed: Invalid token' });
  }
};

module.exports = {authenticateTrainer};
