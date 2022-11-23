import Joi from 'joi';


const orderTypeAdressSchema =  {
    order_id: Joi.number().min(1).required(),
    adress_id: Joi.number().min(1).required(),
    adress_type_id: Joi.number().min(1).required(),
};

export const orderTypeAdressChanged = Joi.object(orderTypeAdressSchema);

export const orderTypeAdressComplete = Joi.object(orderTypeAdressSchema).fork(Object.keys(orderTypeAdressSchema), (schema) => schema.required());
