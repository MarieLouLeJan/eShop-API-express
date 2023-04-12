import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/orderStateQueries.js';

export default {

    async getAll (req, res, next) {
        const data = await query.getAll();
        console.log('here')
        console.log(data)
        if(data.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ data });
    },

    async getOne(req, res, next){
        const data = await query.getOne(req.params.id);
        if(!data) next(new NotFoundError('Non existent data'))
        res.status(200).send({ data });
    },

    async createOne(req, res){
        const data = await query.createOne(req.body);
        res.status(201).send({ data });
    },

    async updateOnePatch(req, res, next){
        const data = await query.getOne(req.params.id);
        if(!data) next(new NotFoundError('Non existent data'))
        await query.updateOne(data, req.body);
        res.status(201).send({ data });
    },

    async updateOnePut(req, res){
        const data = await query.getOne(req.params.id);
        if(!data) {
            const data = await query.createOne(req.body);
            res.status(201).send({ data });
        } else {
            await query.updateOne(data, req.body);
            res.status(201).send({ data });
        }
    },

    async deleteOne(req, res, next){
        const orderState = await query.getOne(req.params.id);
        if(!orderState) next(new NotFoundError('Non existent data'))
        await query.deleteOne();
        res.status(204).end();
    }
}