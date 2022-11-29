import { Product_review, Product, User } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (req, res, next) {
        const productReviews = await Product_review.findAll({
            include: 
            [{
                model: Product
            },{
                model: User                
            }],
        });
        if(productReviews.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ productReviews });
    },

    async getAllByProduct (req, res, next) {
        const productReviews = await Product_review.findAll({
            include: 
            [{
                model: Product
            },{
                model: User                
            }],
            where: { product_id: req.body.product_id }
        }); 
        if(productReviews.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ productReviews })
    },

    async getOne (req, res, next) {
        const productReviews = await Product_review.findAll({
            include: 
            [{
                model: Product
            },{
                model: User                
            }],
            where: { 
                product_id: req.body.product_id,
                user_id: req.body.user_id
            }
        }); 
        if(productReviews.length === 0) next(new NotFoundError('Non existent data'));
        const productReview = productReviews[0];
        res.status(200).send({ productReview })
    },

    async updateOne(req, res, next) {
        const productReviews = await Product_review.findAll({
            include: 
            [{
                model: Product
            },{
                model: User                
            }],
            where: { 
                product_id: req.body.product_id,
                user_id: req.body.user_id
            }
        }); 
        if(productReviews.length === 0) next(new NotFoundError('Non existent data'));
        const productReview = productReviews[0];
        await productReview.update(req.body);
        res.status(201).send({ productReview })
    },

    async createOne(req, res){
        const newProductReview = await Product_review.create(req.body);
        res.status(201).send({ newProductReview });
    },

    async deleteOne(req, res, next){
        const productReviewToDelete = await Product_review.findAll({
            where: { 
                product_id: req.body.product_id,
                user_id: req.body.user_id,
            }
        })
        if(productReviewToDelete.length === 0) next(new NotFoundError('Non existent data'));
        for(const i of productReviewToDelete) { await i.destroy() }
        res.status(204).send();
    }

}