import { Product } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/productQueries.js';

export default {

    async getAllAdmin (req, res, next) {
        const products = await query.getAll();
        if(products.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ products });
    },

    async getAllShop (req, res, next) {
        const products = await query.getAllShop();
        if(products.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ products });
    },

    async getOneAdmin(req, res, next){
        const product = await query.getOneAdmin(req.params.id);
        if(!product) next(new NotFoundError('Non existent data'))
        res.status(200).send({ product });
    },

    async getOneShop(req, res, next){
        const product = await query.getOneShop(req.params.id);
        if(!product) next(new NotFoundError('Non existent data'))
        res.status(200).send({ product });
    },

    async createOne(req, res){
        const newProduct = await query.create(req.body)
        res.status(201).send({ newProduct });
    },

    async updateOnePatch(req, res, next){
        const product = await query.getOne(req.params.id);
        if(!product) next(new NotFoundError('Non existent data'))
        await query.updateOne(product, req.body)
        res.status(201).send({ product });
    },

    async updateOnePut(req, res){
        const product = await query.getOne(req.params.id);
        if(!product) {
            const newProduct = await query.createOne(req.body);
            res.status(201).send({ newProduct });
        } else {
            await query.updateOne(product, req.body);
            res.status(201).send({ product });
        }
    },

    async deleteOne(req, res, next){
        const product = await query.getOne(req.params.id);
        if(!product) next(new NotFoundError('Non existent data'))
        await query.deleteOne(product);
        res.status(204).end();
    }
}