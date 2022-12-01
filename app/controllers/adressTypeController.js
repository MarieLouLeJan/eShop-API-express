import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/adressTypeQueries.js';

export default {

    async getAll (_, res, next) {
        const adressTypes = await query.getAll();
        if(adressTypes.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ adressTypes });
    },

    async getOne(req, res, next){
        const adressType = await query.getOne(req.params.id);
        if(!adressType) next(new NotFoundError('Non existent data'))
        res.status(200).send({ adressType });
    },

    async createOne(req, res){
        const newAdressType = await query.createOne(req.body)
        res.status(201).send({ newAdressType });
    },

    async updateOnePut(req, res){
        const adressType = await query.getOne(req.params.id);
        if(!adressType) {
            const newAdressType = await query.createOne(req.body);
            res.status(201).send({ newAdressType });
        } else {
            const AT = adressType.get({plain: true})
            for(const i in AT) if(i !== "created_at" && i !== 'id' ) delete (AT[i]); 
            const body = Object.assign({}, AT, req.body)
            await query.updateOne(adressType, body);
            res.status(200).send({ adressType });
        }
    },

    async updateOnePatch(req, res, next){
        const adressType = await query.getOne(req.params.id);
        if(!adressType) next(new NotFoundError('Non existent data'))
        await query.updateOne(adressType, req.body);
        res.status(200).send({ adressType });
    },
    
    async deleteOne(req, res, next){
        const adressType = await query.getOne(req.params.id);
        if(!adressType) next(new NotFoundError('Non existent data'))
        await query.deleteOne(adressType);
        res.status(204).end();
    }
}