import Joi from 'joi';

const namePattern = /^[a-zA-Z\ \-\']+$/;

// At least 1 uppercase, 1 lowercase, 1 number & 1 special character (#?!@$%^&*-.), length minimum 8
const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/

const userSchema = {
    firstname: Joi.string().pattern(namePattern).min(2),
    lastname: Joi.string().pattern(namePattern).min(2),
    email: Joi.string().email().min(4),
    password: Joi.string().pattern(passwordPattern),
    active: Joi.boolean(),
    role_id: Joi.number().min(1)
};

export const userChanged = Joi.object(userSchema);

export const userCreated = Joi.object(userSchema).fork(['firstname', 'lastname', 'email', 'password', 'role_id'], (schema) => schema.required())