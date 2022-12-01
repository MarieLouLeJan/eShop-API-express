import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/orderQueries.js';
import OPQuery from '../services/queries/orderProductQueries.js';
import OTAQuery from '../services/queries/orderTypeAdressQueries.js';
import UnauthorizedError from '../helpers/UnauthorizedError.js';

export default {

    async getAll (_, res, next) {
        const orders = await query.getAll();
        if(!orders) next(new NotFoundError('Non existent data'))
        res.status(200).send({ orders });
    },

    async getOne(req, res, next){
        const id = req.params.id
        const order = await query.getOne(id);
        if(!order) next(new NotFoundError('Non existent data'))
        const products = await OPQuery.getByOrder(id);
        const adresses = await OTAQuery.getByOrder(id)
        res.status(200).json({ order, products, adresses })
    },

    async getByUSer(req, res, next){
        const orders = await query.getByUser();
        if(orders.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).json({ orders })
    },

    async createOne(req, res, next){
        if(req.body.user_id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        const newOrder = await query.createOne(req.body)
        res.status(201).send({ newOrder });
    },

    async updateOnePatch(req, res, next){
        const order = await query.getOne(req.params.id);
        if(!order) next(new NotFoundError('Non existent data'));
        if(order.users.id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        await query.updateOne(order, req.body);
        res.status(201).send({ order });
    },

    async updateOnePut(req, res, next){
        if(req.body.user_id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        const order = await query.getOne(req.params.id);
        if(!order) {
            const newOrder = await query.createOne(req.body);
            res.status(201).send({ newOrder });
        } else {
            const ord = order.get({plain: true})
            for(const i in ord) if(i !== "created_at" && i !== 'id' ) delete (ord[i]); 
            const body = Object.assign({}, ord, req.body)
            await query.updateOne(order, body);
            res.status(201).send({ order });
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