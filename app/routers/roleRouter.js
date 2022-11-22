import express from 'express';
const roleRouter = express.Router();

import controller from '../controllers/roleController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { roleCreated, roleChanged } from '../services/validations/schemas/role.js'

roleRouter.get('/getAll', CW(controller.getAll));
roleRouter.get('/getOne/:id', param, CW(controller.getOne));
roleRouter.post('/createOne', validate(roleCreated, 'body'), CW(controller.createOne));
roleRouter.put('/updateOne/:id', param, bodyMaker, validate(roleChanged, 'body'), CW(controller.updateOne));
roleRouter.delete('/deleteOne/:id', CW(controller.unactiveOne));

export default roleRouter;