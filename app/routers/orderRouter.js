import express from 'express';
const orderRouter = express.Router();

import controller from '../controllers/orderController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { orderChanged, orderCreated } from '../services/validations/schemas/order.js'

orderRouter.get('/getAll', CW(controller.getAll));

orderRouter.get('/getOne/:id', param, CW(controller.getOne));

orderRouter.get('/getByUserId/:id', param, CW(controller.getByUSer));

orderRouter.post('/createOne', validate(orderCreated, 'body'), CW(controller.createOne));

orderRouter.put('/updateOne/:id', param, bodyMaker, validate(orderChanged, 'body'), CW(controller.updateOne));

orderRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));

export default orderRouter;