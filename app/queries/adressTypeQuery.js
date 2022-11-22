import { AdressType } from '../database/models/index.js';


export default {

    async getAllAdressTypes () {
        return await AdressType.findAll();
    },


    async getAdressTypeById (id) {
        return await AdressType.findByPk(id);
    },


    async createAdressType (body) {
        return await AdressType.create(body)
    },

    async updateAdressType (id, body){
        const adressType = await AdressType.findByPk(id);
        console.log(body)
        return await adressType.update(body);
    },

    async unactiveAdressType (id) {
        const adress = await AdressType.findByPk(id);
        adress.active = false;
        return await adress.save();
    },
};