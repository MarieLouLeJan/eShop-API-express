import { Order_type_adress } from '../database/models/index.js';


export default {

    async getAllOrderTypeAdresses () {
        return await Order_type_adress.findAll();
    },


    async createOrderTypeAdress (body) {
        return await Order_type_adress.create(body)
    },

};
