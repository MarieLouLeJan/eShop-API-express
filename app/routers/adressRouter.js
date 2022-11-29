import express from 'express';
const adressRouter = express.Router();

import controller from '../controllers/adressController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { adressChanged, adressCreated } from '../services/validations/schemas/adress.js'

adressRouter.get('/getAll', CW(controller.getAll));

adressRouter.get('/getOne/:id', param, CW(controller.getOne));

adressRouter.get('/getByUser/:id', param, CW(controller.getByUser))

adressRouter.post('/createOne', validate(adressCreated, 'body'), CW(controller.createOne));

adressRouter.put('/updateOne/:id', param, bodyMaker, validate(adressChanged, 'body'), CW(controller.updateOne));

adressRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));

export default adressRouter;