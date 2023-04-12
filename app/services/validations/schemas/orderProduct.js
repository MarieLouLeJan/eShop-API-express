import Joi from 'joi';

const orderProductSchema =  {
    product_id: Joi.number().greater(0),
    order_id: Joi.number().greater(0),
    quantity: Joi.number().greater(0),
    priceHT: Joi.number().greater(0),
    TVA_title: Joi.string().min(2),
    TVA_value: Joi.number()
};

export const orderProductChanged = Joi.object(orderProductSchema);

export const orderProductCreated = Joi.object(orderProductSchema).fork(Object.keys(orderProductSchema), (schema) => schema.required())
