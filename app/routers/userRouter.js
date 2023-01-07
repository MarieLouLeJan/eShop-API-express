import express from 'express';
const userRouter = express.Router();

import controller from '../controllers/userController.js';

import CW from '../helpers/controllerWrapper.js';
import param from '../helpers/paramsIsNumber.js'

import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { userPart, userComp, userLogin } from '../services/validations/schemas/user.js'
import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';

userRouter.get('/getAll', auth, authAdmin, CW(controller.getAll));

userRouter.get('/getOne/:id', param, auth, authAdmin, CW(controller.getOne));

userRouter.post('/login', validate(userLogin, 'body'), CW(controller.login));

userRouter.post('/createOne', validate(userComp, 'body'), CW(controller.createOne));

userRouter.put('/updateOnePut/:id', param, bodyMaker, auth, validate(userComp, 'body'), CW(controller.updateOnePut));

userRouter.patch('/updateOnePatch/:id', param, bodyMaker, auth, validate(userPart, 'body'), CW(controller.updateOnePatch));

userRouter.delete('/deleteOne/:id', param, auth, authAdmin, CW(controller.deleteOne));








export default userRouter;