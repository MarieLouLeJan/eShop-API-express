import { Order_product } from '../database/models/index.js';


export default {

    async getAllOrderProducts () {
        return await Order_product.findAll();
    },

    // async getOrderProductById (id) {
    //     return await OrderProduct.findByPk(id);
    // },

    async createOrderProduct (body) {
        return await Order_product.create(body)
    },

    // async updateOrderProduct (id, body){
    //     const orderProduct = await Order_product.findByPk(id);
    //     return await orderProduct.update(body);
    // },

    // async deleteOrderProduct (id) {
    //     const orderProduct = await Order_product.findByPk(id);
    //     orderProduct.destroy();
    // },
};