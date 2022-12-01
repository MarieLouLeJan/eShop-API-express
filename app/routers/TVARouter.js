import express from 'express';
const TVARouter = express.Router();

import controller from '../controllers/TVAController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { TVAPart, TVAComp } from '../services/validations/schemas/TVA.js'
import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';

TVARouter.get('/getAll', auth, authAdmin, CW(controller.getAll));

TVARouter.get('/getOne/:id', param, auth, authAdmin, CW(controller.getOne));

TVARouter.post('/createOne', auth, authAdmin, validate(TVAComp, 'body'), CW(controller.createOne));

TVARouter.put('/updateOnePut/:id', param, bodyMaker, auth, authAdmin, validate(TVAComp, 'body'), CW(controller.updateOnePut));

TVARouter.patch('/updateOnePatch/:id', param, bodyMaker, auth, authAdmin, validate(TVAPart, 'body'), CW(controller.updateOnePatch));

TVARouter.delete('/deleteOne/:id', param, auth, authAdmin, CW(controller.deleteOne));

export default TVARouter;