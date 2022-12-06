import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/adressQueries.js';
import UnauthorizedError from '../helpers/UnauthorizedError.js';

export default {

    async getAll (_, res, next) {
        const adresses = await query.getAll();
        if(adresses.length === 0) next(new NotFoundError('data was not found'))
        res.status(200).send({ adresses });
    },

    async getOne(req, res, next){
        const adress = await query.getOne(req.params.id)
        if(!adress) next(new NotFoundError('Non existent data'));
        if(adress.users.id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        res.status(200).json({ adress })
    },

    async getByUser(req, res, next){
        const adresses = await query.getByUser(req.params.id)
        if(adresses.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).json({ adresses })
    },

    async createOne(req, res, next){
        if(req.token.user.roles.title !== 'admin' && req.token.user.id !== req.body.user_id){
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        const newAdress = await query.createOne(req.body)
        res.status(201).send({ newAdress });
    },

    async updateOnePatch(req, res, next){
        const adress = await query.getOne(req.params.id);
        if(!adress) next(new NotFoundError('Non existent data'));
        if(adress.users.id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        await query.updateOne(adress, req.body)
        res.status(200).send({ adress });
    },

    async updateOnePut(req, res, next){
        if(req.body.user_id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        const adress = await query.getOne(req.params.id);
        if(!adress) {
            const newAdress = await query.createOne(req.body);
            res.status(201).send({ newAdress });
        } else {
            await query.updateOne(adress, req.body);
            res.status(200).send({ adress });
        }
    },
    
    async deleteOne(req, res, next){
        const adress = await query.getOne(req.params.id);
        if(adress.users.id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        if(!adress) next(new NotFoundError('Non existent data'))
        await query.deleteOne(adress)
        res.status(204).end();
    }
}