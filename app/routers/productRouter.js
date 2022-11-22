import express from 'express';
const productRouter = express.Router();

import controller from '../controllers/productController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { productChanged, productCreated } from '../services/validations/schemas/product.js'

productRouter.get('/getAll', CW(controller.getAll));
productRouter.get('/getOne/:id', param, CW(controller.getOne));
productRouter.post('/createOne', validate(productCreated, 'body'), CW(controller.createOne));
productRouter.put('/updateOne/:id', param, bodyMaker, validate(productChanged, 'body'), CW(controller.updateOne));
productRouter.delete('/deleteOne/:id', CW(controller.unactiveOne));

export default productRouter;