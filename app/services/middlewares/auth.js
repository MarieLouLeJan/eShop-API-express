import jwt from 'jsonwebtoken';
import UnauthorizedError from '../../helpers/UnauthorizedError.js';

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    req.token = jwt.verify(token, process.env.SALT);
    next();
  } catch {
    next(new UnauthorizedError('Wrong token'));
  }
};
