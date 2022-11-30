import { Adress } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';


export default {

    async getAll (_, res, next) {
        const adresses = await Adress.findAll({
            include: "users"
        });
        if(adresses.length === 0) next(new NotFoundError('data was not found'))
        myCache.set("getAll", adresses)
        res.status(200).send({adresses });
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

    async updateOnePatch(req, res, next){
        const adress = await Adress.findByPk(req.params.id);
        if(!adress) next(new NotFoundError('Non existent data'))
        await adress.update(req.body);
        res.status(200).send({ adress });
    },

    async updateOnePut(req, res){
        const adress = await Adress.findByPk(req.params.id);
        if(!adress) {
            const newAdress = await Adress.create(req.body);
            res.status(201).send({ newAdress });
        } else {
            const ad = adress.get({plain: true})
            for(const i in ad) if(i !== "created_at" && i !== 'id' ) delete (ad[i]); 
            const adressToSave = Object.assign({}, ad, req.body)
            await adress.update(adressToSave);
            res.status(200).send({ adress });
        }
    },
    
    async deleteOne(req, res, next){
        const adress = await Adress.findByPk(req.params.id);
        if(!adress) next(new NotFoundError('Non existent data'))
        await adress.destroy();
        res.status(204).send();
    }
}