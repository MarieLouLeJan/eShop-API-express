import { AdressType } from '../../database/models/index.js';

export default {

    async getAll () {
        return await AdressType.findAll();
    },

    async getOne (id) {
        return await AdressType.findByPk(id);
    },

    async createOne (body) {
        return await AdressType.create(body)
    },

    async updateOne (adressType, body) {
        return await adressType.update(body);
    },

    async deleteOne (adressType) {
        await adressType.destroy();
    } 
}