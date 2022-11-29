import express from 'express';
const categoryRouter = express.Router();

import controller from '../controllers/categoryController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { categoryChanged, categoryCreated } from '../services/validations/schemas/category.js'


categoryRouter.get('/getAll', CW(controller.getAll));

categoryRouter.get('/getOne/:id', param, CW(controller.getOne));

categoryRouter.post('/createOne', validate(categoryCreated, 'body'), CW(controller.createOne));

categoryRouter.put('/updateOne/:id', param, bodyMaker, validate(categoryChanged, 'body'), CW(controller.updateOne));

categoryRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));

export default categoryRouter;