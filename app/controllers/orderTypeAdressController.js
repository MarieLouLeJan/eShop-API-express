import { Order_type_adress } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (req, res, next) {
        const orderTypeAdresses = await Order_type_adress.findAll({
            include: ['orders', 'adresses', 'adress_types']
        });
        if(orderTypeAdresses.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ orderTypeAdresses });
    },

    async getByOrder (req, res, next) {
        const orderTypeAdresses = await Order_type_adress.findAll({
            where: { order_id: req.params.id }
        });
        if(orderTypeAdresses.length === 0) next(new NotFoundError('Non existent data'));
        res.status(200).send(orderTypeAdresses)
    },

    async createOne(req, res){
        const newOrderTypeAdress = await Order_type_adress.create(req.body)
        res.status(201).send({ newOrderTypeAdress });
    },

    async deleteOne(req, res, next){
        const orderAdressTypeToDelete = await Order_type_adress.findAll({
            where: { 
                order_id: req.body.order_id,
                adress_id: req.body.adress_id,
                adress_type_id: req.body.adress_type_id
            }
        })
        if(orderAdressTypeToDelete.length === 0) next(new NotFoundError('Non existent data'));
        for(const i of orderAdressTypeToDelete) { await i.destroy() }
        res.status(204).send();
    }
}