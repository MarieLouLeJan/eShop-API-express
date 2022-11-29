import Joi from 'joi';

const TVAPattern = /^([1-9]|[1-9][0-9])%$/;

const orderProductSchema =  {
    product_id: Joi.number().greater(0),
    order_id: Joi.number().greater(0),
    quantity: Joi.number().greater(0),
    priceHT: Joi.number().greater(0),
    TVA: Joi.string().pattern(TVAPattern).min(2)
};

export const orderProductChanged = Joi.object(orderProductSchema);

export const orderProductCreated = Joi.object(orderProductSchema).fork(Object.keys(orderProductSchema), (schema) => schema.required())
