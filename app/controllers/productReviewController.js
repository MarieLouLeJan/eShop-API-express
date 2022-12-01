import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/productReviewQueries.js';
import UnauthorizedError from '../helpers/UnauthorizedError.js';

export default {

    async getAll (req, res, next) {
        const productReviews = await query.getAll();
        if(productReviews.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ productReviews });
    },

    async getAllByProduct (req, res, next) {
        const productReviews = await query.getAllByProduct(); 
        if(productReviews.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ productReviews })
    },

    async getOne (req, res, next) {
        const productReviews = await query.getOne(req.body); 
        if(productReviews.length === 0) next(new NotFoundError('Non existent data'));
        const productReview = productReviews[0];
        res.status(200).send({ productReview })
    },

    async updateOne(req, res, next) {
        const productReviews = await query.getOne(req.body); 
        if(productReviews.length === 0) next(new NotFoundError('Non existent data'));
        const productReview = productReviews[0];
        await query.update(productReview, req.body);
        res.status(201).send({ productReview })
    },

    async createOne(req, res, next){
        if(req.body.user_id !== req.token.user.id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        const newProductReview = await query.createOne(req.body);
        res.status(201).send({ newProductReview });
    },

    async deleteOne(req, res, next){
        const productReviewToDelete = await query.getOne(req.body)
        if(productReviewToDelete.length === 0) next(new NotFoundError('Non existent data'));
        for(const i of productReviewToDelete) { await query.deleteOne(i) }
        res.status(204).end();
    }

}