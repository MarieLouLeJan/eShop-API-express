import orderQuery from '../queries/orderQuery.js';

export default {

    async getAll (req, res) {
        const orders = await orderQuery.getAllOrders();
        res.json({ orders });
    },

    async getOne(req, res){
        const order = await orderQuery.getOrderById(req.params.id);
        res.json({ order })
    },

    async createOne(req, res){
        const { body } = req;
        const newOrder = await orderQuery.createOrder(body);
        res.json({ newOrder });
    },

    async updateOne(req, res){
        const { body } = req;
        const order = await orderQuery.updateOrder(req.params.id, body);
        res.json({ order });
    },

    async deleteOne(req, res){
        await orderQuery.deleteOrder(req.params.id);
        res.json()
    },
}