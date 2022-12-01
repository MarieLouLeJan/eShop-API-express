import { Order } from '../../database/models/index.js';

export default {

    async getAll () {
        return await Order.findAll({
            include: [ 'order_states', 'users' ]
        });
    },

    async getOne (id) {
        return await Order.findByPk(id, {
            include: [ 'order_states', 'users' ]
        });
    },

    async getByUser (id) {
        return await Order.findAll({
            where: { user_id: id }
        });
    },

    async createOne (body) {
        return await Order.create(body)
    },

    async updateOne (order, body) {
        return await order.update(body);
    },

    async deleteOne (order) {
        await order.destroy();
    } 
}