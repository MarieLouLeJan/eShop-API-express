import express from 'express';
const productReviewRouter = express.Router();

import controller from '../controllers/productReviewController.js';

import CW from '../helpers/controllerWrapper.js';
import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { productReviewCreated, productReviewChanged } from '../services/validations/schemas/productReview.js';
import auth from '../services/middlewares/auth.js';
import authAdmin from '../services/middlewares/authAdmin.js';

productReviewRouter.get('/getAll', auth, authAdmin, CW(controller.getAll));

productReviewRouter.get('/getByProduct/:id', CW(controller.getAllByProduct));

productReviewRouter.post('/getOne', bodyMaker, auth, authAdmin, validate(productReviewChanged, 'body'), CW(controller.getOne));

productReviewRouter.put('/updateOne', bodyMaker, auth, authAdmin, validate(productReviewChanged, 'body'), CW(controller.updateOne))

productReviewRouter.post('/createOne', auth, validate(productReviewCreated, 'body'), CW(controller.createOne));

productReviewRouter.delete('/deleteOne', bodyMaker, auth, authAdmin, validate(productReviewChanged, 'body'), CW(controller.deleteOne))


export default productReviewRouter;