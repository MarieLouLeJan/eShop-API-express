import { AdressType } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (_, res, next) {
        const adressTypes = await AdressType.findAll();
        if(adressTypes.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ adressTypes });
    },

    async getOne(req, res, next){
        const adressType = await AdressType.findByPk(req.params.id);
        if(!adressType) next(new NotFoundError('Non existent data'))
        res.status(200).send({ adressType });
    },

    async createOne(req, res){
        const newAdressType = await AdressType.create(req.body)
        res.status(201).send({ newAdressType });
    },

    async updateOnePut(req, res){
        const adressType = await AdressType.findByPk(req.params.id);
        if(!adressType) {
            const newAdressType = await AdressType.create(req.body);
            res.status(201).send({ newAdressType });
        } else {
            const AT = adressType.get({plain: true})
            for(const i in AT) if(i !== "created_at" && i !== 'id' ) delete (AT[i]); 
            const adressTypeToSave = Object.assign({}, AT, req.body)
            await adressType.update(adressTypeToSave);
            res.status(200).send({ adressType });
        }
    },

    async updateOnePatch(req, res, next){
        const adressType = await AdressType.findByPk(req.params.id);
        if(!adressType) next(new NotFoundError('Non existent data'))
        await adressType.update(req.body);
        res.status(200).send({ adressType });
    },
    
    async deleteOne(req, res, next){
        const adressType = await AdressType.findByPk(req.params.id);
        if(!adressType) next(new NotFoundError('Non existent data'))
        await adressType.destroy();
        res.status(204).send();
    }
}