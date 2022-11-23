import { OrderState } from '../database/models/index.js';

export default {

    async getAll (req, res) {
        const orderStates = await OrderState.findAll();
        res.status(200).send({ orderStates });
    },

    async getOne(req, res){
        const orderState = await await OrderState.findByPk(req.params.id);
        res.status(200).send({ orderState });
    },

    async createOne(req, res){
        const newOrderState = await OrderState.create(req.body);
        res.status(201).send({ newOrderState });
    },

    async updateOne(req, res){
        const orderState = await OrderState.findByPk(req.params.id);
        if(!orderState) return res.status(200).send('orderStateNotFound');
        await orderState.update(req.body);
        res.status(201).send({ orderState });
    },

}