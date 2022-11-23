import { Order_product } from '../database/models/index.js';

export default {

    async getAll (req, res) {
        const orderProducts = await Order_product.findAll();
        res.status(200).send({ orderProducts });
    },

    async createOne(req, res){
        const newOrderProduct = await Order_product.create(req.body)
        res.status(201).send({ newOrderProduct });
    },
}