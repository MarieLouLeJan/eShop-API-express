import Joi from 'joi';

const orderSchema = {
    totalHT: Joi.number().greater(0),
    tax: Joi.number().greater(0),
    totalTTC: Joi.number().greater(0),
    quantity: Joi.number().greater(0),
    user_id: Joi.number().greater(0),
    order_states_id: Joi.number().greater(0),
};

export const orderChanged = Joi.object(orderSchema);

export const orderCreated = Joi.object(orderSchema).fork(Object.keys(orderSchema), (schema) => schema.required())