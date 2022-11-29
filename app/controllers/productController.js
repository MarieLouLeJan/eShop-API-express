import { Product } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (req, res, next) {
        const products = await Product.findAll({
            include: [ 'tva', 'categories', 'product_reviews' ]
        });
        if(products.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ products });
    },

    async getOne(req, res, next){
        const product = await Product.findByPk(req.params.id, {
            include: [ 'tva', 'categories', 'product_reviews' ]
        });
        if(!product) next(new NotFoundError('Non existent data'))
        res.status(200).send({ product });
    },

    async createOne(req, res){
        const newProduct = await Product.create(req.body)
        res.status(201).send({ newProduct });
    },

    async updateOne(req, res, next){
        const product = await Product.findByPk(req.params.id);
        if(!product) next(new NotFoundError('Non existent data'))
        await product.update(req.body)
        res.status(201).send({ product });
    },

    async deleteOne(req, res, next){
        const product = await Product.findByPk(req.params.id);
        if(!product) next(new NotFoundError('Non existent data'))
        await product.destroy();
        res.status(204).send();
    }
}