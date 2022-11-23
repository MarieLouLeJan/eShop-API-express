import express from 'express';
const orderTypeAdressRouter = express.Router();

import controller from '../controllers/orderTypeAdressController.js';

import CW from '../helpers/controllerWrapper.js';

import validate from '../services/validations/validate.js';
import { orderTypeAdressComplete } from '../services/validations/schemas/orderTypeAdress.js'

orderTypeAdressRouter.get('/getAll', CW(controller.getAll));

orderTypeAdressRouter.post('/createOne', validate(orderTypeAdressComplete, 'body'), CW(controller.createOne));


export default orderTypeAdressRouter;