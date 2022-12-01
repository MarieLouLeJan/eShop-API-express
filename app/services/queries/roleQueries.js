import { Role } from '../../database/models/index.js';


export default {

    async getAll () {
        return await Role.findAll();
    },

    async getOne (id) {
        return await Role.findByPk(id);
    },

    async createOne (body) {
        return await Role.create(body)
    },

    async updateOne (role, body) {
        return await role.update(body);
    },

    async deleteOne (role) {
        await role.destroy();
    } 
}