import { OrderState } from '../../database/models/index.js';

export default {

    async getAll () {
        return await OrderState.findAll();
    },

    async getOne (id) {
        return await OrderState.findByPk(id);
    },

    async createOne (body) {
        return await OrderState.create(body)
    },

    async updateOne (orderState, body) {
        return await orderState.update(body);
    },

    async deleteOne (orderState) {
        await orderState.destroy();
    } 
}