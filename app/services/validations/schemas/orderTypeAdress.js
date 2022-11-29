import Joi from 'joi';


const orderTypeAdressSchema =  {
    order_id: Joi.number().greater(0),
    adress_id: Joi.number().greater(0),
    adress_type_id: Joi.number().greater(0),
};

export const orderTypeAdressChanged = Joi.object(orderTypeAdressSchema);

export const orderTypeAdressComplete = Joi.object(orderTypeAdressSchema).fork(Object.keys(orderTypeAdressSchema), (schema) => schema.required());
