import { Adress } from '../database/models/index.js';


export default {

    async getAllAdresses () {
        return await Adress.findAll();
    },


    async getAdressById (id) {
        return await Adress.findByPk(id);
    },


    async createAdress (body) {
        return await Adress.create(body)
    },

    async updateAdress (id, body){
        const adress = await Adress.findByPk(id);
        return await adress.update(body);
    },

    async unactiveAdress (id) {
        const adress = await Adress.findByPk(id);
        adress.active = false;
        return await adress.save();
    },
};