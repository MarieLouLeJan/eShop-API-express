import express from 'express';
const TVARouter = express.Router();

import controller from '../controllers/TVAController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { TVAChanged, TVACreated } from '../services/validations/schemas/TVA.js'

TVARouter.get('/getAll', CW(controller.getAll));

TVARouter.get('/getOne/:id', param, CW(controller.getOne));

TVARouter.post('/createOne', validate(TVACreated, 'body'), CW(controller.createOne));

TVARouter.put('/updateOne/:id', param, bodyMaker, validate(TVAChanged, 'body'), CW(controller.updateOne));

export default TVARouter;