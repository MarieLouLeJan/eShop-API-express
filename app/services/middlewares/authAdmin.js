import UnauthorizedError from '../../helpers/UnauthorizedError.js';

export default (req, res, next) => {
  req.token.user.roles.title !== 'admin' &&
    next(new UnauthorizedError("You don't have the permission to access"));
  next();
};
