import query from '../services/queries/categoryQueries.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAllAdmin (_, res, next) {
        const categories = await query.getAllAdmin();
        if(categories.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ categories });
    },

    async getAllShop (_, res, next) {
        const categories = await query.getAllShop();
        if(categories.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ categories });
    },

    async getOneShop(req, res, next){
        const categoryArr = await query.getOneShop(req.params.id);
        if(categoryArr.length === 0) next(new NotFoundError('Non existent data'));
        const category = categoryArr[0]
        res.status(200).json({ category })
    },

    async getOneAdmin(req, res, next){
        const category = await query.getOneAdmin(req.params.id);
        if(!category) next(new NotFoundError('Non existent data'));
        res.status(200).json({ category })
    },

    async createOne(req, res){
        const newCategory = await query.createOne(req.body)
        res.status(201).send({ newCategory });
    },

    async updateOnePatch(req, res, next){
        const category = await query.getOne(req.params.id);
        if(!category) next(new NotFoundError('Non existent data'))
        await query.updateOne(category, req.body);
        res.status(201).send({ category });
    },

    async updateOnePut(req, res){
        const category = await query.getOne(req.params.id);
        if(!category) {
            const newCategory = query.createOne(req.body);
            res.status(201).send({ newCategory });
        } else {
            await query.updateOne(category, req.body);
            res.status(201).send({ category });
        }
    },

    async deleteOne(req, res, next){
        const category = await query.getOne(req.params.id);
        if(!category) next(new NotFoundError('Non existent data'))
        await query.deleteOne();
        res.status(204).end();
    }

}