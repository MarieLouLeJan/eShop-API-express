import { Role } from '../database/models/index.js';

export default {

    async getAll (req, res) {
        const roles = await Role.findAll();
        res.status(200).send({ roles });
    },

    async getOne(req, res){
        const role = await await Role.findByPk(req.params.id);
        res.status(200).send({ role });
    },

    async createOne(req, res){
        const newRole = await Role.create(req.body)
        res.status(201).send({ newRole });
    },

    async updateOne(req, res){
        const role = await Role.findByPk(req.params.id);
        if(!role) return res.status(200).send('roleNotFound');
        await role.update(req.body);
        res.status(201).send({ role });
    },

}