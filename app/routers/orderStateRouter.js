import express from 'express';
const orderStateRouter = express.Router();

import controller from '../controllers/orderStateController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { orderStatePart, orderStateComp } from '../services/validations/schemas/orderState.js'

orderStateRouter.get('/getAll', CW(controller.getAll));

orderStateRouter.get('/getOne/:id', param, CW(controller.getOne));

orderStateRouter.post('/createOne', validate(orderStateComp, 'body'), CW(controller.createOne));

orderStateRouter.put('/updateOnePut/:id', param, bodyMaker, validate(orderStateComp, 'body'), CW(controller.updateOnePut));

orderStateRouter.patch('/updateOnePatch/:id', param, bodyMaker, validate(orderStatePart, 'body'), CW(controller.updateOnePatch));

orderStateRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));


export default orderStateRouter;