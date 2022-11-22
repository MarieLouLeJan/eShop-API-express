import productQuery from '../queries/productQuery.js';

export default {

    async getAll (req, res) {
        const products = await productQuery.getAllProducts();
        res.json({ products });
    },

    async getOne(req, res){
        const product = await productQuery.getProductById(req.params.id);
        res.json({ product })
    },

    async createOne(req, res){
        const { body } = req;
        const newProduct = await productQuery.createProduct(body);
        res.json({ newProduct });
    },

    async updateOne(req, res){
        const { body } = req;
        const product = await productQuery.updateProduct(req.params.id, body);
        res.json({ product });
    },

    async unactiveOne(req, res){
        const product = await productQuery.unactiveProduct(req.params.id);
        res.json({ product })
    },
}