const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
    });
    if (!user) {
      throw new Error('Please login');
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
export default authMiddleware;
