import { Order } from '../database/models/index.js';


export default {

    async getAllOrders () {
        return await Order.findAll();
    },


    async getOrderById (id) {
        return await Order.findByPk(id);
    },


    async createOrder (body) {
        return await Order.create(body)
    },

    async updateOrder (id, body){
        const order = await Order.findByPk(id);
        return await order.update(body);
    },

    async deleteOrder (id) {
        const order = await Order.findByPk(id);
        order.destroy();
    },
};