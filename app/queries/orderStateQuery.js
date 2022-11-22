import { OrderState } from '../database/models/index.js';


export default {

    async getAllOrderStates () {
        return await OrderState.findAll();
    },


    async getOrderStateById (id) {
        return await OrderState.findByPk(id);
    },


    async createOrderState (body) {
        return await OrderState.create(body)
    },

    async updateOrderState (id, body){
        const orderState = await OrderState.findByPk(id);
        return await orderState.update(body);
    },

    async unactiveOrderState (id) {
        const orderState = await OrderState.findByPk(id);
        orderState.active = false;
        await orderState.save();
    },
};