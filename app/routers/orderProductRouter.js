import express from 'express';
const orderProductRouter = express.Router();

import controller from '../controllers/orderProductController.js';

import CW from '../helpers/controllerWrapper.js';

import validate from '../services/validations/validate.js';
import { orderProductCreated, orderProductChanged } from '../services/validations/schemas/orderProduct.js'
import param from '../helpers/paramsIsNumber.js';
import bodyMaker from '../helpers/bodyMaker.js';

orderProductRouter.get('/getAll', CW(controller.getAll));

orderProductRouter.get('/getByOrder/:id', param, CW(controller.getAllByOrder));

orderProductRouter.post('/getOne', bodyMaker, validate(orderProductChanged, 'body'), CW(controller.getOne));

orderProductRouter.post('/createOne', validate(orderProductCreated, 'body'), CW(controller.createOne));

orderProductRouter.put('/updateOne', bodyMaker, validate(orderProductChanged, 'body'), CW(controller.updateOne));

orderProductRouter.delete('/deleteOne', bodyMaker, validate(orderProductChanged, 'body'), CW(controller.deleteOne));


export default orderProductRouter;