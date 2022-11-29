import Joi from 'joi';

const frenchPattern = /^[a-zA-Z0-9Ã-ÿ '"°-]+$/;

const productReviewSchema = {
    product_id: Joi.number().greater(0),
    user_id: Joi.number().greater(0),
    note: Joi.number().greater(0).less(6),
    content: Joi.string().pattern(frenchPattern).min(20)
};

export const productReviewChanged = Joi.object(productReviewSchema);

export const productReviewCreated = Joi.object(productReviewSchema).fork(Object.keys(productReviewSchema), (schema) => schema.required());


