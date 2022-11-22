import { Role } from '../database/models/index.js';

export default {

    async getAllRoles () {
        return await Role.findAll();
    },

    async getRoleById (id) {
        return await Role.findByPk(id);
    },

    async createRole (body) {
        return await Role.create(body)
    },

    async updateRole (id, body){
        const role = await Role.findByPk(id);
        return await role.update(body)
    },

    async unactiveRole (id) {
        const role = await Role.findByPk(id);
        role.active = false;
        return await role.update();
    },  
};