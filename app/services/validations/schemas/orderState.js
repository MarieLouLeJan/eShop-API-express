import Joi from 'joi';

const frenchPattern = /^[a-zA-Z0-9Ã-ÿ '"°-]+$/;

const orderStateSchema = {
    title: Joi.string().pattern(frenchPattern).min(2),
    active: Joi.boolean()
};

export const orderStatePart = Joi.object(orderStateSchema);

export const orderStateComp = Joi.object(orderStateSchema).fork(['title'], (schema) => schema.required())