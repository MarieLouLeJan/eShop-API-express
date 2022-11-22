import orderProductQuery from '../queries/orderProductQuery.js';

export default {

    async getAll (req, res) {
        const orderProducts = await orderProductQuery.getAllOrderProducts();
        res.json({ orderProducts });
    },

    async createOne(req, res){
        const { body } = req;
        const newOrderProduct = await orderProductQuery.createOrderProduct(body);
        res.json({ newOrderProduct });
    },

}