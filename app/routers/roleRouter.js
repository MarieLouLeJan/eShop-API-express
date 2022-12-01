import express from 'express';
const roleRouter = express.Router();

import controller from '../controllers/roleController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { roleComp, rolePart } from '../services/validations/schemas/role.js'
import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';

roleRouter.get('/getAll', auth, authAdmin, CW(controller.getAll));

roleRouter.get('/getOne/:id', param, auth, authAdmin, CW(controller.getOne));

roleRouter.post('/createOne', auth, authAdmin, validate(roleComp, 'body'), CW(controller.createOne));

roleRouter.put('/updateOnePut/:id', param, bodyMaker, auth, authAdmin, validate(roleComp, 'body'), CW(controller.updateOnePut));

roleRouter.patch('/updateOnePatch/:id', param, bodyMaker, auth, authAdmin, validate(rolePart, 'body'), CW(controller.updateOnePatch));

roleRouter.delete('/deleteOne/:id', param, auth, authAdmin, CW(controller.deleteOne));

export default roleRouter;