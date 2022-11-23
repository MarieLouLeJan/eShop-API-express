import express from 'express';
const orderProductRouter = express.Router();

import controller from '../controllers/orderProductController.js';

import CW from '../helpers/controllerWrapper.js';

import validate from '../services/validations/validate.js';
import { orderProductCreated } from '../services/validations/schemas/orderProduct.js'

orderProductRouter.get('/getAll', CW(controller.getAll));

orderProductRouter.post('/createOne', validate(orderProductCreated, 'body'), CW(controller.createOne));

export default orderProductRouter;