import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/roleQueries.js';


export default {

    async getAll (_, res, next) {
        const roles = await query.getAll();
        if(roles.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ roles });
    },

    async getOne(req, res, next){
        const role = await query.getOne(req.params.id);
        if(!role) next(new NotFoundError('Non existent data'))
        res.status(200).send({ role });
    },

    async createOne(req, res){
        const newRole = await query.createOne(req.body)
        res.status(201).send({ newRole });
    },

    async updateOnePatch(req, res, next){
        const data = await query.getOne(req.params.id);
        if(!data) next(new NotFoundError('Non existent data'))
        await query.update(data, req.body);
        res.status(201).send({ data });
    },

    async updateOnePut(req, res){
        const data = await query.getOne(req.params.id);
        if(!data) {
            const data = query.createOne(req.body);
            res.status(201).send({ data });
        } else {
            await query.updateOne(data, req.body);
            res.status(201).send({ data });
        }
    },

    async deleteOne(req, res, next){
        const role = await query.getOne(req.params.id);
        if(!role) next(new NotFoundError('Non existent data'))
        await query.deleteOne(role);
        res.status(204).end();
    }

}