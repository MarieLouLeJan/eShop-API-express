import { AdressType } from '../database/models/index.js';

export default {

    async getAll (req, res) {
        const adressTypes = await AdressType.findAll();
        res.status(200).send({ adressTypes });
    },

    async getOne(req, res){
        const adressType = await await AdressType.findByPk(req.params.id);
        res.status(200).send({ adressType });
    },

    async createOne(req, res){
        const newAdressType = await AdressType.create(req.body)
        res.status(201).send({ newAdressType });
    
    },

    async updateOne(req, res){
        const adressType = await AdressType.findByPk(req.params.id);
        if(!adressType) return res.status(200).send('adressTypeNotFound');
        await adressType.update(req.body);
        res.status(201).send({ adressType });
    },

}