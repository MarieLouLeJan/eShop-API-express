import { Adress, Order_type_adress } from '../database/models/index.js';

export default {

    async getAll (req, res) {
        const orderTypeAdresses = await Order_type_adress.findAll();
        res.status(200).send({ orderTypeAdresses });
    },


    async createOne(req, res){
        const newOrderTypeAdress = await Order_type_adress.create(req.body)
        res.status(201).send({ newOrderTypeAdress });
    },

}