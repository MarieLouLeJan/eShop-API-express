import express from 'express';
const orderTypeAdressRouter = express.Router();

import controller from '../controllers/orderTypeAdressController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js';
import bodyMaker from '../helpers/bodyMaker.js'


import validate from '../services/validations/validate.js';
import { orderTypeAdressComplete, orderTypeAdressChanged } from '../services/validations/schemas/orderTypeAdress.js'

orderTypeAdressRouter.get('/getAll', CW(controller.getAll));

orderTypeAdressRouter.get('/getByOrder/:id', param, CW(controller.getByOrder));

orderTypeAdressRouter.post('/createOne', bodyMaker, validate(orderTypeAdressComplete, 'body'), CW(controller.createOne));

orderTypeAdressRouter.delete('/deleteOne', bodyMaker, validate(orderTypeAdressChanged, 'body'), CW(controller.deleteOne));



export default orderTypeAdressRouter;