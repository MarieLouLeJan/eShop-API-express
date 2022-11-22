import userQuery from '../queries/userQuery.js';

export default {

    async getAll (req, res) {
        const users = await userQuery.getAllUsers();
        res.json({ users });
    },

    async getOne(req, res){
        console.log("ICI");
        const user = await userQuery.getUserById(req.params.id);
        res.json({ user })
    },

    async createOne(req, res){
        const { body } = req;
        const newUser = await userQuery.createUser(body);
        res.json({ newUser });
    },

    async updateOne(req, res){
        const { body } = req;
        const user = await userQuery.updateUser(req.params.id, body);
        res.json({ user });
    },

    async unactiveOne(req, res){
        const user = await userQuery.unactiveUser(req.params.id);
        res.json({ user })
    },
}