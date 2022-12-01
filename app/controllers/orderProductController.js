import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/orderProductQueries.js';
import orderquery from '../services/queries/orderQueries.js';
import UnauthorizedError from '../helpers/UnauthorizedError.js';


export default {

    async getAll (req, res, next) {
        const orderProducts = await query.getAll();
        if(orderProducts.length === 0) next(new NotFoundError('Data was not found'))
        res.status(200).send({ orderProducts });
    },

    async getAllByOrder (req, res, next) {
        const order = await orderquery.getOne(req.params.id);
        if(!order) next(new NotFoundError('Data was not found'))
        if(order.users.id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        const orderProducts = await query.getByOrder(req.params.id);
        if(orderProducts.length === 0) next(new NotFoundError('Data was not found'))
        res.status(200).send({ orderProducts });
    },

    async getOne (req, res, next) {
        const order = await orderquery.getOne(req.body.order_id);
        if(!order) next(new NotFoundError('Data was not found'))
        if(order.users.id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }        
        const orderProductFound = await query.getOne(req.body)
        if(orderProductFound.length === 0) next(new NotFoundError('Data was not found'))
        const orderProduct = orderProductFound[0];
        res.status(200).send({ orderProduct })
    },

    async updateOne(req, res, next){
        const order = await orderquery.getOne(req.body.order_id);
        if(!order) next(new NotFoundError('Data was not found'))
        const orderProductFound = await query.getAll(req.body)
        if(orderProductFound.length === 0) next(new NotFoundError('Data was not found'))
        const orderProduct = orderProductFound[0];
        await query.updateOne(orderProduct, req.body);
        res.status(201).send({ orderProduct })
    },

    async createOne(req, res, next){
        const order = await orderquery.getOne(req.body.order_id);
        if(!order) next(new NotFoundError('Data was not found'))
        if(order.users.id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        const newOrderProduct = await query.createOne(req.body)
        res.status(201).send({ newOrderProduct });
    },

    async deleteOne(req, res, next){
        const orderProductFound = await query.getOne(req.body)
        if(!orderProductFound) next(new NotFoundError('Data was not found'))
        const toDelete = orderProductFound[0];
        await query.deleteOne(toDelete);
        res.status(204).end();
    }
}