import Joi from 'joi';

const namePattern = /^[a-zA-Z \-']{2,}$/;

// At least 1 uppercase, 1 lowercase, 1 number & 1 special character (#?!@$%^&*-.), length minimum 8
const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/

const userSchema = {
    firstname: Joi.string().pattern(namePattern),
    lastname: Joi.string().pattern(namePattern),
    email: Joi.string().email(),
    password: Joi.string().pattern(passwordPattern),
    active: Joi.boolean(),
    role_id: Joi.number().greater(0)
};

export const userPart = Joi.object(userSchema);

export const userComp = Joi.object(userSchema).fork(['firstname', 'lastname', 'email', 'password', 'role_id'], (schema) => schema.required())

const userLoginSchema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
};

export const userLogin = Joi.object(userLoginSchema);
