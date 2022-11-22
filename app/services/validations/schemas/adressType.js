import Joi from 'joi';

const frenchPattern = /^[a-zA-Z0-9Ã-ÿ '"°-]+$/;

const adressTypeSchema = {
    title: Joi.string().pattern(frenchPattern).min(2),
    active: Joi.boolean()
};

export const adressTypeChanged = Joi.object(adressTypeSchema);

export const adressTypeCreated = Joi.object(adressTypeSchema).fork(['title'], (schema) => schema.required())