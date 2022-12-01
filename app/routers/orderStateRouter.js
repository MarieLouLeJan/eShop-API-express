import express from 'express';
const orderStateRouter = express.Router();

import controller from '../controllers/orderStateController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { orderStatePart, orderStateComp } from '../services/validations/schemas/orderState.js'
import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';

orderStateRouter.get('/getAll', auth, authAdmin, CW(controller.getAll));

orderStateRouter.get('/getOne/:id', param, auth, authAdmin, CW(controller.getOne));

orderStateRouter.post('/createOne', auth, authAdmin, validate(orderStateComp, 'body'), CW(controller.createOne));

orderStateRouter.put('/updateOnePut/:id', param, bodyMaker, auth, authAdmin, validate(orderStateComp, 'body'), CW(controller.updateOnePut));

orderStateRouter.patch('/updateOnePatch/:id', param, bodyMaker, auth, authAdmin, validate(orderStatePart, 'body'), CW(controller.updateOnePatch));

orderStateRouter.delete('/deleteOne/:id', param, auth, authAdmin, CW(controller.deleteOne));


export default orderStateRouter;