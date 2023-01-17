import express from 'express';
const orderRouter = express.Router();

import controller from '../controllers/orderController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { orderPart, orderComp } from '../services/validations/schemas/order.js';
import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';
import authUser from '../services/middlewares/authUser.js';

orderRouter.get('/getAllAdmin', auth, authAdmin, CW(controller.getAll));

orderRouter.get('/getOne/:id', param, auth, CW(controller.getOne));

orderRouter.get('/getByUserId/:id', param, auth, authUser, CW(controller.getByUSer));

orderRouter.post('/createOne', auth, validate(orderComp, 'body'), CW(controller.createOne));

orderRouter.put('/updateOnePut/:id', param, bodyMaker, auth, validate(orderComp, 'body'), CW(controller.updateOnePut));

orderRouter.patch('/updateOnePatch/:id', param, bodyMaker, auth, validate(orderPart, 'body'), CW(controller.updateOnePatch));

orderRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));

export default orderRouter;