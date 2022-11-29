import { Order_product, Product } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (req, res, next) {
        const orderProducts = await Order_product.findAll({
            include: {
                model: Product,
            }
        });
        if(orderProducts.length === 0) next(new NotFoundError('Data was not found'))
        res.status(200).send({ orderProducts });
    },

    async getAllByOrder (req, res, next) {
        const orderProducts = await Order_product.findAll({
            where: { order_id: req.params.id },
            include: {
                model: Product,
            }
        }); 
        if(orderProducts.length === 0) next(new NotFoundError('Data was not found'))
        res.status(200).send({ orderProducts });
    },

    async getOne (req, res, next) {
        const orderProductFound = await Order_product.findAll({
            where: { 
                order_id: req.body.order_id,
                product_id: req.body.product_id
            }
        })
        if(orderProductFound.length === 0) next(new NotFoundError('Data was not found'))
        const orderProduct = orderProductFound[0];
        res.status(200).send({ orderProduct })
    },

    async updateOne(req, res, next){
        const orderProductFound = await Order_product.findAll({
            where: { 
                order_id: req.body.order_id,
                product_id: req.body.product_id
            }
        })
        if(orderProductFound.length === 0) next(new NotFoundError('Data was not found'))
        const orderProduct = orderProductFound[0];
        await orderProduct.update(req.body);
        res.status(201).send({ orderProduct })
    },

    async createOne(req, res){
        const newOrderProduct = await Order_product.create(req.body)
        res.status(201).send({ newOrderProduct });
    },

    async deleteOne(req, res, next){
        const orderProductFound = await Order_product.findAll({
            where: { 
                order_id: req.body.order_id,
                product_id: req.body.product_id
            }
        })
        if(!orderProductFound) next(new NotFoundError('Data was not found'))
        const orderProduct = orderProductFound[0];
        await orderProduct.destroy();
        res.status(204).send();
    }
}