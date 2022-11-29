import { Adress } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (_, res, next) {
        const adresses = await Adress.findAll({
            include: "users"
        });
        if(adresses.length === 0) next(new NotFoundError('data was not found'))
        res.status(200).send({ adresses });
    },

    async getOne(req, res, next){
        const adress = await Adress.findByPk(req.params.id, {
            include: "users"
        });
        if(!adress) next(new NotFoundError('Non existent data'))
        res.status(200).json({ adress })
    },

    async getByUser(req, res, next){
        const adresses = await Adress.findAll({
            where: {
                user_id: req.params.id
            }
        });
        if(adresses.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).json({ adresses })
    },

    async createOne(req, res){
        const newAdress = await Adress.create(req.body)
        res.status(201).send({ newAdress });
    },

    async updateOne(req, res, next){
        const adress = await Adress.findByPk(req.params.id);
        if(!adress) next(new NotFoundError('Non existent data'))
        await adress.update(req.body);
        res.status(201).send({ adress });
    },
    
    async deleteOne(req, res, next){
        const adress = await Adress.findByPk(req.params.id);
        if(!adress) next(new NotFoundError('Non existent data'))
        await adress.destroy();
        res.status(204).send();
    }
}