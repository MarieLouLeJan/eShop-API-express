import Joi from 'joi';

const orderSchema = {
    totalHT: Joi.number(),
    tax: Joi.number(),
    totalTTC: Joi.number(),
    quantity: Joi.number(),
    user_id: Joi.number().min(1),
    order_states_id: Joi.number().min(1),
};

export const orderChanged = Joi.object(orderSchema);

export const orderCreated = Joi.object(orderSchema).fork(Object.keys(orderSchema), (schema) => schema.required())