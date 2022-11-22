import productReviewQuery from '../queries/productReviewQuery.js';

export default {

    async getAll (req, res) {
        const productReviews = await productReviewQuery.getAllProductReviews();
        res.json({ productReviews });
    },

    async createOne(req, res){
        const { body } = req;
        const newProductReview = await productReviewQuery.createproductReview(body);
        res.json({ newProductReview });
    },

}