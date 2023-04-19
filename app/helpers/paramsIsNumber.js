import BadRequestError from './BadRequestError.js';

export default (req, _, next) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) next(new BadRequestError("Please enter a number type id")) 
    req.params.id = id;
    next()
}