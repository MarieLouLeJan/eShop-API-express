import express from 'express';
const orderStateRouter = express.Router();

import controller from '../controllers/orderStateController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { orderStateChanged, orderStateCreated } from '../services/validations/schemas/orderState.js'

orderStateRouter.get('/getAll', CW(controller.getAll));

orderStateRouter.get('/getOne/:id', param, CW(controller.getOne));

orderStateRouter.post('/createOne', validate(orderStateCreated, 'body'), CW(controller.createOne));

orderStateRouter.put('/updateOne/:id', param, bodyMaker, validate(orderStateChanged, 'body'), CW(controller.updateOne));

export default orderStateRouter;