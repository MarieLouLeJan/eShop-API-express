import { Product_review } from '../database/models/index.js';

export default {

    async getAll (req, res) {
        const productReviews = await Product_review.findAll();
        res.status(200).send({ productReviews });
    },

    async createOne(req, res){
        const newProductReview = await Product_review.create(req.body);
        res.status(201).send({ newProductReview });
    },

}