import Joi from 'joi';

const frenchPattern = /^[a-zA-Z0-9Ã-ÿ '"°-]+$/;

const categorySchema = {
    title: Joi.string().pattern(frenchPattern).min(2),
    active: Joi.boolean(),
    created_by: Joi.number().min(1)
}

export const categoryChanged = Joi.object(categorySchema);

export const categoryCreated = Joi.object(categorySchema).fork(['title', 'created_by'], (schema) => schema.required())