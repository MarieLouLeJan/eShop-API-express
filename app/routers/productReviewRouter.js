import express from 'express';
const productReviewRouter = express.Router();

import controller from '../controllers/productReviewController.js';

import CW from '../helpers/controllerWrapper.js';

import validate from '../services/validations/validate.js';
import { productReviewCreated } from '../services/validations/schemas/productReview.js'

productReviewRouter.get('/getAll', CW(controller.getAll));

productReviewRouter.post('/createOne', validate(productReviewCreated, 'body'), CW(controller.createOne));


export default productReviewRouter;