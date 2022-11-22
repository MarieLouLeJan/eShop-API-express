import express from 'express';
const userRouter = express.Router();

import controller from '../controllers/userController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { userChanged, userCreated } from '../services/validations/schemas/user.js'

userRouter.get('/getAll', CW(controller.getAll));
userRouter.get('/getOne/:id', param, CW(controller.getOne));
userRouter.post('/createOne', validate(userCreated, 'body'), CW(controller.createOne));
userRouter.put('/updateOne/:id', param, bodyMaker, validate(userChanged, 'body'), CW(controller.updateOne));
userRouter.delete('/deleteOne/:id', CW(controller.unactiveOne));

export default userRouter;