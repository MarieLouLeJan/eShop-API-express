import { Product_review, Adress, Product, User } from '../../database/models/index.js';


export default {

    async getAll () {
        return await Product_review.findAll({
            include: 
            [{
                model: Product
            },{
                model: User                
            }],
        });
    },

    async getAllByProduct (id) {
        return await Product_review.findAll({
            include: 
            [{
                model: Product
            },{
                model: User                
            }],
            where: { product_id: id }
        }); 
    },

    async getOne (body) {
        return await Product_review.findAll({
            include: 
            [{
                model: Product
            },{
                model: User                
            }],
            where: { 
                product_id: body.product_id,
                user_id: body.user_id
            }
        }); 
    },

    async getByUser (id) {
        return await Product_review.findAll({
            where: {
                user_id: id
            }
        });
    },

    async createOne (body) {
        return await Product_review.create(body)
    },

    async updateOne (productReview, body) {
        return await productReview.update(body);
    },

    async deleteOne (productReview) {
        await productReview.destroy();
    } 
}