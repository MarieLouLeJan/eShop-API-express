import UnauthorizedError from '../../helpers/UnauthorizedError.js'

export default (req, res, next) => {

    if(req.token.user.id !== req.params.id && req.token.user.roles.title !== 'admin') {
        next(new UnauthorizedError(`You don't have the permission to access`));
    }
    next();

}
