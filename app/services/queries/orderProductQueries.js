import { Order_product, Product } from '../../database/models/index.js';

export default {

    async getAll () {
        return await Order_product.findAll({
            include: {
                model: Product
            }
        });
    },

    async getByOrder (id) {
        return await Order_product.findAll({
            where: { order_id: id },
            include: {
                model: Product
            }
        }); 
    },

    async getOne (body) {
        return await Order_product.findAll({
            where: { 
                order_id: body.order_id,
                product_id: body.product_id
            },
        })
    },

    async createOne (body) {
        return await Order_product.create(body)
    },

    async updateOne (orderProduct, body) {
        return await orderProduct.update(body);
    },

    async deleteOne (orderProduct) {
        await orderProduct.destroy();
    } 
}