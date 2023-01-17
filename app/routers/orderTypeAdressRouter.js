import express from 'express';
const orderTypeAdressRouter = express.Router();

import controller from '../controllers/orderTypeAdressController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js';
import bodyMaker from '../helpers/bodyMaker.js'
import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';

import validate from '../services/validations/validate.js';
import { orderTypeAdressComplete, orderTypeAdressChanged } from '../services/validations/schemas/orderTypeAdress.js'

orderTypeAdressRouter.get('/getAllAdmin', auth, authAdmin, CW(controller.getAll));

orderTypeAdressRouter.get('/getByOrder/:id', param, auth, CW(controller.getByOrder));

orderTypeAdressRouter.post('/createOne', bodyMaker, auth, validate(orderTypeAdressComplete, 'body'), CW(controller.createOne));

orderTypeAdressRouter.delete('/deleteOne', bodyMaker, auth, authAdmin, validate(orderTypeAdressChanged, 'body'), CW(controller.deleteOne));



export default orderTypeAdressRouter;