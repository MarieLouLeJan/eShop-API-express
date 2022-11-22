import categoryQuery from '../queries/categoryQuery.js';

export default {

    async getAll (req, res) {
        const categories = await categoryQuery.getAllCategories();
        res.json({ categories });
    },

    async getOne(req, res){
        const category = await categoryQuery.getCategoryById(req.params.id);
        res.json({ category })
    },

    async createOne(req, res){
        const { body } = req;
        const newCategory = await categoryQuery.createCategory(body);
        res.json({ newCategory });
    },

    async updateOne(req, res){
        const { body } = req;
        const category = await categoryQuery.updateCategory(req.params.id, body);
        res.json({ category });
    },

    async unactiveOne(req, res){
        const category = await categoryQuery.unactiveCategory(req.params.id);
        res.json({ category })
    },
}