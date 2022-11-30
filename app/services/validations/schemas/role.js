import Joi from 'joi';

const frenchPattern = /^[a-zA-Z0-9Ã-ÿ '"°-]+$/;


const roleSchema = {
    title: Joi.string().pattern(frenchPattern).min(2),
    active: Joi.boolean()
};

export const rolePart = Joi.object(roleSchema);

export const roleComp = Joi.object(roleSchema).fork(['title'], (schema) => schema.required())