import { Product } from '../../database/models/index.js';

export default {

    async getAllAdmin () {
        return await Product.findAll({
            include: [ 'tva', 'categories', 'product_reviews' ]
        });
    },

    async getAllShop () {
        return await Product.findAll({
            include: [ 'tva', 'categories', 'product_reviews' ],
            where: { active: true }
        });
    },

    async getOneAdmin (id) {
        return await Product.findByPk(id, {
            include: [ 'tva', 'categories', 'product_reviews' ]
        });
    },

    async getOneShop (id) {
        return await Product.findByPk({
            include: [ 'tva', 'categories', 'product_reviews' ],
            where: { 
                active: true,
                id: id
            }
        });
    },

    async createOne (body) {
        return await Product.create(body)
    },

    async updateOne (product, body) {
        return await product.update(body);
    },

    async deleteOne (product) {
        await product.destroy();
    } 
}