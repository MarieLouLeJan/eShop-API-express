import express from 'express';
const productRouter = express.Router();

import controller from '../controllers/productController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { productComp, productPart } from '../services/validations/schemas/product.js'

productRouter.get('/getAll', CW(controller.getAll));

productRouter.get('/getOne/:id', param, CW(controller.getOne));

productRouter.post('/createOne', validate(productComp, 'body'), CW(controller.createOne));

productRouter.put('/updateOnePut/:id', param, bodyMaker, validate(productComp, 'body'), CW(controller.updateOnePut));

productRouter.patch('/updateOnePatch/:id', param, bodyMaker, validate(productPart, 'body'), CW(controller.updateOnePatch));

productRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));


export default productRouter;