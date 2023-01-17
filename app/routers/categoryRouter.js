import express from 'express';
const categoryRouter = express.Router();

import controller from '../controllers/categoryController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { categoryComp, categoryPart } from '../services/validations/schemas/category.js'

import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';


categoryRouter.get('/getAllAdmin', auth, authAdmin, CW(controller.getAllAdmin));

categoryRouter.get('/getAllShop', CW(controller.getAllShop));

categoryRouter.get('/getOneAdmin/:id', param, auth, authAdmin, CW(controller.getOneAdmin));

categoryRouter.get('/getOneShop/:id', param, CW(controller.getOneShop));

categoryRouter.post('/createOne', auth, authAdmin, validate(categoryComp, 'body'), CW(controller.createOne));

categoryRouter.put('/updateOnePut/:id', param, bodyMaker, auth, authAdmin, validate(categoryComp, 'body'), CW(controller.updateOnePut));

categoryRouter.patch('/updateOnePatch/:id', param, bodyMaker, auth, authAdmin, validate(categoryPart, 'body'), CW(controller.updateOnePatch));

categoryRouter.delete('/deleteOne/:id', param, auth, authAdmin, CW(controller.deleteOne));

export default categoryRouter;