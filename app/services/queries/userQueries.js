import { User } from '../../database/models/index.js';


export default {

    async getAll () {
        return await User.findAll({
            include: ['roles', 'adresses']
        });
    },

    async getOne (id) {
        return await User.findByPk(id, {
            include: ['roles', 'adresses']
        });
    },

    async createOne (body) {
        return await User.create(body)
    },

    async updateOne (user, body) {
        return await user.update(body);
    },

    async deleteOne (user) {
        await user.destroy();
    } 
}