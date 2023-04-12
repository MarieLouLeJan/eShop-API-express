import { Order_type_adress } from '../../database/models/index.js';


export default {

    async getAll () {
        return await Order_type_adress.findAll({
            include: ['orders', 'adresses', 'adress_types']
        })
    },

    async getByOrder (id) {
        return await Order_type_adress.findAll({
            where: { order_id: id },
            include: [ 'adress', 'adress_types' ]
        });
    },

    async getOne (body) {
        return Order_type_adress.findAll({
            where: { 
                order_id: body.order_id,
                adress_id: body.adress_id,
                adress_type_id: body.adress_type_id
            }
        })
    },

    async createOne (body) {
        return await Order_type_adress.create(body)
    },


    async deleteOne (orderTypeAdress) {
        await orderTypeAdress.destroy();
    } 
}