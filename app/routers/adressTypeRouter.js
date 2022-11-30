import express from 'express';
const adressTypeRouter = express.Router();

import controller from '../controllers/adressTypeController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { adressTypeComp, adressTypePart } from '../services/validations/schemas/adressType.js'

adressTypeRouter.get('/getAll', CW(controller.getAll));

adressTypeRouter.get('/getOne/:id', param, CW(controller.getOne));

adressTypeRouter.post('/createOne', validate(adressTypeComp, 'body'), CW(controller.createOne));

adressTypeRouter.put('/updateOnePut/:id', bodyMaker, param, validate(adressTypeComp, 'body'), CW(controller.updateOnePut));

adressTypeRouter.patch('/updateOnePatch/:id', bodyMaker, param, validate(adressTypePart, 'body'), CW(controller.updateOnePatch));

adressTypeRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));


export default adressTypeRouter;