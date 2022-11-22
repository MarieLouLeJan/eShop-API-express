import TVAQuery from '../queries/TVAQuery.js';

export default {

    async getAll (req, res) {
        const TVAs = await TVAQuery.getAllTVA();
        res.json({ TVAs });
    },

    async getOne(req, res){
        console.log("ICI");
        const TVA = await TVAQuery.getTVAById(req.params.id);
        res.json({ TVA })
    },

    async createOne(req, res){
        const { body } = req;
        const newTVA = await TVAQuery.createTVA(body);
        res.json({ newTVA });
    },

    async updateOne(req, res){
        const { body } = req;
        const TVA = await TVAQuery.updateTVA(req.params.id, body);
        res.json({ TVA });
    },

    async unactiveOne(req, res){
        const TVA = await TVAQuery.unactiveTVA(req.params.id);
        res.json({ TVA })
    },
}