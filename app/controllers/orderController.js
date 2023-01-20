import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/orderQueries.js';
import OPQuery from '../services/queries/orderProductQueries.js';
import OTAQuery from '../services/queries/orderTypeAdressQueries.js';
import UnauthorizedError from '../helpers/UnauthorizedError.js';

export default {

    async getAll (_, res, next) {
        const data = await query.getAll();
        if(!data) next(new NotFoundError('Non existent data'))
        res.status(200).send({ data });
    },

    async getOne(req, res, next){
        const id = req.params.id
        const data = await query.getOne(id);
        if(!data) next(new NotFoundError('Non existent data'))
        const products = await OPQuery.getByOrder(id);
        const adresses = await OTAQuery.getByOrder(id)
        res.status(200).json({ data, products, adresses })
    },

    async getByUSer(req, res, next){
        const data = await query.getByUser();
        if(data.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).json({ data })
    },

    async createOne(req, res, next){
        if(req.body.user_id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        const data = await query.createOne(req.body.cart);
        res.status(201).send({ data });
    },

    async updateOnePatch(req, res, next){
        const data = await query.getOne(req.params.id);
        if(!data) next(new NotFoundError('Non existent data'));
        if(data.users.id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        await query.updateOne(data, req.body);
        res.status(201).send({ data });
    },

    async updateOnePut(req, res, next){
        if(req.body.user_id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        const data = await query.getOne(req.params.id);
        if(!data) {
            const data = await query.createOne(req.body);
            res.status(201).send({ data });
        } else {
            await query.updateOne(data, req.body);
            res.status(201).send({ data });
        }
    },

    async deleteOne(req, res, next){
        const id = req.params.id;
        const ordToDelete = await query.getOne(id);
        if(!ordToDelete) next(new NotFoundError('Non existent data'))
        if(ordToDelete.users.id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        await query.deleteOne(ordToDelete);
        res.status(204).end();
    },
}