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
        const role = await query.getOne(req.params.id);
        if(!role) next(new NotFoundError('Non existent data'))
        await query.update(role, req.body);
        res.status(201).send({ role });
    },

    async updateOnePut(req, res){
        const role = await query.getOne(req.params.id);
        if(!role) {
            const newRole = query.createOne(req.body);
            res.status(201).send({ newRole });
        } else {
            const ro = role.get({plain: true})
            for(const i in ro) if(i !== "created_at" && i !== 'id' ) delete (ro[i]); 
            const body = Object.assign({}, ro, req.body)
            await query.updateOne(role, body);
            res.status(201).send({ role });
        }
    },

    async deleteOne(req, res, next){
        const role = await query.getOne(req.params.id);
        if(!role) next(new NotFoundError('Non existent data'))
        await query.deleteOne(role);
        res.status(204).end();
    }

}