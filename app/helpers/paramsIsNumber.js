import NotFoundError from './NotFoundError.js';

export default (req, _, next) => {

    const id = parseInt(req.params.id);
    if(isNaN(id)) next(new NotFoundError("Please enter a number type id")) 
    req.params.id = id;
    next()
}