import express from 'express';
const productRouter = express.Router();

import controller from '../controllers/productController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { productComp, productPart } from '../services/validations/schemas/product.js';
import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';
import authUser from '../services/middlewares/authUser.js';

productRouter.get('/getAllAdmin', auth, authAdmin, CW(controller.getAllAdmin));

productRouter.get('/getAllShop', CW(controller.getAllShop));

productRouter.get('/getOneAdmin/:id', param, auth, authAdmin, CW(controller.getOneAdmin));

productRouter.get('/getOneShop/:id', param, CW(controller.getOneShop));

productRouter.post('/createOne', auth, authAdmin, validate(productComp, 'body'), CW(controller.createOne));

productRouter.put('/updateOnePut/:id', param, bodyMaker, auth, authAdmin, validate(productComp, 'body'), CW(controller.updateOnePut));

productRouter.patch('/updateOnePatch/:id', param, bodyMaker, auth, authAdmin, validate(productPart, 'body'), CW(controller.updateOnePatch));

productRouter.delete('/deleteOne/:id', param, auth, authAdmin, CW(controller.deleteOne));


export default productRouter;