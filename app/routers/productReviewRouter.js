import express from 'express';
const productReviewRouter = express.Router();

import controller from '../controllers/productReviewController.js';

import CW from '../helpers/controllerWrapper.js';
import bodyMaker from '../helpers/bodyMaker.js'

import validate from '../services/validations/validate.js';
import { productReviewCreated, productReviewChanged } from '../services/validations/schemas/productReview.js'

productReviewRouter.get('/getAll', CW(controller.getAll));

productReviewRouter.post('/getByProduct', CW(controller.getAllByProduct));

productReviewRouter.post('/getOne', bodyMaker, validate(productReviewChanged), CW(controller.getOne));

productReviewRouter.put('/updateOne', bodyMaker, validate(productReviewChanged), CW(controller.updateOne))

productReviewRouter.post('/createOne', validate(productReviewCreated, 'body'), CW(controller.createOne));

productReviewRouter.delete('/deleteOne', bodyMaker, validate(productReviewChanged), CW(controller.deleteOne))


export default productReviewRouter;