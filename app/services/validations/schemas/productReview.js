import Joi from 'joi';

const frenchPattern = /^[a-zA-Z0-9Ã-ÿ '"°-]+$/;

const productReviewSchema = {
    product_id: Joi.number().min(1),
    user_id: Joi.number().min(1),
    note: Joi.number(),
    content: Joi.string().pattern(frenchPattern).min(20)
};

export const productReviewChanged = Joi.object(productReviewSchema);

export const productReviewCreated = Joi.object(productReviewSchema).fork(Object.keys(productReviewSchema), (schema) => schema.required());


