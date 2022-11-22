import orderStateQuery from '../queries/orderStateQuery.js';

export default {

    async getAll (req, res) {
        const orderStates = await orderStateQuery.getAllOrderStates();
        res.json({ orderStates });
    },

    async getOne(req, res){
        const orderState = await orderStateQuery.getOrderStateById(req.params.id);
        res.json({ orderState })
    },

    async createOne(req, res){
        const { body } = req;
        const newOrderState = await orderStateQuery.createOrderState(body);
        res.json({ newOrderState });
    },

    async updateOne(req, res){
        const { body } = req;
        const orderState = await orderStateQuery.updateOrderState(req.params.id, body);
        res.json({ orderState });
    },

    async unactiveOne(req, res){
        await orderStateQuery.unactiveOrderState(req.params.id);
        res.json()
    },
}