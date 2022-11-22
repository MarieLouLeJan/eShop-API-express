import express from 'express';
const orderProductRouter = express.Router();

import controller from '../controllers/orderProductController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { orderProductChanged, orderProductCreated } from '../services/validations/schemas/orderProduct.js'

orderProductRouter.get('/getAll', CW(controller.getAll));
// orderProductRouter.get('/getOne/:id', param, CW(controller.getOne));
orderProductRouter.post('/createOne', validate(orderProductCreated, 'body'), CW(controller.createOne));
// orderProductRouter.put('/updateOne/:id', param, bodyMaker, validate(orderProductChanged, 'body'), CW(controller.updateOne));
// orderProductRouter.delete('/deleteOne/:id', CW(controller.deleteOne));

export default orderProductRouter;