import { Category, Product } from '../../database/models/index.js';

export default {

    async getAllAdmin () {
        return await Category.findAll({
            include: {
                model: Product, as: 'products',
                include: [ 'tva', 'product_reviews' ]
            },
        });
    },

    async getAllShop () {
        return await Category.findAll({
            include: {
                model: Product, as: 'products',
                include: [ 'tva', 'categories', 'product_reviews' ],
                where: { active : true}
            },
            where: {
                active: true
            }
        });
    },

    async getOneAdmin (id) {
        return await Category.findByPk(id, {
            include: {
                model: Product,as :'products',
                include: [ 'tva', 'categories', 'product_reviews' ]
            },
        });
    },

    async getOneShop (id) {
        return await Category.findAll({
            include: {
                model: Product,as :'products',
                include: [ 'tva', 'categories', 'product_reviews' ]
            },
            where: {
                active: true,
                id: id
            }
        });
    },

    async createOne (body) {
        return await Category.create(body)
    },

    async updateOne (category, body) {
        return await category.update(body);
    },

    async deleteOne (category) {
        await category.destroy();
    } 
}