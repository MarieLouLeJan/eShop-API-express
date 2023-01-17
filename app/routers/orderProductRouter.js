import express from 'express';
const orderProductRouter = express.Router();

import controller from '../controllers/orderProductController.js';

import CW from '../helpers/controllerWrapper.js';

import validate from '../services/validations/validate.js';
import { orderProductCreated, orderProductChanged } from '../services/validations/schemas/orderProduct.js'
import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';

import param from '../helpers/paramsIsNumber.js';
import bodyMaker from '../helpers/bodyMaker.js';

orderProductRouter.get('/getAllAdmin', auth, authAdmin, CW(controller.getAll));

orderProductRouter.get('/getByOrder/:id', param, auth, CW(controller.getAllByOrder));

orderProductRouter.post('/getOne', bodyMaker, auth, validate(orderProductChanged, 'body'), CW(controller.getOne));

orderProductRouter.post('/createOne', auth, validate(orderProductCreated, 'body'), CW(controller.createOne));

orderProductRouter.put('/updateOne', bodyMaker, auth, authAdmin, validate(orderProductChanged, 'body'), CW(controller.updateOne));

orderProductRouter.delete('/deleteOne', bodyMaker, auth, authAdmin, validate(orderProductChanged, 'body'), CW(controller.deleteOne));


export default orderProductRouter;