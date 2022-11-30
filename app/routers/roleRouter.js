import express from 'express';
const roleRouter = express.Router();

import controller from '../controllers/roleController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { roleComp, rolePart } from '../services/validations/schemas/role.js'

roleRouter.get('/getAll', CW(controller.getAll));

roleRouter.get('/getOne/:id', param, CW(controller.getOne));

roleRouter.post('/createOne', validate(roleComp, 'body'), CW(controller.createOne));

roleRouter.put('/updateOnePut/:id', param, bodyMaker, validate(roleComp, 'body'), CW(controller.updateOnePut));

roleRouter.patch('/updateOnePatch/:id', param, bodyMaker, validate(rolePart, 'body'), CW(controller.updateOnePatch));

roleRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));

export default roleRouter;