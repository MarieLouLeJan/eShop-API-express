import adressTypeQuery from '../queries/adressTypeQuery.js';

export default {

    async getAll (req, res) {
        const adressTypes = await adressTypeQuery.getAllAdressTypes();
        res.json({ adressTypes });
    },

    async getOne(req, res){
        const adressType = await adressTypeQuery.getAdressTypeById(req.params.id);
        res.json({ adressType })
    },

    async createOne(req, res){
        const { body } = req;
        const newAdressType = await adressTypeQuery.createAdressType(body);
        res.json({ newAdressType });
    },

    async updateOne(req, res){
        const { body } = req;
        const id = parseInt(req.params.id)
        const adressType = await adressTypeQuery.updateAdressType(id, body);
        res.json({ adressType });
    },

    async unactiveOne(req, res){
        const adressType = await adressTypeQuery.unactiveAdressType(req.params.id);
        res.json({ adressType })
    },
}