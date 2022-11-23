import { TVA } from '../database/models/index.js';

export default {

    async getAll (req, res) {
        const TVAs = await TVA.findAll();
        res.status(200).send({ TVAs });
    },

    async getOne(req, res){
        const TVA = await TVA.findByPk(req.params.id);
        res.status(200).send({ TVA });
    },

    async createOne(req, res){
        const newTVA = await TVA.create(req.body);
        res.status(201).send({ newTVA });
    },

    async updateOne(req, res){
        const TVA = await TVA.findByPk(req.paramsid);
        if(!TVA) return res.status(200).send('TVANotFound');

        await TVA.update(req.body)
        res.status(201).send({ TVA });
    },

}