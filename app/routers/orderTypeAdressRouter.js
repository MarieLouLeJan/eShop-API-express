import express from 'express';
const orderTypeAdressRouter = express.Router();

import controller from '../controllers/orderTypeAdressController.js';

import CW from '../helpers/controllerWrapper.js';

import validate from '../services/validations/validate.js';
import { orderTypeAdressCreated } from '../services/validations/schemas/orderTypeAdress.js'

orderTypeAdressRouter.get('/getAll', CW(controller.getAll));

orderTypeAdressRouter.post('/createOne', validate(orderTypeAdressCreated, 'body'), CW(controller.createOne));


export default orderTypeAdressRouter;