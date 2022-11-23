import { Adress } from '../database/models/index.js';


export default {

    async getAll (req, res) {
        const adresses = await Adress.findAll();
        res.status(200).send({ adresses });
    },

    async getOne(req, res){
        const adress = await Adress.findByPk(req.params.id);
        res.status(200).json({ adress })
    },

    async createOne(req, res){
        const newAdress = await Adress.create(req.body)
        res.status(201).send({ newAdress });
    },

    async updateOne(req, res){
        const adress = await Adress.findByPk(req.params.id);
        if(!adress) return res.status(200).send('adressNotFound');
        await adress.update(req.body);
        res.status(201).send({ adress });
    },
}