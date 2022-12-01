import { Adress } from '../../database/models/index.js';


export default {

    async getAll () {
        return await Adress.findAll({
            include: "users"
        });
    },

    async getOne (id) {
        return await Adress.findByPk(id, {
            include: "users"
        });
    },

    async getByUser (id) {
        return await Adress.findAll({
            where: {
                user_id: id
            }
        });
    },

    async createOne (body) {
        return await Adress.create(body)
    },

    async updateOne (adress, body) {
        return await adress.update(body);
    },

    async deleteOne (adress) {
        await adress.destroy();
    } 
}