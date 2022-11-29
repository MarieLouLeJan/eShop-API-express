import { Role } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (_, res, next) {
        const roles = await Role.findAll();
        if(roles.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ roles });
    },

    async getOne(req, res, next){
        const role = await Role.findByPk(req.params.id);
        if(!role) next(new NotFoundError('Non existent data'))
        res.status(200).send({ role });
    },

    async createOne(req, res){
        const newRole = await Role.create(req.body)
        res.status(201).send({ newRole });
    },

    async updateOne(req, res, next){
        const role = await Role.findByPk(req.params.id);
        if(!role) next(new NotFoundError('Non existent data'))
        await role.update(req.body);
        res.status(201).send({ role });
    },

    async deleteOne(req, res, next){
        const role = await Role.findByPk(req.params.id);
        if(!role) next(new NotFoundError('Non existent data'))
        await role.destroy();
        res.status(204).send();
    }

}