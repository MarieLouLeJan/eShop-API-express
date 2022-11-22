import { Product_review } from '../database/models/index.js';


export default {

    async getAllProductReviews () {
        return await Product_review.findAll();
    },


    async createproductReview (body) {
        return await Product_review.create(body)
    },

};