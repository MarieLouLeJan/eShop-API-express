import Joi from 'joi';

const frenchPattern = /^[a-zA-Z0-9Ã-ÿ '"°-]+$/;

const adressSchema = {
    entitled: Joi.string().pattern(frenchPattern).min(2),
    number: Joi.number().greater(0),
    number_complement: Joi.string().pattern(frenchPattern),
    street: Joi.string().pattern(frenchPattern).min(2),
    postal_code: Joi.number().greater(1000).less(99999),
    city: Joi.string().pattern(frenchPattern).min(2),
    country: Joi.string().pattern(frenchPattern).min(2),
    complement: Joi.string().pattern(frenchPattern),
    active: Joi.boolean(),
    user_id: Joi.number().greater(0)
}

export const adressPart = Joi.object(adressSchema);

export const adressComp = Joi.object(adressSchema).fork(['entitled', 'number', 'street', 'postal_code', 'city', 'country'], (schema) => schema.required())