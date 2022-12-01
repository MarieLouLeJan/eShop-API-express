import express from 'express';
const adressTypeRouter = express.Router();

import controller from '../controllers/adressTypeController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { adressTypeComp, adressTypePart } from '../services/validations/schemas/adressType.js'
import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';


adressTypeRouter.get('/getAll', auth, authAdmin, CW(controller.getAll));

adressTypeRouter.get('/getOne/:id', param, auth, authAdmin, CW(controller.getOne));

adressTypeRouter.post('/createOne', auth, authAdmin, validate(adressTypeComp, 'body'), CW(controller.createOne));

adressTypeRouter.put('/updateOnePut/:id', param, bodyMaker, auth, authAdmin, validate(adressTypeComp, 'body'), CW(controller.updateOnePut));

adressTypeRouter.patch('/updateOnePatch/:id', param, bodyMaker, auth, authAdmin, validate(adressTypePart, 'body'), CW(controller.updateOnePatch));

adressTypeRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));


export default adressTypeRouter;