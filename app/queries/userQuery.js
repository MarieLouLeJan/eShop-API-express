import { User } from '../database/models/index.js';

export default {

    async getAllUsers () {
        return await User.findAll();
    },

    async getUserById (id) {
        return await User.findByPk(id);
    },

    async createUser (body) {
        return await User.create(body)
    },

    async updateUser (id, body){
        const user = await User.findByPk(id);
        return await user.update(body)
    },

    async unactiveUser (id) {
        const user = await this.getUserById(id);
        user.active = false;
        return await user.update();
    },  
};