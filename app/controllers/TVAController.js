import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/TVAQueries.js';

export default {

    async getAll (_, res, next) {
        const TVAs = await query.getAll();
        if(TVAs.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ TVAs });
    },

    async getOne(req, res, next){
        const tva = await query.getOne(req.params.id);
        if(!tva) next(new NotFoundError('Non existent data'))
        res.status(200).send({ tva });
    },

    async createOne(req, res){
        const newTVA = await query.createOne(req.body);
        res.status(201).send({ newTVA });
    },

    async updateOnePatch(req, res, next){
        const tva = await query.getOne(req.params.id);
        if(!tva) next(new NotFoundError('Non existent data'))
        await query.updateOne(tva, req.body)
        res.status(201).send({ tva });
    },

    async updateOnePut(req, res){
        const tva = await query.getOne(req.params.id);
        if(!tva) {
            const newTVA = await query.createOne(req.body);
            res.status(201).send({ newTVA });
        } else {
            await query.updateOne(tva, req.body);
            res.status(201).send({ tva });
        }
    },

    async deleteOne(req, res, next){
        const TVAtoDelete = await query.getOne(req.params.id);
        if(!TVAtoDelete) next(new NotFoundError('Non existent data'))
        await query.deleteOne(TVAtoDelete);
        res.status(204).end();
    }

}