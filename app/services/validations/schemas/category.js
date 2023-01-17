import Joi from 'joi';

const frenchPattern = /^[a-zA-Z0-9Ã-ÿ .,'"°-]+$/;

const categorySchema = {
    title: Joi.string().pattern(frenchPattern).min(2),
    active: Joi.boolean()
}

export const categoryPart = Joi.object(categorySchema);

export const categoryComp = Joi.object(categorySchema).fork(['title'], (schema) => schema.required())