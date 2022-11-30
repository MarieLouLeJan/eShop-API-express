import express from 'express';
const categoryRouter = express.Router();

import controller from '../controllers/categoryController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { categoryComp, categoryPart } from '../services/validations/schemas/category.js'


categoryRouter.get('/getAll', CW(controller.getAll));

categoryRouter.get('/getOne/:id', param, CW(controller.getOne));

categoryRouter.post('/createOne', validate(categoryComp, 'body'), CW(controller.createOne));

categoryRouter.put('/updateOnePut/:id', param, bodyMaker, validate(categoryComp, 'body'), CW(controller.updateOnePut));

categoryRouter.patch('/updateOnePatch/:id', param, bodyMaker, validate(categoryPart, 'body'), CW(controller.updateOnePatch));

categoryRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));

export default categoryRouter;