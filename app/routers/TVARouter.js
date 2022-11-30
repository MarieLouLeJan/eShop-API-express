import express from 'express';
const TVARouter = express.Router();

import controller from '../controllers/TVAController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { TVAPart, TVAComp } from '../services/validations/schemas/TVA.js'

TVARouter.get('/getAll', CW(controller.getAll));

TVARouter.get('/getOne/:id', param, CW(controller.getOne));

TVARouter.post('/createOne', validate(TVAComp, 'body'), CW(controller.createOne));

TVARouter.put('/updateOnePut/:id', param, bodyMaker, validate(TVAComp, 'body'), CW(controller.updateOnePut));

TVARouter.patch('/updateOnePatch/:id', param, bodyMaker, validate(TVAPart, 'body'), CW(controller.updateOnePatch));

TVARouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));

export default TVARouter;