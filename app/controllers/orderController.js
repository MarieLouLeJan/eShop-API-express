import { Order, Order_product, Product, Order_type_adress } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';


export default {

    async getAll (_, res, next) {
        const orders = await Order.findAll({
            include: [ 'order_states', 'users' ]
        });
        if(!orders) next(new NotFoundError('Non existent data'))
        res.status(200).send({ orders });
    },

    async getOne(req, res, next){
        const id = req.params.id
        const order = await Order.findByPk(id,{
            include: [ 'order_states', 'users' ]
        });
        if(!order) next(new NotFoundError('Non existent data'))
        const products = await Order_product.findAll({
            where: { order_id: id },
            include: { model: Product }
        });
        const adresses = await Order_type_adress.findAll({
            where: { order_id: id },
            include: [ 'adress', 'adress_type' ]
        })
        res.status(200).json({ order, products, adresses })
    },

    async getByUSer(req, res, next){
        const orders = await Order.findAll({
            where: { user_id: req.params.id }
        });
        if(orders.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).json({ orders })
    },

    async createOne(req, res){
        const newOrder = await Order.create(req.body)
        res.status(201).send({ newOrder });
    },

    async updateOne(req, res, next){
        const order = await Order.findByPk(req.params.id);
        if(!order) next(new NotFoundError('Non existent data'))
        await order.update(req.body);
        res.status(201).send({ order });
    },

    async deleteOne(req, res, next){
        const id = req.params.id;

        const ordToDelete = await Order.findByPk(id);
        if(!ordToDelete) next(new NotFoundError('Non existent data'))

        const prodToDelete = await Order_product.findAll({
            where: { order_id: id }
        });
        if(prodToDelete) for(const i of prodToDelete) { await i.destroy() }

        const addToDelete = await Order_type_adress.findAll({
            where: { order_id: id }
        });
        if(addToDelete) for(const i of addToDelete) { await i.destroy() }

        await ordToDelete.destroy();

        res.status(204).send();
    },
}