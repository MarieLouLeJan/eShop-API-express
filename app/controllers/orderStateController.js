import { OrderState } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (req, res, next) {
        const orderStates = await OrderState.findAll();
        if(orderStates.length ===0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ orderStates });
    },

    async getOne(req, res, next){
        const orderState = await OrderState.findByPk(req.params.id);
        if(!orderState) next(new NotFoundError('Non existent data'))
        res.status(200).send({ orderState });
    },

    async createOne(req, res){
        const newOrderState = await OrderState.create(req.body);
        res.status(201).send({ newOrderState });
    },

    async updateOne(req, res, next){
        const orderState = await OrderState.findByPk(req.params.id);
        if(!orderState) next(new NotFoundError('Non existent data'))
        await orderState.update(req.body);
        res.status(201).send({ orderState });
    },

    async deleteOne(req, res, next){
        const orderState = await OrderState.findByPk(req.params.id);
        if(!orderState) next(new NotFoundError('Non existent data'))
        await orderState.destroy();
        res.status(204).send();
    }
}