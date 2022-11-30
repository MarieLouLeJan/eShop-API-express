import Joi from 'joi';

const frenchPattern = /^[a-zA-Z0-9Ã-ÿ '"°-]+$/;
// const imagePattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpe?g|png)$/;

const productSchema = {
    ref: Joi.string().min(2),
    title: Joi.string().pattern(frenchPattern).min(2).max(30),
    description: Joi.string().pattern(frenchPattern).min(2).max(200),
    image: Joi.string().min(10),
    priceHT: Joi.number().greater(0),
    stock: Joi.number().greater(0),
    active: Joi.boolean(),
    category_id: Joi.number().greater(0),
    tva_id: Joi.number().greater(0)
};

export const productPart = Joi.object(productSchema);

export const productComp = Joi.object(productSchema).fork(['ref', 'title', 'description', 'image', 'priceHT', 'stock', 'category_id', 'tva_id'], (schema) => schema.required())
