import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/adressQueries.js';


export default {

    async getAll (req, res, next) {
        const orderStates = await query.getAll();
        if(orderStates.length ===0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ orderStates });
    },

    async getOne(req, res, next){
        const orderState = await query.getOne(req.params.id);
        if(!orderState) next(new NotFoundError('Non existent data'))
        res.status(200).send({ orderState });
    },

    async createOne(req, res){
        const newOrderState = await query.createOne(req.body);
        res.status(201).send({ newOrderState });
    },

    async updateOnePatch(req, res, next){
        const orderState = await query.getOne(req.params.id);
        if(!orderState) next(new NotFoundError('Non existent data'))
        await query.updateOne(orderState, req.body);
        res.status(201).send({ orderState });
    },

    async updateOnePut(req, res){
        const orderState = await query.getOne(req.params.id);
        if(!orderState) {
            const newOrderState = await query.createOne(req.body);
            res.status(201).send({ newOrderState });
        } else {
            await query.updateOne(orderState, req.body);
            res.status(201).send({ orderState });
        }
    },

    async deleteOne(req, res, next){
        const orderState = await query.getOne(req.params.id);
        if(!orderState) next(new NotFoundError('Non existent data'))
        await query.deleteOne();
        res.status(204).end();
    }
}