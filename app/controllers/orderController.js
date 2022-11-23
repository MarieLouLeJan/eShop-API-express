import { Order, Order_product, Product, Order_type_adress, Adress } from '../database/models/index.js';


export default {

    async getAll (req, res) {
        const orders = await Order.findAll();
        res.status(200).send({ orders });
    },

    async getOne(req, res){
        const id = req.params.id
        const order = await Order.findByPk(id,{
            include: [ 'order_states', 'users' ]
        });

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

    async getByUSer(req, res){
        const orders = await Order.findAll({
            where: { user_id: req.params.id }
        });
        res.status(200).json({ orders })
    },

    async createOne(req, res){
        const newOrder = await Order.create(req.body)
        res.status(201).send({ newOrder });
    },

    async updateOne(req, res){
        const order = await Order.findByPk(req.params.id);
        if(!order) return res.status(200).send('orderNotFound');
        await order.update(req.body);
        res.status(201).send({ order });
    },

    async deleteOne(req, res){
        const id = req.params.id

        const prodToDelete = await Order_product.findAll({
            where: { order_id: id }
        });
        if(prodToDelete) for(const i of prodToDelete) { await i.destroy() }

        const addToDelete = await Order_type_adress.findAll({
            where: { order_id: id }
        });
        if(addToDelete) for(const i of addToDelete) { await i.destroy() }

        const ordToDelete = await Order.findByPk(id);
        if(ordToDelete) ordToDelete.destroy();

        res.status(204);
    },
}