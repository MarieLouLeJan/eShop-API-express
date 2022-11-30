import Joi from 'joi';

const titlePattern = /^([1-9]|[1-9][0-9])%$/;

const TVASchema = {
    title: Joi.string().pattern(titlePattern).min(2),
    value: Joi.number(),
    active: Joi.boolean()
};

export const TVAPart = Joi.object(TVASchema);

export const TVAComp = Joi.object(TVASchema).fork(['title', 'value'], (schema) => schema.required());