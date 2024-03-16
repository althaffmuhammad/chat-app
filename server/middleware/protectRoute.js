import JWT from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.JWT;
    if (!token) {
      res.status (401).json ({error: 'NO Token Provided'});
    }

    const decoded = JWT.verify (token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status (401).json ({error: 'invalid token'});
    }

    const user = await User.findById (decoded.userId).select ('-password');

    if (!user) {
      res.status (401).json ({error: 'user not found'});
    }

    req.user = user;

    next ();
  } catch (error) {
    console.log ('error in protectRoute middlewarw', error.Message);
    res.status (500).json ({error: 'Internal Server Error'});
  }
};

export default protectRoute;
