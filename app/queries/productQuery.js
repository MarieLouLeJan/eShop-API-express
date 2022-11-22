import { Product } from '../database/models/index.js';

export default {

    async getAllProducts () {
        return await Product.findAll();
    },


    async getProductById (id) {
        return await Product.findByPk(id);
    },

    async createProduct (body) {
        return await Product.create(body)
    },

    async updateProduct (id, body){
        const product = await Product.findByPk(id);
        return await product.update(body)
    },

    async unactiveProduct (id) {
        const product = await productQuery.getProductById(id)
        product.active = false;
        return await product.save();
    },

};