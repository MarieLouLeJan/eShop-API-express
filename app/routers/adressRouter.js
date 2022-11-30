import express from 'express';
const adressRouter = express.Router();

import controller from '../controllers/adressController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { adressComp, adressPart } from '../services/validations/schemas/adress.js'


adressRouter.get('/getAll', CW(controller.getAll));

adressRouter.get('/getOne/:id', param, CW(controller.getOne));

adressRouter.get('/getByUser/:id', param, CW(controller.getByUser))

adressRouter.post('/createOne', validate(adressComp, 'body'), CW(controller.createOne));

adressRouter.put('/updateOnePut/:id', param, bodyMaker, validate(adressComp, 'body'), CW(controller.updateOnePut));

adressRouter.patch('/updateOnePatch/:id', param, bodyMaker, validate(adressPart, 'body'), CW(controller.updateOnePatch));

adressRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));

export default adressRouter;