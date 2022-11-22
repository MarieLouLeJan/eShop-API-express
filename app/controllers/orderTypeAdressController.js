import orderTypeAdressQuery from '../queries/orderTypeAdressQuery.js';

export default {

    async getAll (req, res) {
        const order_type_adresses = await orderTypeAdressQuery.getAllOrderTypeAdresses();
        res.json({ order_type_adresses });
    },

    // async getOne(req, res){
    //     const adress = await adressQuery.getAdressById(req.params.id);
    //     res.json({ adress })
    // },

    async createOne(req, res){
        const { body } = req;
        const newOrderTypeAdress = await orderTypeAdressQuery.createOrderTypeAdress(body);
        res.json({ newOrderTypeAdress });
    },

    // async updateOne(req, res){
    //     const { body } = req;
    //     const adress = await adressQuery.updateAdress(req.params.id, body);
    //     res.json({ adress });
    // },

    // async unactiveOne(req, res){
    //     const adress = await adressQuery.unactiveAdress(req.params.id);
    //     res.json({ adress })
    // },
}