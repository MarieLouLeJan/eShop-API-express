import { Category, Product } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (_, res, next) {
        const categories = await Category.findAll({
            include: {
                model: Product, as: 'products',
                include: [ 'tva', 'categories', 'product_reviews' ]
            }
        });
        if(categories.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ categories });
    },

    async getOne(req, res, next){
        const category = await Category.findByPk(req.params.id, {
            include: {
                model: Product, as: 'products',
                include: [ 'tva', 'categories', 'product_reviews' ]
            }
        });
        if(!category) next(new NotFoundError('Non existent data'))
        res.status(200).json({ category })
    },

    async createOne(req, res){
        const newCategory = await Category.create(req.body)
        res.status(201).send({ newCategory });
    },

    async updateOnePatch(req, res, next){
        const category = await Category.findByPk(req.params.id);
        if(!category) next(new NotFoundError('Non existent data'))
        await category.update(req.body);
        res.status(201).send({ category });
    },

    async updateOnePut(req, res){
        const category = await Category.findByPk(req.params.id);
        if(!category) {
            const newCategory = await Category.create(req.body);
            res.status(201).send({ newCategory });
        } else {
            const cat = category.get({plain: true})
            for(const i in cat) if(i !== "created_at" && i !== 'id' ) delete (cat[i]); 
            const categoryToSave = Object.assign({}, cat, req.body)
            await category.update(categoryToSave);
            res.status(201).send({ category });
        }
    },

    async deleteOne(req, res, next){
        const category = await Category.findByPk(req.params.id);
        if(!category) next(new NotFoundError('Non existent data'))
        await category.destroy();
        res.status(204).send();
    }

}