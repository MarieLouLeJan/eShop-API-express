import { TVA } from '../database/models/index.js';

export default {

    async getAllTVA () {
        return await TVA.findAll({
            include: 'products'
        });
    },

    async getTVAById (id) {
        return await TVA.findByPk(id);
    },

    async createTVA (body) {
        return await TVA.create(body)
    },

    async updateTVA (id, body){
        const myTVA = await TVA.findByPk(id);
        return await myTVA.update(body)
    },

    async unactiveTVA (id) {
        const TVA = await this.getTVAById(id);
        TVA.active = false;
        return await TVA.update();
    },  
};