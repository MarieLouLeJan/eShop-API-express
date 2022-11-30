import express from 'express';
const userRouter = express.Router();

import controller from '../controllers/userController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { userPart, userComp } from '../services/validations/schemas/user.js'

userRouter.get('/getAll', CW(controller.getAll));

userRouter.get('/getOne/:id', param, CW(controller.getOne));

userRouter.post('/login', validate(userPart), CW(controller.login));

userRouter.post('/createOne', validate(userComp, 'body'), CW(controller.createOne));

userRouter.put('/updateOnePut/:id', param, bodyMaker, validate(userComp, 'body'), CW(controller.updateOnePut));

userRouter.patch('/updateOnePatch/:id', param, bodyMaker, validate(userPart, 'body'), CW(controller.updateOnePatch));

userRouter.delete('/deleteOne/:id', param, CW(controller.deleteOne));


export default userRouter;