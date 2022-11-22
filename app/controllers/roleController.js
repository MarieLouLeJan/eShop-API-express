import roleQuery from '../queries/roleQuery.js';

export default {

    async getAll (req, res) {
        const roles = await roleQuery.getAllRoles();
        res.json({ roles });
    },

    async getOne(req, res){
        const role = await roleQuery.getRoleById(req.params.id);
        res.json({ role })
    },

    async createOne(req, res){
        const { body } = req;
        const newRole = await roleQuery.createRole(body);
        res.json({ newRole });
    },

    async updateOne(req, res){
        const { body } = req;
        const role = await roleQuery.updateRole(req.params.id, body);
        res.json({ role });
    },

    async unactiveOne(req, res){
        const role = await roleQuery.unactiveRole(req.params.id);
        res.json({ role })
    },
}