import { Category, Product } from '../database/models/index.js';

export default {

    async getAll (req, res) {
        const categories = await Category.findAll();
        res.status(200).send({ categories });
    },

    async getOne(req, res){
        const category = await await Category.findByPk(req.params.id);
        const products = await await Product.findAll({
            where: { category_id: req.params.id },
            include: [
                'tva',
                'categories'
            ]
        });
        res.status(200).json({ category, products })
    },

    async createOne(req, res){
        const newCategory = await Category.create(req.body)
        res.status(201).send({ newCategory });
    },

    async updateOne(req, res){
        const category = await Category.findByPk(req.params.id);
        if(!category) return res.status(200).send('categoryNotFound');
        await category.update(req.body);
        res.status(201).send({ category });
    },

}