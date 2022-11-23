import express from 'express';
const adressTypeRouter = express.Router();

import controller from '../controllers/adressTypeController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { adressTypeChanged, adressTypeCreated } from '../services/validations/schemas/adressType.js'

adressTypeRouter.get('/getAll', CW(controller.getAll));

adressTypeRouter.get('/getOne/:id', param, CW(controller.getOne));

adressTypeRouter.post('/createOne', validate(adressTypeCreated, 'body'), CW(controller.createOne));

adressTypeRouter.put('/updateOne/:id', bodyMaker, param, validate(adressTypeChanged, 'body'), CW(controller.updateOne));

export default adressTypeRouter;