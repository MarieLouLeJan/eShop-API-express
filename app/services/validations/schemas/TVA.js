import Joi from 'joi';

const titlePattern = /^([1-9]|[1-9][0-9])%$/;

const TVA = {
    title: Joi.string().pattern(titlePattern).min(2),
    value: Joi.number().required(),
    active: Joi.boolean(),
    created_by: Joi.number().min(1)
};

export const TVAChanged = Joi.object(TVA);

export const TVACreated = Joi.object(TVA).fork(Object.keys(TVA), (schema) => schema.required());