import adressQuery from '../queries/adressQuery.js';

export default {

    async getAll (req, res) {
        const adresses = await adressQuery.getAllAdresses();
        res.json({ adresses });
    },

    async getOne(req, res){
        const adress = await adressQuery.getAdressById(req.params.id);
        res.json({ adress })
    },

    async createOne(req, res){
        const { body } = req;
        const newAdress = await adressQuery.createAdress(body);
        res.json({ newAdress });
    },

    async updateOne(req, res){
        const { body } = req;
        const adress = await adressQuery.updateAdress(req.params.id, body);
        res.json({ adress });
    },

    async unactiveOne(req, res){
        const adress = await adressQuery.unactiveAdress(req.params.id);
        res.json({ adress })
    },
}