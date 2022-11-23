import Joi from 'joi';

const frenchPattern = /^[a-zA-Z0-9Ã-ÿ '"°-]+$/;
// const imagePattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpe?g|png)$/;

const productSchema = {
    ref: Joi.string().min(4),
    title: Joi.string().pattern(frenchPattern).min(2).max(30),
    description: Joi.string().pattern(frenchPattern).min(2).max(200),
    image: Joi.string().min(10),
    priceHT: Joi.number(),
    stock: Joi.number().min(1),
    active: Joi.boolean(),
    category_id: Joi.number().min(1),
    tva_id: Joi.number().min(1)
};

export const productChanged = Joi.object(productSchema);

export const productCreated = Joi.object(productSchema).fork(['ref', 'title', 'description', 'image', 'priceHT', 'stock', 'category_id', 'tva_id'], (schema) => schema.required())
