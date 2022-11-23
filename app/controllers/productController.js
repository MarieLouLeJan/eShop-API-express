import { Product, Product_review } from '../database/models/index.js';

export default {

    async getAll (req, res) {
        const products = await Product.findAll({
            include: [ 'tva', 'categories' ]
        });
        res.status(200).send({ products });
    },

    async getOne(req, res){
        const product = await Product.findByPk(req.params.id, {
            include: [ 'tva', 'categories' ]
        });
        const reviews = await Product_review.findAll({
            where: { product_id: req.params.id}
        })
        res.status(200).send({ product, reviews });
    },

    async createOne(req, res){
        const newProduct = await Product.create(req.body)
        res.status(201).send({ newProduct });
    },

    async updateOne(req, res){
        const product = await Product.findByPk(req.params.id);
        if(!product) return res.status(200).send('productNotFound');
        await product.update(req.body)
        res.status(201).send({ product });
    },
}