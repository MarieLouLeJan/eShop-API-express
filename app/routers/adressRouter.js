import express from 'express';
const adressRouter = express.Router();

import controller from '../controllers/adressController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { adressComp, adressPart } from '../services/validations/schemas/adress.js';
import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';
import authUser from '../services/middlewares/authUser.js';



adressRouter.get('/getAllAdmin', auth, authAdmin, CW(controller.getAll));

adressRouter.get('/getOne/:id', param, auth, CW(controller.getOne));

adressRouter.get('/getByUser/:id', param, auth, authUser, CW(controller.getByUser))

adressRouter.post('/createOne', auth, validate(adressComp, 'body'), CW(controller.createOne));

adressRouter.put('/updateOnePut/:id', param, bodyMaker, auth, validate(adressComp, 'body'), CW(controller.updateOnePut));

adressRouter.patch('/updateOnePatch/:id', param, bodyMaker, auth, validate(adressPart, 'body'), CW(controller.updateOnePatch));

adressRouter.delete('/deleteOne/:id', param, auth, CW(controller.deleteOne));

export default adressRouter;