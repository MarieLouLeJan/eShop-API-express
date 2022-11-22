import { Category } from '../database/models/index.js';


export default {

    async getAllCategories () {
        return await Category.findAll();
    },


    async getCategoryById (id) {
        return await Category.findByPk(id);
    },


    async createCategory (body) {
        return await Category.create(body)
    },

    async updateCategory (id, body){
        const category = await Category.findByPk(id);
        return await category.update(body);
    },

    async unactiveCategory (id) {
        const category = await Category.findByPk(id);
        category.active = false;
        return await category.save();
    },
};